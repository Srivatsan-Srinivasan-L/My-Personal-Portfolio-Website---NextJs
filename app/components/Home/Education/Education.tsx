'use client'
import React from 'react';
import { educationInfo } from '@/app/Data/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-16 bg-[#0f0715] text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image with Animation */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
        </motion.div>

        {/* Right Side Education List */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          {educationInfo.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#1f1f1f] p-5 rounded-xl shadow-md hover:shadow-yellow-400 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-yellow-400">{edu.institute} — {edu.year}</p>
              <p className="text-sm text-gray-300 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
