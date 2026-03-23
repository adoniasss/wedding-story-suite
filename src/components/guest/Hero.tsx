import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Photo/GIF Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-110"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/hero-wedding-9efc38c4-1774269695088.webp')`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 px-4 text-white max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-6"
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.5em] mb-4 font-bold text-rose-300 drop-shadow-lg">
            Save the Date
          </span>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-6 leading-none drop-shadow-2xl">
            Sarah <span className="text-3xl md:text-5xl font-light italic font-sans mx-2 opacity-80">&</span> James
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-8">
            <div className="text-center">
              <span className="block text-[10px] uppercase tracking-[0.4em] opacity-60 mb-2">The Date</span>
              <p className="text-xl md:text-2xl font-light tracking-widest">SEPTEMBER 24, 2025</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <span className="block text-[10px] uppercase tracking-[0.4em] opacity-60 mb-2">The Location</span>
              <p className="text-xl md:text-2xl font-light tracking-widest">TUSCANY, ITALY</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] font-medium">Begin the Story</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;