// components/EventCalendar.tsx
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '../components/data/events';
import Location from '../../../public/assets/location.png'
import NewsImage from '../../../public/assets/news.png';
import Grn from '../../../public/assets/grn.png'
import Ylw from '../../../public/assets/ylw.png'
import Locate from '../../../public/assets/locate.png'
import Calendar from '../../../public/assets/calendar.png'
import Note from '../../../public/assets/note.png'
import Even from '../../../public/assets/events.png'
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

const EventCalendar = () => {
  const [events, setEvents] = useState<any>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/event/ongoing', {
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
   <main>
     <div className="hidden lg:block max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">EVENTS CALENDAR</h1>
      
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
          <th className="px-4 py-2 border-b border-gray-200">
            <div className=' flex items-center justify-center gap-[2px] text-[#667085] font-[400] text-[14px]'>
            <Image src={Even} alt='' className='w-[16px] h-[16px]'/>
            <p>Events</p>
            </div>
            </th>
            <th className="px-4 py-2 border-b border-gray-200">
            <div className=' flex items-center justify-center gap-[2px] text-[#667085] font-[400] text-[14px]'>
            <Image src={Calendar} alt='' className='w-[16px] h-[16px]'/>
            <p>Date</p>
            </div>
            </th>
            <th className="px-4 py-2 border-b border-gray-200">
            <div className=' flex items-center justify-center gap-[2px] text-[#667085] font-[400] text-[14px]'>
            <Image src={Locate} alt='' className='w-[16px] h-[16px]'/>
            <p>Location</p>
            </div>
            </th>
            <th className="px-4 py-2 border-b border-gray-200">
            <div className=' flex items-center justify-center gap-[2px] text-[#667085] font-[400] text-[14px]'>
            <Image src={Note} alt='' className='w-[16px] h-[16px]'/>
            <p>Status</p>
            </div>
            </th>
            {/* <th className="px-4 py-2 border-b border-gray-200">Map</th> */}
          </tr>
        </thead>
        <tbody>
          {events && events.map((event:any, index:any) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 flex items-center">
                <Image src={NewsImage} alt={event.title}  className="rounded-md mr-4 w-[40px] h-[40px]" />
                <div>
                  <div className="text-xl font-bold text-red-500 text-[16px]">{event.title}</div>
                
                </div>
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-[14px]"><p> {formatDateRange(event.start_date, event.end_date)}</p>
              <Link href='' className="text-[#071592] font-[700]">Add to Calendar</Link>
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-[14px]">{event.location}</td>
              <td className={`px-4 py-2 border-b border-gray-200`}>
              <p className={`w-auto bg-white h-[30px] rounded-[20px] px-[4px] font-[600] text-[14px] flex gap-2 items-center
                ${event.status === 'ongoing' ? 'text-blue-500' : event.status === 'coming soon' ? 'text-yellow-500' : 'text-green-500'}`}>
                <div>
                  <Image 
                    src={event.status === 'ongoing' ? Grn : event.status === 'coming soon' ? Ylw : Grn} 
                    alt={event.status} 
                    className='w-[18px] h-[18px]' 
                  />
                </div>
                {event.status}
              </p>
              {/* <p className={`w-auto bg-white h-8 rounded-full px-2 font-semibold flex items-center mr-2 mt-[-20px] 
  ${event.status === 'ongoing' ? 'text-blue-500' : event.status === 'coming soon' ? 'text-yellow-500' : 'text-green-500'}`}>
  <Image src={event.status === 'ongoing' ? GrnIcon : newsItem.status === 'coming soon' ? YlwIcon : GrnIcon} alt={event.status} width={18} height={18} />
  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
</p> */}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <button className="flex items-center justify-center gap-[2px] bg-gray-100 border border-gray-300 rounded-md p-2 text-[12px]">
                  <Image src={Location} alt="Map" width={18} height={18} />
                  <Link href='https://maps.app.goo.gl/ju3BZxqZJA1MaXre9'><p>View Location in Map</p></Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='block lg:hidden [w-80%] px-4 py-4'>
    <h1 className="text-[20px] font-bold mb-4">EVENTS CALENDAR</h1>
    <div>
    {events && events.map((event:any, index:any) => (
      <div key={index} className='border-b mb-4'>
        <div className='flex justify-between '>
     <div>
     <Image src={NewsImage} alt={event.title}  className="rounded-md mr-4 w-[40px] h-[40px]" />
     <div className="text-xl font-bold text-red-500 text-[12px] mt-2">{event.title}</div>
     </div>
      <p className={`w-auto bg-white h-[30px] rounded-[20px] px-[4px] font-[600] text-[14px] flex gap-2 items-center
                ${event.status === 'ongoing' ? 'text-blue-500' : event.status === 'coming soon' ? 'text-yellow-500' : 'text-green-500'}`}>
                <div>
                  <Image 
                    src={event.status === 'ongoing' ? Grn : event.status === 'coming soon' ? Ylw : Grn} 
                    alt={event.status} 
                    className='w-[18px] h-[18px]' 
                  />
                </div>
                {event.status}
              </p>
      </div>
      <div className='flex justify-between items-center my-2'>
      <div className='w-[60%]  flex items-center gap-[2px] text-[#667085] font-[400] text-[14px]'>
            <Image src={Locate} alt='' className='w-[16px] h-[16px]'/>
            <p>{event.location}</p>
            </div>

            <button className='text-[#071592] text-[13px]'>View location in map</button>

      </div>
      <div className='flex justify-between items-center my-2'>
      <div className='w-[60%]  flex items-center gap-[2px] text-[#667085] font-[400] text-[14px]'>
            <Image src={Calendar} alt='' className='w-[16px] h-[16px]'/>
            <p>{formatDateRange(event.start_date, event.end_date)}</p>
            </div>

            <button className='text-[#071592] text-[13px]'>Add to Calendar</button>

      </div>
      </div>
        ))}
    </div>
    </div>
   </main>
  );
};

export default EventCalendar;
