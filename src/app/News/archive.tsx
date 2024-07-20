'use client'
import React, { useEffect, useState } from 'react'
import NewsImage from '../../../public/assets/news.png'
import Image from 'next/image';
import Link from 'next/link';
import { Button, Pagination } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd'


const News = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `EKN TRACKSIDE: 2024 Superkarts! USA Pro Tour Spring Nationals`,
    report: 'Sunday Report',
    image: NewsImage,
    date: '17 June 2024',
   
  }));
  interface NewsItem {
    id: number;
    title: string;
    image?: string;
    created: string;
  }
function Archive() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (news.length > 0) {
      setIsLoading(false);
    }
  }, [news]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/news/news/?category__title=Team', {
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
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
      };
    
      const handlePageSizeChange = (current: any, size: any) => {
        setPageSize(size);
      };
  return (
   <main>
<div className="container mx-auto mt-10">
      <h1 className="text-align text-black text-4xl font-bold capitalize mb-8">News Archive</h1>
      <div >
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {isLoading ? (
        <div className='w-full flex justify-center items-center mt-10'><Flex align="center" gap="middle">
   
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex></div>
      ) : (
          news.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((product) => (
          
            <div key={product.id} >
                <Link href={`/News/${product.id}`}>
              <div className='border-2 lg:border-none p-2 bg-[#FCFCFD]'>
                <div className='lg:border-2 border-[#EAECF0] '>
                  <Image alt={product.title} src={product.image || NewsImage} width={500} height={300}  />
                </div>
                <div className='flex flex-col items-left'>
                  <p className='text-[#101828] font-[700] text-[18px] mt-2'>{product.title} </p>
                  <p className=' font-[400] text-[16px] text-[#667085] mt-2'>{product.created}</p>
               
                </div>
              </div>
              </Link>
            </div>
          )))}
        </div>
        <div className='flex items-center justify-center mt-6'>
          <div style={{ marginTop: '20px', textAlign: 'center' }} className='rounded border p-2 '>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={news.length}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
              showSizeChanger
              showQuickJumper
              defaultPageSize={8}
              itemRender={(current, type, originalElement) => {
                if (type === 'prev') {
                  return <Button type="link">Previous</Button>;
                }
                if (type === 'next') {
                  return <Button type="link">Next</Button>;
                }
                return originalElement;
              }}
            />
          </div>
        </div>
      </div>
    </div>
   </main>
  )
}

export default Archive