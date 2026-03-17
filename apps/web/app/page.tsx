import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts, getHeroSection } from '@/lib/sanity/queries';
import About from './_components/About';
import Hero from './_components/Hero';

export default async function HomePage() {
  const [featuredProducts, heroData] = await Promise.all([
    getFeaturedProducts(),
    getHeroSection(),
  ]);

  return (
    <>
      {heroData && <Hero data={heroData} />}

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
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product._id} product={product} />
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
      <About />
    </>
  );
}
