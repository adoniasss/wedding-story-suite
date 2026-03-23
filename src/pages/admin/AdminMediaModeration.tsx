import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ShieldAlert, 
  Filter, 
  LayoutGrid, 
  List, 
  Download,
  MoreVertical,
  Play
} from 'lucide-react';
import { Card, Button, Badge, Tabs } from '../../components/ui';

const mediaItems = [
  { id: 1, type: 'photo', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80', wedding: 'Emily & John', user: 'Sarah W.', time: '2 mins ago', status: 'pending' },
  { id: 2, type: 'video', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80', wedding: 'Sarah & Michael', user: 'Tom R.', time: '5 mins ago', status: 'pending' },
  { id: 3, type: 'photo', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80', wedding: 'Emily & John', user: 'John D.', time: '12 mins ago', status: 'pending' },
  { id: 4, type: 'photo', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80', wedding: 'Jessica & David', user: 'Maria G.', time: '1 hour ago', status: 'pending' },
  { id: 5, type: 'video', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80', wedding: 'Emily & John', user: 'Alex P.', time: '2 hours ago', status: 'pending' },
  { id: 6, type: 'photo', url: 'https://images.unsplash.com/photo-1494955858171-b12009214343?auto=format&fit=crop&w=400&q=80', wedding: 'Sarah & Michael', user: 'Chris L.', time: '3 hours ago', status: 'pending' },
];

const AdminMediaModeration = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Media Moderation</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review and approve user-uploaded content for guest galleries.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="secondary" className="gap-2">
              <ShieldAlert size={18} className="text-rose-500" />
              AI Auto-Moderation: ON
           </Button>
           <Button className="gap-2">
              Approve Page
           </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Tabs 
          tabs={['Pending', 'Approved', 'Rejected', 'All Media']} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <div className="flex items-center gap-2">
           <div className="flex bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-lg p-1">
              <button className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md"><LayoutGrid size={18} /></button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600"><List size={18} /></button>
           </div>
           <Button variant="secondary" size="sm" className="gap-2">
              <Filter size={14} />
              Filter Wedding
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-all relative">
            <div className="aspect-[4/5] relative">
               <img src={item.url} alt="Content" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
               
               {item.type === 'video' && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white ring-4 ring-white/10">
                       <Play size={24} fill="currentColor" />
                    </div>
                 </div>
               )}

               <div className="absolute top-2 left-2 flex flex-col gap-1">
                 <Badge variant={item.type === 'video' ? 'info' : 'default'} className="bg-black/40 text-white border-none backdrop-blur-md">
                    {item.type.toUpperCase()}
                 </Badge>
               </div>

               <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20">
                    <MoreVertical size={16} />
                 </button>
               </div>
            </div>
            
            <div className="p-3 bg-white dark:bg-slate-900">
               <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.wedding}</p>
                    <p className="text-[10px] text-slate-500">By {item.user} • {item.time}</p>
                  </div>
                  <Button variant="secondary" size="sm" className="h-7 px-2 text-[10px]">View</Button>
               </div>
               
               <div className="grid grid-cols-2 gap-2 pt-1">
                  <button className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors text-xs font-bold">
                    <Check size={14} />
                    Approve
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors text-xs font-bold">
                    <X size={14} />
                    Reject
                  </button>
               </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminMediaModeration;