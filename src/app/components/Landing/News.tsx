import React from 'react';
import Image from 'next/image'; // If using Next.js, or import any other image component library you use
import { News as NewsData } from '../data/news'; // Adjust the import path to your actual file structure

const News: React.FC = () => {
  return (
    <main className="py-8 flex flex-col items-center justify-center bg-[#8F1D1F]">
      <div className='w-[90%]'>
        <h1 className="text-[36px] text-[#fff] mb-4 text-center font-[600] uppercase">News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NewsData.map((newsItem, index) => (
            <div key={index} className="news-item bg-white h-[344px] w-[421-33px] ">
              <Image
                src={newsItem.image}
                alt={newsItem.name}
                width={421}
                height={200}
                // className="rounded mb-4"
              />
              <div className='p-4'>
              <h2 className="text-[16px] font-semibold">{newsItem.name}-{newsItem.report}</h2>
              <p className="text-[#667085] text-[14px] pt-8">{newsItem.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default News;
