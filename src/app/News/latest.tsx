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
}
function Latest() {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/news/news/?category__title=Latest', {
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
    <h1 className="text-align text-black text-4xl font-bold uppercase mb-8">latest news</h1>
   
   <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   {news.slice(0, 3).map((product) => (
          <div key={product.id}>
            <Link href={`/News/${product.id}`}>
              <div className="">
                <div className="">
                  <Image alt={product.title} src={product.image || NewsImage} width={500} height={300} className='h-[300px]'/>
                </div>
                <div className="flex flex-col items-left">
                  <p className="text-[#101828] font-[700] text-[18px] mt-2">{product.title}</p>
                  <p className="font-[400] text-[16px] text-[#667085] mt-2">{product.created}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
     </div>
 </main>
  )
}

export default Latest