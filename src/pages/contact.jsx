import React, {  useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";

function Contact() {
  const[form,setForm]=useState({
    name:"",
    email:"",
    subject:"",
    message:""

  })
  const handleChange=(e)=>
  {
    setForm({...form,
      [ e.target.name]:e.target.value
    });
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("name",form.name);
    localStorage.setItem("email",form.email);
      localStorage.setItem("subject",form.subject);
    localStorage.setItem("message",form.message);

toast.success("Messsage sent sucessfully");

  setFormgi({  name:"",
    email:"",
    subject:"",
    message:""

  })
  };
  return (
<div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row justify-center items-center gap-12 px-6 py-16">
  
  <div className="flex flex-col items-center text-center max-w-lg">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-400">
        Contact Me
      </h1>

    <p className="text-gray-300 mb-10">
        Feel free to connect with me through any of the platforms below. I'm
        always open to discussing new opportunities, collaborations, or simply
        having a conversation.
      </p>

    <div className="flex gap-6 sm:gap-8 text-3xl sm:text-5xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-green-500 transition duration-300 hover:scale-110" />
        </a>

        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-500 transition duration-300 hover:scale-110" />
        </a>

        <a
          href="https://www.facebook.com/seea.taraxa.cum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-blue-600 transition duration-300 hover:scale-110" />
        </a>

        <a
          href="https://www.instagram.com/justseeasme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition duration-300 hover:scale-110" />
        </a>
      </div></div>
      <div>
   <form
  onSubmit={handleSubmit}
    className="w-full max-w-md bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
>
  <h1 className="text-3xl font-bold text-green-400 text-center mb-8">
    Contact Me
  </h1>

  <div className="space-y-5 border-gray-500 box-shadow-gray">
    <input
    name="name"  value={form.name}
      type="text"
      placeholder="Full Name"  onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <input
    name="email"
      type="email"  value={form.email}
      placeholder="Email" 
       onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <input
    name="subject"
      type="text"  value={form.subject}
      placeholder="Subject"  onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <textarea
    name="message"  value={form.message}
      placeholder="Your Message"  onChange={handleChange}
      rows="6"
      className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
    />

    <button
      type="submit"
      className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 hover:scale-105"
    >
      SEND MESSAGE
    </button>
  </div>
</form>
</div>

    </div>
  );

}
export default Contact;