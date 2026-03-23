import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  Heart, 
  Lock, 
  Bell, 
  Globe, 
  CreditCard,
  Save,
  Camera,
  Trash2,
  Shield,
  Eye,
  EyeOff
} from 'lucide-react';
import { Card, Button, Input, Badge, cn } from '../../components/ui';
import { toast } from 'sonner';

export const ClientSettings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { name: 'Profile', icon: <User size={16} /> },
    { name: 'Wedding', icon: <Heart size={16} /> },
    { name: 'Privacy', icon: <Lock size={16} /> },
    { name: 'Billing', icon: <CreditCard size={16} /> },
  ];

  const handleSave = () => {
    toast.success('Settings updated successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
            <Settings className="text-slate-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-500">Manage your account preferences and wedding site visibility.</p>
          </div>
        </div>
        <Button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-700 border-none gap-2 shadow-lg shadow-indigo-600/20">
          <Save size={18} /> Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-3">
          <Card className="p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                  activeTab === tab.name 
                    ? "bg-indigo-600 text-white shadow-lg" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </Card>

          <div className="mt-6 p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
             <div className="flex items-center gap-3 mb-4">
                <Shield className="text-indigo-600" size={20} />
                <h4 className="font-bold text-slate-900">Pro Account</h4>
             </div>
             <p className="text-xs text-slate-500 mb-6">Your subscription is active until Oct 2025. Enjoy unlimited media storage.</p>
             <Button variant="outline" className="w-full bg-white border-indigo-200 text-indigo-600 hover:bg-white text-xs font-bold">Manage Plan</Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
           <Card className="p-8 border-none shadow-sm">
              {activeTab === 'Profile' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex flex-col sm:flex-row items-center gap-8 border-b border-slate-50 pb-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-xl ring-4 ring-white">
                        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/admin-avatar-abdd5994-1773884262127.webp" alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-lg border-4 border-white hover:scale-110 transition-transform">
                         <Camera size={16} />
                      </button>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                       <h3 className="text-xl font-bold text-slate-900">Fikerab & Fenan</h3>
                       <p className="text-slate-500">fikerab.fenan@example.com</p>
                       <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
                          <Badge variant="success" className="bg-indigo-50 text-indigo-600 border-none">Client Account</Badge>
                          <Badge variant="secondary" className="bg-slate-50 text-slate-400 border-none">Member since 2024</Badge>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                        <Input defaultValue="Fikerab & Fenan" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                        <Input defaultValue="fikerab.fenan@example.com" />
                     </div>
                     <div className="space-y-2 relative">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                        <Input type={showPassword ? 'text' : 'password'} defaultValue="••••••••••••" />
                        <button 
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-9 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                        <Input defaultValue="+251 911 223 344" />
                     </div>
                  </div>

                  <div className="pt-8 border-t border-slate-50">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <Bell size={18} className="text-amber-500" /> Notification Preferences
                    </h4>
                    <div className="space-y-4">
                       {[
                         { label: 'RSVP Updates', description: 'Get notified when a guest responds to your invite.', default: true },
                         { label: 'Media Uploads', description: 'Alerts for new photos uploaded by guests.', default: true },
                         { label: 'System Announcements', description: 'Important updates from the DWE platform.', default: false },
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                            <div>
                               <p className="text-sm font-bold text-slate-700">{item.label}</p>
                               <p className="text-xs text-slate-400">{item.description}</p>
                            </div>
                            <button className={cn("w-12 h-6 rounded-full transition-colors relative", item.default ? "bg-indigo-600" : "bg-slate-200")}>
                               <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white transition-all", item.default ? "right-1" : "left-1")} />
                            </button>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Wedding' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Wedding Custom URL</label>
                      <div className="flex gap-2">
                         <div className="bg-slate-100 border border-slate-200 px-4 flex items-center rounded-xl text-slate-400 font-medium">wedding.dwe.com/</div>
                         <Input defaultValue="fikerab-fenan" className="flex-1 font-bold text-indigo-600" />
                         <Button variant="outline"><Globe size={18} /></Button>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Official Wedding Date</label>
                         <Input type="date" defaultValue="2025-08-24" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Primary Language</label>
                         <select className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                            <option>English</option>
                            <option>Amharic</option>
                            <option>Oromo</option>
                         </select>
                      </div>
                   </div>

                   <div className="p-6 rounded-3xl border-2 border-dashed border-slate-200 space-y-4">
                      <h4 className="font-bold text-slate-900">Danger Zone</h4>
                      <p className="text-xs text-slate-500">Once you delete your wedding project, there is no going back. Please be certain.</p>
                      <Button variant="danger" className="bg-rose-50 text-rose-600 hover:bg-rose-100 border-none shadow-none gap-2">
                         <Trash2 size={16} /> Delete Wedding Project
                      </Button>
                   </div>
                </div>
              )}

              {activeTab === 'Privacy' && (
                 <div className="flex flex-col items-center justify-center py-20 text-center">
                    <Lock size={48} className="text-slate-200 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900">Security Settings</h3>
                    <p className="text-slate-500 max-w-sm mt-2">Manage your account security, two-factor authentication, and connected devices.</p>
                 </div>
              )}

              {activeTab === 'Billing' && (
                 <div className="flex flex-col items-center justify-center py-20 text-center">
                    <CreditCard size={48} className="text-slate-200 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900">Billing & Invoices</h3>
                    <p className="text-slate-500 max-w-sm mt-2">View your subscription history and download invoices for your records.</p>
                 </div>
              )}
           </Card>
        </div>
      </div>
    </div>
  );
};