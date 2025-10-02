import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-foreground mb-6'>
              Baked fresh daily with premium ingredients
            </h2>
            <p className='text-muted-foreground mb-4 leading-relaxed'>
              At Cake Paradise, we believe in the art of traditional baking.
              Every product is handcrafted with care using only the finest
              ingredients sourced from trusted suppliers.
            </p>
            <p className='text-muted-foreground mb-6 leading-relaxed'>
              From our rich chocolate cakes to our delicate biscuits, each item
              tells a story of passion, quality, and dedication to the craft of
              baking.
            </p>
          </div>
          <div className='relative h-[400px] rounded-lg overflow-hidden'>
            <Image
              src='/bakery-interior-artisan.jpg'
              alt='Our bakery'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
