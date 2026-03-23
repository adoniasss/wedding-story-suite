import React from 'react';
import { 
  BarChart3, 
  Users, 
  Eye, 
  Camera, 
  TrendingUp, 
  MousePointer2,
  Clock,
  ArrowUpRight,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { Card, Badge, Button, cn } from '../../components/ui';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';

const viewsData = [
  { time: '08:00', views: 120 },
  { time: '10:00', views: 250 },
  { time: '12:00', views: 480 },
  { time: '14:00', views: 320 },
  { time: '16:00', views: 590 },
  { time: '18:00', views: 820 },
  { time: '20:00', views: 1100 },
  { time: '22:00', views: 950 },
];

const engagementData = [
  { name: 'RSVP Form', interaction: 840, color: '#6366f1' },
  { name: 'Gallery', interaction: 1250, color: '#ec4899' },
  { name: 'Story', interaction: 620, color: '#f59e0b' },
  { name: 'Timeline', interaction: 450, color: '#10b981' },
  { name: 'Location', interaction: 380, color: '#0ea5e9' },
];

export const ClientAnalytics = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shadow-sm">
            <BarChart3 className="text-indigo-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Wedding Analytics</h1>
            <p className="text-slate-500">Understand how your guests are interacting with your digital wedding page.</p>
          </div>
        </div>
        <div className="flex gap-3 bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md">Last 24h</button>
          <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-bold">Last 7d</button>
          <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-bold">Overall</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ 
          { label: 'Total Page Views', value: '4,842', trend: '+12%', icon: Eye, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Interaction Rate', value: '68%', trend: '+5.4%', icon: MousePointer2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg. Session', value: '3m 42s', trend: '+14s', icon: Clock, color: 'text-rose-600', bg: 'bg-rose-50' },
          { label: 'New RSVPs', value: '14', trend: 'Today', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-none shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start">
               <div className={cn("p-2.5 rounded-xl transition-transform group-hover:scale-110", stat.bg)}>
                 <stat.icon size={20} className={stat.color} />
               </div>
               <Badge variant="success" className="text-[9px] border-none">{stat.trend}</Badge>
            </div>
            <div className="mt-4">
               <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8 border-none shadow-sm">
          <div className="flex items-center justify-between mb-8">
             <div>
               <h3 className="text-lg font-bold text-slate-900">Traffic Pulse</h3>
               <p className="text-sm text-slate-500">Visitor views across the day</p>
             </div>
             <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100/50">
                <TrendingUp size={16} /> Peak at 8:00 PM
             </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={viewsData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} 
                />
                <Tooltip 
                  cursor={{ stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '4 4' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#6366f1" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorViews)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-8 border-none shadow-sm">
           <h3 className="text-lg font-bold text-slate-900 mb-2">Section Engagement</h3>
           <p className="text-sm text-slate-500 mb-8">Most visited parts of your page</p>
           <div className="space-y-6">
              {engagementData.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-700">{item.name}</span>
                    <span className="text-slate-400 font-bold">{item.interaction} clicks</span>
                  </div>
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.interaction / 1250) * 100}%` }}
                      className="h-full rounded-full shadow-lg shadow-current/20"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
           </div>
           <div className="mt-10 p-6 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
              <p className="text-xs font-medium text-slate-300 italic relative z-10">
                "Your guestbook and gallery are the most engaging sections. Consider sending a reminder for guests to upload more photos!"
              </p>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl" />
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="p-8 border-none shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-900">Device Distribution</h3>
              <Badge variant="info" className="border-none">Live Data</Badge>
            </div>
            <div className="flex items-center gap-12">
               <div className="flex-1 space-y-5">
                  {[
                    { label: 'Mobile App', value: '72%', color: 'bg-indigo-500' },
                    { label: 'Desktop Browser', value: '24%', color: 'bg-emerald-500' },
                    { label: 'Tablets', value: '4%', color: 'bg-amber-500' }
                  ].map((device, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className={cn("w-3 h-3 rounded-full shadow-md", device.color)} />
                          <span className="text-sm font-bold text-slate-600">{device.label}</span>
                       </div>
                       <span className="text-sm font-black text-slate-900">{device.value}</span>
                    </div>
                  ))}
               </div>
               <div className="w-40 h-40 rounded-full border-[12px] border-slate-50 flex items-center justify-center relative shadow-inner">
                  <div className="text-center">
                     <p className="text-3xl font-black text-slate-900">72%</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile</p>
                  </div>
               </div>
            </div>
         </Card>

         <Card className="p-8 border-none shadow-sm bg-indigo-600 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                    <Calendar size={24} />
                 </div>
                 <ArrowUpRight size={24} className="opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Weekly Digest</h3>
              <p className="text-indigo-100 text-sm mb-6">Your wedding page traffic increased by 24% this week. Guests are starting to RSVP more frequently as the date approaches.</p>
              <Button className="mt-auto w-full bg-white text-indigo-600 hover:bg-slate-50 font-bold uppercase tracking-widest text-xs h-11 border-none shadow-xl shadow-indigo-700/20">
                Download Full Report
              </Button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
         </Card>
      </div>
    </div>
  );
};