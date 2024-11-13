import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white overflow-hidden">
      <motion.div
        initial={{ y: -200, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-32 h-32 bg-black rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 20 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-32 h-32 bg-black rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute text-white text-3xl font-semibold"
      >
        InvestIQ
      </motion.div>
    </div>
  );
};

export default LandingPage;
