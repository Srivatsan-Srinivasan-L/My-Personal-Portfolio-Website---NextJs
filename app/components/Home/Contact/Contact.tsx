"use client";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFigma } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import SectionHeader from "../../Helper/SectionHeader";
import SlideInWrapper from "../../Helper/SlideInWrapper";

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const data = new FormData(e.target as HTMLFormElement);
    const formData = {
      access_key: "your-access-key",
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const result = await response.json();
    if (result.success) {
      setStatus("✅ Your message has been sent successfully!");
      setShowToast(true);
      e.target.reset();
    } else {
      setStatus("❌ Something went wrong. Please try again.");
      setShowToast(true);
    }
  };
  
  

  return (
  
    <div id="Contacts" className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <SectionHeader>Contact Me</SectionHeader>
      <SlideInWrapper>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative">
        {/* Toast message */}
        {showToast && (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex justify-between items-center shadow-md z-50 max-w-md w-full">
      <span className="text-sm font-medium">{status}</span>
      <button onClick={() => setShowToast(false)}>
        <IoClose className="text-lg" />
      </button>
    </div>
  )}
  

        {/* Left Image + Icons */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-6">
        
          <Image
            src="/images/Contact.gif"
            alt="Contact Illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
          
    
<div className="flex gap-4 justify-center text-5xl text-gray-500">
            
          <a href="https://www.linkedin.com/in/srivatsan-s1501/" target="_blank"><FaLinkedin className="text-[#0077B5]  hover:opacity-80 transition" /></a>
         <a className="text-[#fff] hover:opacity-80 transition" href="https://github.com/Srivatsan-Srinivasan-L" target="_blank"><FaGithub /></a>
         <a className="text-[#F24E1E] hover:opacity-80 transition" href="https://www.figma.com/@Srivatsan" target="_blank"><FaFigma /></a>
         <a className="text-[#E4405F] hover:opacity-80 transition" href="https://instagram.com/" target="_blank"><FaInstagram /></a>
          </div>
    
        </div>
      
        {/* Right Contact Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
        <p className="text-center text-lg md:text-xl text-justify text-sm mt-5">
  Feel free to reach out me — I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
</p>
          <div>
            <label className="block mb-1 font-medium text-base">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-base">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-base">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-all text-white px-6 py-2 rounded-md text-base  cursor-pointer"
          >
            Send Message
          </button>
        </form>
       
      </div>
     </SlideInWrapper>
      <hr className="mt-5 border-gray-700" />
<p className="text-center text-2xl text-sm mt-4 text-white">
  © 2025 All Rights Reserved ❤️ Srivatsan.
</p>


    </div>
   
  );
};

export default ContactSection;
