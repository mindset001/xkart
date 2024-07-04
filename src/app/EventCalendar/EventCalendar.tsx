// components/EventCalendar.tsx
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

const EventCalendar = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
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
          {Event.map((event, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 flex items-center">
                <Image src={NewsImage} alt={event.title}  className="rounded-md mr-4 w-[40px] h-[40px]" />
                <div>
                  <div className="text-xl font-bold text-red-500 text-[16px]">{event.title}</div>
                
                </div>
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-[14px]"><p>{event.date}</p>
              <Link href='' className="text-[#071592] font-[700]">Add to Calendar</Link>
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-[14px]">{event.venue}</td>
              <td className={`px-4 py-2 border-b border-gray-200`}>
              <p className={`w-auto bg-white h-[30px] rounded-[20px] px-[4px] font-[600] text-[14px] flex gap-2 items-center
                ${event.status === 'Coming Soon' ? 'text-[#EEA23E]' : 'text-[#2AA63C]'}`}>
                <div>
                  <Image 
                    src={event.status === 'Coming Soon' ? Ylw : Grn} 
                    alt={event.status} 
                    className='w-[18px] h-[18px]' 
                  />
                </div>
                {event.status}
              </p>
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <button className="flex items-center justify-center gap-[2px] bg-gray-100 border border-gray-300 rounded-md p-2 text-[12px]">
                  <Image src={Location} alt="Map" width={18} height={18} />
                  <Link href='{event.mapLink}'>View location in map</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventCalendar;
