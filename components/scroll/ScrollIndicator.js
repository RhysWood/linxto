'use client'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollIndicator = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ y: scrollY });
  }, [scrollY, controls]);

  return (
    <motion.div
      className="scroll-indicator"
      style={{
        width: '4px',
        height: '100px',
        background: 'red',
        position: 'fixed',
        top: 0,
        left: 0,
        y: 0,
      }}
      animate={controls}
    />
  );
};

export default ScrollIndicator;
