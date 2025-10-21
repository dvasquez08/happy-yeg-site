"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";

// --- TypeScript Type Definitions ---
interface HappyHourItem {
  item: string;
  price: string;
}

interface Restaurant {
  id: string;
  name: string;
  location: "north" | "south" | "west" | "downtown";
  address: string;
  hours: string;
  happyHour: {
    food: HappyHourItem[];
    drinks: HappyHourItem[];
  };
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  selectedLocation: string;
}

// --- Single Restaurant Card Component ---
const RestaurantCard = ({
  restaurant,
  isExpanded,
  onToggle,
}: {
  restaurant: Restaurant;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const locationColors = {
    north: "bg-blue-100 text-blue-800",
    south: "bg-green-100 text-green-800",
    west: "bg-yellow-100 text-yellow-800",
    downtown: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50 transition-colors"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {restaurant.name}
          </h3>
          <span
            className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
              locationColors[restaurant.location]
            }`}
          >
            {restaurant.location.charAt(0).toUpperCase() +
              restaurant.location.slice(1)}
          </span>
        </div>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          size={24}
        />
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pt-2">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin size={16} className="mr-2 flex-shrink-0" />{" "}
                {restaurant.address}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock size={16} className="mr-2 flex-shrink-0" />{" "}
                {restaurant.hours}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Food Specials */}
                <div>
                  <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">
                    Food Specials
                  </h4>
                  <ul className="space-y-1">
                    {restaurant.happyHour.food.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span>{item.item}</span>
                        <span className="font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Drink Specials */}
                <div>
                  <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">
                    Drink Specials
                  </h4>
                  <ul className="space-y-1">
                    {restaurant.happyHour.drinks.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span>{item.item}</span>
                        <span className="font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main List Component ---
const RestaurantList = ({
  restaurants,
  selectedLocation,
}: RestaurantListProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredRestaurants = restaurants.filter(
    (r) =>
      selectedLocation === "All" ||
      r.location === selectedLocation.toLowerCase()
  );

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (filteredRestaurants.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No restaurants found for this location.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            isExpanded={expandedId === restaurant.id}
            onToggle={() => handleToggle(restaurant.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
