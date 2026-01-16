"use client";

import React from 'react';
import { cafes } from '@/lib/data';
import { useLanguage } from '@/lib/language';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CommentSection from '@/components/CommentSection';
import { trackEvent } from '@/lib/analytics';

export function CafeDetailClient({ id }: { id: string }) {
    const { language, t } = useLanguage();
    const cafe = cafes.find((c) => c.id === id);

    if (!cafe) {
        notFound();
        return null;
    }

    // Track page view
    React.useEffect(() => {
        if (cafe) {
            trackEvent({
                action: 'view_cafe',
                category: 'Cafe',
                label: cafe.name.en,
                value: 1,
                cafeId: cafe.id
            });
        }
    }, [cafe]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Image */}
            <div className="relative h-[40vh] w-full md:h-[50vh]">
                <img
                    src={cafe.imageUrl}
                    alt={cafe.name[language]}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Link
                    href="/"
                    className="absolute left-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-all hover:bg-white/40"
                >
                    ← {t("backToHome")}
                </Link>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white md:p-12">
                    <div className="container mx-auto">
                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {cafe.features.map((feature) => (
                                <span
                                    key={feature}
                                    className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-md"
                                >
                                    {/* @ts-ignore */}
                                    {t(`features_${feature.toLowerCase().replace(" ", "")}`) || feature}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl font-bold md:text-5xl">{cafe.name[language]}</h1>
                        <p className="mt-2 text-lg opacity-90">{cafe.area[language]}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 py-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Kazesift Comment */}
                        <div className="rounded-2xl border border-[var(--color-secondary)]/20 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 flex items-center font-bold text-[var(--color-primary)]">
                                <span className="mr-2 rounded-full bg-[var(--color-secondary)] px-2 py-1 text-xs text-white">
                                    Kazesift's Eye
                                </span>
                                {t("comment")}
                            </h3>
                            <p className="leading-relaxed text-gray-700">{cafe.kazesift_comment[language]}</p>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-b pb-2">About</h3>
                            <p className="text-gray-600 leading-relaxed">{cafe.description[language]}</p>
                        </div>

                        {/* Ratings */}
                        <div>
                            <h3 className="text-xl font-bold border-b pb-4 mb-4">{t("workComfort")}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: t("workComfort"), score: cafe.rating.work_comfort },
                                    { label: t("coffee"), score: cafe.rating.coffee },
                                    { label: t("vibe"), score: cafe.rating.vibe },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white p-4 rounded-xl border text-center">
                                        <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                                        <div className="text-2xl font-bold text-[var(--color-primary)]">
                                            {"★".repeat(stat.score)}
                                            <span className="text-gray-300">{"★".repeat(5 - stat.score)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Review Highlights */}
                        {cafe.reviewHighlights && cafe.reviewHighlights[language] && (
                            <div>
                                <h3 className="mb-4 text-xl font-bold border-b pb-2">{t("userVoice")}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cafe.reviewHighlights[language].map((highlight, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                                            💬 {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Comment Section (MVP) */}
                        <CommentSection cafeId={cafe.id} />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Info Card */}
                        <div className="rounded-2xl border bg-white p-6 shadow-sm sticky top-8">
                            <h3 className="mb-4 font-bold text-gray-900">Information</h3>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="font-semibold text-gray-500 mb-1">Open Hours</div>
                                    <div>{cafe.open_hours}</div>
                                    {cafe.holidayStr && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {language === 'ja' ? `定休日: ${cafe.holidayStr.ja}` : `Closed: ${cafe.holidayStr.en}`}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="font-semibold text-gray-500 mb-1">Address</div>
                                    <div>{cafe.address[language]}</div>
                                </div>

                                {/* Google Map Logic */}
                                {cafe.googleMapRating && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-gray-700">Google Maps</span>
                                            <span className="text-yellow-500 font-bold">★ {cafe.googleMapRating}</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            {cafe.googleMapReviews} reviews
                                        </div>
                                        {cafe.googleMapsUrl && (
                                            <div className="space-y-2">
                                                <a
                                                    href={cafe.googleMapsUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full text-center bg-white border border-gray-300 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                                                >
                                                    {t("viewOnGoogleMaps")}
                                                </a>
                                                <a
                                                    href={`${cafe.googleMapsUrl}&reviews=1`} // Trying to trigger reviews, or just use same URL with different label for UI
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full text-center text-[var(--color-primary)] bg-blue-50 border border-blue-100 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                                                >
                                                    ⭐️ {language === "ja" ? "Googleの口コミを見る" : "See Google Reviews"}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {cafe.officialUrl && (
                                    <a
                                        href={cafe.officialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity"
                                    >
                                        {t("officialSite")} ↗
                                    </a>
                                )}

                                {cafe.instagramUrl && (
                                    <a
                                        href={cafe.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity"
                                    >
                                        <span className="mr-2">📸</span> Instagram ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
