import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us - HappyYEG",
  description:
    "Learn about HappyYEG and our mission to find you the best happy hour deals in Edmonton.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
