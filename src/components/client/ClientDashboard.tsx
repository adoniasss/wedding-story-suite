import React, { useState } from 'react';
import { 
  Layout, 
  Users, 
  Calendar, 
  Image as ImageIcon, 
  Activity, 
  Share2, 
  Edit3, 
  Eye, 
  CheckCircle, 
  Clock, 
  MapPin, 
  MessageSquare,
  Zap,
  ChevronRight,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../shared/Card';
import { Button } from '../shared/Button';
import { cn } from '../../lib/utils';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

const rsvpData = [
  { name: 'Attending', value: 124, color: '#10b981' },
  { name: 'Declined', value: 32, color: '#ef4444' },
  { name: 'Pending', value: 45, color: '#f59e0b' },
];

const engagementData = [
  { name: 'Mon', views: 45, uploads: 12 },
  { name: 'Tue', views: 52, uploads: 8 },
  { name: 'Wed', views: 48, uploads: 15 },
  { name: 'Thu', views: 70, uploads: 22 },
  { name: 'Fri', views: 120, uploads: 45 },
  { name: 'Sat', views: 240, uploads: 110 },
  { name: 'Sun', views: 180, uploads: 65 },
];

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiveMode, setIsLiveMode] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-8">
          <div className="flex items-center gap-3 text-white font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
              <Zap size={18} fill="white" />
            </div>
            <span>Sarah & James</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { id: 'overview', icon: Activity, label: 'Overview' },
            { id: 'builder', icon: Layout, label: 'Page Builder' },
            { id: 'guests', icon: Users, label: 'Guest List & RSVP' },
            { id: 'timeline', icon: Calendar, label: 'Event Timeline' },
            { id: 'media', icon: ImageIcon, label: 'Media Library' },
            { id: 'analytics', icon: Activity, label: 'Engagement' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeTab === item.id 
                  ? "bg-slate-800 text-white shadow-sm" 
                  : "hover:bg-slate-800/50 hover:text-white"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <p className="text-xs text-slate-400 font-medium uppercase mb-3 tracking-wider">Storage Usage</p>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
              <div className="bg-rose-500 h-1.5 rounded-full w-[45%]" />
            </div>
            <p className="text-xs text-white font-semibold">4.5 GB / 10 GB</p>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop" alt="avatar" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Sarah Miller</p>
              <p className="text-xs text-slate-500 truncate">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
               <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
               Wedding Live: June 15, 2024
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                <Button 
                  variant={!isLiveMode ? "primary" : "ghost"} 
                  size="sm" 
                  onClick={() => setIsLiveMode(false)}
                  className="rounded-md h-8 text-xs px-3"
                >
                  Draft
                </Button>
                <Button 
                  variant={isLiveMode ? "danger" : "ghost"} 
                  size="sm" 
                  onClick={() => setIsLiveMode(true)}
                  className={cn("rounded-md h-8 text-xs px-3 flex items-center gap-1.5", isLiveMode && "animate-pulse")}
                >
                  <Zap size={14} fill={isLiveMode ? "currentColor" : "none"} />
                  Live Mode
                </Button>
             </div>
             <div className="h-8 w-px bg-slate-200 mx-1"></div>
             <Button variant="secondary" size="sm" className="gap-2">
                <Eye size={16} />
                Preview Page
             </Button>
             <Button variant="primary" size="sm" className="gap-2">
                <Share2 size={16} />
                Share Link
             </Button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Wedding Dashboard</h1>
            <p className="text-slate-500 mt-1">Manage every detail of your special day from one place.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Quick Stats */}
            <Card className="lg:col-span-2">
              <CardHeader title="RSVP Overview" action={<Button variant="ghost" size="sm">Manage Guests</Button>} />
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={rsvpData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {rsvpData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-6">
                    {rsvpData.map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-slate-600 font-medium">{item.name}</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                       <span className="text-slate-500 text-sm">Total Invited</span>
                       <span className="text-xl font-bold text-slate-900">201</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement */}
            <Card>
              <CardHeader title="Guest Engagement" />
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="uploads" stroke="#f43f5e" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 uppercase font-semibold">Total Views</p>
                    <p className="text-xl font-bold text-slate-900">1,248</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 uppercase font-semibold">Media Uploads</p>
                    <p className="text-xl font-bold text-slate-900">254</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
             <Card className="hover:border-rose-200 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                   <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Edit3 size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900">Edit Website</h3>
                   <p className="text-sm text-slate-500 mt-1">Update colors, fonts, and layout styles.</p>
                </CardContent>
             </Card>

             <Card className="hover:border-indigo-200 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                   <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Plus size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900">Add Moment</h3>
                   <p className="text-sm text-slate-500 mt-1">Post a new story update for your guests.</p>
                </CardContent>
             </Card>

             <Card className="hover:border-amber-200 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                   <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <MessageSquare size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900">Announcements</h3>
                   <p className="text-sm text-slate-500 mt-1">Send SMS or Email alerts to all guests.</p>
                </CardContent>
             </Card>

             <Card className="hover:border-emerald-200 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                   <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Share2 size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900">QR Codes</h3>
                   <p className="text-sm text-slate-500 mt-1">Generate scan-to-upload QR codes.</p>
                </CardContent>
             </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Timeline */}
             <Card>
                <CardHeader title="Wedding Timeline" action={<Button variant="ghost" size="sm">Add Event</Button>} />
                <CardContent className="p-0">
                   <div className="relative pl-8 pr-6 py-6">
                      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-100"></div>
                      {[
                        { title: 'The Ceremony', time: '2:00 PM', loc: 'St. Mary’s Cathedral', status: 'Done' },
                        { title: 'Cocktail Hour', time: '4:30 PM', loc: 'Garden Terrace', status: 'In Progress' },
                        { title: 'Reception Dinner', time: '6:30 PM', loc: 'Grand Ballroom', status: 'Next' },
                        { title: 'First Dance', time: '8:00 PM', loc: 'Dance Floor', status: 'Next' },
                      ].map((event, i) => (
                        <div key={i} className="mb-8 last:mb-0 relative group">
                           <div className={cn(
                             "absolute -left-[27px] top-1.5 w-4 h-4 rounded-full border-4 border-white ring-2 transition-all",
                             event.status === 'Done' ? "ring-emerald-500 bg-emerald-500" : 
                             event.status === 'In Progress' ? "ring-indigo-500 bg-white" : "ring-slate-200 bg-white"
                           )}></div>
                           <div className="flex justify-between items-start">
                              <div>
                                 <h4 className="font-bold text-slate-900">{event.title}</h4>
                                 <div className="flex items-center gap-4 mt-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                       <Clock size={14} />
                                       {event.time}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                       <MapPin size={14} />
                                       {event.loc}
                                    </div>
                                 </div>
                              </div>
                              <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded",
                                event.status === 'Done' ? "bg-emerald-50 text-emerald-600" : 
                                event.status === 'In Progress' ? "bg-indigo-50 text-indigo-600 animate-pulse" : "bg-slate-50 text-slate-400"
                              )}>
                                {event.status}
                              </span>
                           </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
             </Card>

             {/* Recent Media */}
             <Card>
                <CardHeader title="Recent Media Uploads" action={<Button variant="ghost" size="sm">View All</Button>} />
                <CardContent>
                   <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square rounded-lg bg-slate-100 relative group overflow-hidden">
                           <img 
                            src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=300&h=300&fit=crop`} 
                            alt="upload" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <button className="p-2 bg-white rounded-full text-rose-500 hover:scale-110 transition-transform"><CheckCircle size={16} /></button>
                              <button className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"><Share2 size={16} /></button>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-6 p-4 rounded-xl bg-indigo-50 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-indigo-900">Auto-Approve Guest Media</p>
                        <p className="text-xs text-indigo-700">Photos will show instantly on the gallery.</p>
                      </div>
                      <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;