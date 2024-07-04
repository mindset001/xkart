'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../public/assets/red-logo.png'
import Search from '../../../public/assets/search.png'
import Menu from '../../../public/assets/menu.png'
import Link from 'next/link'

function Navbar() {
    const [show, setShow] = useState(true)
    const [hide, setHide] = useState(false)

    const handleShow = ()=> {
        setHide(true)
        setShow(hide)
    }

    const handleHide = () => {
        setShow(true)
        setHide(false)
    }
  return (
    <main className='bg-[#8F1D1F] w-full h-[60px] '>
        <div className='hidden lg:flex items-center px-2 lg:px-6 justify-between'>
        <div>
            <Image src={Logo} alt='' className='h-[38px] w-[138.77px]'/>
        </div>
        <div >
            <ul className='text-[#D0D5DD] flex gap-4 font-[400] text-[16px] '>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Calendar</li>
                <li className='cursor-pointer'>National</li>
                <li className='cursor-pointer'>Result</li>
                <li>
                <Link href='Livestream'  className='flex items-center gap-[2px] cursor-pointer'>
                    <div className='bg-[#EF3133] h-[6px] w-[6px] rounded-[50px]'></div>
                    <p>Live</p></Link>
                </li>
            </ul>
        </div>
        <div className='flex bg-[#FFFFFF] border border-[#EAECF0] border-1 rounded-[8px] h-[30px] w-[300px]  gap-2 items-center px-2'>
            <Image src={Search} alt='' className='h-[18px] w-[18px]'/>
            <input type="Search" className='bg-transparent outline-none'/>
        </div>
        </div>

        {/* mobile view  */}
         <div className='w-full flex items-center justify-between lg:hidden'>
         <div>
            <Image src={Logo} alt='' className='h-[38px] w-[138.77px]'/>
        </div>

        <div>
        {show && <div className='w-full flex items-end' onClick={handleShow}>
                <Image src={Menu} alt='' className='w-[38px] h-[38px]'/>
            </div>}
            {hide && <div onClick={handleHide}>
            <h1 className='text-right font-[800] text-[28px] text-[white]'>X</h1>
            </div>}
        </div>
        </div>
        

        <div className='flex w-full justify-end items-end'>
            

            {hide && <div className='bg-[white] w-[70%]  px-2 py-4 rounded-2xl z-10'>
                
            <ul className='text-[#EF3133] flex flex-col gap-4 font-[400] text-[16px] '>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Calendar</li>
                <li className='cursor-pointer'>National</li>
                <li className='cursor-pointer'>Result</li>
                <li className='flex items-center gap-[2px] cursor-pointer'>
                    <Link href='Livestream'>
                    <div className='bg-[#EF3133] h-[6px] w-[6px] rounded-[50px]'></div>
                    <p>Live</p></Link>
                </li>
            </ul>
            </div>}
        </div>
      
    </main>
  )
}

export default Navbar