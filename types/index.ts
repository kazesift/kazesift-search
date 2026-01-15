export type Feature = "Wi-Fi" | "Power" | "Silence" | "Meeting" | "Late Night" | "Good Coffee" | "View" | "Takeout" | "Morning" | "Vintage" | "Classic" | "Smoking" | "Cozy" | "Food" | "Parking" | "Pet Friendly" | "Sweets" | "Instagrammable" | "Coffee Specialty" | "No Clock";

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
  googleMapRating?: number;
  googleMapReviews?: number;
  googleMapsUrl?: string;
  reviewHighlights?: { ja: string[]; en: string[] };
  holidayStr?: { ja: string; en: string }; // e.g. "Wednesday", "Irregular"
  openDate?: string; // e.g. "2025-05" (YYYY-MM)
  lat?: number;
  lng?: number;
}
