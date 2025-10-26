"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

// --- TypeScript Type Definitions ---
export interface Restaurant {
  id: string;
  name: string;
  location: "north" | "south" | "west" | "downtown";
  address: string;
  hours: string;
  happyHour: {
    times: string;
  };
  slug: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  selectedLocation: string;
  searchQuery: string;
}

// --- Single Restaurant Card Component ---
const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const locationColors = {
    north: "bg-blue-100 text-blue-800",
    south: "bg-green-100 text-green-800",
    west: "bg-yellow-100 text-yellow-800",
    downtown: "bg-purple-100 text-purple-800",
  };
  return (
    <Link
      href={`/restaurants/${restaurant.slug}`}
      className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {restaurant.name}
        </h3>
        <div className="flex items-center space-x-4 mt-1">
          <span
            className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${
              locationColors[restaurant.location]
            }`}
          >
            {restaurant.location.charAt(0).toUpperCase() +
              restaurant.location.slice(1)}
          </span>
          <span className="flex items-center text-sm text-gray-600">
            <Sparkles size={14} className="mr-1.5" />
            {restaurant.happyHour.times}
          </span>
        </div>
      </div>
      <ChevronRight className="text-gray-400" size={24} />
    </Link>
  );
};

// --- Main List Component ---
const RestaurantList = ({
  restaurants,
  selectedLocation,
  searchQuery,
}: RestaurantListProps) => {
  // If restaurants is not an array, default to an empty one before filtering.
  const safeRestaurants = Array.isArray(restaurants) ? restaurants : [];

  const filteredRestaurants = safeRestaurants.filter((r) => {
    const matchesLocation =
      selectedLocation === "All" ||
      r.location === selectedLocation.toLowerCase();
    const matchesSearch = r.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  if (filteredRestaurants.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No restaurants found. Try adjusting your filters.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8" id="location">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            // No more 'isExpanded' or 'onToggle' props
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
