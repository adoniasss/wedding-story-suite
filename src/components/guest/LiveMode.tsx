import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Flame } from 'lucide-react';

const announcements = [
  "Dinner will be served in 15 minutes in the Grand Hall.",
  "Don't forget to visit the photobooth near the terrace!",
  "The first dance is about to begin. Join us on the dance floor!"
];

const LiveMode = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-md border border-rose-100 shadow-xl rounded-full px-6 py-3 flex items-center gap-4"
        >
          <div className="relative">
            <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-75" />
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-500">Live Updates</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentAnnouncement}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs text-slate-700 truncate font-medium"
              >
                {announcements[currentAnnouncement]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          <Bell size={16} className="text-slate-400 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
};

export default LiveMode;