"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ja" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    ja: {
        heroTitle_1: "札幌で",
        heroTitle_2: "集中できる場所",
        heroTitle_3: "を見つける",
        heroSubtitle: "エンジニア、クリエイター、リモートワーカーのための厳選カフェ & ワークスペース。",
        searchPlaceholder: "エリア、名前で検索...",
        recommended: "おすすめスポット",
        showing: "件のスポットを表示中",
        filters: "絞り込み",
        noResults: "条件に合うカフェが見つかりませんでした。",
        clearFilters: "条件をクリア",
        clearSearch: "検索をクリア",
        workComfort: "作業のしやすさ",
        coffee: "コーヒー",
        vibe: "雰囲気",
        hours: "営業時間",
        features: "設備・特徴",
        comment: "Kazesift's Comment",
        footer: "Kazesift Search - Sapporo's Best Workspaces",
        backToHome: "ホームに戻る",
        features_wifi: "Wi-Fi",
        features_power: "電源",
        features_silence: "静か",
        officialSite: "公式サイトを見る",
        highTrustFilter: "👑 失敗しない定番 (評価4.0+ / 500件+)",
        highTrustFilterShort: "定番 (4.0+/500件+)",
        aboutKazesift: "Kazesiftについて",
        googleMaps: "Googleマップの口コミ",
        userVoice: "みんなの声",
        viewOnGoogleMaps: "Googleマップで口コミを見る",
        gallery: "ギャラリー",

        holiday: "定休日",
        submitInfo: "情報・写真を投稿する (Google Form)",
        sourceCode: "ソースコード公開中 (期間限定)",
        features_view: "眺望",
        tab_all: "すべて",
        tab_high_trust: "失敗しない定番",
        tab_new_open: "New Open ✨",
        tab_favorites: "お気に入り",
        features_meeting: "打ち合わせ",
        features_latenight: "深夜営業",
        features_goodcoffee: "コーヒー美味しい",
        features_takeout: "テイクアウト",
        features_morning: "モーニング",
    },
    en: {
        heroTitle_1: "Find Your",
        heroTitle_2: "Focus Zone",
        heroTitle_3: "in Sapporo",
        heroSubtitle: "Curated workspaces and cafes for developers, creators, and remote workers.",
        searchPlaceholder: "Search by area, name...",
        recommended: "Recommended Spots",
        showing: "places showing",
        filters: "Filters",
        noResults: "No cafes found matching your criteria.",
        clearFilters: "Clear all filters",
        clearSearch: "Clear search",
        workComfort: "Work Comfort",
        coffee: "Coffee",
        vibe: "Vibe",
        hours: "Open Hours",
        features: "Features",
        comment: "Kazesift's Comment",
        footer: "Kazesift Search - Sapporo's Best Workspaces",
        backToHome: "Back to Home",
        features_wifi: "Wi-Fi",
        features_power: "Power",
        features_silence: "Silence",
        features_meeting: "Meeting",
        features_latenight: "Late Night",
        features_goodcoffee: "Good Coffee",
        features_view: "Nice View",
        tab_all: "All",
        tab_high_trust: "Fail-safe Classic",
        tab_new_open: "New Open ✨",
        tab_favorites: "Favorites",
        officialSite: "Visit Official Site",
        features_takeout: "Takeout",
        features_morning: "Morning",
        highTrustFilter: "👑 Popular & High Rated (4.0+ / 500+ reviews)",
        highTrustFilterShort: "Popular (4.0+/500+)",
        aboutKazesift: "About Kazesift",
        googleMaps: "Google Maps Reviews",
        userVoice: "What Users Say",
        viewOnGoogleMaps: "Read reviews on Google Maps",
        gallery: "Gallery",
        submitInfo: "Submit Info / Photos (Google Form)",
        sourceCode: "Source Code Available (Limited Time)",
        holiday: "Closed / Holiday",
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("ja");

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
