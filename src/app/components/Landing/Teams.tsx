import React from 'react';
import Image from 'next/image'; // If using Next.js, or import any other image component library you use
import { Team } from '../data/team';

const Teams: React.FC = () => {
  return (
    <main className="py-8 flex flex-col items-center justify-center bg-[#fff]">
      <div className='w-[90%]'>
        <h1 className="text-[24px] md:text-[36px] text-[#000] mb-4 text-center font-[600] uppercase">MEET THE RACE TEAMS</h1>

       <div className='flex flex-col lg:flex-row items-center'>
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 items-center gap-2 lg:gap-6 lg:mt-4">
          {Team.map((newsItem, index) => (
            <div key={index} className="news-item bg-white h-[344px] w-[421-33px] text-center ">
              <Image
                src={newsItem.image}
                alt={newsItem.name}
                className='lg:w-[194.25px] lg:h-[194px] rounded-[280px]'
                // className="rounded mb-4"
              />
              <div className='p-4'>
              <h2 className="text-[16px] font-semibold">{newsItem.name}</h2>
              <p className="text-[#667085] text-[14px] ">{newsItem.report}</p>
              </div>
            </div>
          ))}
          
        </div>

        <div>
          <button className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133]  rounded-tl-[8px] rounded-br-[8px]  flex w-[191px] h-[48px] items-center justify-center gap-2'>
                    
                        <p className='uppercase font-[600]'>biography {'>'}</p>
                    </button>
          </div>
       </div>
      </div>
    </main>
  );
};

export default Teams;
