// pages/NewsDetail/[id].tsx
'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface NewsDetailProps {
  id: string;
}

interface NewsItem {
  id: number;
  title: string;
  image?: string;
  created: string;
  body: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ id }) => {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await fetch(`https://xrace.onrender.com/news/news/${id}`, {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        setNewsItem(data); // Assuming data structure matches NewsItem interface
      } catch (error) {
        console.error('Error fetching news item:', error);
      }
    };

    fetchNewsItem();
  }, [id]);

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
