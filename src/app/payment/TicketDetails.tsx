// app/payment/TicketDetails.tsx
import { useSearchParams } from 'next/navigation';
import React from 'react';

const TicketDetails = () => {
    const searchParams = useSearchParams();
    const ticketType = searchParams.get('ticketType');
    const quantity = searchParams.get('quantity');
    const totalPrice = searchParams.get('totalPrice');

    return (
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
                    <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Quantity: </p>
                    <p className="text-[#1D2939] text-[18px] font-[500] mt-4">{quantity}</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Total Price: </p>
                    <p>₦{totalPrice && parseInt(totalPrice, 10).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;
