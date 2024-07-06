'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CalendarIcon from '../../../../public/assets/calendar.png';
import LocateIcon from '../../../../public/assets/locate.png';
import LocationIcon from '../../../../public/assets/location.png';
import GrnIcon from '../../../../public/assets/grn.png';
import YlwIcon from '../../../../public/assets/ylw.png';
import { Event } from '../data/events';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

const Events: React.FC = () => {
  const [events, setEvents] = useState<any>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/event/ongoing/', {
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
        setEvents(data.data);
        console.log(events);
        
  
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
  
    fetchEvents();
  }, []); // Empty dependency array means this effect runs once on mount
  
  const formatDateRange = (start: string, end: string) => {
    const startDate = parseISO(start);
    const endDate = parseISO(end);

    const formattedStartDate = format(startDate, 'MMMM d');
    const formattedEndDate = format(endDate, 'd, yyyy');

    return `${formattedStartDate}-${formattedEndDate}`;
  };

  return (
    <main className="py-8 flex flex-col items-center justify-center bg-[your-bg-color]">
      <div className='w-[90%]'>
        <h1 className="text-3xl text-white mb-4 text-center font-semibold uppercase">News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events && events.map((newsItem:any, index:any) => (
            <div key={index} className="news-item bg-gray-200 rounded-lg">
              <div className='hero2 rounded-t-lg h-40 flex justify-end items-start'>
                {/* <p className={`w-auto bg-white h-8 rounded-full px-2 font-semibold flex items-center mr-2 mt-[-20px] 
                  ${newsItem.status === 'coming Soon' ? 'text-yellow-500' : 'text-green-500'}`}>
                  <Image src={newsItem.status === 'coming Soon' ? YlwIcon : GrnIcon} alt={newsItem.status} width={18} height={18} />
                  {newsItem.status}
                </p> */}
                <p className={`w-auto bg-white h-8 rounded-full px-2 font-semibold flex items-center mr-2 mt-[-20px] 
  ${newsItem.status === 'ongoing' ? 'text-blue-500' : newsItem.status === 'coming soon' ? 'text-yellow-500' : 'text-green-500'}`}>
  <Image src={newsItem.status === 'ongoing' ? GrnIcon : newsItem.status === 'coming soon' ? YlwIcon : GrnIcon} alt={newsItem.status} width={18} height={18} />
  {newsItem.status.charAt(0).toUpperCase() + newsItem.status.slice(1)}
</p>
              </div>
              <div className='p-4'>
                <h2 className="text-red-600 font-semibold text-xl">{newsItem.title}</h2>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <Image src={CalendarIcon} alt='Calendar' width={18} height={18} />
                  {formatDateRange(newsItem.start_date, newsItem.end_date)}
                </p>
                <button className='text-blue-700 text-sm font-semibold py-1'>Add to Calendar</button>
                <p className='pb-1 flex items-center text-sm py-1'>
                  <Image src={LocateIcon} alt='Locate' width={18} height={18} />
                  {newsItem.location}
                </p>
                <button className='flex items-center gap-2 rounded-lg p-2 mt-6'>
                  <Image src={LocationIcon} alt='Location' width={18} height={18} />
                  
                  <Link href='https://maps.app.goo.gl/ju3BZxqZJA1MaXre9'><p>View Location in Map</p></Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Events;
