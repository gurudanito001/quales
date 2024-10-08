import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import Link from "next/link";
import Head from "next/head";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUALES",
  description: "Engage the best talent around the globe",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

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
