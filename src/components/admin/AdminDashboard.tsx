import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  BarChart3, 
  Settings, 
  LogOut, 
  Search, 
  Plus, 
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../shared/Card';
import { Button } from '../shared/Button';
import { cn } from '../../lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';

const data = [
  { name: 'Jan', weddings: 12, revenue: 2400 },
  { name: 'Feb', weddings: 19, revenue: 3800 },
  { name: 'Mar', weddings: 15, revenue: 3000 },
  { name: 'Apr', weddings: 22, revenue: 4400 },
  { name: 'May', weddings: 30, revenue: 6000 },
  { name: 'Jun', weddings: 25, revenue: 5000 },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Weddings', value: '1,284', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Active Clients', value: '458', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Total Revenue', value: '$124,500', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Storage Used', value: '4.2 TB', icon: BarChart3, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const weddings = [
    { id: '1', couple: 'Sarah & James', date: '2024-06-15', status: 'Active', package: 'Premium', progress: 85 },
    { id: '2', couple: 'Emily & Michael', date: '2024-07-20', status: 'Active', package: 'Standard', progress: 40 },
    { id: '3', couple: 'Jessica & David', date: '2024-08-10', status: 'Pending', package: 'Basic', progress: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <Heart className="fill-current" />
            <span>WeddingSaaS</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { id: 'overview', icon: BarChart3, label: 'Overview' },
            { id: 'clients', icon: Users, label: 'Client Management' },
            { id: 'weddings', icon: Heart, label: 'Weddings' },
            { id: 'moderation', icon: ShieldCheck, label: 'Moderation' },
            { id: 'analytics', icon: TrendingUp, label: 'System Analytics' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === item.id 
                  ? "bg-indigo-50 text-indigo-700" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg w-full">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 bg-gray-100 px-3 py-1.5 rounded-lg w-96">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search weddings, clients, or payments..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold">Admin Panel</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center text-indigo-700 font-bold">
              AD
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-500">Welcome back! Here's what's happening with your platform today.</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus size={18} />
              New Wedding Project
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardContent className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-xl", stat.bg)}>
                    <stat.icon size={24} className={stat.color} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Chart */}
            <Card className="lg:col-span-2">
              <CardHeader 
                title="Revenue Growth" 
                subtitle="Monthly subscription and add-on revenue"
              />
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Activity/Notifications */}
            <Card>
              <CardHeader title="System Notifications" />
              <CardContent className="space-y-4">
                {[
                  { title: 'New Wedding Created', desc: 'The Johnson Wedding was added', time: '2m ago' },
                  { title: 'Payment Received', desc: '$499 from Emily Davis', time: '15m ago' },
                  { title: 'High Storage Alert', desc: 'Cloud storage at 85% capacity', time: '1h ago' },
                  { title: 'Moderation Required', desc: '3 new guest uploads pending', time: '3h ago' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Table */}
          <Card>
            <CardHeader 
              title="Recent Weddings" 
              subtitle="Management and status of ongoing projects"
              action={<Button variant="secondary" size="sm">View All</Button>}
            />
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-y border-gray-100">
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Couple</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {weddings.map((wedding) => (
                    <tr key={wedding.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                            {wedding.couple.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-900">{wedding.couple}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{wedding.date}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-1 rounded text-[10px] font-bold uppercase",
                          wedding.package === 'Premium' ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                        )}>
                          {wedding.package}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          wedding.status === 'Active' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        )}>
                          {wedding.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-full bg-gray-100 rounded-full h-1.5 max-w-[100px]">
                          <div 
                            className="bg-indigo-600 h-1.5 rounded-full" 
                            style={{ width: `${wedding.progress}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;