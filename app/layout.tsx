import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { AOSProvider } from '@/components/aos-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cake Paradise - Handcrafted Cakes, Biscuits & More',
  description:
    'Discover our selection of handcrafted cakes, biscuits, muffins, and chocolate treats. Made fresh daily with premium ingredients.',
};

export const viewport: Viewport = {
  themeColor: '#b07850',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <AOSProvider />
        <div className='min-h-screen bg-background'>
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
