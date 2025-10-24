import { Metadata } from "next";
import DisclaimerPageClient from "./DisclaimerPageClient";

// This Metadata object will now work correctly
export const metadata: Metadata = {
  title: "Disclaimer - HappyYEG",
  description: "Disclaimer for HappyYEG.",
};

export default function DisclaimerPage() {
  // This renders the client component we just made
  return <DisclaimerPageClient />;
}
