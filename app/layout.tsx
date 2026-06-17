import type { Metadata, Viewport } from "next";
import { Zen_Maru_Gothic, Noto_Sans_JP } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["500", "700", "900"],
  preload: false,
  variable: "--font-zen-maru",
});

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  preload: false,
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
    images: ["/images/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff3f8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    description: siteConfig.description,
    url: siteConfig.url,
    medicalSpecialty: ["Dermatology", "Telemedicine"],
  };

  return (
    <html lang="ja" className={`${zenMaru.variable} ${notoSansJp.variable}`}>
      <body className="font-body antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
