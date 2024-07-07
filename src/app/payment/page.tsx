// app/payment/page.tsx
'use client'
import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TicketDetails from './TicketDetails'; // Import the new component
import Image from 'next/image';
import CalendarIcon from '../../../public/assets/calendar.png';
import LocateIcon from '../../../public/assets/locate.png';
import Link from 'next/link';

const PaymentPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Navbar />
            <main className="py-10 w-full flex items-center justify-center">
                <div className="w-[90%] flex flex-col gap-10">
                    <div className="w-full justify-between flex flex-col lg:flex-row gap-10">
                        <form className="lg:w-1/2 space-y-4">
                            <div className="flex flex-col items-left">
                                <h1 className="text-[#1D2939] font-[600] text-[24px] md:text-[36px]">Make Payment for 4th Race Event</h1>
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
                                <p className='lg:w-[40%] font-[600]'>Name</p>
                                <input type="text" placeholder="" className="w-full p-2 border rounded-[56px]" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='lg:w-[40%] font-[600]'>E-mail</p>
                                <input type="email" placeholder="" className="form-input w-full p-2 border rounded-[56px]" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='lg:w-[40%] font-[600]'>Phone Number</p>
                                <input type="text" placeholder="" className="form-input w-full p-2 border rounded-[56px]" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='lg:w-[40%] font-[600]'>State of Residence</p>
                                <select className="form-input w-full p-2 border rounded-[56px]">
                                    <option value="">State of Residence</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="ogun">Ogun</option>
                                    <option value="oyo">Oyo</option>
                                    {/* Add more states as needed */}
                                </select>
                            </div>
                            <div className='flex justify-center mt-20'>
                                <button className='bg-[#EF3133] text-white rounded-tl-[8px] rounded-br-[8px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
                                    <p className='uppercase'><Link href='/PaymentCompleted'>continue to pay</Link></p>
                                </button>
                            </div>
                        </form>
                        <div className="lg:w-1/3 mt-10">
                            <Suspense fallback={<div>Loading ticket details...</div>}>
                                <TicketDetails /> {/* Use the TicketDetails component */}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </main>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default PaymentPage;
