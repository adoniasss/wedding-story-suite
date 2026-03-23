import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Image as ImageIcon, 
  Share2, 
  Download,
  Calendar
} from 'lucide-react';
import { Card, Button, Badge, cn } from '../../components/ui';

const engagementData = [
  { name: 'Mon', rsvp: 120, uploads: 450, sharing: 210 },
  { name: 'Tue', rsvp: 150, uploads: 520, sharing: 180 },
  { name: 'Wed', rsvp: 180, uploads: 480, sharing: 240 },
  { name: 'Thu', rsvp: 140, uploads: 610, sharing: 290 },
  { name: 'Fri', rsvp: 210, uploads: 890, sharing: 420 },
  { name: 'Sat', rsvp: 320, uploads: 1240, sharing: 580 },
  { name: 'Sun', rsvp: 280, uploads: 1100, sharing: 510 },
];

const packageData = [
  { name: 'Basic', value: 35, color: '#6366f1' },
  { name: 'Standard', value: 50, color: '#10b981' },
  { name: 'Premium', value: 15, color: '#f59e0b' },
];

const AdminAnalytics = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Analytics</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Deep dive into platform engagement and performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-xl p-1 shadow-sm">
              <button className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg">Week</button>
              <button className="px-4 py-1.5 text-slate-500 text-xs font-bold rounded-lg">Month</button>
              <button className="px-4 py-1.5 text-slate-500 text-xs font-bold rounded-lg">Year</button>
           </div>
           <Button className="gap-2">
              <Download size={18} />
              Export Data
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-6">
           <div className="flex items-center justify-between mb-8">
              <div>
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white">Engagement Trends</h3>
                 <p className="text-sm text-slate-500">Daily activity tracking across all weddings</p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-indigo-500" />
                    <span className="text-xs font-medium text-slate-500">Uploads</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-slate-500">RSVPs</span>
                 </div>
              </div>
           </div>
           <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                       contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line type="monotone" dataKey="uploads" stroke="#6366f1" strokeWidth={3} dot={{r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                    <Line type="monotone" dataKey="rsvp" stroke="#10b981" strokeWidth={3} dot={{r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                 </LineChart>
              </ResponsiveContainer>
           </div>
        </Card>

        <Card className="p-6">
           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">User Distribution</h3>
           <p className="text-sm text-slate-500 mb-6">Active users by package type</p>
           <div className="h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                       data={packageData}
                       cx="50%"
                       cy="50%"
                       innerRadius={60}
                       outerRadius={80}
                       paddingAngle={5}
                       dataKey="value"
                    >
                       {packageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                       ))}
                    </Pie>
                    <Tooltip />
                 </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-3xl font-bold text-slate-900 dark:text-white">1.2k</span>
                 <span className="text-xs text-slate-500 font-medium uppercase">Active</span>
              </div>
           </div>
           <div className="space-y-3 mt-4">
              {packageData.map((item) => (
                 <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}} />
                       <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{item.value}%</span>
                 </div>
              ))}
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Avg Media per Wedding', value: '420', icon: ImageIcon, color: 'indigo' },
           { label: 'Social Shares', value: '18.4k', icon: Share2, color: 'emerald' },
           { label: 'Weekly Growth', value: '+14.2%', icon: TrendingUp, color: 'amber' },
           { label: 'Scheduled Weddings', value: '842', icon: Calendar, color: 'rose' },
         ].map((stat) => (
           <Card key={stat.label} className="p-5 border-none shadow-lg">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                stat.color === 'indigo' ? "bg-indigo-50 text-indigo-600" :
                stat.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
                stat.color === 'amber' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
              )}>
                 <stat.icon size={20} />
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h4>
           </Card>
         ))}
      </div>
    </div>
  );
};

export default AdminAnalytics;