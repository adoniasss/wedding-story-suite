import React from 'react';
import { 
  Shield, 
  UserPlus, 
  Settings, 
  Lock, 
  Eye, 
  Trash2, 
  CheckCircle2,
  AlertTriangle,
  Mail,
  MoreVertical
} from 'lucide-react';
import { Card, Button, Badge, Table, THead, TBody, TR, TH, TD, Input } from '../../components/ui';

const users = [
  { id: 1, name: 'Alex Rivera', role: 'Super Admin', email: 'alex@dwe.com', status: 'Active', access: 'Full' },
  { id: 2, name: 'Sarah Chen', role: 'Moderator', email: 'sarah.c@dwe.com', status: 'Active', access: 'Media Only' },
  { id: 3, name: 'Mike Johnson', role: 'Support', email: 'mike.j@dwe.com', status: 'Inactive', access: 'Read-only' },
  { id: 4, name: 'Emma Wilson', role: 'Billing', email: 'emma@dwe.com', status: 'Active', access: 'Billing & Settings' },
];

const AdminSettings = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Settings</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage administrative access and system-wide configurations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="space-y-1">
           <h3 className="text-lg font-bold text-slate-900 dark:text-white">User Roles & Access</h3>
           <p className="text-sm text-slate-500">Control who can access the admin dashboard and their permission levels.</p>
        </div>
        
        <Card className="lg:col-span-2 overflow-hidden">
           <div className="p-6 border-b dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <Shield className="text-indigo-600" size={20} />
                 <h4 className="font-bold">Admin Team</h4>
              </div>
              <Button size="sm" className="gap-2">
                 <UserPlus size={16} />
                 Invite Admin
              </Button>
           </div>
           <Table>
             <THead>
               <TR>
                 <TH>Admin</TH>
                 <TH>Role</TH>
                 <TH>Status</TH>
                 <TH className="text-right">Actions</TH>
               </TR>
             </THead>
             <TBody>
               {users.map((user) => (
                 <TR key={user.id}>
                   <TD>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-[10px]">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{user.name}</p>
                           <p className="text-[10px] text-slate-500 mt-1">{user.email}</p>
                        </div>
                     </div>
                   </TD>
                   <TD>
                     <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{user.role}</span>
                        <span className="text-[10px] text-slate-400">{user.access}</span>
                     </div>
                   </TD>
                   <TD>
                     <Badge variant={user.status === 'Active' ? 'success' : 'default'}>
                       {user.status}
                     </Badge>
                   </TD>
                   <TD className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><MoreVertical size={14} /></Button>
                   </TD>
                 </TR>
               ))}
             </TBody>
           </Table>
        </Card>
      </div>

      <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="space-y-1">
           <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Security</h3>
           <p className="text-sm text-slate-500">Global security policies and authentication settings.</p>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
           <Card className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                       <Lock size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 dark:text-white">Two-Factor Authentication</h4>
                       <p className="text-xs text-slate-500">Require all admin accounts to use 2FA.</p>
                    </div>
                 </div>
                 <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                 </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                       <Eye size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 dark:text-white">Audit Logs</h4>
                       <p className="text-xs text-slate-500">Store system activity logs for compliance.</p>
                    </div>
                 </div>
                 <Badge variant="info">90 Days</Badge>
              </div>
           </Card>

           <Card className="p-6 bg-rose-50 border-rose-100 dark:bg-rose-950/20 dark:border-rose-900/30">
              <div className="flex items-center gap-3 text-rose-700 dark:text-rose-400 mb-4">
                 <AlertTriangle size={20} />
                 <h4 className="font-bold">Danger Zone</h4>
              </div>
              <p className="text-sm text-rose-600 dark:text-rose-400 mb-6">
                 Careful! Actions in this section are irreversible and may affect all platform data.
              </p>
              <div className="flex flex-wrap gap-4">
                 <Button variant="danger" size="sm">Clear Temporary Assets</Button>
                 <Button variant="outline" size="sm" className="border-rose-200 text-rose-700 hover:bg-rose-100">Force System Maintenance</Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;