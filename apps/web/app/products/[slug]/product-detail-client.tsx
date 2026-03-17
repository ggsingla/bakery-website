'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BuyNowDialog } from '@/components/buy-now-dialog';
import type { Product } from '@/lib/types';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className='bg-primary text-primary-foreground hover:bg-primary/90'
      >
        Buy Now
      </Button>
      <BuyNowDialog
        product={product}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
