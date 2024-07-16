// pages/NewsDetail/[id].tsx
'use client'
import NewsImage from '../../../../public/assets/news.png'
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Latest from '../latest2';
import Copy from '../../../../public/assets/copy.png'
import What from '../../../../public/assets/whatsapp.png'
import Twitter from '../../../../public/assets/twitter.png'
import Face from '../../../../public/assets/facebook.png'
import Telegram from '../../../../public/assets/telegram.png'
import Link from 'next/link';
import { Button } from 'antd';



interface NewsItem {
  id: number;
  title: string;
  created: string;
  body: string;
  image: StaticImageData;
}

const NewsDetail = () => {
  const params = useParams()


  useEffect(() => {
    console.log(params);
  }, [])

  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await fetch(`https://xrace.onrender.com/news/news/${params.id}`, {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.data);

        setNewsItem(data.data); // Assuming data structure matches NewsItem interface
      } catch (error) {
        console.error('Error fetching news item:', error);
      }
    };

    fetchNewsItem();
  }, []);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <main >
      <Navbar />
      
      <div className='flex flex-col justify-center items-center my-6'>
      <div className='w-[85%] mb-6'>
      <Link href="/News">
          <Button type="link" className='text-[#101828]'>
            &larr; Back
          </Button>
        </Link>
      </div>
        <div className='w-[85%]'>
          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='lg:w-[60%]'>
              <Image alt={newsItem.title} src={newsItem.image || NewsImage} width={500} height={300} className='h-[300px] w-full' />
            </div>
            <div className='lg:w-[30%] flex flex-col justify-between lg:ml-10'>
              <div>
              <p className='text-[#101828] text-[24px] font-[600]'>{newsItem.title}</p>
              <p className='text-[#667085] text-[16px]'>{newsItem.created}</p>
              </div>
              <div>
                  <p className='text-[#667085] text-[16px] capitalize'>share</p>

                  <div className='flex gap-2'>
                  <Image src={Face} alt='' className='w-[32px] h-[32px]'/>
                  <Image src={Telegram} alt='' className='w-[32px] h-[32px]'/>
                  <Image src={What} alt='' className='w-[32px] h-[32px]'/>
                  <Image src={Twitter} alt='' className='w-[32px] h-[32px]'/>
                    <Image src={Copy} alt='' className='w-[32px] h-[32px]'/>
                  </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row mt-20 gap-4'>
            <div className='lg:w-2/3 text-[#101828] text-[18px]'>
                {newsItem.body}
            </div>
            <div className='lg:w-1/3'>
              <Latest/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NewsDetail;
