import React from 'react';
import { 
  Heart, 
  Users, 
  Camera, 
  Share2, 
  ChevronRight,
  Calendar,
  Zap,
  Clock,
  ArrowUpRight,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { Card, Button, Badge, cn } from '../../components/ui';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';

const rsvpData = [
  { name: 'Attending', value: 94, color: '#10b981' },
  { name: 'Declined', value: 22, color: '#ef4444' },
  { name: 'Pending', value: 34, color: '#f59e0b' },
];

const engagementData = [
  { day: 'Mon', views: 400, uploads: 24 },
  { day: 'Tue', views: 300, uploads: 13 },
  { day: 'Wed', views: 600, uploads: 98 },
  { day: 'Thu', views: 800, uploads: 39 },
  { day: 'Fri', views: 500, uploads: 48 },
  { day: 'Sat', views: 900, uploads: 38 },
  { day: 'Sun', views: 1200, uploads: 43 },
];

export const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-3xl bg-indigo-600 p-8 text-white shadow-xl shadow-indigo-600/20">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold">Happy Wedding, Fikerab & Fenan!</h1>
            <p className="mt-2 text-indigo-100 flex items-center gap-2 font-medium">
              <Calendar size={16} />
              August 24, 2025 • <span className="text-white font-bold">124 days to go</span>
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md transition-all">
              <Share2 className="w-4 h-4 mr-2" />
              Share Invitation
            </Button>
            <Link to="/client/live-mode">
              <Button className="bg-rose-500 hover:bg-rose-600 border-none shadow-lg shadow-rose-500/30 transition-all hover:scale-105 active:scale-95">
                <Zap className="w-4 h-4 mr-2 fill-white" />
                Go Live
              </Button>
            </Link>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Guests', value: '150', subtext: '94 Confirmed', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+5 this week' },
          { label: 'Media Uploads', value: '428', subtext: '12 Pending', icon: Camera, color: 'text-purple-600', bg: 'bg-purple-50', trend: '+12 today' },
          { label: 'Page Views', value: '3,842', subtext: 'Public site', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50', trend: '+24% growth' },
          { label: 'Messages', value: '56', subtext: 'Guestbook', icon: MessageSquare, color: 'text-amber-600', bg: 'bg-amber-50', trend: '8 unread' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-none shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start">
              <div className={cn("p-3 rounded-2xl transition-transform group-hover:scale-110", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <Badge variant="default" className="text-[10px] font-bold border-slate-100 text-slate-400 uppercase tracking-tighter">
                {stat.trend}
              </Badge>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-sm font-semibold text-slate-500 mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                <Clock size={10} /> {stat.subtext}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="lg:col-span-2 p-8 border-none shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Guest Engagement</h3>
              <p className="text-sm text-slate-500">Public wedding page traffic over time</p>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl font-bold text-xs uppercase">
              <TrendingUp size={16} />
              High Traffic
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '20px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }} 
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

        {/* RSVP Pie Chart */}
        <Card className="p-8 border-none shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-2">RSVP Breakdown</h3>
          <p className="text-sm text-slate-500 mb-6">Total invited: 150 guests</p>
          <div className="h-64 relative flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={rsvpData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {rsvpData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    fontSize: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black text-slate-900">63%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Responded</span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {rsvpData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-bold text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-black text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-8 border-none shadow-sm hover:ring-2 hover:ring-indigo-500/20 transition-all group cursor-pointer">
          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
              <Share2 className="text-indigo-600" size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-lg text-slate-900">Share Your Link</h4>
              <p className="text-sm text-slate-500 mt-1 line-clamp-1">wedding.dwe.com/fikerab-fenan</p>
              <div className="mt-4 flex items-center text-indigo-600 text-xs font-black uppercase tracking-widest">
                Copy Link <ArrowUpRight size={14} className="ml-1" />
              </div>
            </div>
          </div>
        </Card>

        <Link to="/client/builder" className="block">
          <Card className="p-8 border-none shadow-sm hover:ring-2 hover:ring-rose-500/20 transition-all group cursor-pointer h-full">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Heart className="text-rose-600 fill-rose-600" size={28} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-lg text-slate-900">Customize Page</h4>
                <p className="text-sm text-slate-500 mt-1">Change theme, photos and stories</p>
                <div className="mt-4 flex items-center text-rose-600 text-xs font-black uppercase tracking-widest">
                  Open Builder <ArrowUpRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          </Card>
        </Link>

        <Link to="/client/guests" className="block">
          <Card className="p-8 border-none shadow-sm hover:ring-2 hover:ring-emerald-500/20 transition-all group cursor-pointer h-full">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Users className="text-emerald-600" size={28} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-lg text-slate-900">Manage Guests</h4>
                <p className="text-sm text-slate-500 mt-1">Export list or send invitations</p>
                <div className="mt-4 flex items-center text-emerald-600 text-xs font-black uppercase tracking-widest">
                  View List <ArrowUpRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};