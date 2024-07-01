import React from 'react'
import Car from '../../../../public/assets/car.png'
import Glass from '../../../../public/assets/glasses.png'
import Clot from '../../../../public/assets/cloth.png'
import Image from 'next/image'

function Cloth() {
    return (
        <main className='w-full flex items-center justify-center my-20'>
            <div className='hero3 rounded-[24px] w-[90%] lg:w-[70%] flex '>
                <div className='w-[215px] h-[195px] rounded-tl-[24px] hidden lg:block'>
                    <Image src={Car} alt='' className='' />
                </div>
                <div className='flex flex-col justify-between py-10 items-center text-center'>
                    <div className='w-[100%] px-[4px]'>
                        <h1 className='text-[#101828] font-[800] text-[18px] lg:text-[24px]'>Check out Exclusive Racing gears and Merchs</h1>
                        <p className='text-[#1D2939] font-[600] text-[12px] lg:text-[14px]'>The Best collection of Premium Riding Accessories for you</p>
                    </div>
                    <div className='flex flex-row lg:hidden'>
                        <div className='flex items-start justify-start '>
                            <Image src={Car} alt='' className='w-[100px] h-[90px]' />
                        </div>
                       <div className='flex mt-6'>
                       <Image src={Clot} alt='' className='w-[100px] h-[90px]' />
                        <div className='flex items-baseline mt-20'>
                        <Image src={Glass} alt='' className='w-[80px] h-[70px] ml-[10px]' />
                        </div>
                       </div>
                      
                    </div>
                    <div className='flex items-center gap-4 text-[white]'>
                        <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px]  flex w-[130px] lg:w-[191px] h-[48px] items-center justify-center gap-2'>

                            <p className='uppercase'>buy gears</p>
                        </button>
                        <button className='bg-[#EF3133] rounded-tl-[8px] rounded-br-[8px]  flex w-[130px]  lg:w-[191px] h-[48px] items-center justify-center gap-2'>

                            <p className='uppercase'>Merchandise</p>
                        </button>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src={Glass} alt='' className='w-[170px] h-[160px] ml-[30px]' />
                    <Image src={Clot} alt='' className='w-[216px] h-[186px]' />
                </div>

            </div>
        </main>
    )
}

export default Cloth