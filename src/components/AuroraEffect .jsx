import React from 'react';
import { motion } from 'framer-motion';

const AuroraEffect = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 5, ease: 'easeInOut', loop: Infinity }}
      />
    </div>
  );
};

export default AuroraEffect;
