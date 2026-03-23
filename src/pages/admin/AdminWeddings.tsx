import React from 'react';
import { 
  Search, 
  Plus, 
  LayoutGrid, 
  List, 
  Eye, 
  Settings, 
  Users, 
  Image as ImageIcon, 
  Link as LinkIcon,
  ChevronRight
} from 'lucide-react';
import { Card, Button, Input, Badge } from '../../components/ui';

const weddings = [
  { id: 'W-2024-001', couple: 'Emily & John', url: 'emily-john-2024', status: 'Live', guests: 184, media: 1240, cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-preview-1-038af48b-1773884256836.webp' },
  { id: 'W-2024-002', couple: 'Sarah & Michael', url: 'sarah-mike-wedding', status: 'Draft', guests: 220, media: 0, cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-preview-2-6ed1d840-1773884256611.webp' },
  { id: 'W-2024-003', couple: 'Jessica & David', url: 'jess-david-big-day', status: 'Live', guests: 150, media: 850, cover: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80' },
  { id: 'W-2024-004', couple: 'Ashley & Chris', url: 'ashley-chris-celebration', status: 'Archived', guests: 120, media: 4200, cover: 'https://images.unsplash.com/photo-1465495910483-34a1be908ee8?auto=format&fit=crop&w=400&q=80' },
];

const AdminWeddings = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Wedding Projects</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor and manage all digital wedding experiences.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-lg p-1">
              <button className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md"><LayoutGrid size={18} /></button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600"><List size={18} /></button>
           </div>
           <Button className="gap-2 shadow-lg shadow-indigo-500/20">
              <Plus size={18} />
              Create Wedding
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {weddings.map((wedding) => (
          <Card key={wedding.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
            <div className="relative h-40 overflow-hidden">
               <img src={wedding.cover} alt={wedding.couple} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="absolute top-3 right-3">
                  <Badge variant={wedding.status === 'Live' ? 'success' : wedding.status === 'Draft' ? 'warning' : 'default'}>
                    {wedding.status}
                  </Badge>
               </div>
               <div className="absolute bottom-3 left-3">
                  <p className="text-xs text-white/80 font-medium">{wedding.id}</p>
                  <h4 className="text-white font-bold">{wedding.couple}</h4>
               </div>
            </div>
            
            <div className="p-4 space-y-4">
               <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Users size={14} className="text-indigo-500" />
                    {wedding.guests} Guests
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <ImageIcon size={14} className="text-rose-500" />
                    {wedding.media} Files
                  </div>
               </div>

               <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden">
                     <LinkIcon size={14} className="text-slate-400 shrink-0" />
                     <span className="text-[10px] font-medium text-slate-500 truncate">dwe.com/{wedding.url}</span>
                  </div>
                  <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors text-slate-400 hover:text-indigo-600">
                    <Eye size={14} />
                  </button>
               </div>

               <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button variant="secondary" size="sm" className="text-xs h-9">Settings</Button>
                  <Button size="sm" className="text-xs h-9 gap-1">
                    Manage
                    <ChevronRight size={14} />
                  </Button>
               </div>
            </div>
          </Card>
        ))}
        
        <button className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all group">
           <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-colors">
              <Plus size={24} />
           </div>
           <div className="text-center">
              <p className="font-bold text-slate-900 dark:text-white">Add New Project</p>
              <p className="text-xs text-slate-500">Click to launch a new wedding</p>
           </div>
        </button>
      </div>
    </div>
  );
};

export default AdminWeddings;