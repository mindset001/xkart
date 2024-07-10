import React from 'react'
import Car from '../../../../public/assets/car.png'
import Glass from '../../../../public/assets/glasses.png'
import Clot from '../../../../public/assets/cloth.png'
import Image from 'next/image'
import Link from 'next/link'

function Cloth() {
    return (
        <main className='w-full flex items-center justify-center my-20 '>
            <div className='event3 h-[60vh] rounded-[24px] w-[90%] md:w-[70%] flex items-center justify-center'>
               
                <div className='flex h-[60vh] flex-col justify-between py-10 items-center text-center'>
                    <div className='w-[100%] flex flex-col justify-center items-center px-[4px]'>
                        <h1 className='text-[#101828] font-[800] text-[18px] lg:text-[24px]'>Check out Exclusive Racing gears and Merchs</h1>
                        <p className='text-[#1D2939] font-[600] text-[12px] lg:text-[14px]'>The Best collection of Premium Riding Accessories for you</p>
                    </div>
                    
                    <div className='flex items-center gap-4 text-[white]'>
                        <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px]  flex w-[130px] lg:w-[191px] h-[48px] items-center justify-center gap-2'>
                            <Link href='https://metallichorses.com/?fbclid=PAAabmD0_S2cFjTTW7syhsTAFLSuZDT_DW8KCardUjw9ggU_NKdzvn8pMVhzE'><p className='uppercase'>buy gears</p></Link>
                            
                        </button>
                        <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px]  flex w-[130px]  lg:w-[191px] h-[48px] items-center justify-center gap-2'>

                            <p className='uppercase'>Merchandise</p>
                        </button>
                    </div>
                </div>
              

            </div>
        </main>
    )
}

export default Cloth