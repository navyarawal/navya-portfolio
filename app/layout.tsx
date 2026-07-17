import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Navya Rawal",
    "UCLA",
    "Math and Computer Science",
    "Data Engineering",
    "Artificial Intelligence",
    "Robotics",
    "Entrepreneurship",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#fdfcf9",
};

// Structured data for search engines — helps Google associate the domain
// with the person (knowledge panel, rich results when someone searches
// the name). Facts here should stay in sync with data/site.ts and the
// visible page content.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}/images/navya-photo.jpg`,
  jobTitle: "Mathematics & Computer Science Student",
  description: site.description,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Los Angeles",
    sameAs: "https://www.ucla.edu",
  },
  alumniOf: {
    "@type": "HighSchool",
    name: "Dougherty Valley High School",
  },
  sameAs: [site.linkedin],
  award: [
    "Girl Scouts Gold Award",
    "President's Volunteer Service Award — Gold",
    "1st Place, Contra Costa County Science & Engineering Fair (CCCSEF)",
    "1st Place, UC Berkeley Bioengineering Competition",
  ],
  knowsAbout: [
    "Data Engineering",
    "Machine Learning",
    "Convolutional Neural Networks",
    "Robotics",
    "Product Development",
    "Entrepreneurship",
    "STEM Education",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
