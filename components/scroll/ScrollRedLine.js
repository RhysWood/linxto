import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ScrollRedLine = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY2, setScrollY2] = useState(0);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setScrollY(window.scrollY);
        setScrollX(0);
        setScrollY2(0);
      } else if (window.scrollY <= 181) {
        setScrollY(100);
        setScrollX(window.scrollY - 100);
        setScrollY2(0);
      } else {
        setScrollY2(window.scrollY - 181);
      }

      console.log(`scrollY: ${window.scrollY}, scrollX: ${window.scrollX}`);
      if (lineRef.current) {
        console.log(`Line length: ${lineRef.current.offsetHeight}px`);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: '100px', left: '20%', zIndex: 1 }}>
      <motion.div
        ref={lineRef}
        className="scroll-indicator"
        style={{
          width: '4px',
          opacity: 0.75,
          height: `${scrollY}px`,
          background: 'red',
        }}
      />
      <motion.div
        className="scroll-indicator"
        style={{
          height: '40px',
          opacity: 0.75,
          width: `${scrollX}px`,
          background: 'red',
        }}
      />
      <motion.div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          top: `${scrollY}px`,
          left: `${scrollX}px`,
          width: '4px',
          opacity: 0.75,
          height: `${scrollY2}px`,
          background: 'red',
        }}
      />
    </div>
  );
};

export default ScrollRedLine;