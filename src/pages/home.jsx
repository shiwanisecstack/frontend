import React from 'react'
import Hero from './hero';
import About from './about';
import Project from './project';
import Contact from './contact';
import Footer from '../components/footer';

function Home() {
  return (
    <> <div className=" px-10 py-16 item-center md-20 border-gray">
   <Hero />
    </div>
   

      <div className="pt-10 py-16 item-center">
        <About />
      </div>

      <div className="pt-10 py-16 item-center">
        <Project />
      </div>

        <div className="pt-10 py-16 item-center">  
          <Contact />  
        </div>  
       
    </>
  );
}

export default Home;
