---
description: Workflow for periodically updating cafe data
---

# Periodic Data Update Workflow

To ensure the "Kazesift Search" data remains fresh and "Fail-safe", follow this workflow periodically (recommended monthly).

## 1. Identify New High-Value Cafes
Use Google Search or Instagram to find new cafes opened within the last 12 months.
**Criteria:**
- **Open Date**: Within 1 year from the current date.
- **Rating**: Google Maps 4.0 or higher.
- **Reviews**: 50 or more (for "Classic" feel even if new).

#### Search Queries to Use
- `札幌 カフェ ニューオープン [Current Year] [Previous Year]`
- `札幌 新店 カフェ ランキング`
- `Sapporo new cafe high rated`

## 2. Verify Data
For each candidate:
1.  Check Google Maps for:
    - Current Rating
    - Review Count
    - "Popular times" (to gauge busy-ness)
2.  Check Official Instagram/Website for:
    - Current Business Hours
    - Holiday schedule (Regular holidays)
    - WiFi/Power availability (look for user photos of outlets)

## 3. Update `lib/data.ts`
Add the new cafe to the `cafes` array.

- **ID**: Increment the last ID.
- **openDate**: Must be in `YYYY-MM` format.
- **googleMapRating**: Exact current rating.
- **googleMapReviews**: Round down to nearest 10 or 50.

```typescript
{
    id: "61", // Example
    name: { ja: "...", en: "..." },
    // ...
    googleMapRating: 4.5,
    googleMapReviews: 120,
    openDate: "2025-11" // Essential for "New Open" tab
}
```

## 4. Run Verification
After updating data, always run:
```bash
npm run build
```
This ensures no type errors were introduced.

## 5. Deploy
Deploy the changes to Vercel to make them live.
