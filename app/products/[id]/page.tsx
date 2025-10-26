'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { BuyNowDialog } from '@/components/buy-now-dialog';
import { getProductById, getRecommendedProducts } from '@/lib/products';
import Footer from '@/components/footer';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = getProductById(id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const recommended = getRecommendedProducts(product.id, 4);

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main
        className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'
        data-aos='fade-up'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div data-aos='fade-right'>
              <div className='aspect-square bg-muted overflow-hidden rounded-md'>
                <Image
                  src={
                    product.images?.[0] || product.image || '/placeholder.svg'
                  }
                  alt={product.name}
                  width={800}
                  height={800}
                  className='object-cover w-full h-full'
                  unoptimized
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className='grid grid-cols-4 gap-3 mt-3'>
                  {product.images.slice(1, 5).map((img, idx) => (
                    <div
                      key={idx}
                      className='aspect-square bg-muted overflow-hidden rounded'
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 2}`}
                        width={200}
                        height={200}
                        className='object-cover w-full h-full'
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div data-aos='fade-left' data-aos-delay='100'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4'>
                {product.name}
              </h1>
              <p className='text-lg text-muted-foreground text-pretty'>
                {product.description}
              </p>
              <p className='text-3xl font-sans font-semibold text-foreground mt-6'>
                ₹ {product.price.toFixed(2)}{' '}
                <span className='text-sm text-muted-foreground'>
                  / {product.weight}
                </span>
              </p>

              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className='mt-6'>
                    <h2 className='font-semibold text-foreground mb-2'>
                      Ingredients
                    </h2>
                    <ul className='list-disc list-inside text-muted-foreground'>
                      {product.ingredients.map(ing => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.flavors && product.flavors.length > 0 && (
                  <div className='mt-6'>
                    <h2 className='font-semibold text-foreground mb-2'>
                      Flavors
                    </h2>
                    <ul className='list-disc list-inside text-muted-foreground'>
                      {product.flavors.map(flavor => (
                        <li key={flavor}>{flavor}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {product.weight && (
                <p className='text-muted-foreground mt-4'>
                  Unit: {product.weight}
                </p>
              )}

              <div className='mt-8 flex gap-3'>
                <Link href='/products'>
                  <Button variant='outline'>Back to products</Button>
                </Link>
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className='bg-primary text-primary-foreground hover:bg-primary/90'
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>

          {recommended.length > 0 && (
            <div className='mt-16'>
              <h2 className='text-2xl font-serif font-semibold text-foreground mb-6'>
                You might also like
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {recommended.map(item => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <BuyNowDialog
        product={product}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
      <Footer />
    </div>
  );
}
