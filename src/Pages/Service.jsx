import React from 'react'
import Trip from '../Components/Trip'

function Service() {
  return (
    <>
      <div className="relative bg-cover bg-center h-[75vh] " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ height: '70vh' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-center">Services</h1>
        </div>

      </div>
      <Trip />
    </>
  )
}

export default Service