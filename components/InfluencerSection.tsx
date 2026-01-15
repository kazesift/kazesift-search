
"use client";

import React from "react";
import { useLanguage } from "@/lib/language";
import { influencers } from "@/lib/influencers";
import { ExternalLink, Instagram, Twitter } from "lucide-react";

export default function InfluencerSection() {
    const { language, t } = useLanguage();

    return (
        <div className="py-12 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Curators & Special Thanks</h2>
                    <p className="text-gray-500 text-sm">
                        {language === "ja"
                            ? "Kazesiftがカフェ情報の参考にしている、素敵な発信者の方々です。"
                            : "Wonderful creators whose content inspires Kazesift's cafe database."}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {influencers.map((influencer) => (
                        <div key={influencer.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                                        {/* Placeholder Avatar */}
                                        👤
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{influencer.name}</h3>
                                        <div className="flex items-center text-xs text-gray-500 gap-1">
                                            {influencer.platform}
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={influencer.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-primary)] hover:opacity-80 p-2 rounded-full bg-blue-50"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {influencer.description[language]}
                            </p>

                            <div className="pt-4 border-t border-gray-100">
                                <span className="text-xs font-bold text-gray-500 block mb-2">
                                    {language === "ja" ? "✨ おすすめ・言及カフェ" : "✨ Recommended / Mentioned"}
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {/* We could list cafe names here if we imported data, but simpler to just show count or static text for now to avoid circular deps if this component is used in page.tsx which imports data. 
                                        Actually we can import cafes from data.ts safely. */}
                                    {/* For MVP, just a generic badge or count */}
                                    <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                                        {influencer.recommendedCafeIds.length} Cafes Listed
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400">
                        {language === "ja"
                            ? "※掲載については各SNSのリンク＆引用ルールに則っています。画像の無断転載は行っていません。"
                            : "* Links provided in accordance with SNS citation rules. No unauthorized image usage."}
                    </p>
                </div>
            </div>
        </div>
    );
}
