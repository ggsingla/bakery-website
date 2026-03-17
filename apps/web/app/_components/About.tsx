import Image from 'next/image';
import React from 'react';
import type { AboutSection } from '@/lib/types';
import { urlFor } from '@/lib/sanity/image';

interface AboutProps {
  data: AboutSection;
}

const About = ({ data }: AboutProps) => {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-foreground mb-6'>
              {data.heading}
            </h2>
            {data.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className='text-muted-foreground mb-4 leading-relaxed'
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className='relative h-[500px] md:h-[500px] rounded-lg overflow-hidden'>
            <Image
              src={
                data.image
                  ? urlFor(data.image).width(800).height(500).url()
                  : '/bakery-view.webp'
              }
              alt='Our artisan baker crafting fresh vegetarian treats'
              fill
              className='object-cover object-top'
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
