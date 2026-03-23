import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, X, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AccessInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[60] bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-rose-500 transition-all shadow-lg"
      >
        <QrCode size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mx-auto">
                  <QrCode size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-slate-800">Invite Guests</h3>
                  <p className="text-sm text-slate-500 font-light">
                    Share this unique link or QR code with your guests for instant access to your wedding website.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 aspect-square flex items-center justify-center">
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    {/* Placeholder for QR code */}
                    <QrCode size={120} className="text-slate-800" />
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white gap-2 h-12">
                  <Share2 size={18} />
                  Copy Invite Link
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessInfo;