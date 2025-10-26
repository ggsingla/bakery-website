import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-foreground mb-6'>
              Baked fresh daily with 100% vegetarian ingredients
            </h2>
            <p className='text-muted-foreground mb-4 leading-relaxed'>
              At Cake Paradise, we believe in the art of traditional baking with a modern twist.
              Every product is handcrafted with care using only the finest vegetarian ingredients
              sourced from trusted suppliers, ensuring every bite is pure and wholesome.
            </p>
            <p className='text-muted-foreground mb-4 leading-relaxed'>
              Our commitment to 100% vegetarian products means you can enjoy our delicious treats
              without any compromise on taste or quality. From our rich chocolate cakes to our
              delicate biscuits, each item is crafted with plant-based ingredients that deliver
              exceptional flavor and texture.
            </p>
            <p className='text-muted-foreground mb-6 leading-relaxed'>
              Every creation tells a story of passion, quality, and dedication to the craft of
              baking, while staying true to our values of providing pure, vegetarian delights
              for everyone to enjoy.
            </p>
          </div>
          <div className='relative h-[500px] rounded-lg overflow-hidden'>
            <Image
              src='/bakery-view.png'
              alt='Our artisan baker crafting fresh vegetarian treats'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
