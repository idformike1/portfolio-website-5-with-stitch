import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/data/mockData";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-[#6B705C] selection:bg-[#63cf17] selection:text-white`}
      >
        <div className="main-container min-h-screen relative overflow-x-hidden bg-[#F0F0E8] max-w-[1440px] mx-auto shadow-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
