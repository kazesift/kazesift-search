export type Feature =
  | "Wi-Fi"
  | "Power"
  | "Good Coffee"
  | "Sweets"
  | "Lunch"
  | "Dinner"
  | "Alcohol"
  | "Simé Parfait"
  | "Morning"
  | "Takeout"
  | "Roastery"
  | "Good View"
  | "Terrace"
  | "Book Cafe"
  | "Gallery"
  | "Music"
  | "Pet Friendly"
  | "Late Night"
  | "Smoke Friendly"
  | "Review High"
  | "Work Friendly"
  | "Date Spot"
  | "Solo Friendly"
  | "Parking"
  | "Decaf"
  | "Vegan / Vegetarian"
  | "Matcha"
  | "Bread / Bakery"
  | "Japanese Sweets"
  | "Organic"
  | "Kids Friendly"
  | "Barrier Free"
  | "Credit Card"
  | "E-Money"
  | "English Menu"
  | "Vintage"
  | "Instagrammable"
  | "Silent"
  | "Subscription"
  | "Meeting"
  | "Study"
  | "Cozy"
  | "Silence"
  | "Food"
  | "Classic"
  | "No Smoking"
  | "Coworking"
  | "Refill Coffee"
  | "Hideaway"
  | "Sofa"
  | "Spacious"
  | "New Open"
  | "Healthy"
  | "View"
  | "Smoking"
  | "Coffee Specialty"
  | "No Clock"
  | "Safe"
  | "Free";

export interface Cafe {
  id: string;
  name: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  area: {
    ja: string;
    en: string;
  };
  address: {
    ja: string;
    en: string;
  };
  imageUrl: string;
  galleryImages?: string[];
  features: Feature[];
  rating: {
    work_comfort: number; // 1-5
    coffee: number;
    vibe: number;
  };
  kazesift_comment: {
    ja: string;
    en: string;
  };
  open_hours: string;
  officialUrl?: string;
  instagramUrl?: string;
  placeId?: string;
  googleMapRating?: number;
  googleMapReviews?: number;
  googleMapsUrl?: string;
  reviewHighlights?: { ja: string[]; en: string[] };
  holidayStr?: { ja: string; en: string }; // e.g. "Wednesday", "Irregular"
  openDate?: string; // e.g. "2025-05" (YYYY-MM)
  lat?: number;
  lng?: number;
}
