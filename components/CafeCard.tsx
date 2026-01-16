"use client";

import { useLanguage } from "@/lib/language";
import { useFavorites } from "@/lib/favorites";
import { Cafe } from "@/types";
import { MapPin, Wifi, BatteryCharging, Coffee, Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CafeCard({ cafe }: { cafe: Cafe }) {
    const { language, t } = useLanguage();
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <Link href={`/cafe/${cafe.id}`} className="group block h-full">
            <div className="h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={cafe.imageUrl}
                        // @ts-ignore
                        alt={cafe.name[language]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                    {/* Favorite Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleFavorite(cafe.id);
                        }}
                        className="absolute right-3 top-3 z-10 rounded-full bg-white/20 p-2 backdrop-blur-md transition-all hover:bg-white/40 hover:scale-110"
                    >
                        <Heart
                            size={20}
                            className={`transition-colors ${isFavorite(cafe.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                        />
                    </button>

                    <div className="absolute bottom-3 left-3 text-white">
                        {/* @ts-ignore */}
                        <h3 className="text-lg font-bold flex items-center gap-1">
                            {cafe.name[language]}
                            {cafe.verified && (
                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white" title="Verified by Kazesift">
                                    ✓
                                </span>
                            )}
                        </h3>
                        <div className="flex items-center gap-1 text-xs opacity-90">
                            <MapPin size={12} />
                            {/* @ts-ignore */}
                            <span>{cafe.address[language]}</span>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {cafe.features.slice(0, 3).map((f) => (
                            <span key={f} className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-1 text-xs font-medium text-[var(--color-secondary)]">
                                {f === "Wi-Fi" && <Wifi size={10} />}
                                {f === "Power" && <BatteryCharging size={10} />}
                                {f === "Good Coffee" && <Coffee size={10} />}
                                {/* @ts-ignore */}
                                {t(`features_${f.toLowerCase().replace(" ", "").replace("-", "")}`) || f}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-gray-700">{cafe.rating.work_comfort}</span>
                            <span className="text-xs text-gray-400">/5 Comfort</span>
                        </span>
                        {cafe.googleMapRating && (
                            <span className="flex items-center gap-1 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-700">
                                <span className="font-bold">G</span> {cafe.googleMapRating}
                                <span className="text-blue-400">({cafe.googleMapReviews})</span>
                            </span>
                        )}
                    </div>

                    {cafe.kazesift_comment && (
                        <div className="mt-3 rounded-lg bg-gray-50 p-2 text-xs italic text-gray-600">
                            {/* @ts-ignore */}
                            " {cafe.kazesift_comment[language]} "
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
