'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LocationIcon from '../../../../public/assets/location.png'
import BuyIcon from '../../../../public/assets/buy.png'
import CalendarIcon from '../../../../public/assets/calendar.png'
import LocateIcon from '../../../../public/assets/locate.png'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

const Hero: React.FC = () => {
  const [events, setEvents] = useState<any>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/event/current', {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.data, 'current data'); // Log the fetched data

        // Update events state
        setEvents(data.data);

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

  if (!events) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <main className='hero w-full flex items-center justify-center h-auto pt-10 pb-20'>
      <div className='bg-white w-[90%] lg:w-[600px] lg:h-[480px] py-4 bg-opacity-20 rounded-[24px] flex items-center justify-center'>
        <div className='text-white text-center flex flex-col justify-center items-center'>
          <div>
            <p>Upcoming Event</p>
            <h1 className='uppercase font-[600] text-[36px]'>{events.title}</h1>
          </div>
          <div className='bg-[#EAECF0] rounded-[8px] px-[16px] text-[#000000] flex flex-col items-center justify-between py-4 lg:h-[160px] w-[90%] lg:w-[504px] mt-10'>
            <div>
              <p className='pb-1 flex gap-2 items-center justify-center'>
                <Image src={CalendarIcon} alt='Calendar' className='w-[18px] h-[18px]' />
                {formatDateRange(events.start_date, events.end_date)}
              </p>
              <p className='pb-1 flex gap-2 items-center justify-center'>
                <Image src={LocateIcon} alt='Location' className='w-[18px] h-[18px]' />
                {events.location}
              </p>
            </div>

            <button className='flex justify-center items-center gap-2 bg-[#F9FAFB] border border-[#98A2B3] rounded-[8px] p-2'>
              <Image src={LocationIcon} alt='Map' className='w-[18px] h-[18px]' />
              <p>View location in map</p>
            </button>
          </div>

          <div className='mt-20 flex flex-col lg:flex-row gap-4'>
            <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
              <Image src={BuyIcon} alt='Buy' className='w-[18px] h-[18px]' />
              <p className='uppercase'>
                <Link href='/Ticket'>Buy tickets</Link>
              </p>
            </button>

            <button className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[191px] h-[48px] items-center justify-center gap-2'>
              <Image src={BuyIcon} alt='Details' className='w-[18px] h-[18px]' />
              <p className='uppercase'>More details {'>'}</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
