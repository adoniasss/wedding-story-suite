import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Camera, Video, QrCode } from 'lucide-react';

const GuestNavigation = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Icons on the Left (Timeline, Location, Camera) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-6 pointer-events-auto">
        <NavIcon 
          icon={<Calendar size={20} />} 
          label="Timeline" 
          onClick={() => scrollTo('timeline')}
        />
        <NavIcon 
          icon={<MapPin size={20} />} 
          label="Location" 
          onClick={() => scrollTo('location')}
        />
        <NavIcon 
          icon={<Camera size={20} />} 
          label="Cloud" 
          onClick={() => scrollTo('cloud')}
        />
      </div>

      {/* Floating Navigation Bar Top Left (Live Streaming, QR Code) */}
      <div className="fixed top-6 left-20 z-[100] flex gap-4 pointer-events-auto items-center bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full shadow-lg">
        <button 
          className="flex items-center gap-2 text-white hover:text-rose-300 transition-colors group"
          onClick={() => window.open('#', '_blank')}
        >
          <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center">
            <Video size={14} className="animate-pulse" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:inline">Live Stream</span>
        </button>
        <div className="w-px h-6 bg-white/30" />
        <button 
          className="flex items-center gap-2 text-white hover:text-rose-300 transition-colors group"
          onClick={() => scrollTo('guest-data')}
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
            <QrCode size={14} />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:inline">Your Code</span>
        </button>
      </div>
    </>
  );
};

const NavIcon = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.1, x: 5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="group relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-rose-500 transition-all shadow-lg overflow-hidden"
  >
    {icon}
    <div className="absolute left-full ml-4 px-3 py-1 bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em] rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
      {label}
    </div>
  </motion.button>
);

export default GuestNavigation;