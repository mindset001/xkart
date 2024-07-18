// components/VideoChannel.tsx
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Dust from '../../../public/assets/dust.png'

const VideoChannel = () => {
  const [events, setEvents] = useState<any>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/event/ongoingstreamlink/', {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.data, 'youtube link'); // Log the fetched data

        // Update events state
        setEvents(data.data);

      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  if (!events) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 ">
      {events && events.map((newsItem: any, index: any) => (
        <div className='relative' key={index} >
          <h2 className="text-lg font-bold mb-2 text-[#101828] text-center lg:text-left">Watch from {newsItem.channel}</h2>
          <div className="flex flex-col">
            {/* Embed the YouTube video */}
            <iframe 
              src={newsItem.link.replace('watch?v=', 'embed/')} // Convert the YouTube watch URL to an embed URL
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[8px] lg:w-[500px] lg:h-[320px]"
              title={`Live stream from ${newsItem.channel}`}
            ></iframe>
            <div className="p-4">
              <p className="text-[16px] font-[700] text-[#1D2939]">Watch 4TH RACE live from Work and Play Arena</p>
              <p className='text-[#475467] text-[16px] font-[400]'>Live now</p>
            </div>
            <div className="flex items-center gap-[2px] absolute top-8 right-0 bg-[white] text-[#EF3133] text-xs px-2 py-1 rounded-[40px]">
              <div className='bg-[#EF3133] h-[6px] w-[6px] rounded-[50px]'></div>
              <p>Live</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoChannel;
