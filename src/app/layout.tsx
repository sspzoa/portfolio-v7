import type {Metadata} from 'next';
import './globals.css';
import RootWrapper from '@/components/RootWrapper';
import type React from 'react';
import {Analytics} from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "sspzoa's Portfolio",
  description: "I'm a Mobile & Frontend Engineer, passionate about creating and learning.",
  openGraph: {
    images: [{url: 'https://sspzoa.io/images/og-image.png'}],
  },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
    <head>
      <meta name="google-site-verification" content="AqYRLa9Ve6GJcqVaaSrdvJi6Q_h3TNv5AkGC-sKNvVg" />
    </head>
    <body className='antialiased'>
    <Analytics />
    <SpeedInsights />
      <RootWrapper>{children}</RootWrapper>
    </body>
    </html>
  );
}
