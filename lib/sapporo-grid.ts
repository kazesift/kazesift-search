
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
    // 1. Kikusui Area Logic (菊水)
    // Base: Kikusui 1-jo 1-chome approx 43.0560, 141.3750
    const kikusuiMatch = address.match(/菊水(\d+)条(\d+)丁目/);
    if (kikusuiMatch) {
        const jo = parseInt(kikusuiMatch[1], 10);
        const chome = parseInt(kikusuiMatch[2], 10);

        // Kikusui grid: Jo increases South (Lat decreases), Chome increases East (Lng increases)
        // Adjust scales slightly as residential blocks might be smaller
        const kikusuiBaseLat = 43.0560;
        const kikusuiBaseLng = 141.3750;

        return {
            lat: kikusuiBaseLat - ((jo - 1) * 0.0015), // Roughly 150m south per Jo
            lng: kikusuiBaseLng + ((chome - 1) * 0.0025) // Roughly 200m east per Chome
        };
    }

    // 2. Higashi Sapporo Area Logic (東札幌)
    // Base: Higashi Sapporo 1-jo 1-chome approx 43.0550, 141.3820
    const higashiSapporoMatch = address.match(/東札幌(\d+)条(\d+)丁目/);
    if (higashiSapporoMatch) {
        const jo = parseInt(higashiSapporoMatch[1], 10);
        const chome = parseInt(higashiSapporoMatch[2], 10);

        // Grid: Jo increases South, Chome increases East
        const hsBaseLat = 43.0550;
        const hsBaseLng = 141.3820;

        return {
            lat: hsBaseLat - ((jo - 1) * 0.0015),
            lng: hsBaseLng + ((chome - 1) * 0.0025)
        };
    }

    // 6. Fukuzumi Area (Toyohira)
    // Base: Fukuzumi 1-jo 1-chome approx 43.0250, 141.4000 (Near Sapporo Dome)
    const fukuzumiMatch = address.match(/福住(\d+)条(\d+)丁目/);
    if (fukuzumiMatch) {
        const jo = parseInt(fukuzumiMatch[1], 10);
        const chome = parseInt(fukuzumiMatch[2], 10);
        // Jo increases South, Chome increases East
        return {
            lat: 43.0250 - ((jo - 1) * 0.0020),
            lng: 141.4000 + ((chome - 1) * 0.0025)
        };
    }

    // 7. Oyachi Area (Atsubetsu)
    // Looking for "Oyachi Higashi X-jo Y-chome" or "Oyachi Higashi X-Y-Z"
    const oyachiMatch = address.match(/大谷地(東|西)(\d+)[-条](\d+)/);
    if (oyachiMatch) {
        const ew = oyachiMatch[1]; // Higashi / Nishi
        const jo = parseInt(oyachiMatch[2], 10);
        const chome = parseInt(oyachiMatch[3], 10);

        // Base: Oyachi Station (Oyachi Higashi 3-jo 3-chome approx 43.028, 141.460)
        // Higashi: East of Atsubetsu River?
        // Let's rely on standard offset for now
        const baseLat = 43.0280;
        const baseLng = 141.4600;

        // Approximate: Jo increases South? Chome increases East?
        return {
            lat: baseLat + (Math.random() * 0.005 - 0.0025), // Randomize slightly as Oyachi grid is complex
            lng: baseLng + (Math.random() * 0.005 - 0.0025)
        };
    }

    // 8. Atsubetsu Nishi
    // Base: Atsubetsu Nishi 1-jo 1-chome approx 43.045, 141.450
    const atsubetsuNishiMatch = address.match(/厚別西(\d+)条(\d+)丁目/);
    if (atsubetsuNishiMatch) {
        const jo = parseInt(atsubetsuNishiMatch[1], 10);
        const chome = parseInt(atsubetsuNishiMatch[2], 10);
        // Jo increases North, Chome increases East
        return {
            lat: 43.0450 + ((jo - 1) * 0.0020),
            lng: 141.4500 + ((chome - 1) * 0.0025)
        };
    }

    // 3. Central Sapporo Logic (Kita/Minami/Odori + Nishi/Higashi)
    // Regex to capture grid coordinates
    // ... (rest of the existing logic)

    // Extract N/S (Kita/Minami/Odori)
    const nsMatch = address.match(/(北|南)(\d+)|大通/);
    if (!nsMatch) return null;

    let nsVal = 0;
    if (nsMatch[0] === '大通') {
        nsVal = 0;
    } else {
        // North is positive, South is negative relative to Odori (roughly)
        const direction = nsMatch[1];
        const num = parseInt(nsMatch[2], 10);
        nsVal = direction === '北' ? num : -num;
    }

    // Extract E/W (Higashi/Nishi)
    const ewMatch = address.match(/(東|西)(\d+)/);
    if (!ewMatch) return null;

    let ewVal = 0;
    const directionEW = ewMatch[1];
    const numEW = parseInt(ewMatch[2], 10);

    // Logic: 
    // Nishi X (where X >= 1). Offset = -(X - 1)
    // Higashi Y (where Y >= 1). Offset = Y
    if (directionEW === '西') {
        ewVal = -(numEW - 1);
    } else {
        ewVal = numEW;
    }

    // Calculate coordinates with some jitter
    const jitterSeed = address.length;
    const latJitter = (Math.sin(jitterSeed) * 0.0002);
    const lngJitter = (Math.cos(jitterSeed) * 0.0003);

    return {
        lat: BASE_LAT + (nsVal * LAT_PER_BLOCK) + latJitter,
        lng: BASE_LNG + (ewVal * LNG_PER_BLOCK) + lngJitter
    };
}
