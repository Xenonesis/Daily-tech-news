import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daily Tech News | AI-Powered Tech Insights",
  description: "Your daily source for the latest technology news, AI breakthroughs, and industry insights. Updated every day at 10 AM.",
  keywords: ["tech news", "AI news", "daily tech", "technology updates", "AI insights", "machine learning", "generative AI"],
  authors: [{ name: "Xenonesis" }],
  creator: "Xenonesis",
  openGraph: {
    title: "Daily Tech News | AI-Powered Tech Insights",
    description: "Your daily source for the latest technology news, AI breakthroughs, and industry insights.",
    type: "website",
    locale: "en_US",
    siteName: "Daily Tech News",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daily Tech News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Tech News",
    description: "AI-powered daily tech news and insights",
    creator: "@xenonesis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://dailytechnews.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased gradient-bg`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
