import React from 'react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';

const GuestData = () => {
  // Static for prototype
  const guestName = "John & Jane Doe";

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-rose-400 text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Welcome Back</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800">{guestName}</h2>
          <p className="text-slate-500 italic font-light mt-4">We're so happy to have you with us!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block p-10 bg-white border border-slate-200 shadow-xl rounded-2xl"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
            Entry Ticket
          </div>
          
          <div className="w-48 h-48 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
            {/* Mock QR Code */}
            <QrCode size={140} className="text-slate-800" strokeWidth={1} />
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Guest ID: #SJW-2025-0924</p>
            <p className="text-[9px] text-slate-300 mt-2">Present this code at the entrance for check-in</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestData;