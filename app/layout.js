import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://www.3ftech.in'),
  title: {
    default: "3F Tech Solutions | Education, Technology & Career Excellence in KGF",
    template: "%s | 3F Tech Solutions"
  },
  description: "Official website of 3F Tech Solutions, Kolar Gold Fields (KGF). One-stop destination for Computer Education, IT Services, Degree Programs and Career Consultancy. Empowering skill development and professional growth in Karnataka.",
  keywords: ["3F Tech Solutions", "Computer Education KGF", "IT Services Kolar Gold Fields", "Career Consultancy KGF", "Laptop Repair KGF", "CCTV Installation KGF", "Degree Programs KGF", "B.Voc KGF", "Robertsonpet IT Services", "Proactive Abacus KGF"],
  authors: [{ name: "3F Tech Solutions" }],
  creator: "3F Tech Solutions",
  publisher: "3F Tech Solutions",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.3ftech.in',
    siteName: '3F Tech Solutions',
    title: '3F Tech Solutions | Education, Technology & Career Excellence',
    description: 'Empowering skills and building careers in Kolar Gold Fields. Education, IT Services, and Career Guidance all under one roof.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: '3F Tech Solutions KGF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3F Tech Solutions | Education, Technology & Career Excellence',
    description: 'Empowering skills and building careers in KGF. Education, IT Services, and Career Guidance.',
    images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'education',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "3F Tech Solutions",
  "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  "@id": "https://www.3ftech.in",
  "url": "https://www.3ftech.in",
  "telephone": "+919488842786",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st Floor, #612, 6th Cross, Goutham Nagar, Robertsonpet",
    "addressLocality": "Kolar Gold Fields",
    "addressRegion": "KA",
    "postalCode": "563122",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9592,
    "longitude": 78.2714
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/3ftechsolutions",
    "https://www.instagram.com/3ftechsolutions"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
