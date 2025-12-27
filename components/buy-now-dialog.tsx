'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

interface BuyNowDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BuyNowDialog({
  product,
  open,
  onOpenChange,
}: BuyNowDialogProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const OrderForm = ({
    className,
    showButtons = true,
  }: {
    className?: string;
    showButtons?: boolean;
  }) => (
    <div className={className}>
      <div className='space-y-6'>
        {/* Product Display */}
        <div className='border rounded-lg p-4 bg-muted/50'>
          <div className='flex items-center space-x-4'>
            <div className='aspect-square w-20 h-20 bg-muted overflow-hidden rounded-md flex-shrink-0'>
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                width={80}
                height={80}
                className='object-cover w-full h-full'
                unoptimized
              />
            </div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-foreground'>{product.name}</h3>
              <p className='text-2xl font-bold text-primary'>
                ₹ {product.price.toFixed(2)}
              </p>
              {product.weight && (
                <p className='text-sm text-muted-foreground'>
                  {product.weight}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Order Form */}
        <form
          id='order-form'
          action='https://formsubmit.co/treatsbycakeparadise@gmail.com'
          method='POST'
          className='space-y-4'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-sm font-medium'>
                Name *
              </Label>
              <Input
                id='name'
                name='name'
                placeholder='Your name'
                required
                minLength={2}
                className='h-11'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email' className='text-sm font-medium'>
                Email
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='you@example.com'
                className='h-11'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='phone' className='text-sm font-medium'>
              Phone Number *
            </Label>
            <Input
              id='phone'
              name='phone'
              type='tel'
              placeholder='+91 98765 43210'
              required
              className='h-11'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message' className='text-sm font-medium'>
              Message *
            </Label>
            <Textarea
              id='message'
              name='message'
              placeholder='Tell us about your requirements, preferred flavors, design ideas, or any special instructions...'
              className='min-h-[100px] resize-none'
              required
            />
          </div>

          {/* Hidden Product Data Fields */}
          <input type='hidden' name='product_name' value={product.name} />
          <input type='hidden' name='product_price' value={product.price} />
          <input
            type='hidden'
            name='product_weight'
            value={product.weight || ''}
          />
          <input type='hidden' name='product_id' value={product.id} />
          <input
            type='hidden'
            name='product_url'
            value={`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/products/${product.id}`}
          />
          <input
            type='hidden'
            name='product_description'
            value={product.description}
          />
          {product.ingredients && (
            <input
              type='hidden'
              name='product_ingredients'
              value={product.ingredients.join(', ')}
            />
          )}

          {/* FormSubmit Configuration */}
          <input
            type='hidden'
            name='_next'
            value={`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/order-placed?product=${product.id}`}
          />
          <input
            type='hidden'
            name='_subject'
            value={`New Order - ${product.name}`}
          />
          <input
            type='hidden'
            name='_autoresponse'
            value="Thank you for your order! We'll contact you shortly to confirm details and arrange delivery."
          />
          <input type='hidden' name='_template' value='table' />

          {showButtons && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-4'>
              <Button type='submit' className='flex-1'>
                Place Order
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => onOpenChange(false)}
                className='flex-1'
              >
                Cancel
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle>Order {product.name}</DialogTitle>
            <DialogDescription>
              Fill in your details to place your order. We'll contact you
              shortly to confirm.
            </DialogDescription>
          </DialogHeader>
          <OrderForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className='max-h-[85vh] flex flex-col'>
        <DrawerHeader className='text-left flex-shrink-0'>
          <DrawerTitle>Order {product.name}</DrawerTitle>
          <DrawerDescription>
            Fill in your details to place your order. We'll contact you shortly
            to confirm.
          </DrawerDescription>
        </DrawerHeader>

        {/* Scrollable content area */}
        <div className='flex-1 overflow-y-auto px-4'>
          <OrderForm className='pb-4' showButtons={false} />
        </div>

        {/* Fixed footer with buttons */}
        <DrawerFooter className='flex-shrink-0 bg-background border-t pt-4'>
          <div className='grid grid-cols-1 gap-3'>
            <Button type='submit' form='order-form' className='w-full'>
              Place Order
            </Button>
            <DrawerClose asChild>
              <Button variant='outline' className='w-full'>
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
