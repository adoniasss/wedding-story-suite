import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Heart } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-8 max-w-md"
      >
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
            <CheckCircle2 size={40} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-4xl font-serif text-white">Thank You!</h2>
          <p className="text-gray-400 font-light italic">
            Your RSVP has been received. We are so excited to celebrate our special day with you!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
            <Calendar className="mx-auto mb-2 text-rose-400" size={20} />
            <span className="text-[10px] uppercase tracking-widest text-gray-500 block">Date</span>
            <span className="text-sm font-medium">Sept 24, 2025</span>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
            <Heart className="mx-auto mb-2 text-rose-400" size={20} />
            <span className="text-[10px] uppercase tracking-widest text-gray-500 block">Registry</span>
            <span className="text-sm font-medium">View Link</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;