import React, { useState } from 'react';
import { 
  Archive, 
  Download, 
  ImageIcon, 
  Video, 
  FileText, 
  Search,
  Grid,
  List,
  ChevronRight,
  Heart,
  ExternalLink,
  Share2,
  FolderOpen
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';

export const ClientArchive = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { name: 'All', count: 428, icon: <Archive size={14} /> },
    { name: 'Photos', count: 384, icon: <ImageIcon size={14} /> },
    { name: 'Videos', count: 24, icon: <Video size={14} /> },
    { name: 'Guestbook', count: 56, icon: <FileText size={14} /> },
  ];

  const galleryItems = [
    { id: 1, type: 'photo', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-1-38c0727f-1773886386770.webp', label: 'Ceremony High Res' },
    { id: 2, type: 'photo', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/wedding-gallery-2-df23285e-1773886386047.webp', label: 'Reception Party' },
    { id: 3, type: 'video', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/love-story-1-d3b85e54-1773886386781.webp', label: 'Vows Video' },
    { id: 4, type: 'photo', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/hero-wedding-image-a7b972b6-9f5e-435f-998a-7313f9a25d3c.webp', label: 'Sunset Couple' },
  ];

  const downloadAll = () => {
    toast.promise(new Promise(resolve => setTimeout(resolve, 2000)), {
      loading: 'Preparing your wedding memories for download...',
      success: 'Wedding archive (2.4GB) is ready! Download started.',
      error: 'Failed to generate archive.'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
            <Archive size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Memories Archive</h1>
            <p className="text-slate-500">Download and preserve all the beautiful moments from your wedding.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2 shadow-sm">
            <Share2 size={18} /> Share Archive
          </Button>
          <Button onClick={downloadAll} className="bg-slate-900 hover:bg-slate-800 border-none gap-2 shadow-lg shadow-slate-900/20">
            <Download size={18} /> Download All (2.4GB)
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-4">
           <Card className="p-4">
             <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <Input placeholder="Search archive..." className="pl-10 bg-slate-50 border-none h-11" />
             </div>
             <div className="space-y-1">
                {categories.map((cat) => (
                  <button 
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                      activeCategory === cat.name ? "bg-slate-900 text-white shadow-lg" : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {cat.icon}
                      {cat.name}
                    </div>
                    <span className={cn("text-xs", activeCategory === cat.name ? "text-slate-400" : "text-slate-400 font-bold")}>{cat.count}</span>
                  </button>
                ))}
             </div>
           </Card>

           <Card className="p-6 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white border-none">
              <Heart className="mb-4 opacity-50" size={24} />
              <h3 className="font-bold text-lg mb-2">Physical Album?</h3>
              <p className="text-indigo-100 text-xs mb-6">Order a beautifully printed physical album using these archived photos.</p>
              <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs uppercase">Explore Print Store</Button>
           </Card>
        </div>

        {/* Gallery Content */}
        <div className="lg:col-span-3 space-y-6">
           <div className="flex items-center justify-between">
             <h3 className="text-lg font-bold text-slate-900">{activeCategory} Memories</h3>
             <div className="flex items-center gap-2">
               <button className="p-2 rounded-lg bg-slate-100 text-slate-600"><Grid size={18} /></button>
               <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-50"><List size={18} /></button>
             </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
             {galleryItems.map((item) => (
               <Card key={item.id} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all">
                 <div className="relative aspect-video overflow-hidden">
                   <img 
                    src={item.url} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between">
                         <div>
                            <p className="text-white font-bold">{item.label}</p>
                            <p className="text-slate-300 text-xs">{item.type === 'photo' ? 'JPEG High Res \u2022 12MB' : 'MP4 4K \u2022 420MB'}</p>
                         </div>
                         <div className="flex gap-2">
                            <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-md">
                               <ExternalLink size={16} />
                            </button>
                            <button className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-lg">
                               <Download size={16} />
                            </button>
                         </div>
                      </div>
                   </div>
                 </div>
               </Card>
             ))}
           </div>

           <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                 <FolderOpen className="text-slate-300" size={32} />
              </div>
              <h4 className="text-slate-900 font-bold">Categorized Folders</h4>
              <p className="text-slate-500 text-sm mt-1 mb-6">You can also view all items organized by event.</p>
              <div className="flex gap-4">
                {['Ceremony', 'Cocktails', 'Reception', 'Dinner'].map(f => (
                  <Badge key={f} variant="secondary" className="bg-white border-slate-200 text-slate-600 cursor-pointer hover:border-indigo-500 hover:text-indigo-600 transition-colors">{f}</Badge>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};