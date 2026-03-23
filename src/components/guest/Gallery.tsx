import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/gallery-sample-1-f330798a-1773885882406.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/gallery-sample-2-2357288d-1773885882408.webp',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1522673607200-164883212c2f?auto=format&fit=crop&q=80&w=1000'
];

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Gallery</h2>
          <p className="text-slate-500 font-light italic">Capturing our moments together</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group rounded-sm"
            >
              <img 
                src={src} 
                alt={`Wedding moment ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;