import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Sparkles, ArrowLeft } from "lucide-react";

// --- Define the Restaurant type for this page ---
interface RestaurantData {
  name: string;
  location: "north" | "south" | "west" | "downtown";
  address: string;
  businessHours: string;
  happyHour: {
    times: string;
    food: { item: string; price: string }[];
    drinks: { item: string; price: string }[];
  };
  slug: string;
}

// --- Helper function to fetch data ---
async function getRestaurantsBySlug(
  slug: string
): Promise<RestaurantData | null> {
  const restaurantsCollection = collection(db, "restaurants");
  const q = query(restaurantsCollection, where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  return doc.data() as RestaurantData;
}

// --- Generate dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const restaurant = await getRestaurantsBySlug(params.slug);

  if (!restaurant) {
    return {
      title: "Restaurant Not Found",
      description: "This restaurant could not be found.",
    };
  }

  return {
    title: `${restaurant.name} Happy Hour | Edmonton Deals`,
    description: `Find ${restaurant.name}'s happy hour times, food specials, and drink deals in ${restaurant.location} Edmonton.`,
  };
}

export async function generateStaticParams() {
  const restaurantsCollection = collection(db, "restaurants");
  const snapshot = await getDocs(restaurantsCollection);

  return snapshot.docs.map((doc) => ({
    slug: doc.data().slug,
  }));
}

// --- Page Content ---
export default async function RestaurantPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await getRestaurantsBySlug(params.slug);

  // If no restaurant, show 404 page
  if (!restaurant) {
    notFound();
  }

  const locationColors = {
    north: "bg-blue-100 text-blue-800",
    south: "bg-green-100 text-green-800",
    west: "bg-yellow-100 text-yellow-800",
    downtown: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      <main className="container mx-auto max-w-3xl p-4 pt-24">
        <Link
          href="/#location" // Link back to the list section
          className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors mb-4"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to all restaurants
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <span
              className={`inline-block mb-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                locationColors[restaurant.location]
              }`}
            >
              {restaurant.location.charAt(0).toUpperCase() +
                restaurant.location.slice(1)}
            </span>
            <h1 className="text-4xl font-bold text-gray-900">
              {restaurant.name}
            </h1>
            <div className="flex items-center text-sm text-gray-600 mt-3">
              <MapPin size={16} className="mr-2 flex-shrink-0" />{" "}
              {restaurant.address}
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <Clock size={16} className="mr-2 flex-shrink-0" />{" "}
              {restaurant.businessHours}
            </div>
          </div>

          {/* Happy Hour Details */}
          <div className="p-6">
            <div className="flex items-center text-lg bg-blue-50 text-blue-800 p-4 rounded-md mb-6">
              <Sparkles size={20} className="mr-3 flex-shrink-0" />
              <span className="font-semibold">
                Happy Hour: {restaurant.happyHour.times}
              </span>
            </div>

            {/* Specials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Food Specials */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                  Food Specials
                </h2>
                <ul className="space-y-2">
                  {restaurant.happyHour.food.map((item, index) => (
                    <li key={index} className="flex justify-between text-base">
                      <span>{item.item}</span>
                      <span className="font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Drink Specials */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                  Drink Specials
                </h2>
                <ul className="space-y-2">
                  {restaurant.happyHour.drinks.map((item, index) => (
                    <li key={index} className="flex justify-between text-base">
                      <span>{item.item}</span>
                      <span className="font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
