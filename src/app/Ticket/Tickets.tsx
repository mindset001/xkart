'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Dust from '../../../public/assets/dust.png'
import Location from '../../../public/assets/location.png'
import Calendar from '../../../public/assets/calendar.png'
import Locate from '../../../public/assets/locate.png'
import { Tick } from './data'
import VipModal from './modals/VipModal'
import KidsModal from './modals/KidsModal'
import RegularModal from './modals/RegularModal'
import ArriveModal from './modals/ArriveModal'

function Tickets() {
    const [modalOpen, setModalOpen] = useState<string | null>(null);

    // Handlers for each modal open action
    const openModal = (type: string) => {
        setModalOpen(type);
    }

    const modals: Record<string, JSX.Element> = {
        vip: <VipModal key="vip" open={modalOpen === 'vip'} onCancel={() => setModalOpen(null)} />,
        kids: <KidsModal key="kids" open={modalOpen === 'kids'} onCancel={() => setModalOpen(null)} />,
        regular: <RegularModal key="regular" open={modalOpen === 'regular'} onCancel={() => setModalOpen(null)} />,
        arrive: <ArriveModal key="arrive" open={modalOpen === 'arrive'} onCancel={() => setModalOpen(null)} />
    };

    return (
        <main className='py-10 w-full flex items-center justify-center' >
            {Object.values(modals)} {/* Render all modals but they will be conditionally open */}
            <div className='w-[90%] flex gap-10' >
                <div className='rounded-lg'>
                    <Image src={Dust} alt='' className='rounded-[16px] w-[300px] h-[300px]' />
                </div>

                <div className='w-[70%] flex flex-col justify-between '>
                    <div>
                        <div>
                            <h1 className='text-[#1D2939] font-[600] text-[36px]'>4TH RACE</h1>
                        </div>
                        <div className='w-full items-center flex justify-between mt-10'>
                            <div>
                                <p className='pb-1 flex gap-2 text-[16px]'>
                                    <Image src={Calendar} alt='' className='w-[18px] h-[18px]' />
                                    August 2-4, 2024
                                </p>
                                <p className='pb-1 flex gap-2 items-center justify-center text-[16px]'>
                                    <Image src={Locate} alt='' className='w-[18px] h-[18px]' />
                                    Work and Play Arena, Sagamu - Abeokuta Expressway
                                </p>
                            </div>
                            <div>
                                <button className='flex justify-center items-center gap-2 bg-[#F9FAFB] border border-[#98A2B3] rounded-[8px] p-2'>
                                    <Image src={Location} alt='' className='w-[18px] h-[18px]' />
                                    <p>view location in map</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        {Tick.map((item, index) => (
                            <div 
                                key={index}
                                className='flex flex-col items-center justify-center rounded border border-1 border-[#EF3133] w-[178px] h-[80px] cursor-pointer'
                                onClick={() => openModal(item.modalType)}
                            >
                                <h1 className='text-[#101828] text-[20px] font-[600]'>{item.title}</h1>
                                <p className='text-[#475467] text-[16px] font-[400]'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Tickets
