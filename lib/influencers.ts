import influencersData from './influencers.json';

export interface Influencer {
    id: string;
    name: string;
    url: string;
    platform: 'Instagram' | 'Threads' | 'Twitter' | 'Other';
    description: { ja: string; en: string };
    recommendations: {
        cafeId: string;
        quote?: { ja: string; en: string };
        sourceUrl?: string;
    }[];
}

export const influencers: Influencer[] = influencersData as Influencer[];
