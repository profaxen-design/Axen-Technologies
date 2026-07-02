import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/motion/CustomCursor";
import LoadingScreen from "@/components/motion/LoadingScreen";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

// --- Font loading via next/font (self-hosted, zero layout shift) ---
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false, // Not needed above the fold
});

// --- Root Metadata ---
export const metadata: Metadata = {
  metadataBase: new URL("https://axentechnology.in"),
  title: {
    default: "Axen Technology | AI Solutions, Web & Mobile Development — Mumbai",
    template: "%s | Axen Technology",
  },
  description:
    "Axen Technology builds AI-powered solutions, custom software, and digital experiences for ambitious businesses. 150+ projects delivered. Mumbai-based, globally trusted.",
  keywords: [
    "AI solutions India",
    "software development Mumbai",
    "web development company India",
    "mobile app development",
    "machine learning company India",
    "Next.js development",
    "custom software development",
    "AI chatbot development",
    "cloud DevOps India",
    "data analytics Mumbai",
  ],
  authors: [{ name: "Axen Technology Pvt. Ltd.", url: "https://axentechnology.in" }],
  creator: "Axen Technology Pvt. Ltd.",
  publisher: "Axen Technology Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://axentechnology.in",
    siteName: "Axen Technology",
    title: "Axen Technology | AI Solutions & Software Development — Mumbai",
    description:
      "Building AI-powered solutions, software platforms, and digital experiences that transform how businesses operate, scale, and compete.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Axen Technology — AI Solutions & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axen Technology | AI Solutions & Software Development",
    description:
      "Building AI-powered solutions and digital experiences for ambitious businesses. 150+ projects delivered.",
    images: ["/og-image.png"],
    creator: "@axentechnology",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// --- JSON-LD Structured Data ---
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Axen Technology Pvt. Ltd.",
  alternateName: "Axen Technology",
  url: "https://axentechnology.in",
  logo: "https://axentechnology.in/images/logo.svg",
  description:
    "Software and technology solutions company based in Mumbai, India, offering AI solutions, web & mobile development, software engineering, cloud/DevOps, data analytics, and UI/UX design.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-22-4000-0000",
      contactType: "customer service",
      areaServed: ["IN", "US", "GB", "SG", "AE"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://linkedin.com/company/axen-technology",
    "https://twitter.com/axentechnology",
    "https://instagram.com/axentechnology",
    "https://github.com/axen-technology",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "52",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {/* Skip to content for keyboard accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Loading screen (first visit only, session-gated) */}
        <LoadingScreen />

        {/* Custom cursor (desktop only) */}
        <CustomCursor />

        {/* Smooth scroll (Lenis + GSAP) */}
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="page-transition-wrapper">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
