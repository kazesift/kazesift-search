import { Cafe } from "@/types";

export const cafes: Cafe[] = [
    // Existing 13
    {
        id: "1",
        name: { ja: "MORIHICO. STAY & COFFEE", en: "MORIHICO. STAY & COFFEE" },
        description: { ja: "ホテル「HOTEL POTMUM」に併設された、開放的でスタイリッシュなカフェ。広々とした空間には大きなテーブルがあり、作業に没頭できます。", en: "A spacious and stylish cafe attached to HOTEL POTMUM. The large tables and open atmosphere make it perfect for deep work." },
        area: { ja: "菊水 / 札幌駅エリア", en: "Kikusui / Sapporo Station Area" },
        address: { ja: "札幌市白石区菊水1条1丁目3-17", en: "1-3-17 Kikusui 1-jo, Shiroishi-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting", "Good Coffee"],
        rating: { work_comfort: 5, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "札幌で一番作業しやすいと言っても過言ではない名店。", en: "Arguably the best place for remote work in Sapporo." },
        open_hours: "07:30 - 22:00",
        officialUrl: "https://morihico.com/shop/stay-coffee/",
        googleMapRating: 4.1,
        googleMapReviews: 470,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MORIHICO.+STAY+%26+COFFEE+Sapporo",
        reviewHighlights: {
            ja: ["天井が高く開放的な空間", "広いテーブルで作業しやすい", "コーヒーが美味しい"],
            en: ["High ceilings and spacious", "Great big tables for work", "Delicious coffee"]
        },
        holidayStr: { ja: "定休日なし", en: "None" },
        lat: 43.0560,
        lng: 141.3930 // Corrected based on address 菊水1条1丁目
    },
    {
        id: "2",
        name: { ja: "poool -Espresso&Work-", en: "poool -Espresso&Work-" },
        description: { ja: "「サードプレイス」を体現したコワーキングカフェ。1階はカフェ、2階はワークスペースとなっており、目的に合わせて使い分けられます。", en: "A coworking cafe embodying the 'third place' concept. 1st floor cafe, 2nd floor workspace." },
        area: { ja: "札幌駅 / 北大エリア", en: "Sapporo Station / Hokkaido Univ. Area" },
        address: { ja: "札幌市北区北29条西4丁目2-1-205", en: "4-2-1-205 Kita 29-jo Nishi, Kita-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Silence", "Good Coffee"],
        rating: { work_comfort: 5, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "まさに作業のために作られた空間。", en: "A space built for work." },
        open_hours: "09:00 - 20:00",
        officialUrl: "https://www.instagram.com/pooolpooolpoool/",
        googleMapRating: 4.5,
        googleMapReviews: 120,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=poool+Espresso%26Work+Sapporo",
        reviewHighlights: {
            ja: ["コワーキングスペースとして最適", "エスプレッソが美味しい", "静かで集中できる"],
            en: ["Perfect as a coworking space", "Tasty espresso", "Quiet and focused environment"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        lat: 43.0905,
        lng: 141.3480
    },
    {
        id: "3",
        name: { ja: "BARISTART COFFEE", en: "BARISTART COFFEE" },
        description: { ja: "北海道産の上質な牛乳にこだわったラテが楽しめるコーヒースタンド。大通でのちょっとしたPC作業やメールチェックに最適。", en: "Famous for lattes made with premium Hokkaido milk. Perfect for quick tasks in the Odori area." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西4丁目8", en: "4-8 Minami 1-jo Nishi, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Wi-Fi"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "とにかくラテが美味しい。短時間の集中作業に。", en: "The latte is exceptional. For short, focused work." },
        open_hours: "10:00 - 19:00",
        officialUrl: "https://www.baristartcoffee.com/",
        googleMapRating: 4.4,
        googleMapReviews: 650,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=BARISTART+COFFEE+Sapporo",
        reviewHighlights: {
            ja: ["北海道牛乳のラテが絶品", "濃厚でクリーミー", "スタンド形式で気軽"],
            en: ["Exquisite Hokkaido milk latte", "Rich and creamy", "Casual stand style"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        lat: 43.0583,
        lng: 141.3514
    },
    {
        id: "4",
        name: { ja: "Johnson's Tea Lounge", en: "Johnson's Tea Lounge" },
        description: { ja: "インテリアショップの2階にある洗練されたティーラウンジ。静かで落ち着いた雰囲気の中、日本茶や紅茶を楽しめます。", en: "A sophisticated tea lounge on the 2nd floor of an interior shop. Quiet atmosphere with Japanese or black tea." },
        area: { ja: "大通 / 円山", en: "Odori / Maruyama" },
        address: { ja: "札幌市中央区南1条西6丁目4-1", en: "6-4-1 Minami 1-jo Nishi, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Silence", "Meeting"],
        rating: { work_comfort: 4, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "コーヒーが苦手な人にもおすすめ。", en: "Great for non-coffee drinkers." },
        open_hours: "11:00 - 19:00",
        officialUrl: "https://www.johnsonstore.jp/tea/",
        googleMapRating: 4.0,
        googleMapReviews: 150,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Johnson's+Tea+Lounge+Sapporo",
        reviewHighlights: {
            ja: ["日本茶と紅茶の種類が豊富", "インテリアがお洒落で落ち着く", "ソファ席でゆったり"],
            en: ["Wide variety of teas", "Stylish and relaxing interior", "Comfortable sofa seating"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        lat: 43.0575,
        lng: 141.3450
    },
    {
        id: "5",
        name: { ja: "FAbULOUS", en: "FAbULOUS" },
        description: { ja: "カフェ、ファッション、インテリアが融合した複合ショップ。天井が高く広々としており、クリエイティブな刺激を受けられます。", en: "A fusion of cafe, fashion, and interior design. High ceilings and spaciousness provide creative stimulation." },
        area: { ja: "バスセンター前", en: "Bus Center Mae" },
        address: { ja: "札幌市中央区南1条東2丁目3-1", en: "2-3-1 Minami 1-jo Higashi, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "Meeting"],
        rating: { work_comfort: 4, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "おしゃれな空間で気分を上げたい時に。", en: "When you want to boost your mood in a stylish space." },
        open_hours: "08:00 - 20:00",
        officialUrl: "https://www.rounduptrading.com/",
        googleMapRating: 4.2,
        googleMapReviews: 550,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=FAbULOUS+Sapporo",
        reviewHighlights: {
            ja: ["モーニングが美味しい", "広々としていて雰囲気が良い", "雑貨も見れて楽しい"],
            en: ["Delicious morning sets", "Spacious with great vibe", "Fun to browse goods"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        lat: 43.0595,
        lng: 141.3585
    },
    {
        id: "6",
        name: { ja: "ONIYANMA COFFEE & BEER", en: "ONIYANMA COFFEE & BEER" },
        description: { ja: "大通エリアにある、洗練されたコーヒースタンド＆バー。Wi-Fiと電源完備、夜まで作業できるのも魅力。", en: "Sophisticated coffee stand & bar in Odori. Wi-Fi, power outlets, and open late." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西6丁目21-1", en: "6-21-1 Minami 1-jo Nishi, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Late Night", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "夜カフェ×作業ならここ。", en: "Perfect for night work sessions." },
        open_hours: "08:00 - 19:00",
        officialUrl: "https://www.oniyanmacoffee.jp/",
        googleMapRating: 4.3,
        googleMapReviews: 200,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ONIYANMA+COFFEE+Sapporo",
        reviewHighlights: {
            ja: ["コーヒーのクオリティが高い", "夜遅くまで営業している", "スタイリッシュな空間"],
            en: ["High quality coffee", "Open until late", "Stylish space"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        lat: 43.0580,
        lng: 141.3450
    },
    {
        id: "7",
        name: { ja: "Ritaru Coffee", en: "Ritaru Coffee" },
        description: { ja: "円山の閑静な住宅街にある、落ち着いた雰囲気の自家焙煎珈琲店。木の温もりを感じる空間で読書や書き物を。", en: "Calm, home-roasting coffee shop in Maruyama. Warm wooden space perfect for reading or writing." },
        area: { ja: "円山", en: "Maruyama" },
        address: { ja: "札幌市中央区北3条西26丁目3-8", en: "3-8 Kita 3-jo Nishi 26-chome, Chuo-ku, Sapporo" },
        imageUrl: "https://ritaru.com/images/ritaru_ogp.jpg",
        features: ["Wi-Fi", "Silence", "Good Coffee"],
        rating: { work_comfort: 5, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "静寂を愛する人のための聖地。", en: "A sanctuary for silence lovers." },
        open_hours: "10:00 - 20:00",
        officialUrl: "https://ritaru.com/",
        googleMapRating: 4.4,
        googleMapReviews: 320,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ritaru+Coffee+Sapporo",
        reviewHighlights: {
            ja: ["自家焙煎珈琲が美味しい", "居心地が良く長居したくなる", "ロールケーキが人気"],
            en: ["Delicious house roasted coffee", "Cozy and stay-friendly", "Popular roll cake"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "8",
        name: { ja: "Shelter Cafe", en: "Shelter Cafe" },
        description: { ja: "ドライフラワーに囲まれた幻想的な地下カフェ。隠れ家のような雰囲気で作業に没頭できます。", en: "Magical underground cafe surrounded by dried flowers. A hideaway to block out the world." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西6丁目6-9", en: "6-6-9 Odori Nishi, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1595181363654-2c25608b1d4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Meeting", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "クリエイティブな発想が湧いてくる空間。", en: "Space that inspires creative ideas." },
        open_hours: "11:00 - 19:00",
        officialUrl: "https://cocorone-sheltercafe.shopinfo.jp/",
        googleMapRating: 4.1,
        googleMapReviews: 180,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shelter+Cafe+Sapporo",
        reviewHighlights: {
            ja: ["ドライフラワーが素敵", "隠れ家的で落ち着く", "フレンチワッフルが美味しい"],
            en: ["Beautiful dried flowers", "Relaxing hideaway feel", "Delicious French waffles"]
        },
        holidayStr: { ja: "火曜日", en: "Tuesday" }
    },
    {
        id: "9",
        name: { ja: "Miyakoshiya Coffee (Sapporo Station)", en: "Miyakoshiya Coffee (Sapporo Station)" },
        description: { ja: "札幌駅直結の実力派珈琲店。クラシックで重厚な雰囲気の中、深い味わいの珈琲を楽しめます。", en: "Renowned coffee shop connected to Sapporo Station. Classic, dignified atmosphere." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市北区北6条西3丁目", en: "3-chome Kita 6-jo Nishi, Kita-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "Late Night"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "移動の合間や考え事に。", en: "Perfect for killing time between commutes." },
        open_hours: "08:00 - 23:00",
        officialUrl: "https://miyakoshiya-coffee.co.jp/",
        googleMapRating: 3.6,
        googleMapReviews: 350,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Miyakoshiya+Coffee+Sapporo+Station",
        reviewHighlights: {
            ja: ["駅直結で便利", "タバコが吸える（店舗による）", "コーヒーが濃くて美味しい"],
            en: ["Convenient station access", "Strong delicious coffee", "Classic kissaten vibe"]
        },
        holidayStr: { ja: "定休日なし", en: "None" }
    },
    {
        id: "10",
        name: { ja: "Atelier Morihiko", en: "Atelier Morihiko" },
        description: { ja: "円山の路地裏に佇む木造民家カフェ。独自のブレンドコーヒーと手作りケーキは絶品。", en: "Wooden house cafe in Maruyama back alleys. Exquisite blend coffee and homemade cakes." },
        area: { ja: "円山", en: "Maruyama" },
        address: { ja: "札幌市中央区南2条西26丁目2-18", en: "2-18 Minami 2-jo Nishi 26-chome, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Silence"],
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "読書や思索に耽りたい特別な場所。", en: "Special place for reading or contemplation." },
        open_hours: "10:00 - 21:00",
        officialUrl: "https://morihico.com/shop/atelier/",
        googleMapRating: 4.3,
        googleMapReviews: 850,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Atelier+Morihiko",
        reviewHighlights: {
            ja: ["古民家の雰囲気が最高", "コーヒーとケーキが絶品", "静かな時間が流れる"],
            en: ["Amazing old house atmosphere", "Exquisite coffee and cake", "Quiet time flows"]
        },
        holidayStr: { ja: "水曜日", en: "Wednesday" },
        lat: 43.0553,
        lng: 141.3168
    },
    {
        id: "11",
        name: { ja: "World Book Cafe", en: "World Book Cafe" },
        description: { ja: "大通駅近く、世界中の本に囲まれたブックカフェ。旅やアートの本を片手にコーヒーを。", en: "Book cafe near Odori Station surrounded by world books." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西1丁目 大沢ビル 7F", en: "Osawa Bldg 7F, 1-chome Minami 1-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "Silence"],
        rating: { work_comfort: 4, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "本好きにはたまらない空間。", en: "Irresistible for book lovers." },
        open_hours: "12:00 - 21:00",
        officialUrl: "https://tabelog.com/hokkaido/A0101/A010102/1006507/",
        googleMapRating: 4.4,
        googleMapReviews: 620,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=World+Book+Cafe+Sapporo",
        reviewHighlights: {
            ja: ["本に囲まれて落ち着く", "一人でも入りやすい", "静かで隠れ家のような雰囲気"],
            en: ["Relaxing surrounded by books", "Easy to visit alone", "Quiet hideaway atmosphere"]
        },
        holidayStr: { ja: "定休日なし", en: "None" },
        lat: 43.0580,
        lng: 141.3550
    },
    {
        id: "12",
        name: { ja: "Rokkatei Sapporo Honten", en: "Rokkatei Sapporo Honten" },
        description: { ja: "北海道を代表する「六花亭」札幌本店カフェ。明るい空間でマルセイバターサンドを。", en: "Main cafe of Rokkatei. Enjoy Marusei Butter Sand in a bright space." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北4条西6丁目3-3", en: "3-3 Kita 4-jo Nishi 6-chome, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Good Coffee", "Meeting"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "意外と穴場なカフェスペース。", en: "A hidden gem for tea time." },
        open_hours: "11:00 - 16:30",
        officialUrl: "https://www.rokkatei.co.jp/shop/sapporo-honten/",
        googleMapRating: 4.5,
        googleMapReviews: 2100,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rokkatei+Sapporo+Honten",
        reviewHighlights: {
            ja: ["マルセイバターサンドが絶品", "テイクアウトスイーツが豊富", "庭が見えて明るい"],
            en: ["Marusei Butter Sand is exquisite", "Plenty of takeout sweets", "Bright with garden view"]
        },
        holidayStr: { ja: "定休日なし", en: "None" },
        lat: 43.0685,
        lng: 141.3486
    },
    {
        id: "13",
        name: { ja: "Cafe YOSHIMI", en: "Cafe YOSHIMI" },
        description: { ja: "赤れんがテラスにある開放的なモダンカフェ。ランチミーティングやPC作業に。", en: "Open modern cafe in Akarenga Terrace. Good for PC work." },
        area: { ja: "札幌駅 / 大通", en: "Sapporo Station / Odori" },
        address: { ja: "札幌市中央区北2条西4丁目1 赤れんがテラス B1F", en: "Akarenga Terrace B1F, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Wi-Fi", "Meeting", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "アクセス抜群で使いやすい。", en: "Great access and easy to use." },
        open_hours: "10:00 - 22:00",
        officialUrl: "https://www.yoshimi-ism.com/restaurant/cafe_yoshimi.php",
        googleMapRating: 4.0,
        googleMapReviews: 550,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+YOSHIMI+Sapporo",
        reviewHighlights: {
            ja: ["チカホ直結で便利", "パンケーキがふわふわ", "広くて入りやすい"],
            en: ["Direct underground access", "Fluffy pancakes", "Spacious and welcoming"]
        },
        holidayStr: { ja: "定休日なし", en: "None" }
    },
    // NEW 10
    {
        id: "14",
        name: { ja: "Mingus Coffee", en: "Mingus Coffee" },
        description: { ja: "大通のビル7階にある、ジャズが流れる隠れ家カフェ。テラス席からはテレビ塔も望めます。", en: "Hideaway jazz cafe on the 7th floor in Odori. Terrace seats offer TV Tower views." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西1丁目 大沢ビル 7F", en: "Osawa Bldg 7F, 1-chome Minami 1-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Late Night", "Silence"],
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "大人の隠れ家。夜風に当たりながらのコーヒーは格別。", en: "Adult hideaway. Coffee in the night breeze is exceptional." },
        open_hours: "09:00 - 24:00",
        officialUrl: "https://tabelog.com/hokkaido/A0101/A010102/1001334/",
        googleMapRating: 4.4,
        googleMapReviews: 450,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mingus+Coffee+Sapporo",
        reviewHighlights: {
            ja: ["JAZZが流れる大人の空間", "テラス席が最高", "コーヒーが味わい深い"],
            en: ["Adult space with Jazz", "Terrace seats are amazing", "Deep flavorful coffee"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "15",
        name: { ja: "Plantation", en: "Plantation" },
        description: { ja: "ボイラー工場をリノベーションした、森彦系列のロースタリーカフェ。インダストリアルな空間が魅力。", en: "Renovated boiler factory cafe by Morihiko. Attractive industrial space." },
        area: { ja: "菊水", en: "Kikusui" },
        address: { ja: "札幌市白石区菊水8条2丁目1-32", en: "1-32 Kikusui 8-jo 2-chome, Shiroishi-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "秘密基地のようなワクワクする空間。", en: "Exciting space like a secret base." },
        open_hours: "11:00 - 18:00",
        officialUrl: "https://morihico.com/shop/plantation/",
        googleMapRating: 4.2,
        googleMapReviews: 520,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plantation+Morihico+Sapporo",
        reviewHighlights: {
            ja: ["工場リノベの雰囲気が良い", "２階席がおしゃれ", "コーヒーの香りが漂う"],
            en: ["Great renovated factory vibe", "Stylish 2nd floor seating", "Aromatic coffee features"]
        },
        holidayStr: { ja: "水曜日", en: "Wednesday" }
    },
    {
        id: "16",
        name: { ja: "Marumi Coffee Honten", en: "Marumi Coffee Honten" },
        description: { ja: "スペシャルティコーヒーの有名店。バリスタチャンピオンが厳選した豆を楽しめます。", en: "Famous specialty coffee shop. Enjoy beans selected by a barista champion." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西1丁目2 松崎ビル 1F", en: "Matsuzaki Bldg 1F, 1-2 Minami 1-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Wi-Fi"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "コーヒーの味にこだわりたいならここ。", en: "The place to go if you care about coffee taste." },
        open_hours: "08:00 - 20:00",
        officialUrl: "https://www.marumi-coffee.com/",
        googleMapRating: 4.3,
        googleMapReviews: 400,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marumi+Coffee+Honten+Sapporo",
        reviewHighlights: {
            ja: ["スペシャルティコーヒーの味", "種類が豊富で迷うほど", "プロの淹れるコーヒー"],
            en: ["Taste of specialty coffee", "Huge variety to choose", "Coffee brewed by pros"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "17",
        name: { ja: "Ishida Coffee", en: "Ishida Coffee" },
        description: { ja: "北大近くのレトロな喫茶店。自家焙煎珈琲と固めのプリンが人気。", en: "Retro kissaten near Hokkaido Univ. Famous for home roast and firm pudding." },
        area: { ja: "北大エリア", en: "Hokkaido Univ. Area" },
        address: { ja: "札幌市北区北16条西3丁目1-18", en: "1-18 Kita 16-jo Nishi 3-chome, Kita-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "時が止まったような静かな時間。", en: "Quiet time as if time has stopped." },
        open_hours: "11:00 - 19:00",
        officialUrl: "https://ishidacoffeeten.com/",
        googleMapRating: 4.4,
        googleMapReviews: 330,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ishida+Coffee+Sapporo",
        reviewHighlights: {
            ja: ["プリンが固めで美味しい", "レトロで静かな雰囲気", "コーヒーの良い香り"],
            en: ["Firm and tasty pudding", "Retro quiet atmosphere", "Good coffee aroma"]
        },
        holidayStr: { ja: "火曜日・水曜日", en: "Tue / Wed" }
    },
    {
        id: "18",
        name: { ja: "Brown Books Cafe", en: "Brown Books Cafe" },
        description: { ja: "屋根裏部屋のような落ち着くブックカフェ。ヴィンテージ雑貨と洋書に囲まれて。", en: "Relaxing book cafe like an attic. Surrounded by vintage goods and foreign books." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南3条西1丁目9-1", en: "9-1 Minami 3-jo Nishi 1-chome, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Silence"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "自分だけの時間を過ごせる隠れ家。", en: "A hideaway to spend your own time." },
        open_hours: "12:00 - 18:00",
        officialUrl: "https://brownbookscafe.com/",
        googleMapRating: 4.5,
        googleMapReviews: 300,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Brown+Books+Cafe+Sapporo",
        reviewHighlights: {
            ja: ["屋根裏のような隠れ家感", "本とコーヒーでゆっくり", "チーズケーキが濃厚"],
            en: ["Attic-like hideaway feel", "Relax with books and coffee", "Rich cheesecake"]
        },
        holidayStr: { ja: "水曜日・不定休", en: "Wed / Irregular" }
    },
    {
        id: "19",
        name: { ja: "Sato Coffee", en: "Sato Coffee" },
        description: { ja: "宮の森にある自家焙煎珈琲店。静寂とコーヒーの香りに包まれる上質な空間。", en: "Home roasting coffee shop in Miyanomori. High quality space wrapped in silence and coffee aroma." },
        area: { ja: "宮の森", en: "Miyanomori" },
        address: { ja: "札幌市中央区宮の森1条6丁目5-15", en: "5-15 Miyanomori 1-jo 6-chome, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "考え事を整理するのに最適な静けさ。", en: "Optimal silence for organizing thoughts." },
        open_hours: "10:00 - 18:00",
        officialUrl: "http://sato-coffee.jp/",
        googleMapRating: 4.2,
        googleMapReviews: 250,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sato+Coffee+Sapporo",
        reviewHighlights: {
            ja: ["静寂を楽しむ大人の店", "桜並木が見える", "コーヒーと器が素敵"],
            en: ["Adult shop to enjoy silence", "View of cherry trees", "Lovely coffee and cups"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "20",
        name: { ja: "The Lighthouse Coffee", en: "The Lighthouse Coffee" },
        description: { ja: "NYスタイルのスタイリッシュなカフェ。ラテやクラフトビールを楽しめ、若者に人気。", en: "Stylish NY style cafe. Enjoy lattes and craft beer, popular with youth." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南2条西4丁目11", en: "4-11 Minami 2-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Late Night"],
        rating: { work_comfort: 3, coffee: 4, vibe: 4 },
        kazesift_comment: { ja: "活気ある空間でアイデアを出したい時に。", en: "When you want to brainstorm in a lively space." },
        open_hours: "10:00 - 23:00",
        officialUrl: "https://www.instagram.com/the_lighthouse_coffee_beer/",
        googleMapRating: 4.0,
        googleMapReviews: 300,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Lighthouse+Coffee+Sapporo",
        reviewHighlights: {
            ja: ["お洒落なNYスタイル", "ラテアートが可愛い", "立地が良く行きやすい"],
            en: ["Stylish NY vibe", "Cute latte art", "Convenient location"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "21",
        name: { ja: "Nagayama Rest", en: "Nagayama Rest" },
        description: { ja: "歴史的建造物「旧永山武四郎邸」にある和洋折衷カフェ。レトロでフォトジェニックな空間。", en: "Japanese-Western eclectic cafe in a historical building. Retro and photogenic space." },
        area: { ja: "バスセンター前", en: "Bus Center Mae" },
        address: { ja: "札幌市中央区北2条東6丁目", en: "Kita 2-jo Higashi 6-chome, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Good Coffee", "Meeting"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "歴史を感じながら優雅な時間を。", en: "Elegant time feeling the history." },
        open_hours: "11:00 - 22:00",
        officialUrl: "https://wondercrew.jp/nagayamarest/",
        googleMapRating: 4.2,
        googleMapReviews: 400,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nagayama+Rest+Sapporo",
        reviewHighlights: {
            ja: ["レトロモダンな洋館", "映えるスイーツが多い", "公園隣接で気持ちいい"],
            en: ["Retro modern western building", "Photogenic sweets", "pleasant park side"]
        },
        holidayStr: { ja: "第2水曜日", en: "2nd Wednesday" }
    },
    {
        id: "22",
        name: { ja: "Lamp Light Books Cafe", en: "Lamp Light Books Cafe" },
        description: { ja: "「本の世界を旅するホテル」の1階にある24時間営業のブックカフェ。夜更かし読書に最適。", en: "24h book cafe on the 1st floor of a book hotel. Perfect for late night reading." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南2条西7丁目5-1", en: "7-5-1 Minami 2-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Silence", "Late Night"],
        rating: { work_comfort: 5, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "深夜に集中したい時の強い味方。", en: "Strong ally when you want to focus late at night." },
        open_hours: "24 Hours",
        officialUrl: "https://www.lamplightbookshotel.com/sapporo/cafe/",
        googleMapRating: 4.3,
        googleMapReviews: 600,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lamp+Light+Books+Cafe+Sapporo",
        reviewHighlights: {
            ja: ["24時間営業で便利", "静かで読書に没頭できる", "ホテルのカフェで綺麗"],
            en: ["Convenient 24h open", "Quiet immersive reading", "Clean hotel cafe"]
        },
        holidayStr: { ja: "定休日なし", en: "None" }
    },
    {
        id: "23",
        name: { ja: "Saturdays Chocolate", en: "Saturdays Chocolate" },
        description: { ja: "札幌発のBean to Barチョコレート専門店。カカオの香りが漂うスタイリッシュな工場併設カフェ。", en: "Bean to Bar chocolate specialty shop from Sapporo. Stylish cafe with factory." },
        area: { ja: "創成川イースト", en: "Sosei East" },
        address: { ja: "札幌市中央区南2条東2丁目7-1", en: "2-7-1 Minami 2-jo Higashi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "チョコレートドリンクで脳を活性化。", en: "Activate your brain with chocolate drinks." },
        open_hours: "10:00 - 18:30",
        officialUrl: "https://www.saturdayschocolate.com/",
        googleMapRating: 4.4,
        googleMapReviews: 544,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Saturdays+Chocolate+Sapporo",
        reviewHighlights: {
            ja: ["チョコドリンクが濃厚", "スタイリッシュな内装", "カカオの香りが良い"],
            en: ["Rich chocolate drinks", "Stylish interior", "Nice cacao aroma"]
        },
        holidayStr: { ja: "水曜日", en: "Wednesday" }
    },
    // NEW BATCH 1 (10 cafes)
    {
        id: "24",
        name: { ja: "CANVAS LOUNGE KOKAGE", en: "CANVAS LOUNGE KOKAGE" },
        description: { ja: "ザ ロイヤルパーク キャンバス 札幌大通公園の2階ラウンジ。焚き火の映像と音楽が流れる上質な空間。", en: "Lounge on the 2nd floor of Royal Park Canvas. High-quality space with bonfire visuals and music." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西1-12", en: "1-12 Odori Nishi, Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting", "Late Night"],
        rating: { work_comfort: 5, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "ホテルのラウンジならではの快適さと開放感。", en: "Comfort and openness unique to a hotel lounge." },
        open_hours: "10:00 - 23:00",
        officialUrl: "https://www.royalparkhotels.co.jp/the/sapporoodoripark/restaurant/kokage/",
        googleMapRating: 4.1,
        googleMapReviews: 120,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CANVAS+LOUNGE+KOKAGE+Sapporo",
        reviewHighlights: {
            ja: ["おしゃれで落ち着く空間", "電源とWi-Fiが完備", "大通公園が見える"],
            en: ["Stylish and relaxing space", "Equipped with power and Wi-Fi", "View of Odori Park"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "25",
        name: { ja: "Bar Ignis (UNWIND HOTEL)", en: "Bar Ignis (UNWIND HOTEL)" },
        description: { ja: "アンワインドホテル＆バーの10階にあるバー。夜は焚き火を囲んでリラックスできる。", en: "Bar on the 10th floor of UNWIND HOTEL. Relax around the bonfire at night." },
        area: { ja: "中島公園", en: "Nakajima Park" },
        address: { ja: "札幌市中央区南8条西5-289-111", en: "5-289-111 Minami 8-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Late Night", "Silence"],
        rating: { work_comfort: 3, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "非日常感を味わえるロッジ風のバー。", en: "Lodge-style bar with an extraordinary atmosphere." },
        open_hours: "19:30 - 23:30",
        officialUrl: "https://www.hotel-unwind.com/sapporo/",
        googleMapRating: 4.5,
        googleMapReviews: 380,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=UNWIND+HOTEL+AND+BAR+Sapporo",
        reviewHighlights: {
            ja: ["焚き火があり雰囲気が最高", "フリーワインのサービスが良い", "隠れ家的なホテルバー"],
            en: ["Great vibe with bonfire", "Excellent free wine service", "Hideaway hotel bar"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "26",
        name: { ja: "The Relay", en: "The Relay" },
        description: { ja: "北円山エリアのシェアオフィスに併設されたカフェ。スタイリッシュで集中しやすい。", en: "Cafe attached to a shared office in North Maruyama. Stylish and focused." },
        area: { ja: "円山", en: "Maruyama" },
        address: { ja: "札幌市中央区北4条西17-1-11", en: "1-11 Kita 4-jo Nishi 17, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "Silence"],
        rating: { work_comfort: 5, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "コワーキング併設で作業環境は抜群。", en: "Excellent work environment attached to coworking." },
        open_hours: "12:00 - 17:00",
        officialUrl: "https://the-relay.jp/",
        googleMapRating: 4.8,
        googleMapReviews: 45,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Relay+Sapporo",
        reviewHighlights: {
            ja: ["コーヒーの試飲ができる", "チーズケーキが美味しい", "スタッフが親切"],
            en: ["Can taste coffee flights", "Delicious cheesecake", "Friendly staff"]
        },
        holidayStr: { ja: "月・火曜日", en: "Mon / Tue" }
    },
    {
        id: "27",
        name: { ja: "Cafe La Bastille", en: "Cafe La Bastille" },
        description: { ja: "創業30年以上の老舗カフェ。大通の喧騒を忘れる静寂とジャズの空間。", en: "Long-established cafe over 30 years. Silence and jazz space forgetting Odori noise." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西1-15-3", en: "1-15-3 Odori Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Good Coffee", "Late Night"],
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "夜に一人で考え事をしたい時に。", en: "When you want to think alone at night." },
        open_hours: "12:00 - 22:00",
        officialUrl: "https://bastille.usagi.co/",
        googleMapRating: 4.3,
        googleMapReviews: 280,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+La+Bastille+Sapporo",
        reviewHighlights: {
            ja: ["レアチーズケーキが絶品", "ジャズが流れる落ち着く空間", "コーヒーが本格的"],
            en: ["Rare cheesecake is exquisite", "Relaxing space with Jazz", "Authentic coffee"]
        },
        holidayStr: { ja: "月曜日", en: "Monday" }
    },
    {
        id: "28",
        name: { ja: "STANDARD COFFEE LAB.", en: "STANDARD COFFEE LAB." },
        description: { ja: "こだわりのスペシャルティコーヒーとワッフルが人気。藤野と大通などに店舗あり。", en: "Popular for specialty coffee and waffles. Stores in Fujino and Odori." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南3条西7-7-4", en: "7-7-4 Minami 3-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Late Night"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "ラテアートの美しさは札幌屈指。", en: "One of the best latte arts in Sapporo." },
        open_hours: "10:00 - 22:00",
        officialUrl: "https://standardcoffeelab.com/",
        googleMapRating: 4.4,
        googleMapReviews: 350,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=STANDARD+COFFEE+LAB+Sapporo",
        reviewHighlights: {
            ja: ["ラテアートが素晴らしい", "コーヒーが美味しい", "ピザトーストも人気"],
            en: ["Amazing latte art", "Delicious coffee", "Pizza toast is popular"]
        },
        holidayStr: { ja: "木曜日", en: "Thursday" }
    },
    {
        id: "29",
        name: { ja: "Cafe E.den", en: "Cafe E.den" },
        description: { ja: "円山の緑豊かなエリアにある一軒家カフェ。季節のパフェやフードメニューが充実。", en: "Single house cafe in green Maruyama. Rich parfait and food menu." },
        area: { ja: "円山", en: "Maruyama" },
        address: { ja: "札幌市中央区円山西町7-2-37", en: "7-2-37 Maruyama Nishimachi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Good Coffee", "Meeting"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "ドライブのついでに寄りたい癒やしの場所。", en: "Healing spot to stop by during a drive." },
        open_hours: "11:30 - 18:00",
        officialUrl: "https://www.instagram.com/cafe_e.den/",
        googleMapRating: 3.8,
        googleMapReviews: 120,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+E.den+Sapporo",
        reviewHighlights: {
            ja: ["パフェが美しくて美味しい", "窓からの景色が良い", "落ち着いた雰囲気"],
            en: ["Beautiful and tasty parfaits", "Nice view from window", "Relaxed atmosphere"]
        },
        holidayStr: { ja: "火曜日", en: "Tuesday" }
    },
    {
        id: "30",
        name: { ja: "Sapporo Coffee Kan (Clock Tower)", en: "Sapporo Coffee Kan (Clock Tower)" },
        description: { ja: "時計台のすぐ近くにある老舗カフェ。サイフォンで淹れる珈琲は格別。", en: "Established cafe near Clock Tower. Syphon coffee is exceptional." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区北1条西2", en: "Kita 1-jo Nishi 2, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "Meeting"],
        rating: { work_comfort: 4, coffee: 4, vibe: 4 },
        kazesift_comment: { ja: "観光の合間にも、商談にも使える安定感。", en: "Reliable for sightseeing breaks or business meetings." },
        open_hours: "08:00 - 19:00",
        officialUrl: "http://www.sapporocoffeekan.co.jp/",
        googleMapRating: 4.1,
        googleMapReviews: 400,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sapporo+Coffee+Kan+Clock+Tower",
        reviewHighlights: {
            ja: ["時計台が見えるテラス席", "落ち着いたクラシックな空間", "ワッフルが美味しい"],
            en: ["Terrace with Clock Tower view", "Calm classic space", "Delicious waffles"]
        },
        holidayStr: { ja: "無休", en: "None" },
        lat: 43.0625,
        lng: 141.3534
    },
    {
        id: "31",
        name: { ja: "Cafe Blue", en: "Cafe Blue" },
        description: { ja: "古民家をリノベーションした大人気カフェ。パンケーキとこだわりのフードメニュー。", en: "Popular renovated old house cafe. Pancakes and curated food menu." },
        area: { ja: "藻岩山麓", en: "Mt. Moiwa Area" },
        address: { ja: "札幌市中央区南19条西16-9-12", en: "9-12 Minami 19-jo Nishi 16, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Meeting", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "休日のブランチに最高なロケーション。", en: "Best location for holiday brunch." },
        open_hours: "10:00 - 18:00",
        officialUrl: "https://www.cafeblue.jp/",
        googleMapRating: 4.2,
        googleMapReviews: 700,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Blue+Sapporo",
        reviewHighlights: {
            ja: ["パンケーキがふわふわ", "古民家の雰囲気が素敵", "食事メニューも豊富"],
            en: ["Fluffy pancakes", "Lovely old house vibe", "Rich meal menu"]
        },
        holidayStr: { ja: "火曜日", en: "Tuesday" }
    },
    {
        id: "32",
        name: { ja: "Komeda's Coffee (Tanukikoji)", en: "Komeda's Coffee (Tanukikoji)" },
        description: { ja: "名古屋発祥の有名チェーン。広々としたボックス席とWi-Fi完備で作業に最適。", en: "Famous chain from Nagoya. Spacious box seats and Wi-Fi perfect for work." },
        area: { ja: "大通 / 狸小路", en: "Odori / Tanukikoji" },
        address: { ja: "札幌市中央区南3条西2-15-1", en: "2-15-1 Minami 3-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 5, coffee: 3, vibe: 3 },
        kazesift_comment: { ja: "長時間の作業ならここが一番安定。", en: "Reliable choice for long work sessions." },
        open_hours: "07:00 - 23:00",
        officialUrl: "https://www.komeda.co.jp/",
        googleMapRating: 3.9,
        googleMapReviews: 450,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Komeda+Coffee+Tanukikoji+Sapporo",
        reviewHighlights: {
            ja: ["Wi-Fiと電源が使える", "席が広くて快適", "シロノワールが美味しい"],
            en: ["Wi-Fi and Power available", "Spacious comfortable seats", "Shiro-noir is tasty"]
        },
        holidayStr: { ja: "無休", en: "None" },
        lat: 43.0569,
        lng: 141.3555
    },
    {
        id: "33",
        name: { ja: "Donguri Odori", en: "Donguri Odori" },
        description: { ja: "札幌市民に愛されるパン屋「どんぐり」のカフェ併設店。焼きたてパンとコーヒーを。", en: "Cafe attached to popular bakery 'Donguri'. Fresh bread and coffee." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西1 ル・トロワ 1F", en: "Le Trois 1F, Odori Nishi 1, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "ちくわパン片手にカジュアルに休憩。", en: "Casual break with Chikuwa bread." },
        open_hours: "10:00 - 21:00",
        officialUrl: "https://www.donguri-bake.co.jp/",
        googleMapRating: 4.2,
        googleMapReviews: 600,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Donguri+Odori+Sapporo",
        reviewHighlights: {
            ja: ["パンの種類が豊富", "イートインスペースが便利", "ちくわパンが名物"],
            en: ["Huge variety of bread", "Convenient eat-in space", "Famous Chikuwa bread"]
        },
        holidayStr: { ja: "ビル休館日に準ずる", en: "Facility Holiday" }
    },
    {
        id: "34",
        name: { ja: "Tully's Coffee (Nissay Bldg)", en: "Tully's Coffee (Nissay Bldg)" },
        description: { ja: "日本生命札幌ビルの広々としたタリーズ。天井が高く、ビジネスマンの利用が多い。", en: "Spacious Tully's in Nissay Bldg. High ceilings, popular with business people." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北3条西4-1-1", en: "4-1-1 Kita 3-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 5, coffee: 3, vibe: 3 },
        kazesift_comment: { ja: "オフィス街のど真ん中で集中できる。", en: "Focus right in the middle of the office district." },
        open_hours: "07:30 - 21:00",
        officialUrl: "https://www.tullys.co.jp/",
        googleMapRating: 3.8,
        googleMapReviews: 300,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tullys+Coffee+Nissay+Sapporo",
        reviewHighlights: {
            ja: ["天井が高く開放的", "コンセント席が多い", "ビジネス利用に最適"],
            en: ["High ceilings and open", "Many seats with outlets", "Great for business use"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "35",
        name: { ja: "Ueshima Coffee House (APIA)", en: "Ueshima Coffee House (APIA)" },
        description: { ja: "札幌駅地下APIAにある便利な喫茶店。ネルドリップコーヒーと銅マグのアイスコーヒーが有名。", en: "Convenient cafe in Sapporo Station APIA. Famous for flannel drip and copper mug iced coffee." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北5条西3", en: "Kita 5-jo Nishi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 4, vibe: 3 },
        kazesift_comment: { ja: "移動の合間に極上のコーヒータイム。", en: "Premium coffee time between travels." },
        open_hours: "07:30 - 22:00",
        officialUrl: "https://www.ueshima-coffee-ten.jp/",
        googleMapRating: 3.7,
        googleMapReviews: 250,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ueshima+Coffee+Sapporo+Apia",
        reviewHighlights: {
            ja: ["黒糖ミルク珈琲が美味しい", "駅直結で便利", "落ち着いた雰囲気"],
            en: ["Brown sugar milk coffee is tasty", "Direct station access", "Calm atmosphere"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "36",
        name: { ja: "PAUL Sapporo Stellar Place", en: "PAUL Sapporo Stellar Place" },
        description: { ja: "フランス発の老舗ブーランジェリーカフェ。クロワッサンと優雅なモーニングが人気。", en: "French boulangerie cafe. Popular for croissants and elegant morning sets." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北5条西2 ステラプレイス イースト 1F", en: "Stellar Place East 1F, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Meeting"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "パリのカフェにいるような気分。", en: "Feels like being in a Paris cafe." },
        open_hours: "08:00 - 21:00",
        officialUrl: "https://www.paul-japan.com/",
        googleMapRating: 3.9,
        googleMapReviews: 500,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PAUL+Sapporo+Stellar+Place",
        reviewHighlights: {
            ja: ["クロワッサンがサクサク", "モーニングがお得", "おしゃれな内装"],
            en: ["Crispy croissants", "Great value morning", "Stylish interior"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "37",
        name: { ja: "Musica Hall Cafe", en: "Musica Hall Cafe" },
        description: { ja: "音楽とアートを楽しめるカフェ。定期的にライブイベントも開催されるクリエイティブな空間。", en: "Cafe enjoying music and art. Creative space with regular live events." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南3条西6-10-3 長栄ビル 3F", en: "Choei Bldg 3F, 10-3 Minami 3-jo Nishi 6, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "Silence"],
        rating: { work_comfort: 4, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "音楽好きが集まる心地よい場所。", en: "Comfortable place where music lovers gather." },
        open_hours: "12:00 - 21:00",
        officialUrl: "http://www.musica-hall-cafe.com/",
        googleMapRating: 4.3,
        googleMapReviews: 120,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Musica+Hall+Cafe+Sapporo",
        reviewHighlights: {
            ja: ["音楽のセンスが良い", "パフェが美味しい", "ゆったり過ごせる"],
            en: ["Great taste in music", "Delicious parfaits", "Relaxing time"]
        },
        holidayStr: { ja: "月・火曜日", en: "Mon / Tue" }
    },
    {
        id: "38",
        name: { ja: "ISHIYA CAFE (Odori)", en: "ISHIYA CAFE (Odori)" },
        description: { ja: "「白い恋人」の石屋製菓が手掛けるカフェ。極厚のホットケーキが名物。", en: "Cafe by Ishiya (Shiroi Koibito). Famous for extra thick hotcakes." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西4-6-1", en: "4-6-1 Odori Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Wi-Fi", "Meeting", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "北海道スイーツを堪能したい時に。", en: "When you want to enjoy Hokkaido sweets." },
        open_hours: "11:00 - 19:00",
        officialUrl: "http://www.ishiya.co.jp/cafe/",
        googleMapRating: 4.1,
        googleMapReviews: 800,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ISHIYA+CAFE+Sapporo+Odori",
        reviewHighlights: {
            ja: ["ホットケーキが分厚い", "地下街直結で行きやすい", "白い恋人ソフトがある"],
            en: ["Thick hotcakes", "Direct underground access", "Shiroi Koibito soft serve"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "39",
        name: { ja: "Cafe de Crie (Aurora Town)", en: "Cafe de Crie (Aurora Town)" },
        description: { ja: "地下街オーロラタウンにある便利なカフェ。Wi-Fi完備でちょっとした作業に最適。", en: "Convenient cafe in Aurora Town underground. Wi-Fi equipped, good for quick work." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西1", en: "Odori Nishi 1, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 4, coffee: 3, vibe: 3 },
        kazesift_comment: { ja: "地下街での休憩・作業の定番。", en: "Standard for rest/work in underground mall." },
        open_hours: "07:30 - 21:00",
        officialUrl: "https://www.pokkacreate.co.jp/",
        googleMapRating: 3.5,
        googleMapReviews: 200,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+de+Crie+Aurora+Town",
        reviewHighlights: {
            ja: ["コンセントがあって便利", "一人で入りやすい", "パスタが美味しい"],
            en: ["Convenient outlets", "Easy to enter alone", "Tasty pasta"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "40",
        name: { ja: "D&DEPARTMENT HOKKAIDO", en: "D&DEPARTMENT HOKKAIDO" },
        description: { ja: "ロングライフデザインをテーマにしたショップ＆カフェ。北海道らしいデザインと食を発信。", en: "Shop & Cafe themed on long-life design. Showcasing Hokkaido design and food." },
        area: { ja: "大通 / 西18丁目", en: "Odori / Nishi 18" },
        address: { ja: "札幌市中央区大通西17-1-7", en: "1-7 Odori Nishi 17, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Silence"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "デザイン好きにはたまらない空間。", en: "Irresistible space for design lovers." },
        open_hours: "11:00 - 19:00",
        officialUrl: "https://www.d-department.com/item/DD_STORE_HOKKAIDO.html",
        googleMapRating: 4.2,
        googleMapReviews: 150,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=D%26DEPARTMENT+HOKKAIDO",
        reviewHighlights: {
            ja: ["お洒落な雑貨も買える", "落ち着いた雰囲気", "コーヒーが美味しい"],
            en: ["Stylish goods available", "Calm atmosphere", "Delicious coffee"]
        },
        holidayStr: { ja: "日・月曜日", en: "Sun / Mon" }
    },
    {
        id: "41",
        name: { ja: "Cafe & Dining SPUR", en: "Cafe & Dining SPUR" },
        description: { ja: "円山の人気店Cafe Rainの跡地にオープン。落ち着いた雰囲気で食事とカフェを楽しめる。", en: "Opened in the former Cafe Rain spot in Maruyama. Enjoy meal and cafe in calm vibe." },
        area: { ja: "円山", en: "Maruyama" },
        address: { ja: "札幌市中央区北1条西24-3-11", en: "3-11 Kita 1-jo Nishi 24, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Late Night"],
        rating: { work_comfort: 3, coffee: 4, vibe: 4 },
        kazesift_comment: { ja: "雨の日でも晴れやかな気分になれる場所。", en: "Place to feel sunny even on rainy days." },
        open_hours: "11:00 - 22:00",
        officialUrl: "https://www.instagram.com/spur_sapporo/",
        googleMapRating: 4.0,
        googleMapReviews: 200,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Dining+SPUR+Sapporo",
        reviewHighlights: {
            ja: ["パウンドケーキが有名", "カレーが美味しい", "居心地が良い"],
            en: ["Famous pound cake", "Delicious curry", "Comfortable"]
        },
        holidayStr: { ja: "火曜日", en: "Tuesday" }
    },
    {
        id: "42",
        name: { ja: "Marumi Coffee Stand (Nakajima Park)", en: "Marumi Coffee Stand (Nakajima Park)" },
        description: { ja: "中島公園近くの丸美珈琲スタンド。公園散歩の休憩に最適なロケーション。", en: "Marumi Coffee Stand near Nakajima Park. Perfect for a break during park walk." },
        area: { ja: "中島公園", en: "Nakajima Park" },
        address: { ja: "札幌市中央区南14条西6-5-16", en: "5-16 Minami 14-jo Nishi 6, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Silence"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "公園の緑を感じながら最高の一杯を。", en: "Best cup of coffee feeling the park greenery." },
        open_hours: "09:00 - 18:00",
        officialUrl: "https://www.marumi-coffee.com/",
        googleMapRating: 4.6,
        googleMapReviews: 80,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marumi+Coffee+Stand+Nakajima+Park",
        reviewHighlights: {
            ja: ["コーヒーがとにかく美味しい", "公園近くで静か", "スタンドだけど座れる"],
            en: ["Coffee is simple amazing", "Quiet near park", "Seating available"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "43",
        name: { ja: "Snow Brand Parlor Sapporo", en: "Snow Brand Parlor Sapporo" },
        description: { ja: "北海道の老舗乳業メーカーのパーラー。名物スノーロイヤルアイスクリームは必食。", en: "Parlor of Hokkaido's dairy maker. Must-eat famous Snow Royal Ice Cream." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北2条西3-1", en: "3-1 Kita 2-jo Nishi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Wi-Fi", "Meeting"],
        rating: { work_comfort: 3, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "昭和レトロな空間でリッチなひととき。", en: "Rich moment in Showa retro space." },
        open_hours: "10:00 - 19:00",
        officialUrl: "https://snowbrand-parlor.co.jp/",
        googleMapRating: 4.0,
        googleMapReviews: 1200,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Snow+Brand+Parlor+Sapporo",
        reviewHighlights: {
            ja: ["スノーロイヤルが絶品", "パフェの種類が多い", "レトロで懐かしい"],
            en: ["Snow Royal is exquisite", "Many parfait types", "Nostalgic retro feel"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "44",
        name: { ja: "Starbucks Coffee (Sapporo Grand Hotel)", en: "Starbucks Coffee (Sapporo Grand Hotel)" },
        description: { ja: "札幌グランドホテル内のスターバックス。落ち着いた雰囲気で、ビジネスマンの利用も多い「おとなスタバ」。", en: "Starbucks in Sapporo Grand Hotel. Calm atmosphere, popular with business people." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区北1条西4 札幌グランドホテル", en: "Sapporo Grand Hotel, Kita 1-jo Nishi 4, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 5, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "失敗しない仕事カフェの代表格。", en: "The definitive fail-safe work cafe." },
        open_hours: "07:00 - 22:00",
        officialUrl: "https://store.starbucks.co.jp/detail-431/",
        googleMapRating: 4.1,
        googleMapReviews: 550,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Sapporo+Grand+Hotel",
        reviewHighlights: {
            ja: ["電源席が多くて便利", "落ち着いていて静か", "接客が丁寧"],
            en: ["Plenty of power outlets", "Calm and quiet", "Polite service"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "45",
        name: { ja: "Starbucks Coffee (Akarenga Terrace)", en: "Starbucks Coffee (Akarenga Terrace)" },
        description: { ja: "札幌駅近くの赤れんがテラス2階（ミレド店として登録）。開放的な空間で作業もしやすい。", en: "Near Sapporo Station (Miredo 2F). Open space, easy to work." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北3条西3-1 大同生命札幌ビル 2F", en: "2F Daido Life Sapporo Bldg, Kita 3-jo Nishi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "View"],
        rating: { work_comfort: 4, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "開放感があり、気持ちよく作業できる。", en: "Open feeling, pleasant work environment." },
        open_hours: "08:00 - 22:00",
        officialUrl: "https://store.starbucks.co.jp/",
        googleMapRating: 4.0,
        googleMapReviews: 400,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Coffee+Miredo+Sapporo",
        reviewHighlights: {
            ja: ["窓が大きくて明るい", "席数が多くて広い", "おしゃれな雰囲気"],
            en: ["Large windows, bright", "Spacious with many seats", "Stylish atmosphere"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "46",
        name: { ja: "Miyakoshiya Coffee High Grown Cafe", en: "Miyakoshiya Coffee High Grown Cafe" },
        description: { ja: "伏見の高台にあり、札幌の夜景を一望できるロマンチックなカフェ。深夜まで営業。", en: "Located on Fushimi hill with a panoramic night view of Sapporo. Open late." },
        area: { ja: "伏見 / 円山", en: "Fushimi / Maruyama" },
        address: { ja: "札幌市中央区伏見3-15-20", en: "3-15-20 Fushimi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["View", "Late Night", "Good Coffee"],
        rating: { work_comfort: 2, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "夜景と深煎り珈琲で、特別な時間を。", en: "Special time with night view and dark roast coffee." },
        open_hours: "15:00 - 01:00",
        officialUrl: "http://www.miyakoshiya-coffee.co.jp/",
        googleMapRating: 4.3,
        googleMapReviews: 600,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Miyakoshiya+Coffee+High+Grown+Cafe",
        reviewHighlights: {
            ja: ["夜景がとにかく綺麗", "コーヒーが美味しい", "デートに最適"],
            en: ["Night view is stunning", "Delicious coffee", "Perfect for dates"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "47",
        name: { ja: "Tokumitsu Coffee (Odori Bisse)", en: "Tokumitsu Coffee (Odori Bisse)" },
        description: { ja: "大通公園を一望できる「大通ビッセ」2階のカフェ。こだわりのスペシャルティコーヒーを提供。", en: "Cafe on 2F of Odori Bisse overlooking Odori Park. Serves specialty coffee." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西3丁目7 大通ビッセ 2F", en: "Odori Bisse 2F, Odori Nishi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Good Coffee", "View"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "大通公園を眺めながら、最高の一杯を。", en: "Enjoy the best cup while viewing Odori Park." },
        open_hours: "10:00 - 20:00",
        officialUrl: "http://tokumitsu-coffee.com/",
        googleMapRating: 4.2,
        googleMapReviews: 350,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tokumitsu+Coffee+Odori+Bisse",
        reviewHighlights: {
            ja: ["コーヒーの種類が豊富", "窓からの景色が良い", "スイーツも美味しい"],
            en: ["Review varies coffee types", "Good view from window", "Sweets are tasty"]
        },
        holidayStr: { ja: "元日", en: "New Year's Day" }
    },
    {
        id: "48",
        name: { ja: "Cafe Ranban", en: "Cafe Ranban" },
        description: { ja: "1978年創業の自家焙煎珈琲店。クラシック音楽が流れる落ち着いた空間で、至高の一杯を。", en: "Roastery established in 1978. Supreme cup in calm space with classic music." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南3条西5-20", en: "5-20 Minami 3-jo Nishi, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
        features: ["Silence", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "喧騒から離れた、静寂と香りの隠れ家。", en: "Sanctuary of silence and aroma away from noise." },
        open_hours: "08:00 - 18:00",
        officialUrl: "http://www.ranban.net/",
        googleMapRating: 4.4,
        googleMapReviews: 450,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Ranban+Sapporo",
        reviewHighlights: {
            ja: ["深煎りコーヒーが絶品", "雰囲気がとても良い", "ケーキセットがおすすめ"],
            en: ["Dark roast is exquisite", "Atmosphere is very good", "Cake set recommended"]
        },
        holidayStr: { ja: "木曜日", en: "Thursday" }
    },
    {
        id: "49",
        name: { ja: "Inoda Coffee (Sapporo Daimaru)", en: "Inoda Coffee (Sapporo Daimaru)" },
        description: { ja: "京都発祥の老舗喫茶店。赤いポットでサーブされるコーヒーと、「京の朝食」が有名。", en: "Old Kyoto coffee shop. Famous for coffee in red pots and 'Kyoto Breakfast'." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北5条西4丁目7 大丸札幌店 7F", en: "Daimaru Sapporo 7F, Kita 5-jo Nishi 4, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Meeting", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 4, vibe: 4 },
        kazesift_comment: { ja: "デパート内の優雅な休憩スポット。", en: "Elegant break spot inside department store." },
        open_hours: "10:00 - 20:00",
        officialUrl: "https://www.inoda-coffee.co.jp/",
        googleMapRating: 3.9,
        googleMapReviews: 300,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Inoda+Coffee+Sapporo+Daimaru",
        reviewHighlights: {
            ja: ["レトロで高級感がある", "アラビアの真珠が美味しい", "接客が素晴らしい"],
            en: ["Retro and luxurious", "Arabian Pearl is tasty", "Service is wonderful"]
        },
        holidayStr: { ja: "大丸定休日に準ずる", en: "Same as Daimaru" }
    },
    {
        id: "50",
        name: { ja: "Sapporo Coffee Kan Honten", en: "Sapporo Coffee Kan Honten" },
        description: { ja: "旧北海道工業試験場を改装した歴史的建造物カフェ。炭火焙煎珈琲とクラシックな雰囲気が魅力。", en: "Historic building cafe renovated from old industrial lab. Charcoal roasted coffee." },
        area: { ja: "平岸", en: "Hiragishi" },
        address: { ja: "札幌市豊平区平岸2条13-2-21", en: "2-21 Hiragishi 2-jo 13, Toyohira-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
        features: ["Good Coffee", "Silence", "Meeting"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "歴史を感じながら、ゆったりとした時間を。", en: "Relaxing time feeling the history." },
        open_hours: "09:00 - 19:00",
        officialUrl: "http://www.sapporocoffeekan.co.jp/",
        googleMapRating: 4.1,
        googleMapReviews: 350,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sapporo+Coffee+Kan+Honten",
        reviewHighlights: {
            ja: ["建物が素敵", "コーヒーが美味しい", "ワッフルが人気"],
            en: ["Building is lovely", "Coffee is delicious", "Waffles are popular"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "51",
        name: { ja: "Jun-kissa Olympia", en: "Jun-kissa Olympia" },
        description: { ja: "1964年創業、昭和の面影を色濃く残す純喫茶。赤いベルベットの椅子とシャンデリアが印象的。", en: "Established in 1964, pure kissaten with Showa vibe. Red velvet chairs and chandeliers." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北4条西6-1-3 北4条ビル B1F", en: "Kita 4-jo Bldg B1F, Kita 4-jo Nishi 6, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Meeting"],
        rating: { work_comfort: 3, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "タイムスリップしたような昭和レトロ空間。", en: "Showa retro space like time travel." },
        open_hours: "10:00 - 18:00",
        officialUrl: "https://www.olympia-coffee.jp/",
        googleMapRating: 4.2,
        googleMapReviews: 300,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jun-kissa+Olympia+Sapporo",
        reviewHighlights: {
            ja: ["レトロな雰囲気が最高", "ナポリタンが美味しい", "落ち着く空間"],
            en: ["Retro vibe is the best", "Napolitan is tasty", "Relaxing space"]
        },
        holidayStr: { ja: "土日祝", en: "Sat/Sun/Holidays" }
    },
    {
        id: "52",
        name: { ja: "Komeda's Coffee (Odori Nishi 2)", en: "Komeda's Coffee (Odori Nishi 2)" },
        description: { ja: "大通駅直結の便利なコメダ。全席に電源があり、広々とした空間で作業に集中できる。", en: "Convenient Komeda directly connected to Odori St. Power in all seats, great for work." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西2-5 ほくほく札幌ビル 1F", en: "Hokuhoku Sapporo Bldg 1F, Odori Nishi 2, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 5, coffee: 3, vibe: 3 },
        kazesift_comment: { ja: "絶対に電源を確保したい時の駆け込み寺。", en: "Refuge when you absolutely need power." },
        open_hours: "07:00 - 23:00",
        officialUrl: "https://www.komeda.co.jp/",
        googleMapRating: 4.1,
        googleMapReviews: 200,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Komeda+Coffee+Odori+Nishi+2",
        reviewHighlights: {
            ja: ["電源とWi-Fiが完璧", "席が広くてきれい", "モーニングがお得"],
            en: ["Power and Wi-Fi perfect", "Seats are spacious/clean", "Great value morning"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "53",
        name: { ja: "Nana's Green Tea (Sapporo Parco)", en: "Nana's Green Tea (Sapporo Parco)" },
        description: { ja: "札幌パルコ内の和カフェ。抹茶ラテや和スイーツが人気。買い物の合間の休憩に。", en: "Japanese cafe in Sapporo Parco. Popular for Matcha latte and sweets. Good for shopping break." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西3-3 札幌パルコ 5F", en: "Sapporo Parco 5F, Minami 1-jo Nishi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Meeting"],
        rating: { work_comfort: 3, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "和の甘味でほっと一息つける場所。", en: "Place to relax with Japanese sweets." },
        open_hours: "10:00 - 20:00",
        officialUrl: "http://www.nanasgreentea.com/",
        googleMapRating: 3.8,
        googleMapReviews: 250,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nanas+Green+Tea+Sapporo+Parco",
        reviewHighlights: {
            ja: ["抹茶パフェが美味しい", "ランチ利用もできる", "女性に人気"],
            en: ["Matcha parfait is tasty", "Good for lunch", "Popular with women"]
        },
        holidayStr: { ja: "パルコ休館日に準ずる", en: "Same as Parco" }
    },
    {
        id: "54",
        name: { ja: "Restaurant EUREKA", en: "Restaurant EUREKA" },
        description: { ja: "2024年12月オープン。桑園「エア・ウォーターの森」内の開放的なカフェレストラン。ガラス張りで自然を感じられる。", en: "Opened Dec 2024. Open cafe restaurant in 'Air Water Forest' at Soen. Nature view through glass walls." },
        area: { ja: "桑園", en: "Soen" },
        address: { ja: "札幌市中央区北8条西13-28-21 エア・ウォーターの森 1F", en: "Air Water Forest 1F, Kita 8-jo Nishi 13, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["View", "Meeting", "Good Coffee"],
        rating: { work_comfort: 4, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "桑園に現れた、森を感じる最新スポット。", en: "Newest spot in Soen where you feel the forest." },
        open_hours: "11:00 - 21:00 (Sun/Mon -15:00)",
        officialUrl: "https://tabelog.com/hokkaido/A0101/A010105/1077750/",
        googleMapRating: 4.5,
        googleMapReviews: 15,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurant+EUREKA+Sapporo",
        reviewHighlights: {
            ja: ["開放感が素晴らしい", "料理も本格的", "おしゃれな空間"],
            en: ["Wonderful openness", "Authentic food", "Stylish space"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2024-12"
    },
    {
        id: "55",
        name: { ja: "Mada Namae no Nai Kissaten", en: "Mada Namae no Nai Kissaten" },
        description: { ja: "2025年2月オープン。札幌軟石を使った隠れ家のような喫茶店。1階は洋菓子店、2階が喫茶スペース。", en: "Opened Feb 2025. Hideaway kissaten using Sapporo soft stone. 1F sweets shop, 2F cafe." },
        area: { ja: "藻岩 / 南区", en: "Moiwa / Minami-ku" },
        address: { ja: "札幌市南区南31条西10-1-13", en: "1-13 Minami 31-jo Nishi 10, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Silence", "Good Coffee"],
        rating: { work_comfort: 2, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "名前はまだないが、心に残る名店。", en: "No name yet, but an unforgettable shop." },
        open_hours: "13:00 - 18:00",
        officialUrl: "https://www.instagram.com/mada_namaenonai_kissaten/",
        googleMapRating: 4.8,
        googleMapReviews: 10,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mada+Namae+no+Nai+Kissaten+Sapporo",
        reviewHighlights: {
            ja: ["ケーキが絶品", "隠れ家的な雰囲気が最高", "静かで落ち着く"],
            en: ["Cakes are exquisite", "Hideaway vibe is best", "Quiet and relaxing"]
        },
        holidayStr: { ja: "日・月", en: "Sun/Mon" },
        openDate: "2025-02"
    },
    {
        id: "56",
        name: { ja: "NELD COFFEE CLUB", en: "NELD COFFEE CLUB" },
        description: { ja: "2024年4月オープン。二条市場近くの本格ロースタリーカフェ。スタイリッシュな空間で高品質なコーヒーを楽しめる。", en: "Opened Apr 2024. Authentic roastery cafe near Nijo Market. High quality coffee in stylish space." },
        area: { ja: "大通 / バスセンター", en: "Odori / Bus Center" },
        address: { ja: "札幌市中央区南2条東3-1-3 あぼじ食品 1F", en: "Aboji Foods 1F, Minami 2-jo Higashi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Wi-Fi", "Meeting"],
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: { ja: "コーヒー好きなら一度は訪れるべき新店。", en: "Must visit new shop for coffee lovers." },
        open_hours: "12:00 - 22:00",
        officialUrl: "https://www.instagram.com/neld_coffee_club/",
        googleMapRating: 4.9,
        googleMapReviews: 30,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=NELD+COFFEE+CLUB+Sapporo",
        reviewHighlights: {
            ja: ["コーヒーの知識が豊富", "内装がかっこいい", "居心地が良い"],
            en: ["Knowledgeable about coffee", "Interior is cool", "Cozy atmosphere"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2024-04"
    },
    {
        id: "57",
        name: { ja: "Coffee Ao", en: "Coffee Ao" },
        description: { ja: "2024年6月オープン。栗山町の古民家カフェだが、札幌近郊のドライブスポットとして人気急上昇中。", en: "Opened Jun 2024. Old house cafe in Kuriyama, rising popularity as drive spot near Sapporo." },
        area: { ja: "札幌近郊 (栗山)", en: "Suburbs (Kuriyama)" },
        address: { ja: "夕張郡栗山町錦2-71", en: "2-71 Nishiki, Kuriyama-cho" },
        imageUrl: "https://images.unsplash.com/photo-1529323383804-09945df33682?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Good Coffee"],
        rating: { work_comfort: 2, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "少し足を延ばしてでも行きたい、青の世界。", en: "World of Ao worth the trip." },
        open_hours: "11:00 - 19:00",
        officialUrl: "https://www.instagram.com/coffee_ao/",
        googleMapRating: 4.6,
        googleMapReviews: 20,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Coffee+Ao+Kuriyama",
        reviewHighlights: {
            ja: ["古民家の雰囲気が素敵", "静かで癒される", "器も素敵"],
            en: ["Old house vibe is lovely", "Quiet and healing", "Tableware is nice"]
        },
        holidayStr: { ja: "月・火", en: "Mon/Tue" },
        openDate: "2024-06"
    },
    {
        id: "58",
        name: { ja: "MOMOLOBBY", en: "MOMOLOBBY" },
        description: { ja: "2024年10月オープン。バスセンター前近くの韓国風カフェ。モーニングからナイトカフェまで幅広く使える。", en: "Opened Oct 2024. Korean style cafe near Bus Center. Usable from morning to night." },
        area: { ja: "バスセンター", en: "Bus Center" },
        address: { ja: "札幌市中央区北1条東7-10", en: "Kita 1-jo Higashi 7-10, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Meeting", "Late Night"],
        rating: { work_comfort: 4, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "朝活も夜カフェもできる、万能なおしゃれスポット。", en: "Versatile stylish spot for morning and night." },
        open_hours: "09:00 - 21:00",
        officialUrl: "https://www.instagram.com/momolobby_sapporo/",
        googleMapRating: 4.3,
        googleMapReviews: 15,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MOMOLOBBY+Sapporo",
        reviewHighlights: {
            ja: ["店内が可愛い", "モーニングが美味しい", "長居しやすい"],
            en: ["Interior is cute", "Morning is tasty", "Easy to stay long"]
        },
        holidayStr: { ja: "水曜日", en: "Wednesday" },
        openDate: "2024-10"
    },
    {
        id: "59",
        name: { ja: "Starbucks Tea & Cafe (Sapporo 4-chome)", en: "Starbucks Tea & Cafe (Sapporo 4-chome)" },
        description: { ja: "2025年8月オープン。北海道初の「ティー」に特化したスターバックス。明るい色彩の店内で新しいスタバ体験を。", en: "Opened Aug 2025. Hokkaido's first Tea-focused Starbucks. New Starbucks experience in bright interior." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南3条西4丁目12-1 札幌4丁目プレイス 1F", en: "Sapporo 4-chome Place 1F, Minami 3-jo Nishi 4, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 4, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "コーヒーが苦手な人とも行ける、新しいスタバ。", en: "New Starbucks good for non-coffee drinkers too." },
        open_hours: "08:00 - 22:00",
        officialUrl: "https://store.starbucks.co.jp/",
        googleMapRating: 4.2,
        googleMapReviews: 50,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Tea+Cafe+Sapporo+4chome",
        reviewHighlights: {
            ja: ["紅茶がおいしい", "内装が明るくて綺麗", "駅チカで便利"],
            en: ["Tea is delicious", "Bright and clean interior", "Convenient near station"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2025-08"
    },
    {
        id: "60",
        name: { ja: "Hokkaido Sweets Studio", en: "Hokkaido Sweets Studio" },
        description: { ja: "2025年5月オープン。豊平区・美園のスイーツ＆カフェ。北海道素材のスイーツをイートインでゆっくり楽しめる。", en: "Opened May 2025. Sweets & cafe in Misono. Enjoy Hokkaido sweets in cafe." },
        area: { ja: "美園 / 豊平", en: "Misono / Toyohira" },
        address: { ja: "札幌市豊平区美園5条1-1-1", en: "1-1-1 Misono 5-jo, Toyohira-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a029177b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Meeting"],
        rating: { work_comfort: 2, coffee: 4, vibe: 4 },
        kazesift_comment: { ja: "スイーツ好きにはたまらない、穴場カフェ。", en: "Hidden gem cafe irresistible for sweets lovers." },
        open_hours: "11:00 - 19:00",
        officialUrl: "https://hokkaido-sweets-studio.com/",
        googleMapRating: 4.0,
        googleMapReviews: 10,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hokkaido+Sweets+Studio+Sapporo",
        reviewHighlights: {
            ja: ["スイーツが美味しい", "駐車場があって便利", "店内がおしゃれ"],
            en: ["Sweets are tasty", "Convenient parking", "Stylish interior"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2025-05"
    },
    {
        id: "61",
        name: { ja: "Gong Cha (Sapporo 4-chome Place)", en: "Gong Cha (Sapporo 4-chome Place)" },
        description: { ja: "2025年4月オープン。世界的に人気のティーカフェが4丁目プレイスに登場。高品質な台湾茶をカジュアルに楽しめる。", en: "Opened Apr 2025. World-famous tea cafe in 4-chome Place. Enjoy high quality Taiwan tea casually." },
        area: { ja: "大通 / すすきの", en: "Odori / Susukino" },
        address: { ja: "札幌市中央区南3条西4丁目12-1 札幌4丁目プレイス 1F", en: "Sapporo 4-chome Place 1F, Minami 3-jo Nishi 4, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Takeout"],
        rating: { work_comfort: 3, coffee: 4, vibe: 4 },
        kazesift_comment: { ja: "買い物ついでに立ち寄れる、安定のティーカフェ。", en: "Reliable tea cafe to drop by while shopping." },
        open_hours: "10:00 - 21:00",
        officialUrl: "https://www.gongcha.co.jp/",
        googleMapRating: 4.2,
        googleMapReviews: 80,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gong+Cha+Sapporo+4chome",
        reviewHighlights: {
            ja: ["タピオカがもちもち", "お茶の香りが良い", "提供が早い"],
            en: ["Tapioca is chewy", "Tea aroma is good", "Service is fast"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2025-04",
        lat: 43.0640,
        lng: 141.3509
    },
    {
        id: "62",
        name: { ja: "Lemon Bakery", en: "Lemon Bakery" },
        description: { ja: "2025年3月オープン。自家製パンとレモネードが人気のベーカリーカフェ。明るい店内でイートインも可能。", en: "Opened Mar 2025. Bakery cafe famous for homemade bread and lemonade. Eat-in available." },
        area: { ja: "中央区", en: "Chuo-ku" },
        address: { ja: "札幌市中央区南円山エリア (詳細確認中)", en: "Minami Maruyama Area, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Good Coffee", "Morning"],
        rating: { work_comfort: 2, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "焼きたてパンの香りに包まれる幸福な時間。", en: "Happy time surrounded by smell of fresh bread." },
        open_hours: "08:00 - 18:00",
        officialUrl: "https://www.instagram.com/",
        googleMapRating: 4.5,
        googleMapReviews: 35,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lemon+Bakery+Sapporo",
        reviewHighlights: {
            ja: ["パンの種類が豊富", "レモネードが爽やか", "店員さんが親切"],
            en: ["Many types of bread", "Lemonade is refreshing", "Staff is kind"]
        },
        holidayStr: { ja: "月曜日", en: "Monday" },
        openDate: "2025-03",
        lat: 43.0605,
        lng: 141.3550
    },
    {
        id: "63",
        name: { ja: "& Spicy Tanuki", en: "& Spicy Tanuki" },
        description: { ja: "2025年4月オープン。モユクサッポロ内のスパイスジェラート専門店。カフェ利用も可能で、新感覚のスイーツ体験ができる。", en: "Opened Apr 2025. Spice gelato shop in Moyuk Sapporo. Enjoy new sweets experience." },
        area: { ja: "大通 / 狸小路", en: "Odori / Tanukikoji" },
        address: { ja: "札幌市中央区南2条西3丁目20 モユクサッポロ 1F", en: "Moyuk Sapporo 1F, Minami 2-jo Nishi 3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1560008511-11c63416e52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Takeout", "Meeting"],
        rating: { work_comfort: 2, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "スパイスとジェラートの意外な組み合わせに感動。", en: "Impressed by unexpected combo of spice and gelato." },
        open_hours: "11:00 - 21:00",
        officialUrl: "https://moyuk.jp/",
        googleMapRating: 4.3,
        googleMapReviews: 45,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Spicy+Tanuki+Sapporo",
        reviewHighlights: {
            ja: ["ジェラートが濃厚", "スパイスが効いてる", "おしゃれな店内"],
            en: ["Gelato is rich", "Spices vary effective", "Stylish interior"]
        },
        holidayStr: { ja: "モユク定休日に準ずる", en: "Same as Moyuk" },
        openDate: "2025-04",
        lat: 43.0570,
        lng: 141.3509
    },
    // Fail-safe Classic Addition
    {
        id: "64",
        name: { ja: "Rokkatei Sapporo Honten", en: "Rokkatei Sapporo Honten" },
        description: { ja: "北海道を代表する銘菓・六花亭の札幌本店。2階喫茶室では「マルセイバターサンド」のアイスなど限定メニューが楽しめる。", en: "Sapporo main store of Rokkatei. Enjoy exclusive sweets like Butter Sand Ice Cream at 2F cafe." },
        area: { ja: "札幌駅", en: "Sapporo Station" },
        address: { ja: "札幌市中央区北4条西6-3-3", en: "Kita 4-jo Nishi 6-3-3, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Takeout", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "観光客も地元民も愛する、北海道スイーツの聖地。", en: "Holy land of Hokkaido sweets loved by locals and tourists." },
        open_hours: "10:30 - 16:30",
        officialUrl: "https://www.rokkatei.co.jp/",
        googleMapRating: 4.4,
        googleMapReviews: 3000,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rokkatei+Sapporo+Honten",
        reviewHighlights: {
            ja: ["ピザも美味しい", "庭が見えて綺麗", "サービスが素晴らしい"],
            en: ["Pizza is also tasty", "Garden view is beautiful", "Great service"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" }
    },
    {
        id: "65",
        name: { ja: "Sapporo Coffee Kan (Clock Tower Garden Terrace)", en: "Sapporo Coffee Kan (Clock Tower Garden Terrace)" },
        description: { ja: "時計台近くの落ち着いた喫茶店。クラシックな雰囲気で、こだわりの炭火焙煎珈琲を味わえる。", en: "Calm kissaten near Clock Tower. Enjoy charcoal roasted coffee in classic atmosphere." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区北1条西2 時計台ビル 1F", en: "Clock Tower Bldg 1F, Kita 1-jo Nishi 2, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Silence", "Good Coffee"],
        rating: { work_comfort: 3, coffee: 5, vibe: 4 },
        kazesift_comment: { ja: "都会の喧騒を忘れる、正統派珈琲店。", en: "Orthodox coffee shop to forget city bustle." },
        open_hours: "09:00 - 20:00",
        officialUrl: "http://www.sapporocoffeekan.co.jp/",
        googleMapRating: 4.1,
        googleMapReviews: 600,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sapporo+Coffee+Kan+Clock+Tower",
        reviewHighlights: {
            ja: ["コーヒーが香り高い", "落ち着ける", "ワッフルが美味しい"],
            en: ["Coffee is fragrant", "Relaxing", "Waffles are tasty"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "66",
        name: { ja: "Komeda's Coffee (Odori Nishi 2)", en: "Komeda's Coffee (Odori Nishi 2)" },
        description: { ja: "大通駅直結の好立地。全席電源完備で長居もしやすい、名古屋発祥の有名チェーン。", en: "Directly connected to Odori St. All seats have power. Famous chain from Nagoya." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西2-5 ほくほく札幌ビル 1F", en: "Hokuhoku Sapporo Bldg 1F, Odori Nishi 2-5, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Wi-Fi", "Power", "Morning", "Meeting"],
        rating: { work_comfort: 5, coffee: 3, vibe: 3 },
        kazesift_comment: { ja: "作業場所として最強の安定感。", en: "Most reliable spot for working." },
        open_hours: "07:00 - 23:00",
        officialUrl: "https://www.komeda.co.jp/",
        googleMapRating: 4.0,
        googleMapReviews: 800,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Komeda+Coffee+Odori",
        reviewHighlights: {
            ja: ["電源があって便利", "朝活に最適", "シロノワールが美味しい"],
            en: ["Convenient power outlets", "Great for morning", "Shiro-noir is tasty"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "67",
        name: { ja: "Cafe Rondonkan", en: "Cafe Rondonkan" },
        description: { ja: "創業1975年。アンティークな調度品に囲まれた、札幌を代表する老舗純喫茶。", en: "Est 1975. Representative old-school kissaten of Sapporo filled with antiques." },
        area: { ja: "札幌駅 / 北区", en: "Sapporo Station / Kita-ku" },
        address: { ja: "札幌市中央区北4条西11-75", en: "Kita 4-jo Nishi 11-75, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Good Coffee"],
        rating: { work_comfort: 2, coffee: 4, vibe: 5 },
        kazesift_comment: { ja: "50年の歴史を感じる、特別な時間。", en: "Special time feeling 50 years of history." },
        open_hours: "09:00 - 23:00",
        officialUrl: "https://www.rondonkan.info/",
        googleMapRating: 4.3,
        googleMapReviews: 950,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Rondonkan+Sapporo",
        reviewHighlights: {
            ja: ["レトロで素敵", "深夜までやってて良い", "珈琲ゼリーが絶品"],
            en: ["Lovely retro vibe", "Open late is good", "Coffee jelly is exquisite"]
        },
        holidayStr: { ja: "無休", en: "None" }
    },
    {
        id: "68",
        name: { ja: "Ishiya Cafe (Sapporo Odori)", en: "Ishiya Cafe (Sapporo Odori)" },
        description: { ja: "「白い恋人」のISHIYAが手掛けるカフェ。地下歩行空間（チ・カ・ホ）直結でアクセス抜群。", en: "Cafe by ISHIYA of 'Shiroi Koibito'. Direct access from underground walkway." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区大通西4-6-1 札幌大通西4ビル B2F", en: "Sapporo Odori Nishi 4 Bldg B2F, Odori Nishi 4, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Wi-Fi", "Meeting", "Morning"],
        rating: { work_comfort: 3, coffee: 3, vibe: 3 },
        kazesift_comment: { ja: "待ち合わせや隙間時間に最適な立地。", en: "Perfect location for meeting or spare time." },
        open_hours: "08:00 - 20:00",
        officialUrl: "https://www.ishiya.co.jp/cafe/",
        googleMapRating: 4.0,
        googleMapReviews: 550,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ishiya+Cafe+Sapporo+Odori",
        reviewHighlights: {
            ja: ["パンケーキが分厚い", "アクセスが良い", "一人でも入りやすい"],
            en: ["Thick pancakes", "Good access", "Easy to enter alone"]
        },
        holidayStr: { ja: "1月1日", en: "Jan 1" }
    },
    // New Open Addition (2025)
    {
        id: "69",
        name: { ja: "TEA TRIP", en: "TEA TRIP" },
        description: { ja: "2025年6月オープン。円山の紅茶専門店。世界各国の厳選紅茶とスコーンのペアリングを楽しめる。", en: "Opened Jun 2025. Tea specialty shop in Maruyama. Enjoy pairing selected world tea and scones." },
        area: { ja: "円山", en: "Maruyama" },
        address: { ja: "札幌市中央区南1条西20 (詳細確認中)", en: "Minami 1-jo Nishi 20, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Silence", "Takeout"],
        rating: { work_comfort: 2, coffee: 1, vibe: 5 },
        kazesift_comment: { ja: "紅茶派に捧げる、静寂のティータイム。", en: "Quiet tea time dedicated to tea lovers." },
        open_hours: "11:00 - 18:00",
        officialUrl: "https://www.instagram.com/",
        googleMapRating: 4.6,
        googleMapReviews: 25,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TEA+TRIP+Sapporo",
        reviewHighlights: {
            ja: ["紅茶の種類が多い", "スコーンが美味しい", "説明が丁寧"],
            en: ["Many tea types", "Scones are tasty", "Polite explanation"]
        },
        holidayStr: { ja: "水曜日", en: "Wednesday" },
        openDate: "2025-06",
        lat: 43.0544,
        lng: 141.3191
    },
    {
        id: "70",
        name: { ja: "Taru to Tatan", en: "Taru to Tatan" },
        description: { ja: "2025年オープン。タルトタタンとワインと紅茶のお店。増毛産リンゴを使った自家製スイーツが話題。", en: "Opened 2025. Shop for Tarte Tatin, wine and tea. Homemade sweets using Mashike apples." },
        area: { ja: "大通 / 西18丁目", en: "Odori / Nishi 18" },
        address: { ja: "札幌市中央区 (詳細確認中)", en: "Chuo-ku, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Meeting", "Takeout"],
        rating: { work_comfort: 2, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "大人のためのスイーツとワインのマリアージュ。", en: "Marriage of sweets and wine for adults." },
        open_hours: "12:00 - 20:00",
        officialUrl: "https://www.instagram.com/",
        googleMapRating: 4.4,
        googleMapReviews: 30,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Taru+to+Tatan+Sapporo",
        reviewHighlights: {
            ja: ["タルトタタンが絶品", "ワインに合う", "雰囲気がおしゃれ"],
            en: ["Tarte tatin is exquisite", "Goes well with wine", "Stylish atmosphere"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2025-05",
        lat: 43.0540,
        lng: 141.3550
    },
    {
        id: "71",
        name: { ja: "TVh Park Cafe", en: "TVh Park Cafe" },
        description: { ja: "2025年10月オープン。テレビ北海道本社1階のカフェ。北海道産食材のランチやスイーツを楽しめる。", en: "Opened Oct 2025. Cafe in TVh HQ 1F. Enjoy Hokkaido ingredient lunch and sweets." },
        area: { ja: "大通 / バスセンター", en: "Odori / Bus Center" },
        address: { ja: "札幌市中央区大通東6 テレビ北海道 1F", en: "TVh 1F, Odori Higashi 6, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
        features: ["Wi-Fi", "Power", "Meeting"],
        rating: { work_comfort: 4, coffee: 3, vibe: 4 },
        kazesift_comment: { ja: "放送局の1階にある、意外な穴場カフェ。", en: "Unexpected hidden cafe in TV station 1F." },
        open_hours: "10:00 - 18:00",
        officialUrl: "https://www.tv-hokkaido.co.jp/",
        googleMapRating: 4.0,
        googleMapReviews: 20,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TVh+Park+Cafe+Sapporo",
        reviewHighlights: {
            ja: ["広くて綺麗", "穴場で空いている", "ランチがお得"],
            en: ["Spacious and clean", "Hidden and empty", "Lunch is good value"]
        },
        holidayStr: { ja: "土日祝", en: "Sat/Sun/Hol" },
        openDate: "2025-10",
        lat: 43.0384,
        lng: 141.3021
    },
    {
        id: "72",
        name: { ja: "Kinotoya Bake (Marui Imai)", en: "Kinotoya Bake (Marui Imai)" },
        description: { ja: "2025年7月リニューアル。焼きたてチーズタルトで有名なきのとやの焼きたて工房。", en: "Renewed Jul 2025. Freshly baked studio of Kinotoya famous for cheese tart." },
        area: { ja: "大通", en: "Odori" },
        address: { ja: "札幌市中央区南1条西2 丸井今井札幌本店 大通館 B2F", en: "Marui Imai B2F, Minami 1-jo Nishi 2, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Takeout"],
        rating: { work_comfort: 1, coffee: 2, vibe: 3 },
        kazesift_comment: { ja: "お土産にも自分用にも、焼きたての香りに誘われて。", en: "Lured by fresh smell for souvenir or yourself." },
        open_hours: "10:30 - 19:30",
        officialUrl: "https://www.kinotoya.com/",
        googleMapRating: 4.4,
        googleMapReviews: 150,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kinotoya+Bake+Marui+Imai",
        reviewHighlights: {
            ja: ["チーズタルトが最高", "いつも並んでいる", "良い匂い"],
            en: ["Cheese tart is best", "Always lining up", "Good smell"]
        },
        holidayStr: { ja: "不定休", en: "Irregular" },
        openDate: "2025-07",
        lat: 43.0608,
        lng: 141.3533
    },
    {
        id: "73",
        name: { ja: "Fukuzen (Italian Cafe)", en: "Fukuzen (Italian Cafe)" },
        description: { ja: "2025年12月オープン。西18丁目のイタリアンカフェ＆ワインバー。昼はカフェ、夜はバーとして楽しめる。", en: "Opened Dec 2025. Italian Cafe in Nishi 18. Cafe at day, bar at night." },
        area: { ja: "西18丁目", en: "Nishi 18" },
        address: { ja: "札幌市中央区大通西18 (詳細確認中)", en: "Odori Nishi 18, Sapporo" },
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Meeting", "Late Night"],
        rating: { work_comfort: 3, coffee: 3, vibe: 5 },
        kazesift_comment: { ja: "西18丁目エリアの新しい大人の隠れ家。", en: "New adult hideaway in Nishi 18 area." },
        open_hours: "11:30 - 23:00",
        officialUrl: "https://www.instagram.com/",
        googleMapRating: 4.5,
        googleMapReviews: 15,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fukuzen+Sapporo",
        reviewHighlights: {
            ja: ["料理が美味しい", "ワインの種類が豊富", "内装がシック"],
            en: ["Food is tasty", "Many wines", "Chic interior"]
        },
        holidayStr: { ja: "日曜日", en: "Sunday" },
        openDate: "2025-12",
        lat: 43.0610,
        lng: 141.3300
    },
    {
        id: "1001",
        name: { ja: "ろくふぉーる (Roquefort Cafe)", en: "Roquefort Cafe" },
        area: { ja: "札幌駅・大通エリア", en: "Sapporo St. / Odori" },
        address: { ja: "札幌市中央区北1条西3-3-31 古久根ビル 2F", en: "Kokune Bldg 2F, 3-3-31, Kita 1-jo Nishi, Chuo-ku, Sapporo" },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Roquefort+Cafe+Sapporo",
        open_hours: "10:00 - 22:00",
        holidayStr: { ja: "水曜日", en: "Wednesday" },
        features: ["Vintage", "Classic", "Smoking"],
        description: {
            ja: "1988年創業、時計台近くの隠れ家カフェ。アンティークな調度品とジャズが流れる落ち着いた空間で、自家焙煎コーヒーとケーキを楽しめます。",
            en: "A hidden gem near the Clock Tower, established in 1988. Enjoy home-roasted coffee and cakes in a relaxing space with antique furniture and jazz music."
        },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: {
            ja: "都心の喧騒を忘れさせる、本物の隠れ家。一人で静かに過ごしたい時に最適です。",
            en: "A true hideaway that makes you forget the city bustle. Perfect for spending quiet time alone."
        },
        reviewHighlights: {
            ja: ["チーズケーキが絶品", "雰囲気が最高", "隠れ家感"],
            en: ["Excellent cheesecake", "Amazing atmosphere", "Hidden gem"]
        }
    },
    {
        id: "1002",
        name: { ja: "JIMMY BROWN 山の手店", en: "JIMMY BROWN Yamanote" },
        area: { ja: "西区・山の手", en: "Nishi-ku / Yamanote" },
        address: { ja: "札幌市西区山の手2条12-11-27", en: "11-27, Yamanote 2-jo 12-chome, Nishi-ku, Sapporo" },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=JIMMY+BROWN+Yamanote",
        open_hours: "11:00 - 22:00",
        features: ["Cozy", "Food", "Parking", "Pet Friendly"],
        description: {
            ja: "山の手の住宅街に佇む一軒家カフェ。ラテアートや豊富なフードメニューで、地元に愛される居心地の良い空間です。",
            en: "A cozy house cafe in the Yamanote residential area. Loved by locals for its latte art and extensive food menu."
        },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        lat: 43.0665,
        lng: 141.2885,
        rating: { work_comfort: 4, coffee: 4, vibe: 4 },
        kazesift_comment: {
            ja: "少し足を延ばしてでも行きたい、温かみのあるカフェ。テラス席もあります。",
            en: "A warm cafe worth the trip. Also features terrace seating."
        },
        reviewHighlights: {
            ja: ["ラテアートが可愛い", "食事が美味しい", "落ち着く"],
            en: ["Cute latte art", "Delicious food", "Relaxing"]
        }
    },
    {
        id: "1003",
        name: { ja: "allee cafe (アレイカフェ)", en: "allee cafe" },
        area: { ja: "桑園・北円山エリア", en: "Soen / Kita-Maruyama" },
        address: { ja: "札幌市中央区北4条西14-1-6 1F", en: "1F, 1-6, Kita 4-jo Nishi 14-chome, Chuo-ku, Sapporo" },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=allee+cafe+Sapporo",
        open_hours: "11:00 - 18:30",
        features: ["Sweets", "Instagrammable", "Cozy"],
        description: {
            ja: "季節のスイーツが大人気のカフェ。見た目も美しいデザートと落ち着いた空間で、至福のひとときを。",
            en: "A cafe specifically popular for seasonal sweets. Enjoy blissful moments with visually stunning desserts in a calm space."
        },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        rating: { work_comfort: 2, coffee: 4, vibe: 5 },
        kazesift_comment: {
            ja: "スイーツ目当てなら外せない一軒。人気店なので時間に余裕を持って。",
            en: "A must-visit for sweets lovers. It's popular, so allow plenty of time."
        },
        reviewHighlights: {
            ja: ["バスクチーズケーキ", "季節のパフェ", "おしゃれ"],
            en: ["Basque cheesecake", "Seasonal parfait", "Stylish"]
        }
    },
    {
        id: "1004",
        name: { ja: "時計のない喫茶店", en: "Tokei No Nai Kissaten" },
        area: { ja: "北18条・北大エリア", en: "Kita 18-jo / Hokkaido Univ." },
        address: { ja: "札幌市北区北17条西4-1-11", en: "1-11, Kita 17-jo Nishi 4-chome, Kita-ku, Sapporo" },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tokei+No+Nai+Kissaten",
        open_hours: "10:00 - 18:00",
        holidayStr: { ja: "月曜日", en: "Monday" },
        features: ["Silence", "Coffee Specialty", "No Clock"],
        description: {
            ja: "店名の通り、時計を置かない喫茶店。時間を忘れて、浅煎りのコーヒーと読書に没頭できる特別な場所。",
            en: "True to its name 'Cafe Without Clocks', this is a special place where you can forget time and immerse yourself in light-roast coffee and reading."
        },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        rating: { work_comfort: 3, coffee: 5, vibe: 5 },
        kazesift_comment: {
            ja: "静寂を楽しむための空間。デジタルデトックスにも最適です。",
            en: "A space to enjoy silence. Perfect for a digital detox."
        },
        reviewHighlights: {
            ja: ["時間がゆっくり流れる", "コーヒーが美味しい", "静か"],
            en: ["Slow time", "Delicious coffee", "Quiet"]
        }
    },
    {
        id: "1005",
        name: { ja: "UMIERE (ウミエール)", en: "UMIERE" },
        area: { ja: "バスセンター前・サッポロファクトリー", en: "Bus Center Mae" },
        address: { ja: "札幌市中央区北3条東5-5 岩佐ビル 1F", en: "Iwasa Bldg 1F, 5-5, Kita 3-jo Higashi 5-chome, Chuo-ku, Sapporo" },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=UMIERE+Sapporo",
        open_hours: "11:00 - 19:00",
        features: ["Sweets", "Instagrammable", "Takeout"],
        description: {
            ja: "「モコモコソフト」で有名な人気店。フォトジェニックな見た目だけでなく、濃厚なミルクの味わいも絶品。",
            en: "Famous for its 'Moko Moko Soft' ice cream. Not just photogenic, but the rich milk flavor is also exceptional."
        },
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        rating: { work_comfort: 2, coffee: 3, vibe: 4 },
        kazesift_comment: {
            ja: "札幌の「映え」カフェの代表格。ソフトクリームは必食です。",
            en: "A representative of Sapporo's 'Insta-worthy' cafes. The soft serve is a must."
        },
        reviewHighlights: {
            ja: ["ソフトクリーム", "おしゃれ", "ボトルドリンク"],
            en: ["Soft serve", "Stylish", "Bottle drinks"]
        }
    }
];
