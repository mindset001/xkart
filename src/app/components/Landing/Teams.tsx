import React from 'react';
import Image from 'next/image'; // If using Next.js, or import any other image component library you use
import { Team } from '../data/team';
import Link from 'next/link';

const Teams: React.FC = () => {
  return (
    <main className="py-8 flex flex-col items-center justify-center bg-[#fff]">
      <div className='w-[90%]'>
        <h1 className="text-[24px] md:text-[36px] text-[#000] mb-4 text-center font-[600] uppercase">MEET THE RACE TEAMS</h1>

       <div className='w-full flex flex-col lg:flex-row items-center justify-between'>
       <div className="w-4/5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 items-center gap-2 lg:gap-6 lg:mt-4">
          {Team.map((newsItem, index) => (
            <div key={index} className="news-item bg-white h-[344px] w-[421-33px] text-center ">
              <Image
                src={newsItem.image}
                alt={newsItem.name}
                className='lg:w-[244.25px] lg:h-[244px] rounded-[280px]'
                // className="rounded mb-4"
              />
              <div className='p-4'>
              <h2 className="text-[16px] font-semibold">{newsItem.name}</h2>
              <p className="text-[#667085] text-[14px] ">{newsItem.report}</p>
              </div>
            </div>
          ))}
          
        </div>

        <div className='w-1/5'>
          <button className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133]  rounded-tl-[16px] rounded-br-[16px]  flex w-[191px] h-[48px] items-center justify-center gap-2'>
                    
                        <p className='uppercase font-[600]'><Link href='Team'>team biographies {'>'}</Link></p>
                    </button>
          </div>
       </div>
      </div>
    </main>
  );
};

export default Teams;
