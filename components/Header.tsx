
import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <header className="relative pt-12 pb-4 md:pt-24 md:pb-12 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Animated Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-6 p-1 rounded-full backdrop-blur-3xl border border-white/20 bg-white/5 shadow-[0_0_60px_-10px_rgba(59,130,246,0.5)]"
      >
        {/* Primary Pulsing Circular Glow - More Evident */}
        <motion.div
          animate={{ 
            opacity: [0.4, 0.8, 0.4], 
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-blue-500/40 blur-[40px] rounded-full -z-10"
        />
        
        {/* Secondary Inner Glow - Intense Center */}
        <motion.div
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 bg-blue-400/50 blur-[20px] rounded-full -z-10"
        />
        
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 z-10">
          <img 
            src="https://i.postimg.cc/TPGg2frc/AVATAR-EVERESTE.png" 
            alt="Instituto Evereste Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[12vw] md:text-[6rem] font-black tracking-tighter leading-[0.85] mb-4 select-none pointer-events-none text-white drop-shadow-2xl"
      >
        Evereste
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-[10px] md:text-sm font-black tracking-[0.4em] text-blue-400/80 uppercase">
          Instituição de Tecnologia e Inovação
        </p>
        
        <div className="flex gap-2 flex-wrap justify-center">
          {['#DeepTech', '#Innovation', '#ESG', '#Compliance'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] text-[9px] md:text-[10px] font-medium text-slate-400 tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </header>
  );
};
