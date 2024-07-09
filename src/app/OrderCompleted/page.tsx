import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Order from '../../../public/assets/order.png'
import Image from 'next/image';

const OrderCompleted = ({ }) => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col items-center justify-center py-4 bg-white">
      <h1 className="text-3xl font-bold mb-2">Order Completed!</h1>
      <p className="text-lg text-gray-600 lg:w-[30%] text-center">
      Your Order have been received and an agent of ours will contact you soon on further delivery information.
      </p>
      <div className="">
        <div className="lg:w-[400px] lg:h-[400px] rounded-full flex items-center justify-center">
         <Image src={Order} alt='' />
        </div>
      </div>
      <button
        // onClick={downloadTicket}
        className="flex items-center px-4 py-2 text-red-600 border-[1.5px] border-red-600 rounded-tl-[16px] rounded-br-[16px] hover:bg-red-100 transition duration-300"
      >
        <span className="mr-2">Track Order</span>
       
      </button>
    </div>
    <Footer/>
    </div>
  );
};

export default OrderCompleted;
