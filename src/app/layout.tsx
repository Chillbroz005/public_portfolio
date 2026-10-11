import "./globals.css";
import { BASE } from "../data/base";
import type { ReactNode } from "react";

export const metadata = {
  title: "Jordan Taylor | Portfolio Demo",
  description: "Fictional portfolio demo for a Senior Supply Chain and Procurement Professional.",
  keywords: ["Jordan Taylor", "Demo", "Supply Chain", "Procurement", "Portfolio"],
  authors: [{ name: "Jordan Taylor (Fictional Demo)" }],
  openGraph: {
    title: "Jordan Taylor | Portfolio Demo",
    description: "Fictional portfolio demo for a Senior Supply Chain and Procurement Professional.",
    type: "website",
    images: [{ url: `${BASE}/profile-photo.png`, width: 480, height: 480, alt: "Fictional portfolio demo" }]
  },
  icons: { icon: `${BASE}/favicon.svg` }
};

export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
