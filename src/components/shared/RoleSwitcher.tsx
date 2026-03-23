import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heart, 
  Users, 
  Menu,
  X,
  ChevronRight,
  LayoutGrid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { UserRole } from '../../types';

interface RoleSwitcherProps {
  className?: string;
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const roles = [
    { id: 'ADMIN' as UserRole, label: 'Admin Panel', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50', path: '/admin', description: 'System management & moderation' },
    { id: 'CLIENT' as UserRole, label: 'Client Dashboard', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50', path: '/client', description: 'Wedding planning & guest list' },
    { id: 'GUEST' as UserRole, label: 'Guest Experience', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50', path: '/guest', description: 'Public wedding website view' },
  ];

  // Determine current role based on path
  const currentRole = roles.find(r => 
    location.pathname === r.path || location.pathname.startsWith(`${r.path}/`)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoleChange = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative inline-block", className)} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center p-2 rounded-xl transition-all duration-200 border",
          isOpen 
            ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
        )}
        title="Switch Interface"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-[100]"
          >
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2 mb-1">
                <LayoutGrid size={14} className="text-indigo-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Interface Switcher</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Switch between management roles</p>
            </div>

            <div className="p-2">
              {roles.map((role) => {
                const isActive = currentRole?.id === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => handleRoleChange(role.path)}
                    className={cn(
                      "w-full flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group relative",
                      isActive 
                        ? "bg-slate-50 border border-slate-200" 
                        : "hover:bg-slate-50 border border-transparent"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-lg transition-colors shrink-0",
                      isActive ? "bg-white shadow-sm" : role.bg
                    )}>
                      <role.icon size={18} className={role.color} />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "text-sm font-bold truncate",
                          isActive ? "text-slate-900" : "text-slate-700"
                        )}>
                          {role.label}
                        </span>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium truncate group-hover:text-slate-600">
                        {role.description}
                      </p>
                    </div>
                    {!isActive && (
                      <ChevronRight size={14} className="mt-1 text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Current Session</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-slate-600">Active</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};