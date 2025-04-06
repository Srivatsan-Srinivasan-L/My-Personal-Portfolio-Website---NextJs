import React from 'react'
import SectionHeader from '../../Helper/SectionHeader'
import { aboutInfo } from '@/app/Data/data'
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image'

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
        <SectionHeader>About Me</SectionHeader>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
            <div>
                <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                    {aboutInfo.title}
                    </h1>
                    <p className="mt-6 text-base text-gray-500 text-justify">
                        {aboutInfo.description}
                    </p>
                    <div className="mt-8">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                                <FaCheck className="text-white"/>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Frontend Development</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                                <FaCheck className="text-white"/>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Backend Development</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                                <FaCheck className="text-white"/>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">FullStack Development</p>
                        </div>
                    </div>
                    
            </div>
            <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
                        <div>
                            <Image 
                            src="/images/coding.png"
                            alt="image"
                            width={80}
                            height={80}
                            className="mx-auto"/>
                            <p className="mt-3 font-bold text-xl text-white text-center">
                                {aboutInfo.TechExpertise}
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 text-center">
                            Tech Expertise
                            </p>
                        </div>

                        <div>
                            <Image 
                            src="/images/performance.png"
                            alt="image"
                            width={80}
                            height={80}
                            className="mx-auto"/>
                            <p className="mt-3 font-bold text-xl text-white text-center">
                                {aboutInfo.experience}
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 text-center">
                                  Months Experience
                            </p>
                        </div>

                        <div>
                            <Image 
                            src="/images/management.png"
                            alt="image"
                            width={80}
                            height={80}
                            className="mx-auto"/>
                            <p className="mt-3 font-bold text-xl text-white text-center">
                                {aboutInfo.project}
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 text-center">
                            Completed Project
                            </p>
                        </div>

                        <div>
                            <Image 
                            src="/images/startup.png"
                            alt="image"
                            width={80}
                            height={80}
                            className="mx-auto"/>
                            <p className="mt-3 font-bold text-xl text-white text-center">
                                {aboutInfo.website}
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 text-center">
                            Website Launched
                            </p>
                        </div>
                    </div>
        </div>
        
    </div>
  )
}

export default About