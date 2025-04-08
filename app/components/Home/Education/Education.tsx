'use client'
import React from 'react';
import { educationInfo } from '@/app/Data/data';

const Education = () => {
  return (
    <section className="bg-[#0f0715] py-16 px-4 md:px-12 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

      <div className="relative border-l-2 border-yellow-400 ml-6 md:ml-20">
        {educationInfo.map((edu, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-6 top-6 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white z-10" />

            {/* Arrow pointing to card */}
            <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-yellow-400" />

            {/* Education Card */}
            <div className="bg-[#1f1f1f] p-5 rounded-md shadow-md transition-all duration-300 hover:shadow-yellow-400">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-yellow-400 text-sm mt-1">{edu.institute} — {edu.year}</p>
              <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
