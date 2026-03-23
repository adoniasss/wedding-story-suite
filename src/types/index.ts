export type UserRole = 'ADMIN' | 'CLIENT' | 'GUEST';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email?: string;
}

export interface Wedding {
  id: string;
  slug: string;
  coupleNames: string;
  weddingDate: string;
  venue: string;
  status: 'active' | 'archived' | 'pending';
  guestCount: number;
  rsvpCount: number;
  package: 'Basic' | 'Standard' | 'Premium';
  heroImage: string;
}

export interface Guest {
  id: string;
  name: string;
  group: 'Family' | 'Friends' | 'VIP';
  status: 'pending' | 'attending' | 'declined';
  plusOne: boolean;
  email: string;
}

export interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  uploadedBy: string;
  timestamp: string;
  status: 'approved' | 'pending';
}