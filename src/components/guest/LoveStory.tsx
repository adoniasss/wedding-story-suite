import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Star, User, Camera, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const storyEvents = [
  {
    year: '2020',
    title: 'The First Encounter',
    description: 'A chance meeting at a small coffee shop in Brooklyn that changed everything.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/love-story-1-9780a6e3-1773885882529.webp'
  },
  {
    year: '2022',
    title: 'The First Adventure',
    description: 'Trekking through the Swiss Alps, discovering our shared love for the wild.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    year: '2024',
    title: 'The Proposal',
    description: 'A magical night in Amalfi where "Yes" became the most beautiful word.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000'
  }
];

const bridalParty = {
  bridesmaids: [
    { name: 'Emma Watson', role: 'Maid of Honor', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/bridesmaids-f7cc1aba-1774269695053.webp' },
    { name: 'Chloe Chen', role: 'Bridesmaid', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/bridesmaids-f7cc1aba-1774269695053.webp' },
    { name: 'Lily Roberts', role: 'Bridesmaid', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/bridesmaids-f7cc1aba-1774269695053.webp' }
  ],
  groomsmen: [
    { name: 'Thomas Sterling', role: 'Best Man', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/groomsmen-675d3e31-1774269695199.webp' },
    { name: 'David Miller', role: 'Groomsman', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/groomsmen-675d3e31-1774269695199.webp' },
    { name: 'Marcus Jones', role: 'Groomsman', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/groomsmen-675d3e31-1774269695199.webp' }
  ]
};

const LoveStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-rose-400 text-[10px] uppercase tracking-[0.4em] font-bold block">Chapters of Us</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800">Our Journey Together</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto italic">
            From the moment we met to the moment we say "I do", every second has been a blessing. Discover the story that brought us here.
          </p>
          <Button 
            onClick={() => setIsOpen(true)}
            className="bg-rose-500 hover:bg-rose-600 text-white rounded-none px-12 py-8 text-lg uppercase tracking-widest font-serif transition-all transform hover:scale-105"
          >
            Read Our Love Story
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto"
          >
            <div className="min-h-screen relative p-6 md:p-20">
              <button 
                onClick={() => setIsOpen(false)}
                className="fixed top-8 right-8 z-[210] p-4 bg-slate-900 text-white rounded-full hover:bg-rose-500 transition-colors shadow-2xl"
              >
                <X size={24} />
              </button>

              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                  <h2 className="text-5xl md:text-7xl font-serif text-slate-800">The Story</h2>
                  <div className="w-16 h-px bg-rose-200 mx-auto" />
                </div>

                <div className="space-y-32">
                  {storyEvents.map((event, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                      <div className="w-full md:w-1/2">
                        <img src={event.image} alt={event.title} className="w-full h-[600px] object-cover rounded-sm shadow-2xl" />
                      </div>
                      <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-rose-400 font-serif text-3xl italic">{event.year}</span>
                        <h3 className="text-3xl font-serif text-slate-800">{event.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed font-light">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-40 text-center">
                   <div className="w-24 h-px bg-slate-200 mx-auto mb-16" />
                   <h2 className="text-5xl font-serif text-slate-800 mb-20">The Wedding Party</h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                     <div className="space-y-12">
                       <h3 className="text-2xl font-serif text-rose-400 uppercase tracking-widest border-b border-rose-100 pb-4 inline-block">The Bridesmaids</h3>
                       <div className="grid grid-cols-1 gap-8">
                         {bridalParty.bridesmaids.map((person, i) => (
                           <div key={i} className="flex items-center gap-6 group">
                             <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
                               <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                             </div>
                             <div className="text-left">
                               <p className="font-serif text-xl text-slate-800">{person.name}</p>
                               <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{person.role}</p>
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>

                     <div className="space-y-12">
                       <h3 className="text-2xl font-serif text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-4 inline-block">The Groomsmen</h3>
                       <div className="grid grid-cols-1 gap-8">
                         {bridalParty.groomsmen.map((person, i) => (
                           <div key={i} className="flex items-center gap-6 group">
                             <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
                               <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                             </div>
                             <div className="text-left">
                               <p className="font-serif text-xl text-slate-800">{person.name}</p>
                               <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{person.role}</p>
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                </div>

                <div className="pt-20 pb-40 text-center">
                   <Button 
                    onClick={() => setIsOpen(false)}
                    variant="outline"
                    className="border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white rounded-none px-12 h-14 uppercase tracking-widest text-xs font-bold"
                   >
                     Close Gallery
                   </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LoveStory;