"use client";

import dynamic from 'next/dynamic';
import { Cafe } from '@/types';

// Dynamically import the map to avoid SSR issues with Leaflet
const CafeMap = dynamic(() => import('./CafeMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-gray-400">Loading Map...</div>
});

export default function MapWrapper({ cafes }: { cafes: Cafe[] }) {
    return <CafeMap cafes={cafes} />;
}
