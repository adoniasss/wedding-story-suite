import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Heart, 
  Settings, 
  Bell, 
  Menu, 
  X,
  LogOut,
  BarChart3,
  Image as ImageIcon,
  HardDrive,
  Sun,
  Moon,
  ShieldCheck,
  Search,
  Calendar,
  PenTool,
  BookOpen,
  Camera,
  Archive,
  Zap
} from 'lucide-react';
import { cn, Button } from '../components/ui';
import { RoleSwitcher } from '../components/shared/RoleSwitcher';

export const DashboardLayout = ({ role }: { role: 'ADMIN' | 'CLIENT' }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const adminMenu = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Clients', href: '/admin/clients', icon: Users },
    { name: 'Weddings', href: '/admin/weddings', icon: Heart },
    { name: 'Guests', href: '/admin/guests', icon: ShieldCheck },
    { name: 'Media Moderation', href: '/admin/media', icon: ImageIcon },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Storage', href: '/admin/storage', icon: HardDrive },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const clientMenu = [
    { name: 'Dashboard', href: '/client', icon: LayoutDashboard },
    { name: 'Page Builder', href: '/client/builder', icon: PenTool },
    { name: 'Love Story', href: '/client/love-story', icon: BookOpen },
    { name: 'Timeline', href: '/client/timeline', icon: Calendar },
    { name: 'Guest Management', href: '/client/guests', icon: Users },
    { name: 'RSVP Center', href: '/client/rsvp', icon: BarChart3 },
    { name: 'Media Gallery', href: '/client/media', icon: ImageIcon },
    { name: 'Live Wedding', href: '/client/live-mode', icon: Zap },
    { name: 'Memories Archive', href: '/client/archive', icon: Archive },
    { name: 'Analytics', href: '/client/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/client/settings', icon: Settings },
  ];

  const menu = role === 'ADMIN' ? adminMenu : clientMenu;

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className={cn("min-h-screen flex transition-colors duration-300", isDarkMode ? "dark bg-slate-950" : "bg-slate-50")}>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 w-64 border-r z-50 transform transition-all duration-300 lg:translate-x-0 shadow-2xl lg:shadow-none",
        isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Heart className="text-white fill-white" size={20} />
              </div>
              <div>
                <h1 className={cn("text-lg font-bold leading-none", isDarkMode ? "text-white" : "text-slate-900")}>
                  DWE {role === 'ADMIN' ? 'Admin' : 'Panel'}
                </h1>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">Platform v1.0</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
            {menu.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/admin' && item.href !== '/client' && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all group",
                    isActive 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                      : isDarkMode 
                        ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200" 
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 transition-transform", !isActive && "group-hover:scale-110")} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 mt-auto">
            <div className={cn("p-4 rounded-2xl", isDarkMode ? "bg-slate-800" : "bg-slate-100")}>
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs border-2 border-white shadow-sm">
                    {role === 'ADMIN' ? 'AD' : 'JD'}
                  </div>
                  <div className="min-w-0">
                    <p className={cn("text-xs font-bold truncate", isDarkMode ? "text-white" : "text-slate-900")}>
                      {role === 'ADMIN' ? 'Super Admin' : 'Fikerab & Fenan'}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate uppercase tracking-tighter">Client Account</p>
                  </div>
               </div>
               <button className={cn(
                 "flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-bold transition-all",
                 isDarkMode ? "bg-slate-700 text-slate-300 hover:bg-rose-500/10 hover:text-rose-400" : "bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 shadow-sm"
               )}>
                 <LogOut size={14} />
                 Sign Out
               </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className={cn(
          "h-20 flex items-center justify-between px-4 lg:px-8 border-b shrink-0 transition-all backdrop-blur-md sticky top-0 z-30",
          isDarkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"
        )}>
          <div className="flex items-center gap-4">
            {/* SaaS Interface Switcher (New Position) */}
            <RoleSwitcher />

            {/* Mobile Sidebar Toggle */}
            <button 
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                isDarkMode ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"
              )}
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 hidden lg:block mx-1" />

            <div className="relative hidden sm:block w-72">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                type="text" 
                placeholder="Search for guests or settings..." 
                className={cn(
                  "w-full pl-10 pr-4 py-2 rounded-xl text-sm border-none focus:ring-2 focus:ring-indigo-500",
                  isDarkMode ? "bg-slate-900 text-slate-200 placeholder:text-slate-600" : "bg-slate-100 text-slate-900 placeholder:text-slate-400"
                )}
               />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={cn(
                "p-2.5 rounded-xl transition-all",
                isDarkMode ? "bg-slate-800 text-yellow-400 hover:bg-slate-700 shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200 shadow-sm"
              )}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className={cn(
              "p-2.5 rounded-xl transition-all relative",
              isDarkMode ? "bg-slate-800 text-slate-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}>
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-800" />
            </button>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1" />
            
            <div className="flex items-center gap-3 pl-2">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md ring-2 ring-indigo-500/20">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a7b972b6-9f5e-435f-998a-7313f9a25d3c/admin-avatar-abdd5994-1773884262127.webp" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-[1600px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};