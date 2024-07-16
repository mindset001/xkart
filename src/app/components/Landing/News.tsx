'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // If using Next.js, or import any other image component library you use
import { News as NewsData } from '../data/news'; // Adjust the import path to your actual file structure
import Link from 'next/link';
import NewsImage from '../../../../public/assets/news.png'
interface NewsItem {
  id: number;
  title: string;
  image?: string;
  created: string;
}
const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/news/news/', {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data.data, 'confirmed data'); // Log the fetched data
  
        // Update events state
        setNews(data.data);
        console.log(news);
  
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
  
    fetchNews();
  }, []);
  return (
    <main className="py-8 flex flex-col items-center justify-center bg-[#8F1D1F]">
      <div className='w-[90%]'>
        <h1 className="text-[36px] text-[#fff] mb-4 text-center font-[600] uppercase">News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(0, 6).map((product) => (
          <div key={product.id}>
            <Link href={`/News/${product.id}`}>
              <div className="">
                <div className="">
                  <Image alt={product.title} src={product.image || NewsImage} width={500} height={300} className='h-[300px]'/>
                </div>
                <div className="flex flex-col items-left bg-white h-36 p-4">
                  <p className="text-[#101828] font-[700] text-[18px] mt-2">{product.title}</p>
                  <p className="font-[400] text-[16px] text-[#667085] mt-2">{product.created}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
};

export default News;
