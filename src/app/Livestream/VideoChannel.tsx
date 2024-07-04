// components/VideoChannel.tsx
import Image from 'next/image';
import Link from 'next/link';

const VideoChannel = ({ channel }: { channel: any }) => {
  return (
    <div className="rounded-lg overflow-hidden relative">
        <h2 className="text-lg font-bold mb-2 text-[#101828] text-center lg:text-left">{channel.title}</h2>
      <Link href={channel.link}>
        <Image
          src={channel.thumbnail}
          alt={channel.title}
        //   width={500}
        //   height={300}
          className=" rounded-[24px] lg:w-[600px] lg:h-[320px]"
        />
        <div className="p-4">
          
          <p className="text-[16px] font-[700] text-[#1D2939]">{channel.description}</p>
          <p className='text-[#475467] text-[16px] font-[400]'>Live now</p>
        </div>
        <div className="flex items-center gap-[2px] absolute bottom-24 right-4 bg-[white] text-[#EF3133] text-xs px-2 py-1 rounded-[40px]">
        <div className='bg-[#EF3133] h-[6px] w-[6px] rounded-[50px]'></div>
            <p>Live</p></div>
      </Link>
    </div>
  );
};

export default VideoChannel;
