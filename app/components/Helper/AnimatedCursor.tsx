'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCursor = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
  
    const springX = useSpring(cursorX, { damping: 20, stiffness: 150 });
    const springY = useSpring(cursorY, { damping: 20, stiffness: 150 });
  
    useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX - 20); // Adjust for circle center
        cursorY.set(e.clientY - 20);
      };
  
      window.addEventListener('mousemove', moveCursor);
      return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);
  
    return (
      <>
        {/* Clear Circular Border */}
        <motion.div
          className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-white pointer-events-none z-[9999]"
          style={{
            translateX: springX,
            translateY: springY,
          }}
        />
  
        {/* Center Dot */}
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
          style={{
            translateX: useSpring(cursorX, { damping: 30, stiffness: 400 }),
            translateY: useSpring(cursorY, { damping: 30, stiffness: 400 }),
          }}
        />
      </>
    );
  };

export default AnimatedCursor;
