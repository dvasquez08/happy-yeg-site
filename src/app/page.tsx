// --- Component Imports ---
import Hero from "./components/Hero";
import WelcomeContent from "./components/WelcomeContent";
import ClientWrapper from "./components/ClientWrapper";

// --- Server-side Firestore Imports ---
import { adminDb } from "./lib/firebaseAdmin";
import type { Restaurant } from "./components/RestaurantList";

// Re-validation: Re-fetch data every 1 hour (3600 seconds)
export const revalidate = 3600;

async function getRestaurants(): Promise<Restaurant[]> {
  try {
    const snapshot = await adminDb.collection("restaurants").get();
    if (snapshot.empty) return [];

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        location: data.location,
        address: data.address,
        hours: data.businessHours,
        happyHour: data.happyHour,
        slug: data.slug,
      } as Restaurant;
    });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
}

// --- Home Page Component ---
export default async function Home() {
  const restaurants = await getRestaurants();
  return (
    <div>
      <ClientWrapper restaurants={restaurants}>
        <Hero />
        <WelcomeContent />
      </ClientWrapper>
    </div>
  );
}
