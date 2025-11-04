"use client";

import { useState } from "react";
import type { Restaurant } from "./RestaurantList";
import Nav from "./Nav";
import ButtonGroup from "./ButtonGroup";
import RestaurantList from "./RestaurantList";

interface ClientWrapperProps {
  restaurants: Restaurant[];
  children: React.ReactNode;
}

const ClientWrapper = ({ restaurants, children }: ClientWrapperProps) => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="pt-20 bg-zinc-50">
        {children}
        <ButtonGroup
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />
        <RestaurantList
          restaurants={restaurants}
          selectedLocation={selectedLocation}
          searchQuery={searchQuery}
        />
      </main>
    </>
  );
};

export default ClientWrapper;
