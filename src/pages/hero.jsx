import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return ( 
  <div className="flex flex-col-reverse md:flex-row items-center justify-between
   bg-gray-900 text-white min-h-screen px-12 pt-24 gap-10 mb-20">

      <div className="md:w-1/2 ml-10">
        <h1 className="text-5xl font-bold text center mb-6 text-green-400">
          SHIWANI <span className="text-green-400">CHAPAGAIN</span>
        </h1>

        <p  className="mt-4 text-xl text-gray-300 leading-9">
          I build intelligent, secure, and scalable web and mobile
          applications by combining modern software engineering, AI
          integration, and efficient system design. I specialize in
          transforming complex ideas into user-friendly, high-performance
          digital solutions.
        </p>
<div className="flex gap-4 mt-6 item-center text-center py-10 ">
        <a
          href="/cv.pdf"
          download
          className="inline-block bg-green-500  item-center hover:bg-green-600 px-6 py-3 rounded-md font-semibold transition"
        >
          Download CV
        </a>
           <Link  
    to="/contact"   
     className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition"  
    >  
     Contact Me  
    </Link>  </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src="/pp.jpeg"
          alt="Profile"
         className="w-80 h-80 rounded-full border-4 border-green-500 object-cover"
        />
      </div>

    </div>
   
     
  )
}

export default Hero
