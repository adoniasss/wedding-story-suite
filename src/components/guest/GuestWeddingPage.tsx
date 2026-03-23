import React from 'react';
import GuestExperience from '@/pages/guest/GuestExperience';

// This component acts as the main container for the guest wedding page experience.
// It can handle specific guest-link validation or routing logic if needed.
const GuestWeddingPage = () => {
  return (
    <div className="guest-wedding-page-container">
      <GuestExperience />
    </div>
  );
};

export default GuestWeddingPage;