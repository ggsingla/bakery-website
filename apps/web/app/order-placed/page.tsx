'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Home, ShoppingBag, Clock, Phone } from 'lucide-react';

function OrderPlacedContent() {
  const searchParams = useSearchParams();
  const [customerName, setCustomerName] = useState<string>('');

  useEffect(() => {
    const name = searchParams.get('name');
    if (name) {
      setCustomerName(decodeURIComponent(name));
    }
  }, [searchParams]);

  return (
    <main
      className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'
      data-aos='fade-up'
    >
      <div className='max-w-4xl mx-auto'>
        {/* Success Message */}
        <div
          className='text-center mb-8'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <CheckCircle className='h-16 w-16 text-green-500 mx-auto mb-4' />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4'>
            Order Placed Successfully!
          </h1>
          {customerName && (
            <p className='text-lg text-muted-foreground mb-6'>
              Thank you, {customerName}! Your order has been received.
            </p>
          )}
          <p className='text-base text-muted-foreground mb-8'>
            We'll contact you shortly to confirm your order details and arrange
            delivery.
          </p>
        </div>

        {/* What Happens Next */}
        <Card
          className='border-border mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <CardContent className='p-6'>
            <h2 className='text-xl font-semibold text-foreground mb-4 flex items-center'>
              <Clock className='h-5 w-5 mr-2' />
              What Happens Next?
            </h2>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5'>
                  1
                </div>
                <div>
                  <p className='font-medium text-foreground'>
                    Order Confirmation
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    We'll review your order and contact you within 2-4 hours to
                    confirm details.
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5'>
                  2
                </div>
                <div>
                  <p className='font-medium text-foreground'>
                    Preparation & Delivery
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    We'll prepare your order fresh and arrange delivery at your
                    preferred time.
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5'>
                  3
                </div>
                <div>
                  <p className='font-medium text-foreground'>
                    Enjoy Your Treat!
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Receive your delicious order and enjoy the perfect treat for
                    your occasion.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div
          className='flex flex-col sm:flex-row gap-4 justify-center'
          data-aos='fade-up'
          data-aos-delay='500'
        >
          <Link href='/products'>
            <Button size='lg' variant='outline' className='w-full sm:w-auto'>
              <ShoppingBag className='mr-2 h-5 w-5' />
              Continue Shopping
            </Button>
          </Link>
          <Link href='/'>
            <Button size='lg' className='w-full sm:w-auto'>
              <Home className='mr-2 h-5 w-5' />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function OrderPlacedPage() {
  return (
    <Suspense
      fallback={
        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto'></div>
              <p className='mt-4 text-muted-foreground'>
                Loading your order...
              </p>
            </div>
          </div>
        </main>
      }
    >
      <OrderPlacedContent />
    </Suspense>
  );
}
