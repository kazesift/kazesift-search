import json
import os
import requests
import time
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")
DATA_FILE = "lib/cafes.json"

if not API_KEY:
    print("Error: GOOGLE_MAPS_API_KEY is not set.")
    exit(1)

def load_data():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

def fetch_rating(cafe):
    # Strategy:
    # 1. If we have a Place ID, use Place Details API (Cheaper & More Accurate)
    # 2. If not, use Text Search API to find the place and get the ID + Stats
    
    place_id = cafe.get("googlePlaceId")
    
    if place_id:
        print(f"Updating via Place ID: {cafe['name']['ja']}")
        url = f"https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=rating,user_ratings_total&key={API_KEY}"
        
        try:
            response = requests.get(url)
            data = response.json()
            
            if data["status"] == "OK":
                result = data["result"]
                return {
                    "rating": result.get("rating"),
                    "reviews": result.get("user_ratings_total"),
                    "place_id": place_id 
                }
            else:
                print(f"  Failed with Place ID: {data['status']}")
                # If Place ID fails (invalid?), theoretically we could fall back to search, 
                # but for safety let's just return None to avoid overwriting with bad data.
                return None
                
        except Exception as e:
            print(f"  Error fetching details: {e}")
            return None

    else:
        # Fallback to Text Search
        print(f"Searching for: {cafe['name']['ja']}")
        query = f"{cafe['name']['ja']} 札幌 {cafe['area']['ja']}"
        url = f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={query}&key={API_KEY}"
        
        try:
            response = requests.get(url)
            data = response.json()
            
            if data["status"] == "OK" and len(data["results"]) > 0:
                result = data["results"][0] # Take the top result
                return {
                    "rating": result.get("rating"),
                    "reviews": result.get("user_ratings_total"),
                    "place_id": result.get("place_id") # Capture ID for future use
                }
            else:
                print(f"  Not found or error: {data['status']}")
                return None
                
        except Exception as e:
            print(f"  Error searching: {e}")
            return None

def main():
    cafes = load_data()
    updated_count = 0
    
    print(f"Starting update for {len(cafes)} cafes...")
    
    for cafe in cafes:
        # Be gentle with the API rate limits
        time.sleep(0.5) 
        
        new_data = fetch_rating(cafe)
        
        if new_data:
            # Update fields
            cafe["googleMapRating"] = new_data["rating"]
            cafe["googleMapReviews"] = new_data["reviews"]
            
            # Save the Place ID if we found a new one
            if "googlePlaceId" not in cafe and new_data["place_id"]:
                cafe["googlePlaceId"] = new_data["place_id"]
                print(f"  -> Acquired Place ID: {new_data['place_id']}")
            
            updated_count += 1
            print(f"  -> Updated: {new_data['rating']} stars ({new_data['reviews']} reviews)")
        else:
            print("  -> Skipped (No data found)")

    save_data(cafes)
    print(f"Finished. Updated {updated_count} cafes.")

if __name__ == "__main__":
    main()
