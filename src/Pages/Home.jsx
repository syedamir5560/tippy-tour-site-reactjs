import React from 'react'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <Destination />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home