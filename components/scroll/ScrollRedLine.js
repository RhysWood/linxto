import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollRedLine = () => {
  const [scrollY, setScrollY] = useState(0);
  const [initialized, setInitialized] = useState(false); // Track if component is initialized
  const controls = useAnimation();

  useEffect(() => {
    // Check if window is defined (to avoid server-side rendering errors)
    if (typeof window !== 'undefined') {
      setScrollY(window.innerHeight / 2); // Initialize with half the screen height
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [initialized]);

  useEffect(() => {
    controls.start({ height: `${scrollY}px` });
  }, [scrollY, controls]);

  return (
    <motion.div
      className="scroll-indicator"
      style={{
        width: '4px',
        background: 'red',
        position: 'fixed',
        top: 0,
        left: '50%', // Position the line at the center of the screen
        transform: 'translateX(-50%)', // Adjust to center the line horizontally
      }}
      animate={controls}
    />
  );
};

export default ScrollRedLine;
