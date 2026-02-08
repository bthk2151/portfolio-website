import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from '@/utils/BootstrapClient';
import { Analytics } from "@vercel/analytics/next";

const geistFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baseUrl = "https://bthk2151.dev";

export const metadata: Metadata = {
  title: "Bryan Tan — Solutions Development",
  description: "Full-Stack C# .NET Developer | Software Engineer | Solutions Architect",
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Bryan Tan — Solutions Development",
    description: "Full-Stack C# .NET Developer | Software Engineer | Solutions Architect",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: `${baseUrl}/favicon.png`,
        width: 1200,
        height: 630,
        alt: "Bryan Tan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Tan — Solutions Development",
    description: "Full-Stack C# .NET Developer | Software Engineer | Solutions Architect",
    images: [`${baseUrl}/favicon.png`],
  },
  other: {
    "viewport": "width=device-width, initial-scale=1.0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${geistFont.className} d-flex flex-column min-vh-100`}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
        <Analytics />
      </body>
    </html>
  );
}
