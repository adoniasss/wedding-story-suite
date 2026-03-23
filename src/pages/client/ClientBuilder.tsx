import React, { useState } from 'react';
import { 
  Save, 
  Eye, 
  Image as ImageIcon, 
  Type, 
  Calendar as CalendarIcon, 
  Move, 
  GripVertical,
  Trash2,
  Plus,
  Layout,
  Layers,
  Palette
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';
import { motion, Reorder } from 'framer-motion';

const HERO_IMAGE = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/hero-wedding-image-660dcb81-1773886389386.webp";

interface Section {
  id: string;
  type: string;
  title: string;
  enabled: boolean;
}

export const ClientBuilder = () => {
  const [coupleNames, setCoupleNames] = useState('Fikerab & Fenan');
  const [weddingDate, setWeddingDate] = useState('2025-08-24');
  const [invitationMessage, setInvitationMessage] = useState('We are excited to invite you to celebrate our love and new beginning.');
  const [sections, setSections] = useState<Section[]>([
    { id: '1', type: 'Hero', title: 'Welcome Hero', enabled: true },
    { id: '2', type: 'Story', title: 'Our Love Story', enabled: true },
    { id: '3', type: 'Timeline', title: 'Event Schedule', enabled: true },
    { id: '4', type: 'Gallery', title: 'Photo Gallery', enabled: true },
    { id: '5', type: 'RSVP', title: 'RSVP Form', enabled: true },
  ]);

  const handleSave = () => {
    toast.success('Wedding page settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Wedding Page Builder</h1>
          <p className="text-slate-500">Customize your digital invitation and wedding website.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Eye size={18} />
            Preview Site
          </Button>
          <Button onClick={handleSave} className="gap-2 bg-rose-500 hover:bg-rose-600 border-none shadow-lg shadow-rose-500/20">
            <Save size={18} />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Type size={14} /> Basic Information
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Couple Names</label>
                <Input 
                  value={coupleNames} 
                  onChange={(e) => setCoupleNames(e.target.value)}
                  placeholder="e.g. Alex & Jordan"
                  className="bg-slate-50 border-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Wedding Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <Input 
                    type="date"
                    className="pl-10 bg-slate-50 border-none"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Invitation Message</label>
                <textarea 
                  className="w-full min-h-[100px] rounded-xl border-none bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  value={invitationMessage}
                  onChange={(e) => setInvitationMessage(e.target.value)}
                  placeholder="Share a sweet message with your guests..."
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Layers size={14} /> Page Sections
            </h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Drag to reorder sections</p>
            <Reorder.Group axis="y" values={sections} onReorder={setSections} className="space-y-2">
              {sections.map((section) => (
                <Reorder.Item 
                  key={section.id} 
                  value={section}
                  className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl cursor-grab active:cursor-grabbing hover:bg-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GripVertical size={16} className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-slate-700">{section.title}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{section.type}</p>
                    </div>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={section.enabled} 
                    onChange={() => {
                      setSections(sections.map(s => s.id === section.id ? {...s, enabled: !s.enabled} : s));
                    }}
                    className="w-5 h-5 text-indigo-600 rounded-lg border-slate-200 focus:ring-indigo-500"
                  />
                </Reorder.Item>
              ))}
            </Reorder.Group>
            <Button variant="ghost" className="w-full mt-4 border-2 border-dashed border-slate-200 text-slate-400 hover:bg-slate-50 rounded-2xl gap-2 font-bold text-xs uppercase">
              <Plus size={16} /> Add Section
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Palette size={14} /> Design Theme
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {['Romantic', 'Modern', 'Classic'].map((theme) => (
                <button 
                  key={theme}
                  className={cn(
                    "p-4 rounded-2xl border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                    theme === 'Romantic' ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md" : "border-slate-50 text-slate-400 hover:border-slate-100 hover:bg-slate-50"
                  )}
                >
                  {theme}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Live Preview */}
        <div className="lg:col-span-8">
          <div className="sticky top-24">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Layout size={14} /> Desktop Preview
              </h3>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 rounded-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Auto-Sync Enabled</span>
              </div>
            </div>
            
            <Card className="overflow-hidden border-[12px] border-slate-900 rounded-[3rem] shadow-2xl aspect-[16/10] max-h-[800px] mx-auto bg-white">
              {/* Preview Content */}
              <div className="h-full overflow-y-auto preview-scrollbar">
                {/* Hero Section */}
                <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                  <img src={HERO_IMAGE} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                  <div className="relative text-center text-white p-12">
                    <motion.h2 
                      key={coupleNames}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-6xl md:text-7xl font-serif font-bold italic mb-6"
                    >
                      {coupleNames}
                    </motion.h2>
                    <motion.div 
                      key={weddingDate}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-block px-6 py-2 border border-white/40 backdrop-blur-md rounded-full text-sm uppercase tracking-[0.4em] font-medium"
                    >
                      {new Date(weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-16 text-center space-y-20">
                  <div>
                    <HeartIcon className="text-rose-500 mx-auto mb-8" size={40} />
                    <h3 className="text-4xl font-serif italic text-slate-800">Save the Date</h3>
                    <p className="text-slate-500 mt-8 text-xl leading-relaxed max-w-2xl mx-auto italic font-serif opacity-80">
                      "{invitationMessage}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="aspect-[4/3] rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <ImageIcon className="text-slate-200" size={48} />
                    </div>
                    <div className="aspect-[4/3] rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <ImageIcon className="text-slate-200" size={48} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeartIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);