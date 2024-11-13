import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "tailwindcss/tailwind.css";

const LandingPage = () => {
  const [animationState, setAnimationState] = useState("initial");
  const exampleStocks = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "NVDA", "GRAB", "LCID", "SOFI", "MARA", "NIO", "INTC", "WBD"];

  const textVariants = {
    initial: { opacity: 0, y: 20, scale: 1 },
    visible: { opacity: 1, y: 0, scale: 1 },
    final: { opacity: 1, y: -250, scale: 2 }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState("visible");
    }, 1500);

    const finalTimer = setTimeout(() => {
      setAnimationState("final");
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white overflow-hidden">
      <motion.div
        initial={{ y: -200, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-32 h-32 bg-black rounded-full z-10"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 20 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-32 h-32 bg-black rounded-full z-0"
      ></motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={animationState}
        transition={{ duration: 0.6 }}
        className="absolute text-white text-3xl font-semibold z-20"
      >
        InvestIQ
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: animationState === "final" ? 1 : 0, y: animationState === "final" ? 0 : 50 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative mt-20 z-20"
      >
        <input
          type="text"
          placeholder="Search for stocks..."
          className="px-4 py-2 w-80 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </motion.div>

      {/* Rotating Stocks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationState === "final" ? 1 : 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-4 overflow-hidden w-80 z-20"
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            delay: 4.5,
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className="flex whitespace-nowrap"
        >
          {[...exampleStocks, ...exampleStocks].map((stock, index) => (
            <span key={index} className="mx-4 text-gray-600">{stock}</span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;