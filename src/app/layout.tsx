import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daily Tech News | AI-Powered Tech Insights",
  description: "Your daily source for the latest technology news, AI breakthroughs, and industry insights. Updated every day at 10 AM.",
  keywords: ["tech news", "AI news", "daily tech", "technology updates", "AI insights"],
  authors: [{ name: "Xenonesis" }],
  openGraph: {
    title: "Daily Tech News | AI-Powered Tech Insights",
    description: "Your daily source for the latest technology news, AI breakthroughs, and industry insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Tech News",
    description: "AI-powered daily tech news and insights",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
