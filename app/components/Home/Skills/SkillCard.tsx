'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props ={
    skill:{
        id:number;
        title:string;
        image:string;
        percent:string;
    };
};

const SkillCard = ({skill}:Props) => {
    const{image,percent,title} = skill;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <motion.div
    ref={ref}
    initial={{ x: -50, opacity: 0, rotate: -5, scale: 0.95 }}
    animate={isInView ? { x: 0, opacity: 1, rotate: 0, scale: 1 } : {}}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
    <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"/>
        <h1 className="text-[18px] mt-4 text-white font[600]">{title}</h1>
        <div className="text-[18px] bg-black mt-4 rounded-lg p-2 text-white opacity-40">
            {percent}
            </div>
        </div>
        </motion.div>
  )
}

export default SkillCard