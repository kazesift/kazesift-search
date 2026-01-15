import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { GoogleAnalytics } from '@next/third-parties/google';

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kazesift Cafe Search | Sapporo's Best Workspaces",
  description: "Find the perfect cafe for work, focus, or chill in Sapporo. Curated by Kazesift.",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased bg-[var(--color-background)] min-h-screen flex flex-col font-sans`}>
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-PLACEHOLDER"} />
      </body>
    </html>
  );
}
