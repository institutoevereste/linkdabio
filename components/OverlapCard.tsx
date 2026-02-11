
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { NavItem } from '../types';

interface OverlapCardProps {
  item: NavItem;
  index: number;
}

export const OverlapCard: React.FC<OverlapCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index % 3 * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group w-full max-w-3xl mx-auto py-6 md:py-8 px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        
        {/* Overlapping Image Container */}
        <motion.div 
          className="relative z-20 w-32 h-44 md:w-36 md:h-52 -mb-16 md:mb-0 md:-mr-12 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl"
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <img 
            src={item.image} 
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30 mix-blend-overlay`} />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </motion.div>

        {/* Glass Content Card */}
        <div className="relative z-10 w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[1.25rem] p-6 pt-20 md:p-8 md:pl-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20">
          
          <div className="text-center md:text-left flex-1">
            <h3 className="text-lg md:text-xl font-black tracking-tight mb-2 text-white/90 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-[11px] md:text-xs font-light leading-relaxed max-w-xs mx-auto md:mx-0 opacity-80 group-hover:opacity-100 transition-opacity">
              {item.description}
            </p>
          </div>

          <motion.div className="shrink-0">
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 bg-gradient-to-r ${item.color} text-white text-[11px] md:text-xs font-black rounded-full transition-all border border-white/20 flex items-center gap-2 group/btn whitespace-nowrap shadow-lg decoration-none`}
            >
              {item.cta.toUpperCase()}
              <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center transition-transform group-hover/btn:rotate-12">
                <ExternalLink className="w-3 h-3 text-white" />
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};
