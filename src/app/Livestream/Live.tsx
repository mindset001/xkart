import React from 'react'
import VideoChannel from './VideoChannel';
import CountdownTimer from './CountdownTimer';
import Dust from '../../../public/assets/dust.png'

const channels = [
    {
      id: 1,
      title: 'Watch from Channel 1',
      description: 'Watch 4TH RACE live from Work and Play Arena',
    //   thumbnail: '/images/channel1.jpg', // Replace with your thumbnail paths
    thumbnail: Dust,
      link: '/channel/1', // Replace with your actual channel links
    },
    {
      id: 2,
      title: 'Watch from Channel 2',
      description: 'Watch 4TH RACE live from Work and Play Arena',
    //   thumbnail: '/images/channel2.jpg',
    thumbnail: Dust,
      link: '/channel/2',
    },
  ];

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
    <div className="w-full items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
      {channels.map((channel) => (
       <div className=''>
         <VideoChannel key={channel.id} channel={channel} />
       </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default Live