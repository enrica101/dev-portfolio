import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
