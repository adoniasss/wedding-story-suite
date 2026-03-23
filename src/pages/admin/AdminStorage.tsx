import React from 'react';
import { 
  HardDrive, 
  Database, 
  Cloud, 
  Zap, 
  AlertCircle,
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  Package
} from 'lucide-react';
import { Card, Button, Badge, Table, THead, TBody, TR, TH, TD, cn } from '../../components/ui';

const weddingStorage = [
  { id: 1, wedding: 'Emily & John', used: '8.4 GB', limit: '10 GB', percentage: 84, status: 'warning' },
  { id: 2, wedding: 'Sarah & Michael', used: '24.2 GB', limit: '30 GB', percentage: 80, status: 'healthy' },
  { id: 3, wedding: 'Jessica & David', used: '1.2 GB', limit: '100 GB', percentage: 1, status: 'healthy' },
  { id: 4, wedding: 'Ashley & Chris', used: '9.8 GB', limit: '10 GB', percentage: 98, status: 'critical' },
];

const AdminStorage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Storage Management</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor infrastructure usage and per-client storage limits.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="secondary" className="gap-2">
              Optimize Assets
           </Button>
           <Button className="gap-2">
              Increase Capacity
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-6">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                 <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl text-indigo-600">
                    <Cloud size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Global Infrastructure</h3>
                    <p className="text-sm text-slate-500">AWS S3 Bucket: dwe-assets-prod</p>
                 </div>
              </div>
              <Badge variant="success">Stable</Badge>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                 <p className="text-xs font-bold text-slate-500 uppercase mb-1">Used Space</p>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white">2.42 TB</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                 <p className="text-xs font-bold text-slate-500 uppercase mb-1">Total Limit</p>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white">5.00 TB</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                 <p className="text-xs font-bold text-slate-500 uppercase mb-1">Monthly Growth</p>
                 <p className="text-2xl font-bold text-emerald-600">+12%</p>
              </div>
           </div>

           <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                 <span className="text-slate-700 dark:text-slate-300">Storage Utilization</span>
                 <span className="text-indigo-600">48.4%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-indigo-600 w-[48.4%]" />
              </div>
           </div>
        </Card>

        <div className="space-y-6">
           <Card className="p-6 bg-indigo-600 border-none shadow-xl shadow-indigo-500/20">
              <div className="flex items-center gap-3 text-white mb-6">
                 <Zap size={24} />
                 <h3 className="font-bold">Pro Tip: Auto-Compression</h3>
              </div>
              <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                 Enable smart asset compression to save up to 40% storage space without losing visible quality for wedding guests.
              </p>
              <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 border-none">Configure Settings</Button>
           </Card>
           
           <Card className="p-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Package Limits Reference</h3>
              <div className="space-y-4">
                 {[
                   { name: 'Basic', limit: '10GB', color: 'bg-slate-400' },
                   { name: 'Standard', limit: '30GB', color: 'bg-emerald-500' },
                   { name: 'Premium', limit: '100GB', color: 'bg-indigo-600' },
                 ].map((pkg) => (
                   <div key={pkg.name} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                         <div className={cn("w-2 h-2 rounded-full", pkg.color)} />
                         <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{pkg.name}</span>
                      </div>
                      <span className="text-sm font-medium text-slate-500">{pkg.limit}</span>
                   </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>

      <Card className="overflow-hidden border-none shadow-xl">
        <div className="p-6 border-b dark:border-slate-800 flex items-center justify-between">
           <h3 className="text-lg font-bold text-slate-900 dark:text-white">Per Wedding Usage</h3>
           <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">Recent Warnings</Button>
              <Button variant="secondary" size="sm">Sort by Size</Button>
           </div>
        </div>
        <Table>
          <THead>
            <TR>
              <TH>Wedding Project</TH>
              <TH>Space Used</TH>
              <TH>Utilization</TH>
              <TH>Status</TH>
              <TH className="text-right">Actions</TH>
            </TR>
          </THead>
          <TBody>
            {weddingStorage.map((item) => (
              <TR key={item.id}>
                <TD>
                  <p className="font-bold text-slate-900 dark:text-white">{item.wedding}</p>
                </TD>
                <TD>
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Database size={14} className="text-slate-400" />
                    {item.used} / {item.limit}
                  </div>
                </TD>
                <TD className="w-48">
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={cn(
                      "h-full",
                      item.status === 'critical' ? "bg-rose-500" :
                      item.status === 'warning' ? "bg-amber-500" : "bg-emerald-500"
                    )} style={{ width: `${item.percentage}%` }} />
                  </div>
                </TD>
                <TD>
                  <Badge variant={item.status === 'critical' ? 'error' : item.status === 'warning' ? 'warning' : 'success'}>
                    {item.percentage}% Full
                  </Badge>
                </TD>
                <TD className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">Upgrade</Button>
                    <Button variant="ghost" size="sm"><MoreVertical size={14} /></Button>
                  </div>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminStorage;