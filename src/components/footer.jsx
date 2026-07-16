import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
         <footer className="bg-gray-950 text-white border-t border-gray-800 py-10">
     <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
          <h2 className="text-xl font-bold text-green-400 mb-3">
    Shiwani Chapagain
            </h2>

       <p className="text-sm text-gray-400 max-w-md  leading-6">
    I enjoy building responsive and user-friendly web applications with modern
    technologies and clean designs.
      </p>
      </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16">
          <div className="flex gap-5 text-2xl items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-green-500 transition duration-300 hover:scale-125" />
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300 hover:scale-125" />
          </a>

          <a
            href="https://www.facebook.com/seea.taraxa.cum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 transition duration-300 hover:scale-125" />
          </a>

          <a
            href="https://www.instagram.com/justseeasme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition duration-300 hover:scale-125" />
          </a>
        </div>

    
        

        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}All Rights Reserved.
        </p>
        
        </div>
</div>
      
    </footer>
  );
}

export default Footer;