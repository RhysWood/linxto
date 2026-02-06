'use client';
import { motion } from 'framer-motion';

/**
 * Fade-in + slide-up on scroll for full sections.
 */
export const FadeInSection = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * Container for staggered children. Wrap a grid/flex of StaggerItems.
 */
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * Individual item inside a StaggerContainer.
 */
export const StaggerItem = ({ children, className = '' }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * Animated red arrow divider - scales in from center.
 */
export const AnimatedArrow = ({ direction = 'down' }) => {
  const borderClass = direction === 'down'
    ? 'border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-linx-red'
    : 'border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px] border-b-linx-red';

  return (
    <motion.div
      className="flex justify-center my-8"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className={`w-0 h-0 ${borderClass}`}></div>
    </motion.div>
  );
};
