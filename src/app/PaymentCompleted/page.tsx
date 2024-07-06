import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentCompleted = ({ }) => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold mb-2">Payment Completed!</h1>
      <p className="text-lg text-gray-600 mb-8">
      A copy of the ticket have been sent to your mail example@example.com.
      </p>
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <button
        // onClick={downloadTicket}
        className="flex items-center px-4 py-2 text-red-600 border-[1.5px] border-red-600 rounded-tl-[16px] rounded-br-[16px] hover:bg-red-100 transition duration-300"
      >
        <span className="mr-2">DOWNLOAD TICKET</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
    <Footer/>
    </div>
  );
};

export default PaymentCompleted;
