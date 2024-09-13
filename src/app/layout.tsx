import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import type React from 'react';

const WantedSansVariable = localFont({
  src: [
    {
      path: './fonts/WantedSansVariable.woff2',
    },
  ],
  variable: '--font-suit',
});

export const metadata: Metadata = {
  title: "sspzoa's Portfolio",
  description: "I'm a Mobile/Frontend Developer, passionate about creating and learning.",
  openGraph: {
    images: [{ url: 'https://sspzoa.io/images/og-image.png' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={WantedSansVariable.className}>{children}</body>
    </html>
  );
}
