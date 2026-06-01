import { motion } from 'motion/react';

const ScrollReveal = ({ children, delay = 0, direction = 'up' }) => {
  const variants = {
    up:    { initial: { opacity: 0, y: 40 },  animate: { opacity: 1, y: 0 } },
    down:  { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left:  { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 },  animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
  };

  const { initial, animate } = variants[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;