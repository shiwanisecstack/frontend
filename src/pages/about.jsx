import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pb-16 px-6 top-30  items-center">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
                                                                                                                                                                             <br></br>
          </h1> <br></br>  <h1 className="text-4xl font-bold mb-6">
            ABOUT ME
          </h1>

          <p className="text-lg text-gray-300 max-w-lg mx-auto text-center mb-10
          leading-8">
            Hello, I am <strong>Shiwani Chapagain</strong>, a passionate Full Stack Developer from Nepal. I enjoy building responsive anduser-friendly web applications.
          </p>

          <p className="text-lg text-gray-300 max-w-lg text-center mx-auto mt-4 mb-10   leading-8">
            I love learning new technologies, solving problems, and creating  modern websites that provide great user experiences.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto place-items-center">

          <div className="w-60 h-36 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Frontend
            </h3>
            <p className="text-sm text-gray-300">
              HTML, CSS, JavaScript
            </p>
          </div>
          <div className="w-60 h-36 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Framework
            </h3>
            <p className="text-sm text-gray-300">
              React JS & Tailwind CSS
            </p>
          </div>

          <div className="w-60 h-36 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Backend
            </h3>
            <p className="text-sm text-gray-300">
              Node.js, Express.js
            </p>
          </div>

          <div className="w-60 h-36 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Database
            </h3>
            <p className="text-sm text-gray-300">
              MongoDB
            </p>
          </div>

          <div className="w-60 h-36 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              UI/UX
            </h3>
            <p className="text-sm text-gray-300">
              Responsive UI Design
            </p>
          </div>

          <div className="w-60 h-36 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Tools
            </h3>
            <p className="text-sm text-gray-300">
              Git & GitHub
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;