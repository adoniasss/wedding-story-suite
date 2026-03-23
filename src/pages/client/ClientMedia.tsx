import React, { useState } from 'react';
import { 
  Camera, 
  Search, 
  Filter, 
  Grid, 
  List, 
  CheckCircle2, 
  Trash2, 
  ExternalLink,
  MoreVertical,
  ThumbsUp,
  XCircle,
  Clock
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  uploadedBy: string;
  timestamp: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export const ClientMedia = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');
  
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    { id: '1', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-placeholder-1-8f13dc6b-1773885993896.webp', type: 'image', uploadedBy: 'Abebe Bikila', timestamp: '2 mins ago', status: 'Pending' },
    { id: '2', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-placeholder-2-1053021b-1773885993447.webp', type: 'image', uploadedBy: 'Sara Tesfaye', timestamp: '1 hour ago', status: 'Approved' },
    { id: '3', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-placeholder-3-8d36e617-1773885994517.webp', type: 'image', uploadedBy: 'Yared Negu', timestamp: '5 hours ago', status: 'Approved' },
    { id: '4', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-hero-placeholder-957de6b9-1773885993249.webp', type: 'image', uploadedBy: 'Helen Berhe', timestamp: '1 day ago', status: 'Approved' },
  ]);

  const approveMedia = (id: string) => {
    setMediaItems(mediaItems.map(item => item.id === id ? { ...item, status: 'Approved' } : item));
    toast.success('Media approved for gallery!');
  };

  const deleteMedia = (id: string) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
    toast.info('Media removed');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
            <Camera className="text-purple-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Media Gallery</h1>
            <p className="text-slate-500">Moderate and manage photos uploaded by your guests.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Grid size={18} /> View Public Site
          </Button>
          <Button className="bg-rose-500 hover:bg-rose-600">Download All</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
          <button 
            onClick={() => setFilter('all')}
            className={cn("px-4 py-1.5 rounded-lg text-xs font-bold transition-all", filter === 'all' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700")}
          >
            All Media
          </button>
          <button 
            onClick={() => setFilter('pending')}
            className={cn("px-4 py-1.5 rounded-lg text-xs font-bold transition-all", filter === 'pending' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700")}
          >
            Pending Approval
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button 
              onClick={() => setViewMode('grid')}
              className={cn("p-1.5 rounded-md transition-all", viewMode === 'grid' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400")}
            >
              <Grid size={16} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={cn("p-1.5 rounded-md transition-all", viewMode === 'list' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400")}
            >
              <List size={16} />
            </button>
          </div>
          <div className="h-4 w-[1px] bg-slate-200" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <Input placeholder="Search by guest..." className="pl-9 py-1.5 h-auto text-xs w-48 bg-slate-50 border-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems
          .filter(item => filter === 'all' || (filter === 'pending' && item.status === 'Pending'))
          .map((item) => (
            <Card key={item.id} className="group overflow-hidden border-none shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img src={item.url} alt="Guest upload" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-md">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {item.status === 'Pending' && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-[10px] font-bold uppercase border-none"
                        onClick={() => approveMedia(item.id)}
                      >
                        Approve
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="danger" 
                      className="flex-1 bg-rose-500 hover:bg-rose-600 text-[10px] font-bold uppercase border-none"
                      onClick={() => deleteMedia(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                {item.status === 'Pending' && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="warning" className="bg-amber-500 text-white border-none shadow-lg">New</Badge>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.uploadedBy}</p>
                    <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock size={10} /> {item.timestamp}
                    </p>
                  </div>
                  <Badge variant={item.status === 'Approved' ? 'success' : 'warning'} className="text-[9px]">
                    {item.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};