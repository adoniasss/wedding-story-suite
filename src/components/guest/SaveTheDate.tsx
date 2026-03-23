import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SaveTheDate = () => {
  const handleAddToCalendar = () => {
    // Generate simple Google Calendar link as an example
    const text = "Sarah & James Wedding";
    const dates = "20250924T140000Z/20250924T230000Z";
    const details = "We can't wait to see you there!";
    const location = "Tuscany, Italy";
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(url, '_blank');
    toast.success('Opening calendar...');
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative group">
            <div className="absolute -inset-4 border border-rose-100 rounded-lg -z-10 group-hover:inset-0 transition-all duration-500" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/hero-wedding-9efc38c4-1774269695088.webp" 
              alt="Save the Date" 
              className="w-full h-[500px] object-cover rounded-sm shadow-xl"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 shadow-2xl rounded-sm">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/calendar-icon-dc3de911-1774269693665.webp" 
                alt="Calendar Icon" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-rose-400 uppercase tracking-[0.4em] text-xs font-bold">Mark Your Calendar</span>
            <h2 className="text-5xl md:text-7xl font-serif text-slate-800">September 24th</h2>
            <p className="text-2xl font-light text-slate-500 italic">Save the Date for our Wedding</p>
          </div>

          <p className="text-slate-600 leading-relaxed font-light text-lg">
            We're so excited to share our special day with you. Please mark this date in your calendar and prepare for an unforgettable celebration in Tuscany.
          </p>

          <Button 
            onClick={handleAddToCalendar}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-none text-lg tracking-widest uppercase transition-all flex items-center gap-3"
          >
            <Calendar size={20} />
            Add to Calendar
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SaveTheDate;