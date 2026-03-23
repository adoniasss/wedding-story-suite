import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { DashboardLayout } from './layouts/DashboardLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminClients from './pages/admin/AdminClients';
import AdminWeddings from './pages/admin/AdminWeddings';
import AdminGuests from './pages/admin/AdminGuests';
import AdminMediaModeration from './pages/admin/AdminMediaModeration';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminStorage from './pages/admin/AdminStorage';
import AdminSettings from './pages/admin/AdminSettings';

import { ClientDashboard } from './pages/client/ClientDashboard';
import { ClientBuilder } from './pages/client/ClientBuilder';
import { ClientGuests } from './pages/client/ClientGuests';
import { ClientMedia } from './pages/client/ClientMedia';
import { ClientLoveStory } from './pages/client/ClientLoveStory';
import { ClientEventTimeline } from './pages/client/ClientEventTimeline';
import { ClientRSVP } from './pages/client/ClientRSVP';
import { ClientLiveMode } from './pages/client/ClientLiveMode';
import { ClientArchive } from './pages/client/ClientArchive';
import { ClientAnalytics } from './pages/client/ClientAnalytics';
import { ClientSettings } from './pages/client/ClientSettings';

import GuestExperience from './pages/guest/GuestExperience';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-white">
        <Toaster position="top-right" richColors />
        
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardLayout role="ADMIN" />}>
            <Route index element={<AdminDashboard />} />
            <Route path="clients" element={<AdminClients />} />
            <Route path="weddings" element={<AdminWeddings />} />
            <Route path="guests" element={<AdminGuests />} />
            <Route path="media" element={<AdminMediaModeration />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="storage" element={<AdminStorage />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Client Routes */}
          <Route path="/client" element={<DashboardLayout role="CLIENT" />}>
            <Route index element={<ClientDashboard />} />
            <Route path="builder" element={<ClientBuilder />} />
            <Route path="love-story" element={<ClientLoveStory />} />
            <Route path="timeline" element={<ClientEventTimeline />} />
            <Route path="guests" element={<ClientGuests />} />
            <Route path="rsvp" element={<ClientRSVP />} />
            <Route path="media" element={<ClientMedia />} />
            <Route path="live-mode" element={<ClientLiveMode />} />
            <Route path="archive" element={<ClientArchive />} />
            <Route path="analytics" element={<ClientAnalytics />} />
            <Route path="settings" element={<ClientSettings />} />
          </Route>

          {/* Guest Routes */}
          <Route path="/guest" element={<GuestExperience />} />

          {/* Fallback */}
          <Route path="/" element={<Navigate to="/guest" replace />} />
          <Route path="*" element={<Navigate to="/guest" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;