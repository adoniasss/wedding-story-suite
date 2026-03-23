import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2025-09-24T14:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-rose-400 uppercase tracking-[0.3em] text-[10px] font-bold">The Countdown is On</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-rose-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-5xl md:text-7xl font-serif text-white relative">{String(item.value).padStart(2, '0')}</span>
              </div>
              <span className="mt-4 text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;