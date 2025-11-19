import { MetadataRoute } from "next";
import { getRestaurants } from "./lib/firebaseAdmin";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://happyyeg.com";

  // Fetch data from Firebase
  const restaurants = await getRestaurants();

  // Create a URL for every restaurant
  const restaurantUrls = restaurants.map((restaurant) => ({
    url: `${baseUrl}/restaurants/${restaurant.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Return the full list of URLs
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...restaurantUrls,
  ];
}