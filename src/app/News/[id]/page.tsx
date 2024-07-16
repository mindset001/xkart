// pages/NewsDetail/[id].tsx
'use client'
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';



interface NewsItem {
  id: number;
  title: string;
  image?: string;
  created: string;
  body: string;
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
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.body}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default NewsDetail;
