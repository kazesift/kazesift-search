"use client";

import { useLanguage } from "@/lib/language";
import { Cafe } from "@/types";
import { MapPin, Clock, Wifi, BatteryCharging, Coffee, ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CafeDetailClient({ cafe }: { cafe: Cafe }) {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Image */}
            <div className="relative h-[40vh] w-full">
                <Image
                    src={cafe.imageUrl}
                    // @ts-ignore
                    alt={cafe.name[language]}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="container mx-auto relative h-full">
                    <div className="absolute bottom-8 left-4 px-4 text-white">
                        <Link
                            href="/"
                            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-md hover:bg-white/30"
                        >
                            <ArrowLeft size={12} /> {t("backToHome")}
                        </Link>
                        {/* @ts-ignore */}
                        <h1 className="text-4xl font-bold">{cafe.name[language]}</h1>
                        <div className="mt-2 flex items-center gap-2 text-lg opacity-90">
                            <MapPin size={18} />
                            {/* @ts-ignore */}
                            <span>{cafe.area[language]} - {cafe.address[language]}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto -mt-10 px-4">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="col-span-2 space-y-6">
                        <div className="rounded-2xl bg-white p-8 shadow-sm">
                            <h2 className="mb-4 text-xl font-bold text-gray-900">About this Space</h2>
                            {/* @ts-ignore */}
                            <p className="leading-relaxed text-gray-600">{cafe.description[language]}</p>

                            <div className="mt-8">
                                <h3 className="mb-3 text-lg font-semibold">{t("features")}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {cafe.features.map((f) => (
                                        <span key={f} className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-secondary)]">
                                            {f === "Wi-Fi" && <Wifi size={16} />}
                                            {f === "Power" && <BatteryCharging size={16} />}
                                            {f === "Good Coffee" && <Coffee size={16} />}
                                            {/* @ts-ignore */}
                                            {t(`features_${f.toLowerCase().replace(" ", "").replace("-", "")}`) || f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Kazesift AI Review Section */}
                        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-primary)] bg-gradient-to-br from-white to-[var(--color-primary)]/10 p-8 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white">
                                    <span className="font-bold">AI</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--color-secondary)]">{t("comment")}</h3>
                                    <div className="mt-2 text-gray-700 italic">
                                        {/* @ts-ignore */}
                                        "{cafe.kazesift_comment[language]}"
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/20 blur-2xl" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold">Info</h3>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <Clock size={18} className="text-gray-400" />
                                    <div>
                                        <span className="block font-semibold text-gray-900">{t("hours")}</span>
                                        {cafe.open_hours}
                                    </div>

                                </li>
                                <li className="flex items-start gap-3">
                                    <Calendar size={18} className="text-gray-400" />
                                    <div>
                                        <span className="block font-semibold text-gray-900">{t("holiday")}</span>
                                        {/* @ts-ignore */}
                                        {cafe.holidayStr ? cafe.holidayStr[language] : "-"}
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-gray-400" />
                                    <div>
                                        <span className="block font-semibold text-gray-900">Address</span>
                                        {/* @ts-ignore */}
                                        {cafe.address[language]}
                                    </div>
                                </li>
                                {cafe.officialUrl && (
                                    <li className="pt-2">
                                        <a
                                            href={cafe.officialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800"
                                        >
                                            <ExternalLink size={16} />
                                            {t("officialSite")}
                                        </a>
                                    </li>
                                )}
                            </ul>

                            {/* Google Reviews Section */}
                            {(cafe.googleMapsUrl || cafe.reviewHighlights) && (
                                <div className="mt-6 border-t border-gray-100 pt-6">
                                    <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                                        <span className="text-yellow-500">★</span> {t("userVoice")}
                                    </h4>

                                    {cafe.reviewHighlights && (
                                        <ul className="mb-4 space-y-2">
                                            {/* @ts-ignore */}
                                            {cafe.reviewHighlights[language].map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="mt-1 text-gray-400">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {cafe.googleMapsUrl && (
                                        <a
                                            href={cafe.googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                        >
                                            <ExternalLink size={16} />
                                            {t("viewOnGoogleMaps")}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold">Rating</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">{t("workComfort")}</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`h-2 w-8 rounded-full ${i < cafe.rating.work_comfort ? 'bg-[var(--color-secondary)]' : 'bg-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">{t("coffee")}</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`h-2 w-8 rounded-full ${i < cafe.rating.coffee ? 'bg-[var(--color-secondary)]' : 'bg-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">{t("vibe")}</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`h-2 w-8 rounded-full ${i < cafe.rating.vibe ? 'bg-[var(--color-secondary)]' : 'bg-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
