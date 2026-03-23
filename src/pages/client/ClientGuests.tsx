import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Download, 
  Search, 
  Filter, 
  MoreVertical, 
  Share2, 
  QrCode, 
  Copy,
  MessageCircle,
  Send,
  UserPlus
} from 'lucide-react';
import { Card, Button, Input, Badge, Table, THead, TBody, TR, TH, TD, cn } from '../../components/ui';
import { toast } from 'sonner';

interface Guest {
  id: string;
  name: string;
  group: string;
  status: 'Attending' | 'Declined' | 'Pending';
  email: string;
  plusOne: boolean;
}

export const ClientGuests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [guests, setGuests] = useState<Guest[]>([
    { id: '1', name: 'Abebe Bikila', group: 'Family', status: 'Attending', email: 'abebe@example.com', plusOne: true },
    { id: '2', name: 'Sara Tesfaye', group: 'Friends', status: 'Pending', email: 'sara@example.com', plusOne: false },
    { id: '3', name: 'Dawit Isaac', group: 'VIP', status: 'Declined', email: 'dawit@example.com', plusOne: true },
    { id: '4', name: 'Helen Berhe', group: 'Family', status: 'Attending', email: 'helen@example.com', plusOne: false },
    { id: '5', name: 'Yared Negu', group: 'Friends', status: 'Pending', email: 'yared@example.com', plusOne: true },
  ]);

  const invitationLink = "https://wedding.dwe.com/fikerab-fenan/invite";

  const copyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    toast.success('Invitation link copied to clipboard!');
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Attending': return 'success';
      case 'Declined': return 'error';
      default: return 'warning';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Guest Management</h1>
          <p className="text-slate-500">Keep track of your guests and RSVPs in one place.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Download size={18} /> Export List
          </Button>
          <Button className="gap-2 bg-indigo-600">
            <UserPlus size={18} /> Add Guest
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Invitation Sharing Card */}
        <Card className="p-6 lg:col-span-1 border-none shadow-sm bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
              <Share2 size={20} />
            </div>
            <h3 className="font-bold text-lg">Invite Guests</h3>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-100 mb-3">Share Your Link</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-white/10 rounded-lg px-3 py-2 text-xs truncate border border-white/10">
                  {invitationLink}
                </div>
                <button onClick={copyLink} className="p-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors shadow-lg">
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-full text-xs">
                <MessageCircle size={14} className="mr-2" /> WhatsApp
              </Button>
              <Button variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-full text-xs">
                <Send size={14} className="mr-2" /> Telegram
              </Button>
            </div>

            <div className="pt-4 flex flex-col items-center justify-center border-t border-white/10">
              <div className="w-24 h-24 bg-white p-2 rounded-xl mb-3 shadow-2xl">
                <QrCode className="w-full h-full text-indigo-600" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-100">Download QR Code</p>
            </div>
          </div>
        </Card>

        {/* Guest List Card */}
        <Card className="p-0 lg:col-span-2 border-none shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input 
                placeholder="Search guests..." 
                className="pl-10 bg-slate-50 border-none shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-slate-500 font-bold gap-2">
                <Filter size={14} /> Filter
              </Button>
              <div className="h-4 w-[1px] bg-slate-200 mx-1">{" "}</div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Total: <span className="text-slate-900">{guests.length}</span>
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <Table>
              <THead>
                <TR>
                  <TH className="text-[10px] uppercase tracking-widest">Name</TH>
                  <TH className="text-[10px] uppercase tracking-widest">Group</TH>
                  <TH className="text-[10px] uppercase tracking-widest">Plus One</TH>
                  <TH className="text-[10px] uppercase tracking-widest">Status</TH>
                  <TH className="w-10">{" "}</TH>
                </TR>
              </THead>
              <TBody>
                {guests.map((guest) => (
                  <TR key={guest.id}>
                    <TD>
                      <div>
                        <p className="font-bold text-slate-900">{guest.name}</p>
                        <p className="text-xs text-slate-500">{guest.email}</p>
                      </div>
                    </TD>
                    <TD>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none">{guest.group}</Badge>
                    </TD>
                    <TD>
                      <span className={cn("text-xs font-bold", guest.plusOne ? "text-emerald-600" : "text-slate-400")}>
                        {guest.plusOne ? 'Yes' : 'No'}
                      </span>
                    </TD>
                    <TD>
                      <Badge variant={getStatusVariant(guest.status)}>{guest.status}</Badge>
                    </TD>
                    <TD>
                      <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};