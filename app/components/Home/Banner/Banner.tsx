'use client';
import { BaseInfo } from '@/app/Data/data';
import React, { useState, useEffect } from 'react';
import SlideInWrapper from '../../Helper/SlideInWrapper';

const Banner = () => {
  
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const greetings = [
    <span key="1">Hello <span className="text-white">👋</span></span>,
    <span key="2">Hi everyone! <span className="text-white">🧑‍💼</span></span>,
  ];

  const animatedTextList = [
    { text: BaseInfo.name, emoji: '🧑‍💻', gradient: 'from-purple-400 via-pink-500 to-red-500' },
    { text: 'Full Stack Developer', emoji: '💻', gradient: 'from-green-400 via-blue-500 to-purple-500' },
    { text: 'React JS Developer', emoji: '⚛️', gradient: 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setGreetingIndex(-1); // show "I am" after greetings
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTextList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
 
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text content */}
          <SlideInWrapper>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold mb-4 h-10">
              {greetingIndex === -1 ? "I am" : greetings[greetingIndex]}
            </h1>

            {/* Second Line */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r ${animatedTextList[textIndex].gradient} bg-clip-text text-transparent`}>
              {animatedTextList[textIndex].text} <span className="text-white">{animatedTextList[textIndex].emoji}</span>
            </h2>

            <p className="mt-6 text-sm md:text-base text-white text-opacity-60 text-justify">
              {BaseInfo.description}
            </p>
            <a
  href="#My-Tech-Stack"
  className="no-underline decoration-none border-0 outline-none hover:underline-0 focus:outline-none"

>
  <button className="mt-5 bg-blue-800 hover:bg-purple-700 transition-all text-white px-6 py-2 rounded-md text-base  cursor-pointer">
  What I Know
  </button>

         
         
</a>

          </div>
          </SlideInWrapper>
          {/* Profile Image */}
          <SlideInWrapper>
          <div className="mx-auto hidden lg:block rounded-[3rem] border-[5.5px] border-blue-950 overflow-x-hidden">
            <img
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={520}
              height={300}
            />
          </div>
          </SlideInWrapper>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;
