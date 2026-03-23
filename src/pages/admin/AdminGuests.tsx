import React, { useState } from 'react';
import { 
  Search, 
  Download, 
  Upload, 
  Filter, 
  MoreVertical, 
  Users, 
  CheckCircle, 
  XCircle,
  Clock,
  Mail,
  Smartphone
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

const guests = [
  { id: 1, name: 'Alice Thompson', wedding: 'Emily & John', group: 'VIP', rsvp: 'Confirmed', contact: 'alice@example.com' },
  { id: 2, name: 'Robert Blake', wedding: 'Emily & John', group: 'Family', rsvp: 'Confirmed', contact: '+1 234 567 890' },
  { id: 3, name: 'Catherine Low', wedding: 'Sarah & Michael', group: 'Friends', rsvp: 'Pending', contact: 'cat@example.com' },
  { id: 4, name: 'David Gahan', wedding: 'Sarah & Michael', group: 'Family', rsvp: 'Declined', contact: 'david@example.com' },
  { id: 5, name: 'Elena Fisher', wedding: 'Emily & John', group: 'Friends', rsvp: 'Confirmed', contact: 'elena@example.com' },
];

const AdminGuests = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Guest Management</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor RSVPs and guest lists across all projects.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="secondary" className="gap-2">
              <Upload size={18} />
              Import CSV
           </Button>
           <Button variant="secondary" className="gap-2">
              <Download size={18} />
              Export
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="p-6">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Overall RSVP Rate</p>
           <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">84%</h3>
              <div className="flex items-center text-emerald-500 text-xs font-bold">
                +2.4% <Users size={12} className="ml-1" />
              </div>
           </div>
           <div className="mt-4 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[84%]" />
           </div>
        </Card>
        
        <Card className="p-6">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Guests</p>
           <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12,482</h3>
           <p className="text-xs text-slate-400 mt-2">Across 124 active weddings</p>
        </Card>

        <Card className="p-6">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Pending RSVPs</p>
           <h3 className="text-3xl font-bold text-amber-500">1,240</h3>
           <p className="text-xs text-slate-400 mt-2">Reminder sent to 840 guests</p>
        </Card>

        <Card className="p-6">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Checked In</p>
           <h3 className="text-3xl font-bold text-indigo-600">4,820</h3>
           <p className="text-xs text-slate-400 mt-2">System auto-validation active</p>
        </Card>
      </div>

      <Card className="overflow-hidden border-none shadow-xl">
        <div className="p-4 lg:p-6 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search guests, weddings or groups..." 
              className="pl-10 h-11 bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm font-semibold px-4 h-11 focus:ring-2 focus:ring-indigo-500">
              <option>All Groups</option>
              <option>VIP</option>
              <option>Family</option>
              <option>Friends</option>
            </select>
            <Button variant="secondary" className="gap-2 h-11 px-4">
              <Filter size={18} />
              More Filters
            </Button>
          </div>
        </div>

        <Table>
          <THead>
            <TR>
              <TH>Guest Name</TH>
              <TH>Wedding Project</TH>
              <TH>Group</TH>
              <TH>RSVP Status</TH>
              <TH>Contact</TH>
              <TH className="text-right">Actions</TH>
            </TR>
          </THead>
          <TBody>
            {guests.map((guest) => (
              <TR key={guest.id}>
                <TD>
                  <p className="font-bold text-slate-900 dark:text-white">{guest.name}</p>
                </TD>
                <TD>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-sm font-medium">{guest.wedding}</span>
                  </div>
                </TD>
                <TD>
                  <Badge variant={guest.group === 'VIP' ? 'info' : guest.group === 'Family' ? 'default' : 'secondary'}>
                    {guest.group}
                  </Badge>
                </TD>
                <TD>
                  <div className="flex items-center gap-2">
                    {guest.rsvp === 'Confirmed' ? <CheckCircle size={14} className="text-emerald-500" /> :
                     guest.rsvp === 'Pending' ? <Clock size={14} className="text-amber-500" /> :
                     <XCircle size={14} className="text-rose-500" />}
                    <span className="text-sm font-medium">{guest.rsvp}</span>
                  </div>
                </TD>
                <TD>
                  <div className="flex items-center gap-2 text-slate-500">
                    {guest.contact.includes('@') ? <Mail size={14} /> : <Smartphone size={14} />}
                    <span className="text-xs">{guest.contact}</span>
                  </div>
                </TD>
                <TD className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical size={14} />
                  </Button>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminGuests;