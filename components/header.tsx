'use client';

import Link from 'next/link';

export function Header() {

  return (
    <header className='border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-3'>
            <span className='text-2xl font-serif font-bold text-foreground'>
              Cake Paradise
            </span>
            <div className='flex items-center space-x-2'>
              <div className='w-4 h-4 bg-white border-2 border-green-600 flex items-center justify-center'>
                <div className='w-2 h-2 bg-green-600 rounded-full'></div>
              </div>
            </div>
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            >
              Home
            </Link>
            <Link
              href='/products'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            >
              Products
            </Link>
            {/* <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link> */}
            <Link
              href='/contact'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
