"use client";

import { useState } from "react";
import Link from "next/link";
import { CafeCard } from "@/components/CafeCard";
import { cafes } from "@/lib/data";
import { Search, Filter, Globe, LayoutList, Map as MapIcon } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { FavoritesProvider, useFavorites } from "@/lib/favorites";
import { trackEvent } from "@/lib/analytics";
import InfluencerSection from "@/components/InfluencerSection";
import { Cafe } from "@/types";
import dynamic from "next/dynamic";

function MainContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "high_trust" | "new_open" | "favorites">("all");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const { language, setLanguage, t } = useLanguage();
  const { isFavorite } = useFavorites();

  // Dynamically import Map to avoid SSR
  const MapWrapper = dynamic(() => import('@/components/MapWrapper'), { ssr: false });

  const filteredCafes = cafes.filter((cafe) => {
    // @ts-ignore
    const nameMatch = cafe.name[language].toLowerCase().includes(searchTerm.toLowerCase());
    // @ts-ignore
    const areaMatch = cafe.area[language].toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSearch = nameMatch || areaMatch;
    const matchesFilter = filterType ? cafe.features.includes(filterType as any) : true;

    let matchesTab = true;
    if (activeTab === "high_trust") {
      matchesTab = (cafe.googleMapRating || 0) >= 4.0 && (cafe.googleMapReviews || 0) >= 500;
    } else if (activeTab === "new_open") {
      // Logic: Opened within 1 year from today (2026-01-14) AND Rating >= 4.0 AND Reviews >= 50
      const today = new Date("2026-01-14"); // Fixed date for logic as per instructions
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);

      let isRecent = false;
      if (cafe.openDate) {
        const openDate = new Date(cafe.openDate + "-01"); // Append day to YYYY-MM
        isRecent = openDate >= oneYearAgo;
      }

      matchesTab = isRecent && (cafe.googleMapRating || 0) >= 4.0 && (cafe.googleMapReviews || 0) >= 10;
    } else if (activeTab === "favorites") {
      matchesTab = isFavorite(cafe.id);
    }

    return matchesSearch && matchesFilter && matchesTab;
  });

  const categories = ["Wi-Fi", "Power", "Silence", "Good Coffee", "Late Night", "Meeting"];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-primary)]/30 to-white pb-16 pt-24 text-center">
        <div className="container mx-auto px-4">

          {/* Language Switcher */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setLanguage(language === "en" ? "ja" : "en")}
              className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white"
            >
              <Globe size={16} />
              {language === "en" ? "日本語" : "English"}
            </button>
          </div>

          <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-secondary)] shadow-sm">
            Kazesift AI Search
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {t("heroTitle_1")} <span className="text-[var(--color-secondary)]">{t("heroTitle_2")}</span>
            <br /> {t("heroTitle_3")}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            {t("heroSubtitle")}
          </p>

          <div className="mx-auto max-w-xl relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-4 shadow-lg transition-all focus:border-[var(--color-secondary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            {/* High Trust Filter Toggle */}
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/50 backdrop-blur-sm rounded-full shadow-sm mb-4">
              {(["all", "high_trust", "new_open", "favorites"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    trackEvent({ action: 'click_filter', category: 'Tab', label: tab });
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab
                    ? "bg-[var(--color-secondary)] text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:bg-white/80"
                    }`}
                >
                  {tab === "favorites" && <span className="mr-1">♥</span>}
                  {t(`tab_${tab}`)}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterType(filterType === cat ? null : cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${filterType === cat
                    ? "bg-[var(--color-secondary)] text-white shadow-lg"
                    : "bg-white text-gray-600 shadow-sm hover:bg-gray-50 hover:text-[var(--color-secondary)]"
                    }`}
                >
                  {/* Map category to translation key, removing spaces/special chars if needed, or simple mapping */}
                  {/* For simplicity using direct t() with key construction or failing back to cat */}
                  {/* @ts-ignore */}
                  {t(`features_${cat.toLowerCase().replace(" ", "").replace("-", "")}`) || cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-30"
          style={{ backgroundImage: 'radial-gradient(#006064 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t("recommended")}</h2>
            <p className="text-gray-500">
              {filteredCafes.length} {t("showing")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 p-1">
              <button
                onClick={() => {
                  setViewMode("list");
                  trackEvent({ action: 'switch_view_mode', category: 'UI', label: 'List' });
                }}
                className={`flex items-center px-4 py-2 rounded-l-lg transition-colors ${viewMode === "list"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <LayoutList size={16} className="mr-2" />
                List
              </button>
              <button
                onClick={() => {
                  setViewMode("map");
                  trackEvent({ action: 'switch_view_mode', category: 'UI', label: 'Map' });
                }}
                className={`flex items-center px-4 py-2 rounded-r-lg border-l border-gray-200 transition-colors ${viewMode === "map"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <MapIcon size={16} className="mr-2" />
                Map
              </button>
            </div>

            <button
              onClick={() => { setSearchTerm(""); setFilterType(null); setActiveTab("all"); }}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter size={16} />
              {t("clearFilters")}
            </button>
          </div>
        </div>

        {viewMode === "list" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        ) : (
          <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
            <MapWrapper cafes={filteredCafes} />
            {/* Map Legend Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-md text-xs z-[400]">
              <div className="font-bold mb-1">Map Info</div>
              <div>📍 Default Pin: Cafe Location</div>
              <div className="text-gray-500 mt-1">(Locations are approximate demo)</div>
            </div>
          </div>
        )}

        {filteredCafes.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-500">{t("noResults")}</p>
            <button
              onClick={() => { setSearchTerm(""); setFilterType(null); setActiveTab("all"); }}
              className="mt-4 text-[var(--color-secondary)] underline decoration-dotted underline-offset-4"
            >
              {t("clearFilters")}
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-100 bg-gray-50 py-12 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p className="mb-4 font-medium opacity-80">{t("footer")}</p>
          <Link href="/about" className="text-[var(--color-secondary)] hover:underline transition-all">
            {t("aboutKazesift")}
          </Link>
          <div className="mt-4 flex justify-center gap-4 text-xs opacity-60">
            <span>© 2024 Kazesift Search</span>
          </div>
        </div>
      </footer>
      <InfluencerSection />
    </div>
  );
}

export default function Home() {
  return (
    <FavoritesProvider>
      <MainContent />
    </FavoritesProvider>
  );
}
