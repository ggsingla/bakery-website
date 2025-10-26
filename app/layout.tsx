import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AOSProvider } from '@/components/aos-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cake Paradise - Handcrafted Cakes, Biscuits & More',
  description:
    'Discover our selection of handcrafted cakes, biscuits, muffins, and chocolate treats. Made fresh daily with premium ingredients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <AOSProvider />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
