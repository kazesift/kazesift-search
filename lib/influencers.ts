
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

export const influencers: Influencer[] = [
    {
        id: "yusuke",
        name: "Yusuke Takeuchi",
        url: "https://www.threads.net/@yusuke.takeuchi_sapporo",
        platform: "Threads",
        description: {
            ja: "札幌のカフェやグルメ情報を積極的に発信。隠れ家カフェや新店情報に詳しく、写真も美しい。",
            en: "Actively shares Sapporo cafe and gourmet info. Knowledgeable about hidden gems and new openings with beautiful photos."
        },
        recommendations: [
            { cafeId: "1001" }, { cafeId: "1002" }, { cafeId: "1003" }, { cafeId: "1004" }, { cafeId: "1005" },
            // New recommendations from Threads post (2025/12/07)
            {
                cafeId: "1601", // Komeda Coffee
                quote: { ja: "甘いものを食べたいときに利用。", en: "Used when I want to eat something sweet." }
            },
            {
                cafeId: "1602", // Starbucks Grand Hotel
                quote: { ja: "後ろがあまり気にならない。", en: "I don't worry much about people behind me." }
            },
            {
                cafeId: "1603", // Tully's Chieria
                quote: { ja: "広い割には席の間隔余裕があるので、視線気にならない。", en: "Spacious with good seat spacing, so I don't worry about gazes." }
            },
            {
                cafeId: "1604", // AOAO SAPPORO
                quote: { ja: "電源付テーブルありでコーヒーの割引あるし、気分転換できる。", en: "Desks with power, coffee discount, and good for a change of pace." }
            },
            {
                cafeId: "1605", // Sapporo Business HUB
                quote: { ja: "コンベンションセンターそばで、22:00まで使えて、WebミーティングOK。", en: "Near Convention Center, open until 22:00, Web meetings OK." }
            },
            {
                cafeId: "1606", // Sapporo Municipal Library
                quote: { ja: "電源付の机があり、デザイン検討するなど、図書資料がたくさんあるので重宝。", en: "Desks with power. Useful for design work with many reference materials." }
            }
        ]
    },
    {
        id: "sayaka",
        name: "三好さやか (Sayaka Miyoshi)",
        url: "https://www.instagram.com/insta.sayaka/",
        platform: "Instagram",
        description: {
            ja: "北海道観光大使。札幌のグルメ・カフェ情報をスタイリッシュに発信。フォロワー数40万人超の人気インフルエンサー。",
            en: "Hokkaido Tourism Ambassador. Shares stylish Sapporo gourmet & cafe info. Popular influencer with over 400k followers."
        },
        recommendations: [
            { cafeId: "30" }, { cafeId: "1003" }, { cafeId: "1005" }
        ]
    }
];
