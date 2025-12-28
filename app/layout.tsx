import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});

export const poppins = localFont({
  src: "../public/fonts/Poppins-Thin.ttf",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "NFTme - Discover Rare Collections",
  description: "Create, Explore, & Collect Digital Art NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          relative min-h-screen text-white bg-black
          ${geistSans.variable}
          ${geistMono.variable}
          ${clashDisplay.variable}
          ${poppins.variable}
          antialiased
        `}
      >
        

        {children}
      </body>
    </html>
  );
}