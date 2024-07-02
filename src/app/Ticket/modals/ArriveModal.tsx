'use client'
import { Card, Modal, ModalProps, Tag } from "antd"
import { FC, useState } from "react"
import Clock from '../../../../public/assets/clock.png'
import Flag from '../../../../public/assets/flag.png'
import Image from "next/image"


const ArriveModal: FC<ModalProps> = ({ onCancel, ...props }) => {

    const [open, setOpen] = useState<boolean>(false)
    const [err, setErr] = useState<string>('')


    return (
        <Modal
            {...props}
            cancelButtonProps={{
                className: 'hidden',
            }}
            styles={{
                content: {
                    background: 'rgba(255, 255, 255, .95)'
                }
            }}
            okButtonProps={{
                className: 'hidden'
            }}
            closeIcon={null}
            width={447}
        >
            <Card
                bordered={false}
                style={{
                    boxShadow: 'none'
                }}
            //  title={<div className="text-[28px] text-[#1D2739]">Share resources</div>}
            >
                <main >
                <div className="flex justify-end" >
                <button 
                            onClick={onCancel} 
                            className="font-[600] text-[16px] mb-[-20px] cursor-pointer"
                        >
                            x
                        </button>
                        </div>
                    <div className="flex">
                        <div className="text-center">
                            <h1 className="text-[#101828] text-[24px] font-[600]">Purchase Ticket for 4th Race</h1>
                            <p className="text-[#EF3133] text-[18px] font-[600] my-[2px]">Arrive n’ Drive Ticket</p>
                        </div>
                        
                    </div>
                    <div>
                        <p className=" mt-2 text-center text-[#667085] text-[12px] font-[400]">Arrive and Drive events are for those who would like to simply practice on the track and improve on their lap times.</p>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <button className="flex flex-col items-center justify-between py-2 w-[170px] h-[108px] border border-[#EF3133] rounded-[16px]">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Clock} alt="" className="w-[18px] h-[18px]"/>
                                    <p className="text-[#667085] text-[14px]">10 minutes</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Flag} alt="" className="w-[18px] h-[18px]"/>
                                    <p className="text-[#667085] text-[14px]">2 laps</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#EF3133] font-[700] text-[16px]">₦25,000</p>
                            </div>
                        </button>
                        <button className="flex flex-col items-center justify-between py-2 w-[170px] h-[108px] border border-[#EF3133] rounded-[16px]">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Clock} alt="" className="w-[18px] h-[18px]"/>
                                    <p className="text-[#667085] text-[14px]">30 minutes</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Flag} alt="" className="w-[18px] h-[18px]"/>
                                    <p className="text-[#667085] text-[14px]">6 laps</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#EF3133] font-[700] text-[16px]">₦50,000</p>
                            </div>
                        </button>

                        

                    </div>
                </main>

            </Card>
        </Modal>
    )
}

export default ArriveModal