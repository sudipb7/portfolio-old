import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { siteConfig } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

import './globals.css';
import { WebPush } from '@/components/webpush';

const font = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Frontend Developer',
    'UI Engineer',
    'React Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer',
    'Frontend Engineer',
    'React Engineer',
    'Full Stack Developer',
    'Full Stack Engineer',
    'Next.js Developer',
    'Software Engineer',
    'Software Developer',
    'Frontend Development',
    'React Development',
  ],
  authors: [
    {
      name: 'Sudip Biswas',
      url: 'https://sudipbiswas.me',
    },
  ],
  creator: 'Sudip Biswas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@sudipb7_',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(font.className, 'bg-[#FBFCFD]')}>
        <Analytics />
        <SpeedInsights />
        {children}
        <WebPush />
      </body>
    </html>
  );
}
