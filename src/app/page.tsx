"use client";

import { useState, useEffect } from "react";
import ButtonGroup from "./components/ButtonGroup";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RestaurantList from "./components/RestaurantList";

// Define the type for our restaurant data
interface Restaurant {
  id: string;
  name: string;
  location: "north" | "south" | "west" | "downtown";
  address: string;
  hours: string;
  happyHour: {
    food: { item: string; price: string }[];
    drinks: { item: string; price: string }[];
  };
}

// --- MOCK DATA: Replace this with your actual Firestore fetch ---
// By adding `: Restaurant[]`, we tell TypeScript to ensure this data matches the interface.
const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "The Keg Steakhouse + Bar",
    location: "south",
    address: "1637 102 St NW, Edmonton, AB T6N 1M3",
    hours: "Mon-Sun: 4pm - 11pm",
    happyHour: {
      food: [
        { item: "Prime Rib Sliders", price: "$18" },
        { item: "Crispy Fried Cauliflower", price: "$12" },
      ],
      drinks: [
        { item: "Heineken (18oz)", price: "$7" },
        { item: "The Keg Old Fashioned", price: "$9" },
      ],
    },
  },
  {
    id: "2",
    name: "JOEY Bell Tower",
    location: "downtown",
    address: "10310 101 St NW, Edmonton, AB T5J 4Z8",
    hours: "Mon-Sun: 11am - 1am",
    happyHour: {
      food: [
        { item: "Yam Fries", price: "$7" },
        { item: "Sushi Cone", price: "$5" },
      ],
      drinks: [
        { item: "Real Peach Bellini", price: "$6" },
        { item: "Stella Artois (16oz)", price: "$5.50" },
      ],
    },
  },
  {
    id: "3",
    name: "Browns Socialhouse West Henday",
    location: "west",
    address: "1250 Webber Greens Dr NW, Edmonton, AB T5T 1B7",
    hours: "Mon-Sun: 11am - 12am",
    happyHour: {
      food: [
        { item: "Crispy Cauliflower", price: "$10" },
        { item: "Tuna Stack", price: "$15" },
      ],
      drinks: [
        { item: "Social Soda", price: "$5.50" },
        { item: "Social Lager", price: "$5.50" },
      ],
    },
  },
];
// --- END MOCK DATA ---

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("All");

  // In a real Next.js app, you would use getStaticProps with ISR
  // to fetch this data at build time and revalidate periodically.
  // For this client component example, we'll use useEffect to simulate the fetch.
  useEffect(() => {
    // TODO: Replace this mock data with your actual Firestore fetch logic
    // For example:
    // const fetchRestaurants = async () => {
    //   const db = getFirestore(app);
    //   const colRef = collection(db, 'restaurants');
    //   const snapshot = await getDocs(colRef);
    //   const dbRestaurants = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Restaurant));
    //   setRestaurants(dbRestaurants);
    // };
    // fetchRestaurants();

    setRestaurants(mockRestaurants);
  }, []);

  return (
    <div className="">
      <Nav />
      <main className="pt-20 bg-zinc-50">
        <Hero />
        <ButtonGroup
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />
        <RestaurantList
          restaurants={restaurants}
          selectedLocation={selectedLocation}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
