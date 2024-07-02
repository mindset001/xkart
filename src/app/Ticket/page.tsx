import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tickets from './Tickets'

function page() {
  return (
    <main>
      <Navbar/>
        <Tickets/>
      <Footer/>
    </main>
  )
}

export default page