import React from 'react'
import EventCalendar from './EventCalendar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {
  return (
   <main>
    <Navbar/>
    <EventCalendar/>
    <Footer/>
   </main>
  )
}

export default page