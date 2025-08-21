import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navBar/NavBar";
import { Inter } from "next/font/google";

const siteUrl = "https://www.salvatihome.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "Salvati Home Improvements",
    template: "%s | Salvati Home Improvements",
  },

  description:
    "High-quality renovations in Greater Boston and the North Shore.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/icon.png", type: "image/png", sizes: "48x48" },
      { url: "/images/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/images/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/images/apple-icon.png"],
  },
  other: {
    "apple-mobile-web-app-title": "Salvati",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Salvati Home Improvements",
    description:
      "High-quality renovations in Greater Boston and the North Shore.",
    siteName: "Salvati Home Improvements",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Modern renovation by Salvati Home Improvements",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salvati Home Improvements",
    description:
      "High-quality renovations in Greater Boston and the North Shore.",
    images: ["/opengraph-image.png"],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
