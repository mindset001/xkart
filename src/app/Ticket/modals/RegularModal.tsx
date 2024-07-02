'use client'
import { Card, Modal, ModalProps, Tag } from "antd"
import { FC, useState } from "react"
import Note from '../../../../public/assets/note.png'
import Image from "next/image"


const RegularModal:FC<ModalProps> = ({ onCancel ,...props}) => {

    const [quantity, setQuantity] = useState(1);
    const pricePerTicket = 3000; // Price for one ticket

    // Function to handle increment
    const increment = () => {
        setQuantity(prev => prev + 1);
    };

    // Function to handle decrement
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    const totalPrice = quantity * pricePerTicket;
   

  return (
<Modal
{...props}
cancelButtonProps={{
 className: 'hidden',
}}
styles={{
 content:{
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
     boxShadow:'none'
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
                            <p className="text-[#EF3133] text-[18px] font-[600] my-[2px]">Regular Ticket</p>
                        </div>
                        
                    </div>
                  

                    <div className="border-b py-4 mb-2">
                        <div className="flex items-center text-[14px] text-[#667085] gap-2">
                            <Image src={Note} alt="" className="w-[16px] h-[16px]" />
                            <p>Access to Racing Arena</p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-[#475467] text-[16px] mb-2">Quantity</p>
                        <div className="flex items-center gap-4 mb-4">
                            <button
                                onClick={decrement}
                                className="w-[32px] h-[32px] flex items-center justify-center bg-[#F3F4F6] text-[#1D2739] rounded-full">
                                −
                            </button>
                            <div className="text-[18px] text-[#101828] border border-[#EF3133] rounded-[4px] px-4 py-1">
                                {quantity}
                            </div>
                            <button
                                onClick={increment}
                                className="w-[32px] h-[32px] flex items-center justify-center bg-[#F3F4F6] text-[#1D2739] rounded-full">
                                +
                            </button>
                        </div>
                        <button className="w-[144px] rounded-br-[16px] rounded-tl-[16px] bg-[#EF3133] text-white text-[16px] font-semibold py-2 px-4 rounded-[4px]">
                            PAY ₦{totalPrice.toLocaleString()}
                        </button>
                    </div>
                </main>

 </Card>
</Modal>
  )
}

export default RegularModal