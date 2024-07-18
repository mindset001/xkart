'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Dust from '../../../public/assets/dust.png'
import Location from '../../../public/assets/location.png'
import Calendar from '../../../public/assets/calendar.png'
import Locate from '../../../public/assets/locate.png'


import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import ArriveModal from './ArriveModal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Modal } from 'antd'

const Arrive: React.FC = () => {
    const [open, setOpen] = useState(false);
  const [events, setEvents] = useState<any>(null);

 

 

  return (
   <main>
    <Navbar/>
    <main className='py-10 w-full flex items-center justify-center'>
   
      <div className='w-[90%] flex flex-col lg:flex-row gap-10'>
        <div className='rounded-lg'>
          <Image src={Dust} alt='Event Image' className='rounded-[16px] lg:w-[300px] lg:h-[300px]' />
        </div>

        <div className='lg:w-[70%] flex flex-col justify-between'>
          <div className=''>
            <div className='text-center lg:text-left'>
              <h1 className='text-[#1D2939] font-[600] text-[36px] '>Arrive 'n Drive</h1>
            </div>
            <div className='w-full items-center flex flex-col md:flex-row justify-between mt-10'>
              <div>
                <p className='pb-1 flex gap-2 text-[16px]'>
                  <Image src={Calendar} alt='Calendar Icon' className='w-[18px] h-[18px]' />
                  Always available
                </p>
                <p className='pb-1 flex gap-2 items-center justify-center text-[16px]'>
                  <Image src={Locate} alt='Location Icon' className='w-[18px] h-[18px]' />
                  Work and Play Arena, Sagamu - Abeokuta Expressway
                </p>
              </div>
              <div className=''>
                <button className='flex justify-center items-center gap-2 bg-[#F9FAFB] border border-[#98A2B3] rounded-[8px] p-2'>
                  <Image src={Location} alt='Map Icon' className='w-[18px] h-[18px]' />
                  <Link href='https://maps.app.goo.gl/ju3BZxqZJA1MaXre9'><p>View location in map</p></Link>
                </button>
              </div>
            </div>
          </div>

          <div className='w-full flex justify-center'>
          <div className='grid grid-cols-2 gap-4 lg:gap-2 md:grid-cols-4 lg:justify-between mt-10 lg:mt-0'>
           <div>
            <button onClick={()=> setOpen(true)} className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[191px] h-[48px] items-center justify-center gap-2'>Available Options</button>
           </div>
          </div>
          </div>
        </div>
      </div>
      <Modal
      // title="Basic Modal"
      centered
      open={open}
      onCancel={() => setOpen(false)}
     
      >
       <ArriveModal/>
    </Modal>
    </main>
    <Footer/>
   </main>
  )
}

export default Arrive
