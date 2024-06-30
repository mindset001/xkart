import React from 'react'
import Hero from '../components/Landing/Hero'
import Event from '../components/Landing/Event'
import Teams from '../components/Landing/Teams'
import News from '../components/Landing/News'
import Member from '../components/Landing/Member'
import Partner from '../components/Landing/Partner'
import Cloth from '../components/Landing/Cloth'

function Landing() {
  return (
   <main>
    <Hero/>
    <Event/>
    <Cloth/>
    <Teams/>
    <News/>
    <Member/>
    <Partner/>
   </main>
  )
}

export default Landing