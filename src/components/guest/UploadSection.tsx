import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Image as ImageIcon, X, Upload, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setSelectedFile(null);
      toast.success('Your memory has been shared! It will appear in our wedding cloud shortly.');
    }, 2000);
  };

  return (
    <section id="cloud" className="py-24 px-6 bg-slate-50">
      <div className="max-w-xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 shadow-xl border border-slate-100 relative overflow-hidden"
        >
          {/* Subtle cloud background icon */}
          <Cloud className="absolute -top-10 -right-10 w-40 h-40 text-rose-50/50 -z-0" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <span className="text-rose-400 text-[10px] uppercase tracking-[0.4em] font-bold block">Digital Guestbook</span>
              <h2 className="text-4xl font-serif text-slate-800">Share Your Memories</h2>
              <p className="text-slate-500 font-light italic text-lg leading-relaxed">
                Help us capture every smile and toast. Upload your photos to our shared wedding cloud.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!selectedFile ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pt-4"
                >
                  <div className="flex justify-center gap-12">
                    <label className="cursor-pointer group flex flex-col items-center">
                      <input type="file" accept="image/*" capture="environment" className="hidden" onChange={handleFileChange} />
                      <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-md">
                        <Camera size={32} />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] mt-4 block font-bold text-slate-500 group-hover:text-rose-500">Camera</span>
                    </label>
                    <label className="cursor-pointer group flex flex-col items-center">
                      <input type="file" accept="image/*,video/*" className="hidden" onChange={handleFileChange} />
                      <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-all shadow-md">
                        <ImageIcon size={32} />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] mt-4 block font-bold text-slate-500 group-hover:text-slate-800">Library</span>
                    </label>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="preview"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 pt-4"
                >
                  <div className="relative aspect-square max-w-[280px] mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                    <img src={selectedFile} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setSelectedFile(null)}
                      className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <Button 
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="w-full bg-slate-900 hover:bg-rose-500 text-white py-8 rounded-none text-lg uppercase tracking-widest font-serif transition-all"
                  >
                    {isUploading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Uploading to Cloud...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Upload size={20} />
                        Sync with Memories
                      </div>
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UploadSection;