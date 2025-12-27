'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BuyNowDialog } from '@/components/buy-now-dialog';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card
        className='group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300 py-0'
        data-aos='fade-up'
      >
        <Link href={`/products/${product.id}`}>
          <div className='aspect-square overflow-hidden bg-muted'>
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              width={400}
              height={400}
              className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
              unoptimized
            />
          </div>
        </Link>
        <CardContent className='p-6'>
          <Link href={`/products/${product.id}`}>
            <h3 className='font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2'>
              {product.name}
            </h3>
          </Link>
          <p className='text-sm text-muted-foreground line-clamp-2 mb-4'>
            {product.description}
          </p>
          <p className='text-2xl font-semibold text-foreground'>
            ₹ {product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className='p-6 pt-0'>
          <Button
            onClick={() => setIsDialogOpen(true)}
            variant='default'
            className='w-full'
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>

      <BuyNowDialog
        product={product}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
