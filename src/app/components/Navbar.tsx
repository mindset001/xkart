import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/red-logo.png'
import Search from '../../../public/assets/search.png'

function Navbar() {
  return (
    <main className='bg-[#8F1D1F] w-full h-[60px] flex items-center px-6 justify-between'>
        <div>
            <Image src={Logo} alt='' className='h-[38px] w-[138.77px]'/>
        </div>
        <div>
            <ul className='text-[#D0D5DD] flex gap-4 font-[400] text-[16px] '>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Calendar</li>
                <li className='cursor-pointer'>National</li>
                <li className='cursor-pointer'>Result</li>
                <li className='flex items-center gap-[2px] cursor-pointer'>
                    <div className='bg-[#EF3133] h-[6px] w-[6px] rounded-[50px]'></div>
                    <p>Live</p>
                </li>
            </ul>
        </div>
        <div className='bg-[#FFFFFF] border border-[#EAECF0] border-1 rounded-[8px] h-[30px] w-[300px] flex gap-2 items-center px-2'>
            <Image src={Search} alt='' className='h-[18px] w-[18px]'/>
            <input type="Search" className='bg-transparent outline-none'/>
        </div>
    </main>
  )
}

export default Navbar