"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("developers");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothScale, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(smoothScale, [0, 0.3], [0, 1]);
  const y = useTransform(smoothScale, [0, 1], [100, 0]);

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="min-h-screen w-full py-20">
      {/* New Professional Header Section */}
      <div className="container flex justify-center items-center px-4 mb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            
          >
            <span className="inline-flex items-center rounded-md bg-green-400/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-400/20 mb-6">
              Enterprise Dashboard
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Unified Control Center for
            <span className="bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent"> Everyone</span>
          </h2>
          <p className="text-gray-400 pb-2">
          A powerful dashboard designed for both developers and maintainers, providing real-time insights and comprehensive system controls in one seamless interface.
          </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-green-500" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-green-500" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Performance Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-green-500" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>System Monitoring</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Existing Feature Component */}
      <motion.div 
        ref={containerRef}
        className="container mx-auto px-4 py-6"
        style={{
          scale,
          opacity,
          y
        }}
      >
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 bg-[#020617] p-4 rounded-xl border border-[#2A2A2A]"
        >
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab("developers")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                activeTab === "developers"
                  ? "bg-green-600 text-white shadow-green-500/20 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              Developers
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab("maintainers")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                activeTab === "maintainers"
                  ? "bg-green-600 text-white shadow-green-500/20 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              Maintainers
            </motion.button>
          </div>

          <motion.div 
            className="flex items-center gap-3 bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#2A2A2A] w-full sm:w-auto"
          >
            <div className="flex items-center gap-2">
              <motion.span 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-emerald-500 rounded-full"
              />
              <span className="text-sm font-medium tracking-tight text-gray-300">
                {activeTab === "developers" ? "Development" : "Maintenance"} Mode
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-[#111111] rounded-2xl border border-[#2A2A2A] overflow-hidden"
        >
          <motion.div 
            className="p-4 sm:p-6 border-b border-[#2A2A2A] bg-[#020617]"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="scroll-m-20 text-lg sm:text-2xl font-semibold tracking-tight text-white mb-1">
                  {activeTab === "developers"
                    ? "Developer Dashboard"
                    : "Maintainer Dashboard"}
                </h2>
                <p className="text-xs sm:text-sm leading-7 text-gray-400">
                  {activeTab === "developers"
                    ? "Real-time development metrics and project insights"
                    : "System monitoring and maintenance controls"}
                </p>
              </motion.div>

              <div className="text-left sm:text-right">
                <div className="text-xs sm:text-sm leading-7 text-muted-foreground">Last Updated</div>
                <div className="text-xs sm:text-sm font-medium tracking-tight text-gray-200">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-[#0A0A0A] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>

              <motion.img
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src="https://res.cloudinary.com/orrin/image/upload/v1730792329/WhatsApp_Image_2024-11-05_at_13.06.39_81b15994_xqq2bp.jpg"
                alt={`${activeTab === "developers" ? "Developer" : "Maintainer"} Dashboard Interface`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div 
            className="px-4 sm:px-6 py-3 sm:py-4 bg-[#020617] border-t border-[#2A2A2A]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                  <span className="text-xs sm:text-sm leading-7 font-medium text-gray-400">
                    {activeTab === "developers"
                      ? "Developer View"
                      : "Maintainer View"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-xs leading-7">Refresh Rate: 60fps</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Feature;