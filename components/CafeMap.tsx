"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Cafe } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import L from 'leaflet';
import { useLanguage } from "@/lib/language";
import { estimateSapporoCoordinate } from "@/lib/sapporo-grid";
import { trackEvent } from '@/lib/analytics';

// Fix Leaflet icon issue in Next.js
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center);
    }, [center, map]);
    return null;
}


export default function CafeMap({ cafes }: { cafes: Cafe[] }) {
    const { language } = useLanguage();
    const router = useRouter();
    // Default to Sapporo center
    const center: [number, number] = [43.0618, 141.3545];


    return (
        <MapContainer
            center={center}
            zoom={13}
            style={{ height: "100%", width: "100%", borderRadius: "0.75rem", zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater center={center} />

            {cafes.map((cafe) => {
                // Priority 1: Use real coordinates if available
                let lat = cafe.lat;
                let lng = cafe.lng;
                let isEstimated = false;

                // Priority 2: Estimate from Address (Sapporo Grid Logic)
                if (!lat || !lng) {
                    const estimated = estimateSapporoCoordinate(cafe.address.ja);
                    if (estimated) {
                        lat = estimated.lat;
                        lng = estimated.lng;
                        isEstimated = true;
                    }
                }

                // Priority 3: Fallback to pseudo-random distribution (if address parse fails)
                if (!lat || !lng) {
                    isEstimated = true; // Still marked as approximate/random
                    const idNum = parseInt(cafe.id) || 0;
                    lat = 43.0618 + (Math.sin(idNum * 12.34) * 0.015);
                    lng = 141.3545 + (Math.cos(idNum * 56.78) * 0.025);
                }

                return (
                    <Marker key={cafe.id} position={[lat, lng]} icon={icon}>
                        <Popup>
                            <div className="text-center">
                                <strong className="block text-sm mb-1">{cafe.name[language]}</strong>
                                {isEstimated && (
                                    <p className="text-[10px] text-orange-600 font-bold mb-1">
                                        ※住所から推定した位置 (Approx.)
                                    </p>
                                )}
                                <div
                                    onClick={() => {
                                        trackEvent({
                                            action: 'view_cafe',
                                            category: 'MapPopup',
                                            label: cafe.name.en,
                                            cafeId: cafe.id
                                        });
                                        router.push(`/cafe/${cafe.id}`);
                                    }}
                                    className="text-blue-500 text-xs underline cursor-pointer hover:text-blue-700"
                                >
                                    {language === "ja" ? "詳細を見る" : "View Details"}
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}
