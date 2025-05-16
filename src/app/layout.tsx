import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";

// Initialize Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Alchemyst AI | Memory Layer for AI Applications",
  description: "Enhance your AI applications with Alchemyst AI's memory layer. Build smarter AI that learns from every interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <body className="font-space bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
