
import json
import os
import googlemaps
import time

# Load environment variables (locally you might use python-dotenv)
API_KEY = os.environ.get("GOOGLE_MAPS_API_KEY")

DATA_FILE = "lib/cafes.json"

def update_ratings():
    if not API_KEY:
        print("GOOGLE_MAPS_API_KEY not found. Skipping update.")
        return

    gmaps = googlemaps.Client(key=API_KEY)

    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            cafes = json.load(f)
    except FileNotFoundError:
        print(f"{DATA_FILE} not found.")
        return

    updated_count = 0

    for cafe in cafes:
        # Use existing placeId or search for it
        place_id = cafe.get("placeId")
        
        if not place_id:
            print(f"Searching for {cafe['name']['ja']}...")
            # specific search query
            query = f"{cafe['name']['ja']} {cafe['address']['ja']}"
            try:
                places_result = gmaps.find_place(input=query, input_type="textquery")
                if places_result["candidates"]:
                    place_id = places_result["candidates"][0]["place_id"]
                    cafe["placeId"] = place_id
                    print(f"  Found Place ID: {place_id}")
                else:
                    print("  No place found.")
                    continue
            except Exception as e:
                print(f"  Error searching: {e}")
                continue

        # Fetch details (rating, user_ratings_total)
        if place_id:
            try:
                # Fields: rating, user_ratings_total
                details = gmaps.place(place_id=place_id, fields=["rating", "user_ratings_total"])
                result = details.get("result", {})
                
                new_rating = result.get("rating")
                new_reviews = result.get("user_ratings_total")

                if new_rating:
                    cafe["googleMapRating"] = new_rating
                if new_reviews:
                    cafe["googleMapReviews"] = new_reviews
                
                updated_count += 1
                print(f"Updated {cafe['name']['ja']}: {new_rating} ({new_reviews})")
                
                # Sleep briefly to be nice to API rate limits if necessary, though 50 is small
                time.sleep(0.1)

            except Exception as e:
                print(f"Error fetching details for {cafe['name']['ja']}: {e}")

    # Write back
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(cafes, f, indent=4, ensure_ascii=False)

    print(f"Finished updating {updated_count} cafes.")

if __name__ == "__main__":
    update_ratings()
