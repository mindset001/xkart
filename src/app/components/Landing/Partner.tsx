import React from 'react'
import Work from '../../../../public/assets/work.png'
import Horse from '../../../../public/assets/horse.png'
import Image from 'next/image'

function Partner() {
  return (
   <main className='w-full flex items-center justify-center my-20'>
      <div className='flex items-center gap-8'>
        <div>
          <h1 className='text-[#BF2729] font-[800] text-32px]'>OFFICIAL PARTNERS</h1>
        </div>
        <div className='flex gap-10'>
          <Image src={Work} alt='' className='w-[122.25px] h-[120px]'/>
          <Image src={Horse} alt='' className='w-[162.25px] h-[120px]'/>
        </div>
      </div>
   </main>
  )
}

export default Partner