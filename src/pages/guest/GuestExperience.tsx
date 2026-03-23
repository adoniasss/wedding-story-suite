import React, { useEffect } from 'react';
import Hero from '@/components/guest/Hero';
import Invitation from '@/components/guest/Invitation';
import SaveTheDate from '@/components/guest/SaveTheDate';
import Countdown from '@/components/guest/Countdown';
import EventTimeline from '@/components/guest/EventTimeline';
import LocationSection from '@/components/guest/LocationSection';
import LoveStory from '@/components/guest/LoveStory';
import UploadSection from '@/components/guest/UploadSection';
import GuestData from '@/components/guest/GuestData';
import RSVPSection from '@/components/guest/RSVPSection';
import Gallery from '@/components/guest/Gallery';
import GuestNavigation from '@/components/guest/GuestNavigation';
import { RoleSwitcher } from '@/components/shared/RoleSwitcher';

const GuestExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-rose-100 selection:text-rose-900 scroll-smooth">
      {/* SaaS Role Switcher - Top left for dev visibility */}
      <div className="fixed top-4 left-4 z-[110] pointer-events-auto">
        <RoleSwitcher />
      </div>

      {/* New Requested Floating Navigation */}
      <GuestNavigation />

      <main>
        {/* 1. Hero Page */}
        <section id="hero">
          <Hero />
        </section>

        {/* 2. Invitation Page */}
        <section id="invitation">
          <Invitation />
        </section>

        {/* 3. Save the Date */}
        <section id="save-the-date">
          <SaveTheDate />
        </section>

        {/* 4. Countdown */}
        <section id="countdown">
          <Countdown />
        </section>

        {/* 5. Timeline */}
        <section id="timeline">
          <EventTimeline />
        </section>

        {/* 6. Location/Map */}
        <section id="location">
          <LocationSection />
        </section>

        {/* 7. Love Story (Modal trigger inside) */}
        <section id="love-story">
          <LoveStory />
        </section>

        {/* 8. Cloud Interface */}
        <section id="cloud">
          <UploadSection />
          {/* Include Gallery to show shared memories */}
          <div className="bg-slate-50 pb-24">
            <Gallery />
          </div>
        </section>

        {/* 9. Guest Data */}
        <section id="guest-data">
          <GuestData />
        </section>

        {/* 10. RSVP */}
        <section id="rsvp">
          <RSVPSection />
        </section>
      </main>

      <footer className="py-24 px-6 bg-[#0F0F0F] text-white/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-xs mx-auto space-y-8 relative z-10">
          <h3 className="text-white text-4xl font-serif">S & J</h3>
          <p className="text-[10px] uppercase tracking-[0.5em] leading-loose">
            September 24th, 2025<br />
            Tuscany, Italy
          </p>
          <div className="pt-8">
             <span className="text-[10px] tracking-[0.3em] font-medium text-white/60">MADE WITH LOVE</span>
          </div>
          <div className="pt-10">
            <p className="text-[8px] tracking-[0.2em] font-medium opacity-30 uppercase">© 2025 Sarah & James • Digital Wedding Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestExperience;