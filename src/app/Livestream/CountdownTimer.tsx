'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Stop from '../../../public/assets/stopwatch.png'

// Define the type for the time left
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Utility function to calculate the remaining time
const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  return (
   <div className='w-[60%] py-2 px-4  bg-[#F2F4F7] rounded-[16px]'>
     <p>This event starts in</p>
    <div className=' flex items-center justify-center gap-2'>
        <div>
            <Image src={Stop} alt='' className='w-[64px] h-[64px]'/>
        </div>
        <div className="flex items-center justify-center text-2xl font-bold space-x-2">
      <div>{timeLeft.days} Days :</div>
      <div>{timeLeft.hours} Hrs :</div>
      <div>{timeLeft.minutes} Min :</div>
      <div>{timeLeft.seconds} Secs </div>
    </div>
    </div>
   </div>
  );
};

export default CountdownTimer;
