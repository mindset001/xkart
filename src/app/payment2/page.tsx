// app/payment/page.tsx
'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import CalendarIcon from '../../../public/assets/calendar.png';
import LocateIcon from '../../../public/assets/locate.png';
import Link from 'next/link';

const PaymentPage = () => {
    const searchParams = useSearchParams();
    const ticketType = searchParams.get('ticketType');
    const quantity = searchParams.get('quantity');
    const totalPrice = searchParams.get('totalPrice');

    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <Navbar />
            <main className="py-10 w-full flex items-center justify-center">
                <div className="w-[90%] flex flex-col gap-10">


                    <div className="w-full justify-between flex gap-10">
                        <form className="w-1/2 space-y-4">
                            <div className="flex flex-col items-left">
                                <h1 className="text-[#1D2939] font-[600] text-[36px]">Make Payment for 4th Race Event</h1>
                                <div className="flex items-center gap-4 mt-4">
                                    <Image src={CalendarIcon} alt="calendar" width={18} height={18} />
                                    <p className="text-[#98A2B3] text-[16px]">August 2-4, 2024</p>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <Image src={LocateIcon} alt="location" width={18} height={18} />
                                    <p className="text-[#98A2B3] text-[16px]">Work and Play Arena, Sagamu - Abeokuta Expressway</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='w-[40%]  font-[600]'>Name</p>
                                <input type="text" placeholder="" className="w-full  p-2 border rounded-[56px]" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='w-[40%] font-[600]'>E-mail</p>
                                <input type="email" placeholder="" className="form-input w-full p-2 border rounded-[56px]" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='w-[40%] font-[600]'>Phone Number</p>
                                <input type="text" placeholder="" className="form-input w-full p-2 border rounded-[56px]" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='w-[40%] font-[600]'>State of Residence</p>
                                <select className="form-input w-full p-2 border rounded-[56px]">
                                    <option value="">State of Residence</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="ogun">Ogun</option>
                                    <option value="oyo">Oyo</option>
                                    {/* Add more states as needed */}
                                </select>
                            </div>

                            <div className='flex justify-center mt-20'>
                                <button className='bg-[#EF3133] text-white rounded-tl-[8px] rounded-br-[8px]  flex w-[191px] h-[48px] items-center justify-center gap-2'>

                                    <p className='uppercase'><Link href='/PaymentCompleted'>continue to pay</Link></p>
                                </button>
                            </div>
                        </form>

                        <div className="w-1/3 mt-10">
                            <div className="border border-[#EF3133] p-4 rounded-[16px]">
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <h2 className="text-[#1D2939] font-[600] text-[24px]">Ticket Details</h2>
                                    <p className="text-[#98A2B3] text-[14px]">{ticketType} </p>
                                </div>
                                <ul className="mt-2 space-y-2">
                                    <li className="text-[#667185] text-[16px]">Access to Roof-top View</li>
                                    <li className="text-[#667185] text-[16px]">Free Lunch</li>
                                </ul>
                                <div className='border-t mt-6'>
                                    <div className='w-full flex flex-row items-center justify-center gap-[2px]'>
                                        <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Quality: </p>
                                        <p className="text-[#1D2939] text-[18px] font-[500] mt-4">{quantity}</p>
                                    </div>
                                    <div className='w-full flex flex-col items-center justify-center'>
                                        <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Total Price: </p>
                                        <p> ₦{totalPrice && parseInt(totalPrice, 10).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='w-full'>
            <Footer/>
            </div>
        </div>
    );
};

export default PaymentPage;
