import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-out select-none \
   rounded-xl outline-none disabled:pointer-events-none disabled:opacity-50 \
   focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 \
   active:translate-y-[1px] active:shadow-inner',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',

        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',

        outline:
          'border border-border bg-background hover:bg-accent hover:text-accent-foreground',

        ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',

        link: 'bg-transparent text-primary underline-offset-4 hover:underline',
      },

      size: {
        sm: 'h-8 px-3 text-sm',
        default: 'h-10 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'size-10',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
