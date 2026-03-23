import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Plus, 
  Trash2, 
  ExternalLink, 
  GripVertical,
  Navigation,
  Info,
  Map as MapIcon,
  Save
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';
import { motion, Reorder } from 'framer-motion';

interface Event {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  mapLink: string;
  type: 'Ceremony' | 'Reception' | 'Dinner' | 'Other';
}

export const ClientEventTimeline = () => {
  const [events, setEvents] = useState<Event[]>([
    { 
      id: '1', 
      time: '02:00 PM', 
      title: 'Wedding Ceremony', 
      description: 'Join us for our traditional wedding ceremony as we exchange our vows.', 
      location: 'Grand Hall, Addis Ababa', 
      mapLink: 'https://maps.google.com',
      type: 'Ceremony'
    },
    { 
      id: '2', 
      time: '04:30 PM', 
      title: 'Cocktail Hour', 
      description: 'Enjoy drinks and appetizers while we take our wedding photos.', 
      location: 'Garden Terrace', 
      mapLink: 'https://maps.google.com',
      type: 'Other'
    },
    { 
      id: '3', 
      time: '06:30 PM', 
      title: 'Wedding Dinner', 
      description: 'A grand feast followed by speeches and celebrations.', 
      location: 'Main Ballroom', 
      mapLink: 'https://maps.google.com',
      type: 'Dinner'
    },
  ]);

  const [isEditing, setIsEditing] = useState<string | null>(null);

  const addEvent = () => {
    const newEvent: Event = {
      id: Math.random().toString(36).substr(2, 9),
      time: '00:00 AM',
      title: 'New Event',
      description: 'Describe the event details here...',
      location: 'Venue Location',
      mapLink: '#',
      type: 'Other'
    };
    setEvents([...events, newEvent]);
    setIsEditing(newEvent.id);
    toast.success('New event added to timeline');
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(e => e.id !== id));
    toast.info('Event removed');
  };

  const updateEvent = (id: string, field: keyof Event, value: string) => {
    setEvents(events.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  const getEventIcon = (type: string) => {
    switch(type) {
      case 'Ceremony': return '💍';
      case 'Dinner': return '🍽️';
      case 'Reception': return '🎊';
      default: return '📍';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
            <Calendar className="text-blue-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Event Timeline</h1>
            <p className="text-slate-500">Schedule your wedding day events for your guests to see.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <ExternalLink size={18} /> Preview
          </Button>
          <Button onClick={addEvent} className="bg-blue-600 hover:bg-blue-700 border-none gap-2 shadow-lg shadow-blue-500/20">
            <Plus size={18} /> Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Reorderable List */}
        <div className="lg:col-span-7">
          <Reorder.Group axis="y" values={events} onReorder={setEvents} className="space-y-4">
            {events.map((event) => (
              <Reorder.Item 
                key={event.id} 
                value={event}
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                  isEditing === event.id ? "border-blue-500 shadow-xl ring-4 ring-blue-500/5" : "border-slate-100 shadow-sm hover:shadow-md"
                )}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Handle & Time */}
                  <div className={cn(
                    "sm:w-32 p-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2 border-b sm:border-b-0 sm:border-r border-slate-50",
                    isEditing === event.id ? "bg-blue-50" : "bg-slate-50/50"
                  )}>
                    <div className="flex items-center gap-2 sm:flex-col">
                      <GripVertical className="text-slate-300 cursor-grab active:cursor-grabbing" size={20} />
                      <div className="text-center">
                        <span className="text-lg font-black text-slate-900 block">{event.time.split(' ')[0]}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{event.time.split(' ')[1]}</span>
                      </div>
                    </div>
                    <Badge className="sm:mt-2 bg-white text-slate-600 border-slate-200">{event.type}</Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{getEventIcon(event.type)}</span>
                          <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                        </div>
                        <p className="text-sm text-slate-500 line-clamp-2">{event.description}</p>
                      </div>
                      <div className="flex gap-1">
                        <button 
                          onClick={() => setIsEditing(isEditing === event.id ? null : event.id)}
                          className={cn(
                            "p-2 rounded-lg transition-all",
                            isEditing === event.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                          )}
                        >
                          {isEditing === event.id ? <Save size={16} /> : <Info size={16} />}
                        </button>
                        <button 
                          onClick={() => removeEvent(event.id)}
                          className="p-2 bg-slate-100 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                        <MapPin size={14} className="text-blue-500" />
                        {event.location}
                      </div>
                      <a 
                        href={event.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                      >
                        <Navigation size={14} />
                        Map View
                      </a>
                    </div>
                  </div>
                </div>

                {/* Inline Editor */}
                {isEditing === event.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="p-6 bg-slate-50 border-t border-slate-100 space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Title</label>
                        <Input value={event.title} onChange={(e) => updateEvent(event.id, 'title', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Time</label>
                        <Input value={event.time} onChange={(e) => updateEvent(event.id, 'time', e.target.value)} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                      <textarea 
                        className="w-full rounded-lg border border-slate-200 bg-white p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        value={event.description}
                        onChange={(e) => updateEvent(event.id, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Location Name</label>
                        <Input value={event.location} onChange={(e) => updateEvent(event.id, 'location', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Google Maps Link</label>
                        <Input value={event.mapLink} onChange={(e) => updateEvent(event.id, 'mapLink', e.target.value)} />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                       <Button size="sm" variant="ghost" onClick={() => setIsEditing(null)}>Cancel</Button>
                       <Button size="sm" onClick={() => setIsEditing(null)} className="bg-blue-600 hover:bg-blue-700">Save Event</Button>
                    </div>
                  </motion.div>
                )}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>

        {/* Sidebar Help */}
        <div className="lg:col-span-5 space-y-6">
           <Card className="p-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white border-none shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                 <MapIcon size={24} className="text-blue-400" />
               </div>
               <h3 className="text-2xl font-bold mb-2">Wedding Map</h3>
               <p className="text-slate-400 text-sm mb-6">Enter Google Maps links for each venue so your guests can easily navigate with their GPS.</p>
               <Button className="bg-white text-slate-900 hover:bg-slate-100 w-full font-bold uppercase tracking-wider text-xs">
                 How to get a map link?
               </Button>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
           </Card>

           <Card className="p-6">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock size={16} className="text-blue-500" /> Quick Suggestions
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Traditional Coffee Ceremony', icon: '☕' },
                  { label: 'Photo Session', icon: '📸' },
                  { label: 'Grand Entrance', icon: '👑' },
                  { label: 'Cake Cutting', icon: '🎂' }
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                    </div>
                    <Plus size={14} className="text-slate-400" />
                  </button>
                ))}
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};