import React from 'react';
import { 
  BarChart3, 
  Users, 
  UserCheck, 
  UserX, 
  UserMinus, 
  PieChart as PieChartIcon,
  TrendingUp,
  Download,
  Filter
} from 'lucide-react';
import { Card, Button, Badge, cn } from '../../components/ui';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const rsvpData = [
  { name: 'Attending', value: 94, color: '#10b981' },
  { name: 'Declined', value: 22, color: '#ef4444' },
  { name: 'Pending', value: 34, color: '#f59e0b' },
];

const groupData = [
  { name: 'Family', attending: 45, declined: 5, pending: 10 },
  { name: 'Friends', attending: 30, declined: 12, pending: 15 },
  { name: 'Work', attending: 10, declined: 2, pending: 5 },
  { name: 'VIP', attending: 9, declined: 3, pending: 4 },
];

export const ClientRSVP = () => {
  const totalInvited = rsvpData.reduce((acc, curr) => acc + curr.value, 0);
  const responseRate = Math.round(((totalInvited - 34) / totalInvited) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
            <BarChart3 className="text-emerald-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">RSVP Center</h1>
            <p className="text-slate-500">Real-time insights into your guest responses and counts.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Filter size={18} /> Filter Views
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 border-none gap-2 shadow-lg shadow-emerald-500/20">
            <Download size={18} /> Export Stats
          </Button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 border-none shadow-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
              <Users size={20} />
            </div>
            <Badge className="bg-white/10 text-white border-none">{responseRate}% Respond</Badge>
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-black">{totalInvited}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Total Invited</p>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-emerald-50 rounded-xl">
              <UserCheck size={20} className="text-emerald-600" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-black text-slate-900">94</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Attending</p>
            <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: '63%' }} />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-rose-50 rounded-xl">
              <UserX size={20} className="text-rose-600" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-black text-slate-900">22</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Declined</p>
            <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500" style={{ width: '15%' }} />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-sm">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-amber-50 rounded-xl">
              <UserMinus size={20} className="text-amber-600" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-black text-slate-900">34</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Pending</p>
            <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '22%' }} />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main breakdown chart */}
        <Card className="p-8 border-none shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">RSVP Breakdown</h3>
              <p className="text-sm text-slate-500">Status distribution among all groups</p>
            </div>
            <PieChartIcon className="text-slate-300" size={24} />
          </div>
          <div className="h-[350px] w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={rsvpData}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {rsvpData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-4 md:pl-8 mt-4 md:mt-0">
               {rsvpData.map((item, i) => (
                 <div key={i} className="p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                     <span className="font-bold text-slate-700">{item.name}</span>
                   </div>
                   <div className="text-right">
                     <p className="text-lg font-black text-slate-900">{item.value}</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase">{Math.round((item.value/totalInvited)*100)}%</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </Card>

        {/* Group performance chart */}
        <Card className="p-8 border-none shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Response by Group</h3>
              <p className="text-sm text-slate-500">Comparison of attendance across guest categories</p>
            </div>
            <TrendingUp className="text-emerald-500" size={24} />
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={groupData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 'bold', fill: '#64748b' }}
                  width={80}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" verticalAlign="top" align="right" />
                <Bar dataKey="attending" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="pending" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="declined" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};