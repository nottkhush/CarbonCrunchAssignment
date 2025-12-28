import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

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
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${clashDisplay.variable}
          ${poppins.variable}
          antialiased
          min-h-screen
          bg-black
          text-white
        `}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
