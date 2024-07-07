// app/ticket-details/page.tsx
'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TicketDetailsPage = () => {
    const searchParams = useSearchParams();
    const time = searchParams.get('time');
    const laps = searchParams.get('laps');
    const price = searchParams.get('price');

    return (
      



<div className="border border-[#EF3133] p-4 rounded-[16px]">
          <div className='w-full flex flex-col items-center '>
              <h2 className="text-[#1D2939] font-[600] text-[24px]">Ticket Details</h2>
              <p className="text-[#98A2B3] text-[14px]">Arrive 'n Drive' </p>
          </div>
          
          <div className='border-t mt-6'>
              <div className='w-full flex flex-col items-center justify-center gap-[2px]'>
                  <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Time: {time} </p>
                  <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Laps: {laps}</p>
              </div>
              <div className='w-full flex flex-col items-center justify-center'>
                  <p className="text-[#1D2939] text-[18px] font-[500] mt-4">Total Price: {price}</p>
                  <p></p>
              </div>
          </div>
      </div>
 
    );
};

export default TicketDetailsPage;
