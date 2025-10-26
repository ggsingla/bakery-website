'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/lib/products';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '@/components/footer';
import About from './_components/About';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10' />
        <Image
          src='/bakery-hero-background.jpg'
          alt='Cake Paradise products'
          fill
          className='object-cover'
          priority
        />
        <div className='relative z-20 text-center px-4 max-w-4xl mx-auto'>
          <div className='inline-flex items-center space-x-1 bg-green-50 border border-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium mb-2'>
            <CheckCircle className='w-4 h-4' />
            <span>100% Vegetarian</span>
          </div>
          <h1
            className='text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance'
            data-aos='fade-up'
          >
            Handcrafted with love, baked to perfection
          </h1>
          <p
            className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Discover our selection of artisan cakes, biscuits, muffins, and
            chocolate treats made fresh daily with premium ingredients.
          </p>
          <Link href='/products' data-aos='fade-up' data-aos-delay='300'>
            <Button size='lg'>
              Explore Our Products
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className='py-20 px-4 sm:px-6 lg:px-8'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4'>
              Featured Products
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Our most popular items, loved by customers
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className='text-center'>
            <Link href='/products'>
              <Button variant='link' size='lg'>
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}
