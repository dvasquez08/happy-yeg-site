import { getRestaurantBySlug, getRestaurants } from "@/app/lib/firebaseAdmin";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Sparkles, ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const restaurant = await getRestaurantBySlug(params.slug);

  if (!restaurant) {
    return {
      title: "Restaurant Not Found.",
      description: "This restaurant could not be found.",
    };
  }

  return {
    title: `${restaurant.name} Happy Hour | Edmonton Deals`,
    description: `Find ${restaurant.name}'s happy hour times, food specials and drink deals in ${restaurant.location} Edmonton.`,
  };
}

// ----- Use the Admin Helper -----
export async function generateStaticParams() {
  const restaurants = await getRestaurants();

  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

// ----- Re-validate the page every 1 hour -----
export const revalidate = 3600;

// ----- Page Content -----
export default async function RestaurantPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await getRestaurantBySlug(params.slug);

  if (!restaurant) {
    notFound();
  }

  // ----- Check for specials to provide fallback content -----
  const hasFoodSpecials =
    restaurant.happyHour?.food && restaurant.happyHour.food.length > 0;
  const hasDrinkSpecials =
    restaurant.happyHour?.drinks && restaurant.happyHour.drinks.length > 0;

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
          href="/#location"
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
                  {hasFoodSpecials ? (
                    restaurant.happyHour.food.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between text-base"
                      >
                        <span>{item.item}</span>
                        <span className="font-semibold">{item.price}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No food specials listed.</li>
                  )}
                </ul>
              </div>
              {/* Drink Specials */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                  Drink Specials
                </h2>
                <ul className="space-y-2">
                  {hasDrinkSpecials ? (
                    restaurant.happyHour.drinks.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between text-base"
                      >
                        <span>{item.item}</span>
                        <span className="font-semibold">{item.price}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No drink specials listed.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
