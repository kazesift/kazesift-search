
// Base coordinates: Near Sapporo TV Tower (Odori Nishi 1)
const BASE_LAT = 43.0618;
const BASE_LNG = 141.3545;

// Approximate degrees per block (heuristic)
// Latitude: ~100m per block -> 0.0009
// Longitude: ~140m per block (East/West is wider in Sapporo grid) -> 0.0016
const LAT_PER_BLOCK = 0.0009;
const LNG_PER_BLOCK = 0.0016;

/**
 * Estimates latitude and longitude from a Sapporo address string.
 * Supports standard format like "札幌市中央区南3条西4丁目..."
 * Returns null if parsing fails.
 */
export function estimateSapporoCoordinate(address: string): { lat: number; lng: number } | null {
    // Regex to capture grid coordinates
    // Matches: (North|South) (num) Jo? (East|West) (num) Chome?
    // Examples: "南3条西4丁目", "北4西6", "大通西4"

    // 1. Handle "Odori" separately as it acts like "North 0 / South 0"
    let nsVal = 0;
    let ewVal = 0;

    // Extract N/S (Kita/Minami/Odori)
    const nsMatch = address.match(/(北|南)(\d+)|大通/);
    if (!nsMatch) return null;

    if (nsMatch[0] === '大通') {
        nsVal = 0;
    } else {
        // North is positive, South is negative relative to Odori (roughly)
        const direction = nsMatch[1];
        const num = parseInt(nsMatch[2], 10);
        nsVal = direction === '北' ? num : -num;

        // Adjustment: "Minami 1" is 1 unit south, etc.
        // The grid numbers start from 1. 0 would be Odori.
    }

    // Extract E/W (Higashi/Nishi)
    const ewMatch = address.match(/(東|西)(\d+)/);
    if (!ewMatch) return null;

    const directionEW = ewMatch[1];
    const numEW = parseInt(ewMatch[2], 10);

    // East is positive, West is negative relative to Sosei River
    // Base point (TV Tower) is at Nishi 1. So Nishi 1 is "0" offset from base?
    // Let's Calibrate:
    // Base (TV Tower) is Nishi 1. 
    // If address says Nishi 4, that is 3 blocks West. -> -3 offset
    // If address says Higashi 1, that is roughly 2 blocks East of Nishi 1? (Sousei river is between Nishi 1 and Higashi 1)

    // Logic: 
    // Nishi X (where X >= 1). Offset = -(X - 1)
    // Higashi Y (where Y >= 1). Offset = Y (Higashi 1 is roughly 1 unit East of Nishi 1 base)

    if (directionEW === '西') {
        ewVal = -(numEW - 1);
    } else {
        ewVal = numEW;
    }

    // Calculate coordinates with some jitter to avoid exact overlap
    // Use a predictable pseudo-random jitter based on the input string length or chars
    const jitterSeed = address.length;
    const latJitter = (Math.sin(jitterSeed) * 0.0002);
    const lngJitter = (Math.cos(jitterSeed) * 0.0003);

    return {
        lat: BASE_LAT + (nsVal * LAT_PER_BLOCK) + latJitter,
        lng: BASE_LNG + (ewVal * LNG_PER_BLOCK) + lngJitter
    };
}
