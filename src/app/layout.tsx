import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edmonton's Best Happy Hour Deals | Happy YEG",
  description:
    "Find the best happy hour deals in Edmonton (YEG). Your ultimate guide to food and drink specials, restaurant locations, and times.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Add Toaster here (position="top-center" is a nice default) */}
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
