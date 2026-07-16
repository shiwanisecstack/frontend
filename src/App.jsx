import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import { Routes, Route } from "react-router-dom";
import Contact from './pages/contact'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer'


function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pb-16 px-6">
   
      <Navbar/>
      <ToastContainer/>
      
        <Routes> 
          <Route path="/" element={<Home />} />   
          <Route path="/about" element={<About />} />   
      
         <Route path="/project" element={<Project />} />  
         <Route path="/contact" element={<Contact />} />    
       </Routes> 
       <Footer/>  
    </div>
  )
}

export default App
