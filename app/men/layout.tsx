import type { ReactNode } from "react";
import { Inter, Noto_Sans_JP } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-men-label",
  display: "swap",
});

const notoSansJpHeavy = Noto_Sans_JP({
  weight: ["700", "800", "900"],
  variable: "--font-men-heading",
  preload: false,
  display: "swap",
});

export default function MenLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`men-lp ${inter.variable} ${notoSansJpHeavy.variable}`}>
      {children}
    </div>
  );
}
