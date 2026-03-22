import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/data/mockData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.tagline,
};

import { SmoothScroll } from "@/components/global/SmoothScroll";
import { CustomCursor } from "@/components/global/CustomCursor";

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
        <CustomCursor />
        <SmoothScroll>
          <div className="main-container min-h-screen relative overflow-x-clip bg-[#F0F0E8] max-w-[1440px] mx-auto shadow-2xl">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
