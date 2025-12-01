import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ----- Initialize Admin App -----
const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON as string
);

if (getApps().length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export const adminDb = getFirestore();

// --- Blog Post Type ---
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    imageUrl: string;
    createdAt: admin.firestore.Timestamp;
}

// --- Helper function to get all blog posts ---
export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const snapshot = await adminDb
        .collection("blogPosts")
        .orderBy("createdAt", "desc")
        .get();

    if (snapshot.empty) return [];

    return snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
            id: doc.id,
            title: data.title,
            slug: data.slug,
            content: data.content,
            imageUrl: data.imageUrl || null,
            createdAt: data.createdAt,
        } as BlogPost;
    });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}

// --- Helper function to get one blog post by slug ---
export async function getBlogPostBySlug(
    slug: string
): Promise<BlogPost | null> {
    try {
        const query = adminDb.collection("blogPosts").where("slug", "==", slug).limit(1);
        const snapshot = await query.get();

        if (snapshot.empty) {
            return null;
        }

        const doc = snapshot.docs[0];
        const data = doc.data();

        return {
            id: doc.id,
            title: data.title,
            slug: data.slug,
            content: data.content,
            imageUrl: data.imageUrl || null,
            createdAt: data.createdAt,
        } as BlogPost;
    } catch (error) {
        console.error(`Error fetching blog post by slug ${slug}:`, error);
        return null;
    }
}

// ----- Shared Type -----

export interface Restaurant {
    id: string;
    name: string;
    location: "north" | "south" | "west" | "downtown";
    address: string;
    businessHours: string;
    happyHour: {
        times: string;
        food: { item: string; price: string }[];
        drinks: {item: string; price: string }[];
    };
    slug: string;
}

// ----- Admin Helper: Get All Restaurants -----
export async function getRestaurants(): Promise<Restaurant[]> {
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
                businessHours: data.businessHours,
                happyHour: data.happyHour,
                slug: data.slug,
            } as Restaurant;
        });
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        return [];
    }
}

// ----- Admin Helper: Get One Restaurant by Slug -----
export async function getRestaurantBySlug(
    slug: string
): Promise<Restaurant | null> {
    try {
        const query = adminDb.collection("restaurants").where("slug", "==", slug).limit(1);
        const snapshot = await query.get();

        if (snapshot.empty) {
            console.log(`No restaurant found with slug: ${slug}`);
            return null;
        }

        const doc = snapshot.docs[0];
        const data = doc.data();

        return {
            id: doc.id,
            name: data.name,
            location: data.location,
            address: data.address,
            businessHours: data.businessHours,
            happyHour: data.happyHour,
            slug: data.slug,
        } as Restaurant;
    } catch (error) {
        console.error(`Err fetching restaurant by slug ${slug}`, error);
        return null;
    }
}