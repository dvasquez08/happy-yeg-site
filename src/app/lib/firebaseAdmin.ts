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
        const query = adminDb.collection("Restaurants").where("slug", "==", slug).limit(1);
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