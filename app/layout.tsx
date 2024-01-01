import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudip Biswas",
  description:
    "Just another passionate, skillful, and oh-so-creative web developer here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider defaultTheme="dark" storageKey="sudipbiswas.com-theme">
        <body className={inter.className}>
          <Analytics />
          <SpeedInsights />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
