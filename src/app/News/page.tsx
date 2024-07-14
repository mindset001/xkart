import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Headline from './headlin'
import Latest from './latest'
import Team from './team'
import Archive from './archive'
import Top from './top'
import Center from './center'

function page() {
  return (
    <main>
        <Navbar/>
     <div  className='w-full flex flex-col justify-center items-center mb-10'>
     <div className='w-[90%] mt-6 flex flex-col gap-8'>
      <div>
            <Headline/>
        </div>
        <div className='mb-10'>
            <Latest/>
        </div>
        <div className='flex flex-col lg:flex-row justify-between mt-10'>
            <div className='lg:w-[28%]'><Team/></div>
            
            <div className='lg:w-[40%]'><Center/></div>
            <div className='lg:w-[28%]'><Top/></div>
        </div>
        <div>
            <Archive/>
        </div>
      </div>
     </div>
        <Footer/>
    </main>
  )
}

export default page