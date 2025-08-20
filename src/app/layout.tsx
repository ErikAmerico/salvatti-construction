import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Salvati Home Improvements",
    template: "%s | Salvati Home Improvements",
  },

  description: "Construction services in Greater Boston and the North Shore.",
  icons: {
    icon: ["/favicon.ico", "/images/icon.png", "/images/icon.svg"],
    apple: ["/images/apple-icon.png"],
    shortcut: ["/images/apple-icon.png"],
  },
  other: {
    "apple-mobile-web-app-title": "Salvati",
  },
  twitter: {
    card: "summary_large_image",
  },
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
