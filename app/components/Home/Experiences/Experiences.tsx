'use client'
import React from 'react'
import SectionHeader from '../../Helper/SectionHeader'
import { experienceInfo } from '@/app/Data/data'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Experiences = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeader>Experiences</SectionHeader>

      <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-[52px]">
        {/* Left Side Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/3.gif" // put your image in public/images/
            alt="Experience Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>

        {/* Right Side Experience Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {experienceInfo.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex items-start gap-4 bg-[#1a0d2d] rounded-2xl p-5 shadow-xl"
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-full shadow"
              />
              <div className="text-white space-y-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-sm  text-gray-300">{exp.description}</p>
                <p className="text-xs text-yellow-400">{exp.dates}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
