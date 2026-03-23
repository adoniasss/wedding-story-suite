import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    name: "San Giovanni Chapel",
    type: "Ceremony Venue",
    address: "Piazza San Giovanni, 53045 Montepulciano SI, Italy",
    mapUrl: "https://maps.google.com/?q=San+Giovanni+Chapel+Montepulciano",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/ceremony-bg-9b6dc36f-1773885887753.webp"
  },
  {
    name: "Villa Garden Terrace",
    type: "Cocktail & Reception",
    address: "Via di San Pietro, 53045 Montepulciano SI, Italy",
    mapUrl: "https://maps.google.com/?q=Villa+Garden+Montepulciano",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/reception-bg-a2b7a9b2-1773885888684.webp"
  }
];

const LocationSection = () => {
  return (
    <section className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Finding Your Way</h2>
          <p className="text-slate-500 font-light italic uppercase tracking-widest text-xs">Getting to our celebration</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder/Stylized Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] bg-slate-200 rounded-sm overflow-hidden relative shadow-inner"
          >
            <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center">
               <div className="text-center p-8">
                 <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-4 animate-bounce" />
                 <p className="text-slate-500 font-serif italic text-lg">Interactive Map</p>
                 <p className="text-slate-400 text-sm mt-2">See you in Tuscany!</p>
               </div>
            </div>
            {/* Overlay simulation of a map */}
            <div className="absolute inset-0 bg-rose-900/5 mix-blend-multiply pointer-events-none" />
          </motion.div>

          <div className="space-y-8">
            {locations.map((loc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-rose-400 text-[10px] uppercase tracking-[0.2em] font-bold">{loc.type}</span>
                  <h3 className="text-xl font-serif text-slate-800 mt-1">{loc.name}</h3>
                  <p className="text-slate-500 text-sm font-light mt-2 mb-4">{loc.address}</p>
                  <Button 
                    variant="outline"
                    className="rounded-none border-slate-200 hover:border-rose-300 hover:bg-rose-50 transition-all gap-2 text-xs uppercase tracking-widest h-10"
                    onClick={() => window.open(loc.mapUrl, '_blank')}
                  >
                    <Navigation size={14} />
                    Get Directions
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;