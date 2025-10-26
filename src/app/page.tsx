"use client";

import { useState, useEffect } from "react";

// --- Component Imports ---
import ButtonGroup from "./components/ButtonGroup";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// --- Firestore Imports ---
import { collection, getDocs } from "firebase/firestore";

// --- Restaurant List Imports
import RestaurantList from "./components/RestaurantList";
import type { Restaurant } from "./components/RestaurantList";
import { db } from "./lib/firebase";

// --- Home Page Component ---
const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurantsCollection = collection(db, "restaurants");
        const snapshot = await getDocs(restaurantsCollection);

        const restaurantsFromDb = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            location: data.location,
            address: data.address,
            hours: data.businessHours,
            happyHour: data.happyHour,
          } as Restaurant;
        });

        setRestaurants(restaurantsFromDb);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // ----- Render logic for loading or showing the list -----
  const renderContent = () => {
    if (isLoading) {
      return (
        <p className="text-center py-10 text-gray-500">
          Loading restaurants...
        </p>
      );
    }

    return (
      <RestaurantList
        restaurants={restaurants}
        selectedLocation={selectedLocation}
        searchQuery={searchQuery}
      />
    );
  };

  // ----- The main page layout -----
  return (
    <div className="">
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="pt-20 bg-zinc-50">
        <Hero />
        <ButtonGroup
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
