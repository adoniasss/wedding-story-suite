import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  ExternalLink,
  Edit2,
  Trash2,
  CheckCircle,
  Clock,
  Ban
} from 'lucide-react';
import { 
  Card, 
  Button, 
  Input, 
  Badge, 
  Table, 
  THead, 
  TBody, 
  TR, 
  TH, 
  TD 
} from '../../components/ui';

const clients = [
  { id: 1, bride: 'Emily Smith', groom: 'John Wilson', email: 'emily.w@example.com', package: 'Premium', status: 'Active', paid: 'Paid', date: '2024-06-15' },
  { id: 2, bride: 'Sarah Johnson', groom: 'Michael Brown', email: 'sarah.j@example.com', package: 'Standard', status: 'Active', paid: 'Partial', date: '2024-08-22' },
  { id: 3, bride: 'Jessica Miller', groom: 'David Davis', email: 'jess.m@example.com', package: 'Basic', status: 'Pending', paid: 'Unpaid', date: '2024-09-10' },
  { id: 4, bride: 'Ashley Taylor', groom: 'Chris Anderson', email: 'ashley.t@example.com', package: 'Premium', status: 'Completed', paid: 'Paid', date: '2023-12-05' },
  { id: 5, bride: 'Megan Martinez', groom: 'Robert White', email: 'megan.m@example.com', package: 'Standard', status: 'Active', paid: 'Paid', date: '2024-07-30' },
];

const AdminClients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Client Management</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your clients and their subscription details.</p>
        </div>
        <Button className="gap-2 shadow-lg shadow-indigo-500/20">
          <Plus size={18} />
          Add New Client
        </Button>
      </div>

      <Card className="overflow-hidden border-none shadow-xl">
        <div className="p-4 lg:p-6 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search by name, email or wedding date..." 
              className="pl-10 h-11 bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="gap-2">
              <Filter size={18} />
              Filters
            </Button>
            <Button variant="secondary">Export CSV</Button>
          </div>
        </div>

        <Table>
          <THead>
            <TR>
              <TH>Client / Couple</TH>
              <TH>Package</TH>
              <TH>Status</TH>
              <TH>Payment</TH>
              <TH>Wedding Date</TH>
              <TH className="text-right">Actions</TH>
            </TR>
          </THead>
          <TBody>
            {clients.map((client) => (
              <TR key={client.id}>
                <TD>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 font-bold text-xs border border-slate-200">
                      {client.bride[0]}{client.groom[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{client.bride} & {client.groom}</p>
                      <p className="text-xs text-slate-500">{client.email}</p>
                    </div>
                  </div>
                </TD>
                <TD>
                  <Badge variant={client.package === 'Premium' ? 'info' : client.package === 'Standard' ? 'default' : 'warning'}>
                    {client.package}
                  </Badge>
                </TD>
                <TD>
                  <div className="flex items-center gap-2">
                    {client.status === 'Active' ? <CheckCircle size={14} className="text-emerald-500" /> :
                     client.status === 'Pending' ? <Clock size={14} className="text-amber-500" /> :
                     <Ban size={14} className="text-slate-400" />}
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{client.status}</span>
                  </div>
                </TD>
                <TD>
                  <Badge variant={client.paid === 'Paid' ? 'success' : client.paid === 'Partial' ? 'warning' : 'error'}>
                    {client.paid}
                  </Badge>
                </TD>
                <TD>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {new Date(client.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </TD>
                <TD className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit2 size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400">
                      <ExternalLink size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-rose-500 hover:text-rose-600 hover:bg-rose-50">
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>

        <div className="p-4 border-t dark:border-slate-800 flex items-center justify-between">
           <p className="text-xs text-slate-500">Showing 5 of 124 clients</p>
           <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" disabled>Previous</Button>
              <Button variant="secondary" size="sm">Next</Button>
           </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminClients;