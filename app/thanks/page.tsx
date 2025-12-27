import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Home } from 'lucide-react';

export default function ThanksPage() {
  return (
    <main
      className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'
      data-aos='fade-up'
    >
      <div className='max-w-2xl mx-auto'>
        <Card className='border-border'>
          <CardContent className='p-8 text-center'>
            <div className='mb-6' data-aos='fade-up' data-aos-delay='100'>
              <CheckCircle className='h-16 w-16 text-green-500 mx-auto mb-4' />
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4'>
                Thank You!
              </h1>
              <p className='text-lg text-muted-foreground mb-6'>
                Your message has been sent successfully. We'll get back to you
                soon!
              </p>
              <p className='text-sm text-muted-foreground mb-8'>
                We appreciate your interest in Cake Paradise and look forward to
                serving you.
              </p>
            </div>

            <div className='space-y-4' data-aos='fade-up' data-aos-delay='200'>
              <Link href='/'>
                <Button size='lg'>
                  <Home className='mr-2 h-5 w-5' />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
