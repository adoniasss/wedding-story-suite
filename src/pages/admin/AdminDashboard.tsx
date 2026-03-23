import React from 'react';
import { 
  Users, 
  Heart, 
  DollarSign, 
  HardDrive, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Card, Badge, Button, cn } from '../../components/ui';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const activityData = [
  { id: 1, type: 'wedding', title: 'New Wedding Created', description: 'Sarah & Mark - Standard Package', time: '2 mins ago', status: 'success' },
  { id: 2, type: 'payment', title: 'Payment Received', description: '$1,200 from James Wilson', time: '45 mins ago', status: 'success' },
  { id: 3, type: 'storage', title: 'Storage Warning', description: 'Miller wedding reaching 90% limit', time: '2 hours ago', status: 'warning' },
  { id: 4, type: 'guest', title: 'New Guest Import', description: '250 guests added to Smith wedding', time: '5 hours ago', status: 'info' },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">System Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary">Download Report</Button>
          <Button>Generate Invoice</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Weddings', value: '1,284', icon: Heart, trend: '+12.5%', trendType: 'up', color: 'indigo' },
          { label: 'Active Weddings', value: '342', icon: Users, trend: '+4.2%', trendType: 'up', color: 'emerald' },
          { label: 'Total Revenue', value: '$142,500', icon: DollarSign, trend: '+18.7%', trendType: 'up', color: 'amber' },
          { label: 'Storage Used', value: '2.4 TB', icon: HardDrive, trend: '85% Capacity', trendType: 'neutral', color: 'rose' },
        ].map((stat) => (
          <Card key={stat.label} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className={cn(
                "p-3 rounded-xl",
                stat.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' :
                stat.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                stat.color === 'amber' ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' :
                'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'
              )}>
                <stat.icon size={24} />
              </div>
              <div className={cn("flex items-center gap-1 text-xs font-bold", stat.trendType === 'up' ? 'text-emerald-600' : 'text-slate-500')}>
                {stat.trend}
                {stat.trendType === 'up' && <ArrowUpRight size={14} />}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Growth</h3>
              <p className="text-sm text-slate-500">Monthly platform revenue comparison</p>
            </div>
            <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm font-semibold px-3 py-1.5 focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Package Distribution</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Basic', value: 450, percentage: 35, color: 'bg-indigo-500' },
              { label: 'Standard', value: 650, percentage: 50, color: 'bg-emerald-500' },
              { label: 'Premium', value: 184, percentage: 15, color: 'bg-amber-500' },
            ].map((pkg) => (
              <div key={pkg.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{pkg.label}</span>
                  <span className="text-slate-500">{pkg.value} weddings</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className={cn("h-full", pkg.color)} style={{ width: `${pkg.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
             <div className="flex items-center justify-between bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                <div className="flex items-center gap-3 text-indigo-700 dark:text-indigo-400">
                   <TrendingUp size={20} />
                   <span className="text-sm font-bold">Conversion Rate</span>
                </div>
                <span className="text-lg font-bold text-indigo-700 dark:text-indigo-400">14.2%</span>
             </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="text-indigo-600" size={20} />
              Recent Activity
            </h3>
            <Button variant="ghost" size="sm">Filter</Button>
          </div>
          <div className="space-y-6">
            {activityData.map((activity) => (
              <div key={activity.id} className="flex gap-4 group cursor-pointer">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                  activity.status === 'success' ? "bg-emerald-50 text-emerald-600" :
                  activity.status === 'warning' ? "bg-amber-50 text-amber-600" : "bg-indigo-50 text-indigo-600"
                )}>
                  {activity.status === 'success' ? <CheckCircle2 size={18} /> : 
                   activity.status === 'warning' ? <AlertCircle size={18} /> : <Users size={18} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{activity.title}</h4>
                    <span className="text-[10px] font-medium text-slate-400">{activity.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full mt-8">View Complete History</Button>
        </Card>

        <Card className="p-6">
           <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Performance</h3>
            <Badge variant="success">System Healthy</Badge>
          </div>
          <div className="space-y-6">
             {[
               { name: 'API Latency', value: '42ms', status: 'optimal' },
               { name: 'Media Processing', value: '1.2s avg', status: 'optimal' },
               { name: 'Database Load', value: '14%', status: 'optimal' },
               { name: 'Email Delivery', value: '99.9%', status: 'optimal' },
             ].map((item) => (
               <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                 <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.name}</span>
                 <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{item.value}</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 </div>
               </div>
             ))}
          </div>
          <div className="mt-8 p-4 bg-slate-900 rounded-xl flex items-center justify-between">
             <div className="flex items-center gap-3">
                <HardDrive className="text-slate-400" size={20} />
                <div>
                   <p className="text-xs font-bold text-white">Total Cloud Storage</p>
                   <p className="text-[10px] text-slate-500">2.4 TB of 5.0 TB used</p>
                </div>
             </div>
             <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[48%]" />
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;