import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const baseUrl = "https://bthk2151.dev";
const title = "Bryan Tan — Software Engineer & Solutions Development";
const description =
  "Full-stack C# .NET developer and software engineer based in Malaysia. Explore my work in fintech, AI, and practical software solutions.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png?v=b-monogram" },
  openGraph: {
    title,
    description,
    url: baseUrl,
    type: "website",
    locale: "en_MY",
    siteName: "Bryan Tan",
  },
  twitter: { card: "summary_large_image", title, description },
};

// Apply the saved preference before paint; retain the previous site's storage key.
const themeScript = `try { var saved = localStorage.getItem('isDarkMode'); document.documentElement.dataset.theme = saved === 'false' ? 'light' : 'dark'; } catch (_) {}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={geist.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
