import React, { useState } from 'react';
import { 
  Zap, 
  MessageSquare, 
  Send, 
  Users, 
  Camera, 
  AlertCircle,
  Clock,
  CheckCircle2,
  Settings,
  Bell,
  Volume2
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export const ClientLiveMode = () => {
  const [isLive, setIsLive] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [recentActions, setRecentActions] = useState([
    { id: 1, type: 'Photo', user: 'Dawit Isaac', time: '1 min ago', description: 'Uploaded a new photo' },
    { id: 2, type: 'Announcement', user: 'System', time: '5 mins ago', description: 'Ceremony is starting in 10 mins' },
    { id: 3, type: 'RSVP', user: 'Sara Tesfaye', time: '12 mins ago', description: 'Just checked in at the venue' },
  ]);

  const handleToggleLive = () => {
    setIsLive(!isLive);
    if (!isLive) {
      toast.success('Live Mode Activated! Guests can now see real-time updates.');
    } else {
      toast.info('Live Mode Deactivated.');
    }
  };

  const sendAnnouncement = () => {
    if (!announcement.trim()) return;
    toast.success('Announcement sent to all guest devices!');
    setRecentActions([{
      id: Date.now(),
      type: 'Announcement',
      user: 'You',
      time: 'Just now',
      description: announcement
    }, ...recentActions]);
    setAnnouncement('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
            isLive ? "bg-rose-500 text-white animate-pulse shadow-lg shadow-rose-500/30" : "bg-slate-100 text-slate-400"
          )}>
            <Zap size={24} className={isLive ? "fill-white" : ""} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Live Wedding Mode</h1>
            <p className="text-slate-500">Control the real-time experience of your big day.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
          <span className={cn("text-xs font-black uppercase tracking-widest pl-2", isLive ? "text-rose-500" : "text-slate-400")}>
            {isLive ? 'Online & Syncing' : 'System Standby'}
          </span>
          <button 
            onClick={handleToggleLive}
            className={cn(
              "relative inline-flex h-10 w-20 items-center rounded-full transition-colors focus:outline-none",
              isLive ? "bg-rose-500" : "bg-slate-200"
            )}
          >
            <span className={cn(
              "inline-block h-8 w-8 transform rounded-full bg-white transition-transform",
              isLive ? "translate-x-11" : "translate-x-1"
            )} />
          </button>
        </div>
      </div>

      {!isLive && (
        <Card className="p-8 bg-amber-50 border-amber-200 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 border-4 border-amber-100 shadow-sm">
            <AlertCircle className="text-amber-500" size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-amber-900">System is currently in Standby</h3>
            <p className="text-amber-700/80 text-sm mt-1">Live features like real-time guestbook updates and announcements are disabled. Toggle Live Mode ON to start the interactive experience.</p>
          </div>
          <Button onClick={handleToggleLive} className="bg-amber-500 hover:bg-amber-600 border-none">Activate System</Button>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Announcement Console */}
        <div className="lg:col-span-2 space-y-6">
           <Card className="p-8 border-none shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Bell size={20} className="text-indigo-600" /> Send Live Announcement
              </h3>
              <div className="relative">
                <textarea 
                  className="w-full min-h-[120px] rounded-2xl border-2 border-slate-100 bg-slate-50 p-6 text-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all placeholder:text-slate-300"
                  placeholder="Write something for your guests... e.g. Dinner is served!"
                  value={announcement}
                  onChange={(e) => setAnnouncement(e.target.value)}
                  disabled={!isLive}
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Push to all devices</span>
                  <Button 
                    onClick={sendAnnouncement} 
                    disabled={!isLive || !announcement.trim()}
                    className="bg-indigo-600 hover:bg-indigo-700 h-12 w-12 rounded-xl p-0 shadow-lg shadow-indigo-600/20"
                  >
                    <Send size={20} />
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Start Ceremony', icon: <Volume2 size={16} />, color: 'bg-emerald-50 text-emerald-600' },
                  { label: 'Dinner Time', icon: '🍽️', color: 'bg-blue-50 text-blue-600' },
                  { label: 'First Dance', icon: '💃', color: 'bg-rose-50 text-rose-600' },
                  { label: 'Photo Time', icon: '📸', color: 'bg-purple-50 text-purple-600' },
                ].map((preset, i) => (
                  <button 
                    key={i} 
                    disabled={!isLive}
                    onClick={() => setAnnouncement(`Join us! ${preset.label} is about to begin.`)}
                    className={cn(
                      "p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95",
                      preset.color,
                      !isLive && "opacity-50 grayscale cursor-not-allowed"
                    )}
                  >
                    <span className="text-xl">{typeof preset.icon === 'string' ? preset.icon : preset.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-center">{preset.label}</span>
                  </button>
                ))}
              </div>
           </Card>

           <Card className="p-8 border-none shadow-sm">
             <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
               <span>Live Activity Feed</span>
               <Badge variant="success" className="bg-emerald-50 text-emerald-600 border-none">{isLive ? 'Real-time' : 'Paused'}</Badge>
             </h3>
             <div className="space-y-6">
               {recentActions.map((action, i) => (
                 <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={action.id} 
                  className="flex gap-4 group"
                 >
                   <div className="w-1 bg-slate-100 group-hover:bg-indigo-500 transition-colors rounded-full" />
                   <div className="flex-1">
                     <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-slate-900">{action.user}</h4>
                        <span className="text-[10px] font-medium text-slate-400">{action.time}</span>
                     </div>
                     <p className="text-sm text-slate-500">{action.description}</p>
                     <div className="mt-2 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-slate-50 text-slate-500 text-[9px]">{action.type}</Badge>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
             <Button variant="ghost" className="w-full mt-6 text-indigo-600 font-bold text-xs uppercase">View All Activity</Button>
           </Card>
        </div>

        {/* Live Controls */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-bold text-slate-900 mb-4">Live Guest Count</h3>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-5xl font-black text-indigo-600">42</span>
                <span className="text-slate-400 font-bold mb-2">/ 150</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Checked-in Guests</span>
                  <span className="text-slate-900 font-bold">28%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600" style={{ width: '28%' }} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-slate-900 mb-4">Quick Moderation</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Camera size={16} className="text-purple-600" />
                  </div>
                  <span className="text-sm font-semibold">Guest Uploads</span>
                </div>
                <Badge variant="success">Auto</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <MessageSquare size={16} className="text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold">Chat Wall</span>
                </div>
                <Badge variant="warning">Strict</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 gap-2">
              <Settings size={16} /> Moderation Settings
            </Button>
          </Card>

          <Card className="p-6 bg-indigo-600 text-white border-none shadow-xl shadow-indigo-600/20">
             <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={24} />
                <h3 className="font-bold">Host Device</h3>
             </div>
             <p className="text-indigo-100 text-xs mb-6">You are currently using this device as the master console. Keep it active for real-time sync.</p>
             <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest opacity-60">
               <span>Battery: 84%</span>
               <span className="flex items-center gap-1"><Clock size={10} /> 8:42 PM</span>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};