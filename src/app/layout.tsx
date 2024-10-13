import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import JotaiWrapper from '@/lib/jotai/jotaiWrapper';
import type React from 'react';

const WantedSansVariable = localFont({
  src: [
    {
      path: './fonts/WantedSansVariable.woff2',
    },
  ],
  variable: '--font-WantedSansVariable',
});

export const metadata: Metadata = {
  title: "sspzoa's Portfolio",
  description: "I'm a Mobile & Frontend Engineer, passionate about creating and learning.",
  openGraph: {
    images: [{ url: 'https://sspzoa.io/images/og-image.png' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={WantedSansVariable.variable}>
        <JotaiWrapper>{children}</JotaiWrapper>
      </body>
    </html>
  );
}
