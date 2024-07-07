import React from 'react'
import VideoChannel from './VideoChannel';
import CountdownTimer from './CountdownTimer';



function Live() {
    const targetDate = '2024-08-01T00:00:00';
  return (
    <div className='flex items-center justify-center'>
        <div className="lg:w-[80%] p-8">
    <h1 className="lg:text-[36px] font-[600] text-center mb-4">Watch 4TH RACE Live from Work and Play Arena</h1>
    <div className="text-center mb-8">
      
    <div className='flex items-center justify-center'>
    <CountdownTimer targetDate={targetDate} />
    </div>
    </div>
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">

         <VideoChannel />

    </div>
  </div>
    </div>
  )
}

export default Live