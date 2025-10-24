import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

// This Metadata object will now work correctly
export const metadata: Metadata = {
  title: "Privacy Policy - HappyYEG",
  description: "Privacy Policy for HappyYEG.",
};

export default function PrivacyPolicyPage() {
  // This renders the client component we just made
  return <PrivacyPolicyClient />;
}
