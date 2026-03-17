import Link from 'next/link';
import React from 'react';
import type { CompanyInfo } from '@/lib/types';

interface FooterProps {
  companyInfo: CompanyInfo;
}

const Footer = ({ companyInfo }: FooterProps) => {
  return (
    <footer className='border-t border-border py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='font-serif text-xl font-bold mb-4'>
              {companyInfo.name}
            </h3>
            <p className='text-sm text-muted-foreground'>
              Handcrafted baked goods made with love and premium ingredients.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/products'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <p className='text-sm text-muted-foreground'>
              Email: {companyInfo.email}
            </p>
            <p className='text-sm text-muted-foreground'>
              Phone: {companyInfo.phone}
            </p>
            {companyInfo.address && (
              <p className='text-sm text-muted-foreground'>
                Address: {companyInfo.address}
                {companyInfo.city && `, ${companyInfo.city}`}
                {companyInfo.state && `, ${companyInfo.state}`}
                {companyInfo.zip && ` ${companyInfo.zip}`}
              </p>
            )}
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
