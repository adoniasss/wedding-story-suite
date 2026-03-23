import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, ExternalLink, Map } from 'lucide-react';

const events = [
  {
    time: '2:00 PM',
    title: 'The Ceremony',
    location: 'San Giovanni Chapel',
    description: 'An intimate ceremony under the Tuscan sun. Please arrive 15 minutes early for seating.',
    mapUrl: 'https://maps.google.com/?q=San+Giovanni+Chapel+Montepulciano',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/ceremony-bg-9b6dc36f-1773885887753.webp'
  },
  {
    time: '4:30 PM',
    title: 'Cocktail Hour',
    location: 'Villa Garden Terrace',
    description: "Join us for drinks and artisan hors d'oeuvres while we take sunset family photos.",
    mapUrl: 'https://maps.google.com/?q=Villa+Garden+Montepulciano',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000'
  },
  {
    time: '6:30 PM',
    title: 'Wedding Dinner',
    location: 'The Grand Hall',
    description: 'A traditional four-course Italian feast followed by toasts, cake cutting, and dancing.',
    mapUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/reception-bg-a2b7a9b2-1773885888684.webp',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/reception-bg-a2b7a9b2-1773885888684.webp'
  }
];

const EventTimeline = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rose-400 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Our Big Day</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Wedding Schedule</h2>
          <p className="text-slate-500 font-light italic text-lg">Saturday, September 24th, 2025</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 shadow-sm">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 shadow-lg flex items-center gap-2">
                  <Clock size={14} className="text-rose-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">{event.time}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-slate-800">{event.title}</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed min-h-[60px]">
                  {event.description}
                </p>
                
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <div className="flex items-start gap-2 text-slate-500">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-rose-300" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]">{event.location}</span>
                  </div>
                  <a 
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-rose-500 hover:text-rose-600 transition-colors uppercase tracking-[0.2em]"
                  >
                    <Map size={12} />
                    View On Map
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;