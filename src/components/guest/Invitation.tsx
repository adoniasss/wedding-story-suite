import React from 'react';
import { motion } from 'framer-motion';

const Invitation = () => {
  return (
    <section className="py-24 px-6 bg-[#FAF9F6] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full bg-white p-12 md:p-20 shadow-sm border border-slate-100 relative overflow-hidden text-center"
      >
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/invitation-bg-e992db7f-1774269694520.webp" alt="decoration" className="w-full h-full object-cover transform rotate-90" />
        </div>

        <div className="space-y-10 relative z-10">
          <span className="text-rose-400 font-serif text-xl italic block">To Our Beloved Family & Friends</span>
          
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 leading-relaxed">
            With joyful hearts, we invite you to celebrate the marriage of
          </h2>

          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-serif text-slate-900">Sarah Elena Vance</p>
            <p className="text-xl md:text-2xl font-light italic text-slate-500">&</p>
            <p className="text-4xl md:text-5xl font-serif text-slate-900">James Arthur Sterling</p>
          </div>

          <div className="pt-8 text-slate-600 font-light leading-loose text-lg">
            <p>Your presence in our lives has been a gift, and we would be honored to have you by our side as we begin our new journey together.</p>
            <p className="mt-4">In the heart of Tuscany, where our love has blossomed, we will say our vows and celebrate the magic of this special day.</p>
          </div>

          <div className="pt-10">
             <div className="w-12 h-px bg-rose-200 mx-auto mb-6" />
             <p className="uppercase tracking-[0.3em] text-xs font-semibold text-rose-400">Always & Forever</p>
          </div>
        </div>

        {/* Decorative corner bottom */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/invitation-bg-e992db7f-1774269694520.webp" alt="decoration" className="w-full h-full object-cover transform -rotate-90" />
        </div>
      </motion.div>
    </section>
  );
};

export default Invitation;