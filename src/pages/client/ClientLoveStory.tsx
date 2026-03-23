import React, { useState } from 'react';
import { 
  Heart, 
  Plus, 
  Image as ImageIcon, 
  Trash2, 
  Clock, 
  ChevronRight,
  BookOpen,
  Camera,
  Save,
  PenTool
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export const ClientLoveStory = () => {
  const [entries, setEntries] = useState<StoryEntry[]>([
    { 
      id: '1', 
      title: 'First Meeting', 
      date: 'June 12, 2021', 
      description: 'We met at a small coffee shop in the city. A spilled latte turned into a three-hour conversation.',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/love-story-1-d3b85e54-1773886386781.webp'
    },
    { 
      id: '2', 
      title: 'The First Trip', 
      date: 'December 24, 2022', 
      description: 'Our first trip together to the mountains. It was freezing but our hearts were warm.',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-1-38c0727f-1773886386770.webp'
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newEntry, setNewEntry] = useState<Partial<StoryEntry>>({ title: '', date: '', description: '' });

  const handleAddEntry = () => {
    if (!newEntry.title || !newEntry.date) {
      toast.error('Please fill in at least the title and date');
      return;
    }
    const entry: StoryEntry = {
      id: Math.random().toString(36).substr(2, 9),
      title: newEntry.title || '',
      date: newEntry.date || '',
      description: newEntry.description || '',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-2-df23285e-1773886386047.webp'
    };
    setEntries([entry, ...entries]);
    setNewEntry({ title: '', date: '', description: '' });
    setIsAdding(false);
    toast.success('Added to your love story!');
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
    toast.info('Entry removed');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
            <BookOpen className="text-rose-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Love Story Editor</h1>
            <p className="text-slate-500">Share your journey with your guests through a romantic timeline.</p>
          </div>
        </div>
        <Button onClick={() => setIsAdding(true)} className="bg-rose-500 hover:bg-rose-600 border-none gap-2 shadow-lg shadow-rose-500/20">
          <Plus size={18} /> Add Moment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Editor Controls */}
        <div className="lg:col-span-1 space-y-6">
          <AnimatePresence>
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="p-6 border-2 border-rose-100 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      <PenTool size={16} className="text-rose-500" /> New Moment
                    </h3>
                    <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Title of the Moment</label>
                      <Input 
                        placeholder="e.g. The Proposal" 
                        value={newEntry.title}
                        onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">When did it happen?</label>
                      <Input 
                        type="date" 
                        value={newEntry.date}
                        onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tell the story</label>
                      <textarea 
                        className="w-full min-h-[120px] rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
                        placeholder="Describe this special moment..."
                        value={newEntry.description}
                        onChange={(e) => setNewEntry({...newEntry, description: e.target.value})}
                      />
                    </div>
                    <div className="p-4 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
                      <Camera className="text-slate-300" size={24} />
                      <span className="text-xs font-bold text-slate-400">Upload a Photo</span>
                    </div>
                    <Button onClick={handleAddEntry} className="w-full bg-rose-500 hover:bg-rose-600 mt-4">Save Moment</Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          <Card className="p-6 bg-slate-900 text-white border-none">
            <h3 className="font-bold text-lg mb-2">Timeline Tips</h3>
            <p className="text-slate-400 text-sm mb-4">Create a narrative that guests will love reading. Keep entries chronological and include personal details!</p>
            <ul className="space-y-3">
              {['Add 3-5 key moments', 'Use high-quality photos', 'Write from the heart'].map((tip, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Timeline View */}
        <div className="lg:col-span-2">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 via-rose-100 to-transparent hidden md:block" />
            
            <div className="space-y-12">
              {entries.map((entry, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={entry.id} 
                  className="relative md:pl-20"
                >
                  {/* Marker */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-white border-4 border-rose-500 rounded-full z-10 hidden md:block" />
                  
                  <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden shrink-0">
                        <img 
                          src={entry.imageUrl} 
                          alt={entry.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Badge variant="info" className="bg-rose-100 text-rose-600 border-none mb-2">{entry.date}</Badge>
                            <h3 className="text-xl font-bold text-slate-900">{entry.title}</h3>
                          </div>
                          <button 
                            onClick={() => deleteEntry(entry.id)}
                            className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed flex-1">{entry.description}</p>
                        <div className="mt-6 flex items-center justify-between">
                           <div className="flex -space-x-2">
                              {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                  <img src={`https://i.pravatar.cc/100?u=${entry.id + i}`} alt="guest" />
                                </div>
                              ))}
                              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">+12</div>
                           </div>
                           <Button variant="ghost" size="sm" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 font-bold gap-1">
                              Edit Story <ChevronRight size={14} />
                           </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {entries.length === 0 && (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-rose-300" size={40} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Your story starts here</h3>
                <p className="text-slate-500 max-w-xs mx-auto mt-2">Click the "Add Moment" button to begin sharing your beautiful journey together.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};