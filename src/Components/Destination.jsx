import React from 'react'
import DestinationData from './DestinationData'

function Destination() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Popular Destination</h1>
      <DestinationData heading='Tal Valcano'
       para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deleniti amet quisquam libero architecto quae, vel corporis voluptatem quasi, accusamus eligendi quibusdam nesciunt inventore unde natus? Commodi ut numquam officia?'
       image1='https://images.unsplash.com/photo-1557167240-af1446136cbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
       image2='https://images.unsplash.com/photo-1547672920-7732a3b305be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFsJTIwdmFsY2Fub3xlbnwwfHwwfHx8MA%3D%3D' />
    </div> 
  )
}

export default Destination