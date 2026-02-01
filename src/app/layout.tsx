import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const siteUrl = "https://dennismainhardt.com";
const siteTitle = "Dennis Mainhardt - Frontend Developer";
const siteDescription = "Frontend Developer specializing in React, TypeScript, and modern web experiences.";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Dennis Mainhardt",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Dennis Mainhardt", url: siteUrl }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Dennis Mainhardt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/dennismainhardt.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dennismainhardt",
    title: siteTitle,
    description: siteDescription,
    images: ["/dennismainhardt.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
