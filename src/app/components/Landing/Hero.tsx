import React from 'react'
import Location from '../../../../public/assets/location.png'
import Image from 'next/image'
import Buy from '../../../../public/assets/buy.png'
import Calendar from '../../../../public/assets/calendar.png'
import Locate from '../../../../public/assets/locate.png'

function Hero() {
  return (
    <main className='hero w-full flex items-center justify-center h-auto pt-10 pb-20'>
        <div className='bg-[white] w-[600px] h-[480px] bg-opacity-20 rounded-[24px] flex items-center justify-center'>
            <div className='text-[white] text-center flex flex-col justify-center items-center'>
                <div>
                <p>Upcoming Event</p>
                <h1 className='uppercase font-[600] text-[36px]'>4TH Race</h1>
                </div>
                <div  className='bg-[#EAECF0] rounded-[8px] px-[16px] text-[#000000] flex flex-col items-center justify-between py-4 h-[160px] w-[504px] mt-10'>
                    <div>
                    <p className='pb-1 flex gap-2 items-center justify-center'>
                        <Image src={Calendar} alt='' className='w-[18px] h-[18px]'/>
                        August 2-4, 2024</p>
                    <p  className='pb-1 flex gap-2 items-center justify-center'>
                        <Image src={Locate} alt='' className='w-[18px] h-[18px]'/>
                        Work and Play Arena, Sagamu - Abeokuta Expressway</p>
                    </div>

                    <button className='flex justify-center items-center gap-2 bg-[#F9FAFB] border border-[#98A2B3] rounded-[8px] p-2'>
                        <Image src={Location} alt='' className='w-[18px] h-[18px]'/>
                        <p>view location in map</p>
                    </button>
                </div>

                <div className='mt-20 flex gap-4'>
                    <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px]  flex w-[191px] h-[48px] items-center justify-center gap-2'>
                        <Image src={Buy} alt='' className='w-[18px] h-[18px]'/>
                        <p className='uppercase'>buy tickets</p>
                    </button>

                    <button className='bg-[#fff] border-2 text-[#EF3133] border-[#EF3133]  rounded-tl-[8px] rounded-br-[8px]  flex w-[191px] h-[48px] items-center justify-center gap-2'>
                        <Image src={Buy} alt='' className='w-[18px] h-[18px]'/>
                        <p className='uppercase'>buy tickets</p>
                    </button>
                </div>
            </div>

        </div>
    </main>
  )
}

export default Hero