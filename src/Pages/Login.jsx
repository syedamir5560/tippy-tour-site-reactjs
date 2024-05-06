import React from 'react'

function Login() {
  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center font-serif">Sign Up</h1>
      <form className='mx-10'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 ">Name</label>
          <input type="text" id="name" placeholder='Enter Your Name..' name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" placeholder='Enter Your Email..' name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password"  placeholder='Enter Your Password..' name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder='Confirm Password..' name="confirmPassword" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md block w-52 mx-auto">Sign Up</button>
      </form>
    </div>
  )
}

export default Login