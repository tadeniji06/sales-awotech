import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4E6B17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://awotechmall.com"),
  title: {
    default: "Awo Tech Mall | Premier Commercial Tech Spaces Opposite Computer Village, Ikeja",
    template: "%s | Awo Tech Mall",
  },
  description:
    "Secure premium retail & commercial office spaces at Awo Tech Mall, directly opposite Computer Village, Ikeja, Lagos. Own your tech space with just 35% initial deposit. World-class infrastructure, high footfall, 24/7 power, and modern facilities.",
  keywords: [
    "Awo Tech Mall",
    "Computer Village Ikeja",
    "Commercial space for sale Ikeja",
    "Tech mall Lagos",
    "Buy shop Computer Village",
    "Real estate investment Ikeja",
    "Commercial real estate Lagos Nigeria",
    "Own with 35 percent",
    "Tech office spaces Ikeja",
  ],
  authors: [{ name: "Awo Tech Mall" }],
  creator: "Awo Tech Mall",
  publisher: "Awo Tech Mall",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://awotechmall.com",
    siteName: "Awo Tech Mall",
    title: "Awo Tech Mall | Your Business Has Outgrown The Space — Own With 35%",
    description:
      "Move forward without moving away. World-class commercial tech hub located right opposite Computer Village, Ikeja, Lagos. Discover flexible ownership with only 35% initial payment.",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Awo Tech Mall Ikeja Lagos - Architectural 3D Rendering",
      },
      {
        url: "/assets/expanding.png",
        width: 1200,
        height: 630,
        alt: "Awo Tech Mall Building Facade Opposite Computer Village",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awo Tech Mall | Premier Commercial Tech Hub in Ikeja Lagos",
    description:
      "Upgrade your business infrastructure right opposite Computer Village. Flexible payment plans — Own with 35%.",
    images: ["/assets/hero.jpg"],
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
      { url: "/icon.png" },
      { url: "/assets/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ShoppingCenter",
    name: "Awo Tech Mall",
    description:
      "Ultra-modern commercial technology mall located directly opposite Computer Village, Ikeja, Lagos, Nigeria.",
    url: "https://awotechmall.com",
    image: "https://awotechmall.com/assets/hero.jpg",
    logo: "https://awotechmall.com/assets/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite Computer Village, Otigba / Medical Road Junction",
      addressLocality: "Ikeja",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5956",
      longitude: "3.3444",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "₦₦₦₦",
    paymentAccepted: "Bank Transfer, Flexible Installments",
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          src="https://app.crm360online.com/capture.js"
          data-key="pk_live_c301fcd781410ca639e8fdfde6fb2b8b0913f497195e43a4"
          data-selector="#contact-form"
          data-tags=""
          data-debug="true"
          async
        />
      </head>
      <body className="min-h-screen bg-white text-[#111827] antialiased selection:bg-[#4E6B17] selection:text-white">
        {children}
      </body>
    </html>
  );
}
