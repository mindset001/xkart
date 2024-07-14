'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import NewsImage from '../../../public/assets/news.png'
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  image?: string;
  created: string;
  body: string;
}

function Headline() {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect
  
  (() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/news/news/?category__title=', {
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
    <main>
    <h1 className="text-align text-black text-4xl font-bold uppercase mb-4"> news</h1>
   
   <div  className="w-full flex flex-col gap-8">
   {news.slice(0, 1).map((product) => (
          <div key={product.id}>
            <Link href={`/News/${product.id}`}>
              <div className="">
                <div className="">
                  <Image alt={product.title} src={product.image || NewsImage} width={500} height={300} className='lg:h-[500px] w-full'/>
                </div>
                <div className="flex flex-col items-left">
                  <p className="text-[#101828] font-[700] text-[32px] mt-2">{product.title}</p>
                </div>
                <div className='flex flex-col lg:fex-row justify-between lg:items-center'>
                <div className='lg:w-[70%]'>
                <p>{product.body}</p>
               </div>
               <button className='mt-8 lg:mt-0 bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
             
              <p className='uppercase'> <p className='uppercase'><Link href={`/News/${product.id}`}>read more {'>'}</Link></p></p>
            </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
     </div>
 </main>
  )
}

export default Headline