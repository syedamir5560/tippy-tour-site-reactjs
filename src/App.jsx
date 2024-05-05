import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Nav from './Components/Nav'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App