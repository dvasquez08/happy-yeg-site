import { MetadataRoute } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase";

const baseUrl = "https://happyyeg.com";

interface RestaurantDoc {
  slug: string;
}

type SitemapEntry = MetadataRoute.Sitemap[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const restaurantsCollection = collection(db, "restaurants");
  const snapshot = await getDocs(restaurantsCollection);
  const restaurantPages: SitemapEntry[] = snapshot.docs.map((doc) => {
    const { slug } = doc.data() as RestaurantDoc;
    return {
      url: `${baseUrl}/restaurants/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    };
  });

  return [...staticPages, ...restaurantPages];
}