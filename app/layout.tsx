import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://reelopsmedia.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reel OPS Media — Next Level Video Content & Media Marketing",
    template: "%s | Reel OPS Media",
  },
  description:
    "Reel OPS Media is a full-service video production and media marketing agency in Arizona. We deliver strategic storytelling, brand awareness campaigns, and content that converts. Book a free consultation today.",
  keywords: [
    "video production",
    "video production Arizona",
    "content creation agency",
    "brand awareness campaigns",
    "media marketing agency",
    "social media video production",
    "commercial video production",
    "brand strategy",
    "Reel OPS Media",
    "corporate video",
    "video marketing",
  ],
  authors: [{ name: "Reel OPS Media" }],
  creator: "Reel OPS Media",
  publisher: "Reel OPS Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Reel OPS Media — Next Level Video Content & Media Marketing",
    description:
      "Full-service video production and media marketing agency. Strategic storytelling, brand campaigns, and content that converts.",
    url: siteUrl,
    siteName: "Reel OPS Media",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reel OPS Media — Next Level Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reel OPS Media — Next Level Content",
    description:
      "Full-service video production and media marketing agency in Arizona.",
    images: ["/images/og-image.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reel OPS Media",
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  description:
    "Full-service video production and media marketing agency in Arizona delivering strategic storytelling and content that converts.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  sameAs: [
    "https://instagram.com/reelopsmedia",
    "https://linkedin.com/company/reelopsmedia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@reelopsmedia.com",
    contactType: "customer service",
  },
  founder: {
    "@type": "Person",
    name: "Isaac",
    jobTitle: "Founder & CEO",
  },
  knowsAbout: [
    "Video Production",
    "Content Creation",
    "Brand Strategy",
    "Social Media Marketing",
    "Commercial Production",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

