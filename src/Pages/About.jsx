import React from 'react'

function About() {
  return (
    <>
      <div className="relative bg-cover bg-center h-[70vh] " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529171696861-bac785a44828?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ height: '70vh' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-center">About</h1>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 font-serif text-center">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="w-full h-auto mb-4 md:mb-0" />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-4 font-mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ex id vestibulum vestibulum. Nullam et accumsan purus. Duis aliquam tristique justo, non gravida metus lobortis a. Nam bibendum tincidunt libero, vel gravida metus aliquam et. Morbi euismod ipsum nec magna rutrum aliquet. Fusce eget faucibus lacus.</p>
            <h1 className="text-3xl font-bold  font-serif ">Our Mission</h1>
            <p className="text-lg text-gray-700 font-mono">Integer a sapien nulla. Aenean eget eros nec nulla interdum scelerisque. Cras semper varius risus, et consequat libero lacinia in. Nullam posuere, mi non interdum semper, sem arcu suscipit ex, ac dignissim velit ex at metus. Integer pharetra, nulla a efficitur condimentum, urna justo viverra ligula, sed aliquet lacus velit et sem.</p>
            <h1 className="text-3xl font-bold mt-8 font-serif ">Our Vision</h1>
            <p className="text-lg text-gray-700 font-mono">Integer a sapien nulla. Aenean eget eros nec nulla interdum scelerisque. Cras semper varius risus, et consequat libero lacinia in. Nullam posuere, mi non interdum semper, sem arcu suscipit ex, ac dignissim velit ex at metus. Integer pharetra, nulla a efficitur condimentum, urna justo viverra ligula, sed aliquet lacus velit et sem.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About