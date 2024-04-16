import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Enrica Carpena's Portfolio",
  description: "Front end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <SpeedInsights />
      <Analytics />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
