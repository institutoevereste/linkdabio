
import React from 'react';
import { motion } from 'framer-motion';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* Mesh Gradients - Slow and Fluid */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 80, 0],
          y: [0, 100, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900/15 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -120, 0],
          y: [0, -80, 0],
          rotate: [0, -30, 0],
        }}
        transition={{ 
          duration: 45, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-900/10 rounded-full blur-[140px]"
      />

      {/* Stylized Everest Mountain Silhouette Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center pointer-events-none opacity-20">
        <svg 
          viewBox="0 0 1000 600" 
          className="w-full h-auto max-h-[80vh] fill-none stroke-blue-500/20"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Main Mountain Peak */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M 0 600 L 350 250 L 500 50 L 650 250 L 1000 600"
            strokeWidth="1"
          />
          
          {/* Sub Peaks */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            d="M 100 600 L 300 350 L 450 600 M 550 600 L 750 300 L 950 600"
            strokeWidth="0.5"
          />

          {/* The "Staircase" / Ascent Path Animation */}
          <motion.path
            id="ascentPath"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 2
            }}
            d="M 200 600 L 250 550 L 240 540 L 300 480 L 290 470 L 360 400 L 350 390 L 420 320 L 410 310 L 500 220 L 490 210 L 500 50"
            stroke="url(#gradientStairs)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          <defs>
            <linearGradient id="gradientStairs" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Glowing Summit Point */}
          <motion.circle
            cx="500"
            cy="50"
            r="4"
            fill="#ffffff"
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
              filter: ["blur(0px)", "blur(4px)", "blur(0px)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20vh"],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>
    </div>
  );
};
