import React from 'react'

function Contact() {
  return (
    <>
      <div className="relative bg-cover bg-center h-[75vh] " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ height: '70vh' }}>

        </div>


      </div>
      <div className="container mx-auto p-8 ">
        <h1 className="text-4xl text-center font-bold mb-8 font-serif">Contact Us</h1>
        <form className='mx-10 '>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2"  >Name</label>
            <input type="text" id="name" name="name" placeholder='Enter Your Name..' className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" placeholder='Enter Your Email..' name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" placeholder='Message' rows="5" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md block w-52 mx-auto">Send...</button>

        </form>
        <div className="mt-8 mx-10">
          <p className="text-gray-700 font-bold text-2xl">Address: Mohammad Ali Road , Mumbai.</p>
          <p className="text-gray-700 font-bold text-2xl">Email: info@example.com</p>
        </div>
      </div>
    </>
  )
}

export default Contact