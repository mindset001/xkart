import React from 'react'
import Image from 'next/image';
import NewsImage from '../../../public/assets/news.png'
import Link from 'next/link';
const News = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    name: `EKN TRACKSIDE: 2024 Superkarts! USA Pro Tour Spring Nationals`,
    report: 'Sunday Report',
    image: NewsImage,
    date: '17 June 2024',
   
  }));

function Latest() {
  return (
    <main className='mb-10'>
    <h1 className="text-align text-black text-4xl font-bold uppercase mb-8">latest news</h1>
   
   <div  className="flex flex-col">
       {News.map((product) => (
       
         <div key={product.id} >
             <Link href={`/News/${product.id}`}>
           <div className='flex flex-row gap-2 border-2 lg:border-none p-2 bg-[#FCFCFD]'>
             <div className=' '>
               <Image alt={product.name} src={product.image} />
             </div>
             <div className='flex flex-col items-left'>
               <p className='text-[#101828] font-[700] text-[14px] mt-2'>{product.name} - {product.report}</p>
               <p className=' font-[400] text-[14px] text-[#667085] mt-2'>{product.date}</p>
            
             </div>
           </div>
           </Link>
         </div>
       ))}
     </div>
 </main>
  )
}

export default Latest