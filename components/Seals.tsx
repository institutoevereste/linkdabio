
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink, Medal } from 'lucide-react';
import { SEALS_DATA } from '../constants';

export const Seals: React.FC = () => {
  const getIcon = (id: string) => {
    switch(id) {
      case 'ISO9001': return <Award className="w-6 h-6" />;
      case 'ISO37301': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'BRONZE_ESG': return <Medal className="w-6 h-6 text-amber-500" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-500/5 blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">
            Padrões de Excelência
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {SEALS_DATA.map((seal) => (
            <motion.div
              key={seal.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 shadow-inner transition-transform group-hover:scale-110 duration-500">
                {getIcon(seal.id)}
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                {seal.name}
              </h4>
              
              <p className="text-slate-500 text-xs font-light mb-6 flex-1">
                {seal.description}
              </p>

              <a 
                href={seal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn decoration-none"
              >
                Clique para Visualizar
                <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
