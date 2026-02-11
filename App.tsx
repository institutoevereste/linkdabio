
import React, { useEffect } from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { OverlapCard } from './components/OverlapCard';
import { Seals } from './components/Seals';
import { Footer } from './components/Footer';
import { CARD_DATA } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#010413] selection:bg-blue-500/30 selection:text-white">
      <Background />
      
      <main className="relative z-10 w-full overflow-x-hidden">
        <Header />
        
        <section id="links" className="container mx-auto px-4 md:px-0 flex flex-col gap-0 pb-16">
          {CARD_DATA.map((item, index) => (
            <OverlapCard 
              key={item.title} 
              item={item} 
              index={index} 
            />
          ))}
        </section>

        <Seals />
        
        <Footer />
      </main>

      {/* Simplified Navigation Indicator */}
      <div className="fixed bottom-12 left-10 z-50 hidden lg:flex flex-col gap-3 pointer-events-none opacity-40 hover:opacity-100 transition-opacity duration-500">
         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
         <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
         <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

export default App;
