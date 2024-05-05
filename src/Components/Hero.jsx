import React from 'react'
import { NavLink } from 'react-router-dom'
import './Hero.css'

function Hero() {

  

    return (
       
        <div className="z-0 relative bg-cover object-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold text-center">Your Journey Your Story</h1>
                <p className="text-lg md:text-xl mt-4 md:mt-6 text-center">Chose Your Faverate Destination</p>
                <button className="mt-8 md:mt-12 bg-gray-800 hover:bg-gray-700 text-white font-bold sm-py-2 sm-px-5 py-5 px-10 text-[1.5rem] rounded">Travel Plan</button>
            </div>
        </div>
    )
}

export default Hero