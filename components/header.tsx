'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closePopover = () => setIsOpen(false);

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

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <div className='md:hidden'>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <button className='p-2 text-muted-foreground hover:text-foreground transition-colors'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Open menu</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className='w-48 p-2' align='end'>
                <nav className='flex flex-col space-y-1'>
                  <Link
                    href='/'
                    onClick={closePopover}
                    className='flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted'
                  >
                    Home
                  </Link>
                  <Link
                    href='/products'
                    onClick={closePopover}
                    className='flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted'
                  >
                    Products
                  </Link>
                  <Link
                    href='/contact'
                    onClick={closePopover}
                    className='flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted'
                  >
                    Contact
                  </Link>
                </nav>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
