'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/assets/red-logo.png'
import Insta from '../../../public/assets/insta.png'
import Face from '../../../public/assets/face.png'
import Youtube from '../../../public/assets/youtube.png'
import Contact from '../../../public/assets/contact.png'
import Location from '../../../public/assets/locat.png'
import Msg from '../../../public/assets/msg.png'
import Image from 'next/image'
import { Raleway } from 'next/font/google'
import Link from 'next/link'

export const rale = Raleway({ subsets: ["latin"] });

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
  return (
    <main className='w-full flex flex-col items-center justify-center bg-[#8F1D1F]'>
      <div className='w-[90%]'>
      <div className='p-4 lg:p-10 flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-20% flex items-center justify-between lg:block'>
        <Image src={Logo} alt='' className='h-[38px] w-[138.77px]'/>
        <div className='flex gap-4 lg:mt-10'>
        <Image src={Youtube} alt='' className='h-[28px] w-[28px]'/>
        <Image src={Face} alt='' className='h-[28px] w-[28px]'/>
        <Image src={Insta} alt='' className='h-[28px] w-[28px]'/>
        </div>
        </div>

        <div className='lg:w-[70%]'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-full'>
          <ul className='text-[#F9ADAD] flex flex-col gap-4 font-[400] text-[14px] '>
                <li className='cursor-pointer hover:text-[#fff]'>Store</li>
                <li className='cursor-pointer hover:text-[#fff]'>Merchandise</li>
                <li className='cursor-pointer hover:text-[#fff]'>Partners</li>
            </ul>
            <ul className='text-[#F9ADAD] flex flex-col gap-4 font-[400] text-[14px] '>
                <li className='cursor-pointer hover:text-[#fff]'><Link href='Livestream'>Live Races</Link></li>
                <li className='cursor-pointer hover:text-[#fff]'>Results</li>
                <li className='cursor-pointer hover:text-[#fff]'>Rulebook</li>

                <li className='cursor-pointer hover:text-[#fff]'><Link href='EventCalendar'>Calendar</Link></li>
                <li className='cursor-pointer hover:text-[#fff]'>Gallery</li>
            </ul>
            <ul className='text-[#F9ADAD] flex flex-col gap-4 font-[400] text-[14px] '>
                <li className='cursor-pointer hover:text-[#fff]'>About</li>
                <li className='cursor-pointer hover:text-[#fff]'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-[#fff]'>Terms and Conditions</li>
            </ul>
            <ul className='text-[#F9ADAD] flex flex-col gap-4 font-[400] text-[14px] '>
                <li className='cursor-pointer flex gap-2 items-center hover:text-[#fff]'>
                  <Image src={Msg} alt=''  className='h-[18px] w-[18px]'/>
                xkartraceseries@gmail.com
                </li>
                <li className='cursor-pointer flex gap-2 items-center'>
                  <Image src={Contact} alt=''  className='h-[18px] w-[18px]'/>
                  +2349115409144
                </li>
                <li className='cursor-pointer flex gap-2 items-center hover:text-[#fff]'>
                  <Image src={Location} alt=''  className='h-[18px] w-[18px] hover:text-[#fff]'/>
                  13, celestial way, ogudu, Lagos 105102, Nigeria.
                </li>
            </ul>
          </div>
        </div>
       
      </div>
      
      <div className='text-[#F9ADAD] text-center'>
      <p className='mt-4 text-center font-[400] text-[10px] lg:text-[14px]'>All Rights reserved @ civicnexa software <span>{`${year} `}</span> </p>
      </div>
      </div>
    </main>
  )
}

export default Footer