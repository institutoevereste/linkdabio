
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-8 px-6 bg-gradient-to-t from-black/50 to-transparent">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid md:grid-cols-1 gap-8 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="text-2xl font-black tracking-tighter text-white">Evereste</h2>
            <p className="text-xs text-slate-500 max-w-xs font-light italic leading-relaxed">
              "Explorando o inexplorado através da ciência aplicada e governança corporativa."
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-700 text-[10px] font-light">
          &copy; {new Date().getFullYear()} Instituto Evereste de Inovação e Tecnologia.
        </div>
      </div>
    </footer>
  );
};
