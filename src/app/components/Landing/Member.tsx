import React from 'react'
import Race from '../../../../public/assets/auto.png'
import Buy from '../../../../public/assets/men.png'
import Image from 'next/image'

function Member() {
  return (
    <main className='w-full flex items-center justify-center my-20 '>
      <div className='bg-[#F2F4F7] rounded-[24px] w-[90%] lg:w-[60%] py-20'>
        <div className='text-center'>
          <h2 className='text-[24px] font-[600] text-[#101828]'>Join  Racing and Automotive Development Authority (RADA) </h2>
          <p className='text-[16px] font-[400] text-[#344054]'>The Racing and Automotive Development Authority (RADA) licenses racers, sanctions events, and requires registration from all event organizers, racing teams, and team owners to promote motorsport in Nigeria.</p>
        </div>
        <div>
          <Image src={Race} alt='' className='w-[280px] h-[144px]' />
        </div>
        <div>

        </div>
        <div className='w-full flex items-center justify-center'>
          <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px] text-[white] font-[600]  flex w-[191px] h-[48px] items-center justify-center gap-2'>
            <Image src={Buy} alt='' className='w-[18px] h-[18px]' />
            <p className='uppercase'>buy tickets</p>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Member