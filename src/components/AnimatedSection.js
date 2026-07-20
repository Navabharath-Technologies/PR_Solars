import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, duration = 0.6, className = '', style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: duration, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
