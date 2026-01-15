"use client";

import { useLanguage } from "@/lib/language";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    const { t, language } = useLanguage();

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto max-w-2xl px-4 py-8">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[var(--color-primary)]"
                >
                    <ArrowLeft size={16} />
                    {t("backToHome")}
                </Link>

                <div className="prose prose-gray max-w-none">
                    <h1 className="mb-6 text-3xl font-bold text-gray-900">
                        {language === "ja" ? "Kazesift Searchについて" : "About Kazesift Search"}
                    </h1>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                                {language === "ja" ? "サービスの目的" : "Our Mission"}
                            </h2>
                            <p>
                                {language === "ja"
                                    ? "「札幌で、本当に快適に作業できる場所はどこだろう？」そんな疑問からKazesift Searchは生まれました。"
                                    : "'Where is the truly comfortable place to work in Sapporo?' Kazesift Search was born from this question."}
                            </p>
                            <p className="mt-2">
                                {language === "ja"
                                    ? "Wi-Fiや電源の有無だけでなく、「作業のしやすさ」「コーヒーの美味しさ」「静かさ」といった、リモートワーカーにとって本当に重要な基準で厳選したカフェだけを掲載しています。"
                                    : "We list only cafes carefully selected based on criteria truly important for remote workers, such as 'work comfort', 'coffee quality', and 'silence', not just Wi-Fi or power availability."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                                {language === "ja" ? "AI x ローカルの力" : "Power of AI x Local"}
                            </h2>
                            <p>
                                {language === "ja"
                                    ? "Kazesiftは、AIによる客観的な分析と、実際に現地で過ごしたリアルな体感を組み合わせています。単なるデータ検索ではなく、「その日の気分」や「今のモード」に合った最適な場所を提案します。"
                                    : "Kazesift combines objective analysis by AI with real experiences spent on site. It proposes the optimal place matching 'your mood of the day' or 'current mode', not just simple data search."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                                {language === "ja" ? "「失敗しない」選択を" : "Make a 'Fail-proof' Choice"}
                            </h2>
                            <p>
                                {language === "ja"
                                    ? "Googleマップでの高評価（★4.0以上）かつ多数の口コミ（500件以上）を集める「信頼できる定番スポット」も簡単に絞り込めます。初めての土地でも、安心して時間を過ごせる場所が見つかります。"
                                    : "You can easily filter for 'reliable standard spots' that have high ratings (★4.0+) and numerous reviews (500+) on Google Maps. Find a place where you can spend time with peace of mind even in a new land."}
                            </p>
                        </section>

                        <div className="mt-8 border-t pt-8">
                            <p className="text-sm text-gray-500">
                                {language === "ja"
                                    ? "運営: Kazesift Team (Powered by Google Gemini)"
                                    : "Operated by: Kazesift Team (Powered by Google Gemini)"}
                            </p>
                            <div className="mt-2 flex gap-4">
                                <a href="https://www.threads.net/@kazesift" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:underline">
                                    Threads
                                </a>
                                <a href="https://www.instagram.com/kazesift" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:underline">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
