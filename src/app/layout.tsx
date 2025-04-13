import type {Metadata} from 'next';
import './globals.css';
import RootWrapper from '@/components/RootWrapper';
import type React from 'react';
import {Analytics} from "@vercel/analytics/react";

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
    <body className='antialiased'>
    <Analytics />
      <RootWrapper>{children}</RootWrapper>
    </body>
    </html>
  );
}
