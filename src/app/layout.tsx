import "./globals.css";
import { BASE } from "../data/base";
import type { ReactNode } from "react";

export const metadata = {
  title: "Suresh Ganesan | Portfolio",
  description: "Portfolio and resume of Suresh Ganesan, Senior Supply Chain and Procurement Professional.",
  keywords: ["Suresh Ganesan", "Supply Chain", "Procurement", "Portfolio", "Resume"],
  authors: [{ name: "Suresh Ganesan" }],
  openGraph: {
    title: "Suresh Ganesan | Portfolio",
    description: "Portfolio and resume of Suresh Ganesan, Senior Supply Chain and Procurement Professional.",
    type: "website",
    images: [{ url: `${BASE}/profile-photo.png`, width: 480, height: 480, alt: "Suresh Ganesan" }]
  },
  icons: { icon: `${BASE}/favicon.svg` }
};

export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
