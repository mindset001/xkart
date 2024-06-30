import React from 'react';
import Image from 'next/image'; // If using Next.js, or import any other image component library you use
import { Event } from '../data/events'; // Adjust the import path to your actual file structure
import Calendar from '../../../../public/assets/calendar.png'
import Locate from '../../../../public/assets/locate.png'
import Location from '../../../../public/assets/location.png'
import Grn from '../../../../public/assets/grn.png'
import Ylw from '../../../../public/assets/ylw.png'

const Events: React.FC = () => {
  return (
    <main className="py-8 flex flex-col items-center justify-center bg-[]">
      <div className='w-[90%]'>
        <h1 className="text-[36px] text-[#fff] mb-4 text-center font-[600] uppercase">News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Event.map((newsItem, index) => (
            <div key={index} className="news-item bg-[#F2F4F7] w-[421-33px] rounded-[10px]">
              <div className='hero2 rounded-t-[10px] h-[200px] flex justify-end items-start'>
              <p className={`w-auto bg-white h-[30px] rounded-[20px] px-[4px] font-[600] flex gap-2 items-center mr-2 mt-[-20px] 
                ${newsItem.status === 'Coming Soon' ? 'text-[#EEA23E]' : 'text-[#2AA63C]'}`}>
                <div>
                  <Image 
                    src={newsItem.status === 'Coming Soon' ? Ylw : Grn} 
                    alt={newsItem.status} 
                    className='w-[18px] h-[18px]' 
                  />
                </div>
                {newsItem.status}
              </p>
              </div>
              <div className='p-4'>
              <h2 className=" py-4 text-[#EF3133] font-[600] text-[24px]">{newsItem.title}</h2>
              <p className="text-[#667085] text-[14px] flex gap-2">
              <Image src={Calendar} alt='' className='w-[18px] h-[18px] '/>
                {newsItem.date}
                </p>
                <button className='text-[#071592] text-[14px] pl-6 font-[700] py-[2px]'>Add to Calendar</button>

                <p  className='pb-1 flex gap-2 items-center justify-center text-[14px] py-[2px]'>
                        <Image src={Locate} alt='' className='w-[18px] h-[18px]'/>
                        {newsItem.venue}</p>
                <button className='flex justify-center items-center gap-2 rounded-[8px] p-2 mt-6'>
                        <Image src={Location} alt='' className='w-[18px] h-[18px]'/>
                        <p>view location in map</p>
                    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Events;
