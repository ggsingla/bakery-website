import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { HomePage } from '@/lib/types';
import { urlFor } from '@/lib/sanity/image';

interface HeroProps {
  data: HomePage;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]'>
          {/* Content Side */}
          <div className='space-y-8 order-2 lg:order-1' data-aos='fade-right'>
            {data.badgeText && (
              <div className='inline-flex items-center space-x-1 bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium'>
                <CheckCircle className='w-4 h-4' />
                <span>{data.badgeText}</span>
              </div>
            )}

            <div className='space-y-6'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-none'>
                {data.tagline}
              </h1>
              {data.description && (
                <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg'>
                  {data.description}
                </p>
              )}
            </div>

            <div
              className='flex flex-col sm:flex-row gap-4'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <Link href='/products'>
                <Button size='lg' className='w-full sm:w-auto'>
                  {data.ctaPrimaryText || 'Explore Our Products'}
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  variant='outline'
                  size='lg'
                  className='w-full sm:w-auto'
                >
                  {data.ctaSecondaryText || 'Contact Us'}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div
            className='relative order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-delay='100'
          >
            <div className='relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src={
                  data.heroImage
                    ? urlFor(data.heroImage).width(800).height(600).url()
                    : '/table-top-view.webp'
                }
                alt='Cake Paradise products on table'
                fill
                className='object-cover'
                priority
                unoptimized
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            {/* Floating elements for visual interest */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl' />
            <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-xl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
