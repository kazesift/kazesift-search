
export interface Influencer {
    id: string;
    name: string;
    url: string;
    platform: 'Instagram' | 'Threads' | 'Twitter' | 'Other';
    description: { ja: string; en: string };
    recommendedCafeIds: string[];
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
        recommendedCafeIds: ["1001", "1002", "1003", "1004", "1005"]
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
        recommendedCafeIds: ["30", "1003", "1005"] // Linking to poool, allee, umiere (popular ones)
    }
];
