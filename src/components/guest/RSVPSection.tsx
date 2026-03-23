import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import ThankYou from './ThankYou';

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('Thank you for your response!');
    }, 1500);
  };

  if (submitted) {
    return <ThankYou />;
  }

  return (
    <section id="rsvp" className="py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rose-400 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Confirm Your Presence</span>
          <h2 className="text-5xl font-serif mb-4">R.S.V.P</h2>
          <p className="text-gray-400 font-light italic text-lg">Please kindly respond by August 1st, 2025</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">First Name</Label>
              <Input 
                id="firstName" 
                required 
                className="bg-transparent border-white/10 focus:border-rose-400 text-white rounded-none h-12" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Last Name</Label>
              <Input 
                id="lastName" 
                required 
                className="bg-transparent border-white/10 focus:border-rose-400 text-white rounded-none h-12" 
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Will you be attending?</Label>
            <RadioGroup defaultValue="attending" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-none border border-white/10 hover:border-rose-400/50 transition-colors cursor-pointer">
                <RadioGroupItem value="attending" id="attending" className="border-white/40 text-rose-500" />
                <Label htmlFor="attending" className="font-light cursor-pointer text-sm">Joyfully Accepts</Label>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-none border border-white/10 hover:border-rose-400/50 transition-colors cursor-pointer">
                <RadioGroupItem value="declining" id="declining" className="border-white/40 text-rose-500" />
                <Label htmlFor="declining" className="font-light cursor-pointer text-sm">Regretfully Declines</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Plus One</Label>
            <RadioGroup defaultValue="no" className="flex gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="p1" className="border-white/40 text-rose-500" />
                <Label htmlFor="p1" className="font-light text-sm cursor-pointer">Yes, I'll bring a guest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="p2" className="border-white/40 text-rose-500" />
                <Label htmlFor="p2" className="font-light text-sm cursor-pointer">Just me</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Message for the Bride & Groom</Label>
            <Textarea 
              id="message" 
              placeholder="Leave a sweet note for the couple..."
              className="bg-transparent border-white/10 focus:border-rose-400 text-white rounded-none min-h-[120px]" 
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-serif text-xl h-16 rounded-none transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
          >
            {loading ? 'Sending...' : 'Confirm RSVP'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;