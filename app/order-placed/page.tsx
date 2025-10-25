'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Home, ShoppingBag, Clock, Phone } from 'lucide-react';
import { getProductById } from '@/lib/products';
import type { Product } from '@/lib/types';

export default function OrderPlacedPage() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [customerName, setCustomerName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = searchParams.get('product');
    const name = searchParams.get('name');

    if (productId) {
      const productData = getProductById(productId);
      setProduct(productData);
    }

    if (name) {
      setCustomerName(decodeURIComponent(name));
    }

    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className='min-h-screen bg-background'>
        <Header />
        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto'></div>
              <p className='mt-4 text-muted-foreground'>Loading your order...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main
        className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'
        data-aos='fade-up'
      >
        <div className='max-w-4xl mx-auto'>
          {/* Success Message */}
          <div className='text-center mb-8' data-aos='fade-up' data-aos-delay='100'>
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
              We'll contact you shortly to confirm your order details and arrange delivery.
            </p>
          </div>

          {/* Product Details */}
          {product && (
            <Card className='border-border mb-8' data-aos='fade-up' data-aos-delay='200'>
              <CardContent className='p-6'>
                <h2 className='text-xl font-semibold text-foreground mb-4'>
                  Your Order Details
                </h2>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <div className='aspect-square w-24 h-24 bg-muted overflow-hidden rounded-md flex-shrink-0'>
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      width={96}
                      height={96}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-foreground text-lg mb-2'>
                      {product.name}
                    </h3>
                    <p className='text-2xl font-bold text-primary mb-2'>
                      ₹ {product.price.toFixed(2)}
                    </p>
                    {product.weight && (
                      <p className='text-sm text-muted-foreground mb-2'>
                        Weight: {product.weight}
                      </p>
                    )}
                    <p className='text-sm text-muted-foreground'>
                      {product.description}
                    </p>
                    {product.ingredients && product.ingredients.length > 0 && (
                      <div className='mt-3'>
                        <p className='text-xs font-medium text-muted-foreground mb-1'>
                          Ingredients:
                        </p>
                        <p className='text-xs text-muted-foreground'>
                          {product.ingredients.join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* What Happens Next */}
          <Card className='border-border mb-8' data-aos='fade-up' data-aos-delay='300'>
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
                    <p className='font-medium text-foreground'>Order Confirmation</p>
                    <p className='text-sm text-muted-foreground'>
                      We'll review your order and contact you within 2-4 hours to confirm details.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5'>
                    2
                  </div>
                  <div>
                    <p className='font-medium text-foreground'>Preparation & Delivery</p>
                    <p className='text-sm text-muted-foreground'>
                      We'll prepare your order fresh and arrange delivery at your preferred time.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5'>
                    3
                  </div>
                  <div>
                    <p className='font-medium text-foreground'>Enjoy Your Treat!</p>
                    <p className='text-sm text-muted-foreground'>
                      Receive your delicious order and enjoy the perfect treat for your occasion.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className='border-border mb-8' data-aos='fade-up' data-aos-delay='400'>
            <CardContent className='p-6'>
              <h2 className='text-xl font-semibold text-foreground mb-4 flex items-center'>
                <Phone className='h-5 w-5 mr-2' />
                Need Help?
              </h2>
              <p className='text-muted-foreground mb-4'>
                If you have any questions about your order, feel free to contact us:
              </p>
              <div className='space-y-2 text-sm'>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> treatsbycakeparadise@gmail.com</p>
                <p><strong>Response Time:</strong> Usually within 2-4 hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center' data-aos='fade-up' data-aos-delay='500'>
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
    </div>
  );
}
