"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToUp = () => {
    const [isVisible,setInvisible]=useState(false);
    useEffect(()=>{
        const toggleVisibility = () =>{
            if(window.scrollY > 300){
                setInvisible(true);
            } else {
                setInvisible(false);
            }
        };
        window.addEventListener("scroll",toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll",toggleVisibility);
        };
    },[]);
    const ScrollToUp = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
        {isVisible && (
            <button onClick={ScrollToUp}
            className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none cursor-pointer">
                <FaArrowUp/>
            </button>
        )}
    </div>
  )
}

export default ScrollToUp