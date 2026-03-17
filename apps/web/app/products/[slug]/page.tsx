import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import {
  getProductBySlug,
  getRecommendedProducts,
  getAllProductSlugs,
} from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import { ProductDetailClient } from './product-detail-client';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const recommended = await getRecommendedProducts(
    slug,
    product.category?.slug.current || '',
    4
  );

  return (
    <>
      <main
        className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'
        data-aos='fade-up'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div data-aos='fade-right'>
              <div className='aspect-square bg-muted overflow-hidden rounded-md'>
                <Image
                  src={
                    product.gallery?.[0]
                      ? urlFor(product.gallery[0]).width(800).height(800).url()
                      : product.mainImage
                        ? urlFor(product.mainImage)
                            .width(800)
                            .height(800)
                            .url()
                        : '/placeholder.svg'
                  }
                  alt={product.name}
                  width={800}
                  height={800}
                  className='object-cover w-full h-full'
                  unoptimized
                />
              </div>
              {product.gallery && product.gallery.length > 1 && (
                <div className='grid grid-cols-4 gap-3 mt-3'>
                  {product.gallery.slice(1, 5).map((img, idx) => (
                    <div
                      key={idx}
                      className='aspect-square bg-muted overflow-hidden rounded'
                    >
                      <Image
                        src={urlFor(img).width(200).height(200).url()}
                        alt={`${product.name} ${idx + 2}`}
                        width={200}
                        height={200}
                        className='object-cover w-full h-full'
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div data-aos='fade-left' data-aos-delay='100'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4'>
                {product.name}
              </h1>
              <p className='text-lg text-muted-foreground text-pretty'>
                {product.description}
              </p>
              <p className='text-3xl font-sans font-semibold text-foreground mt-6'>
                ₹ {product.price.toFixed(2)}{' '}
                {product.weight && (
                  <span className='text-sm text-muted-foreground'>
                    / {product.weight}
                  </span>
                )}
              </p>

              <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className='mt-6'>
                    <h2 className='font-semibold text-foreground mb-2'>
                      Ingredients
                    </h2>
                    <ul className='list-disc list-inside text-muted-foreground'>
                      {product.ingredients.map(ing => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.flavors && product.flavors.length > 0 && (
                  <div className='mt-6'>
                    <h2 className='font-semibold text-foreground mb-2'>
                      Flavors
                    </h2>
                    <ul className='list-disc list-inside text-muted-foreground'>
                      {product.flavors.map(flavor => (
                        <li key={flavor}>{flavor}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {product.weight && (
                <p className='text-muted-foreground mt-4'>
                  Unit: {product.weight}
                </p>
              )}

              <div className='mt-8 flex gap-3'>
                <Link href='/products'>
                  <Button variant='outline'>Back to products</Button>
                </Link>
                <ProductDetailClient product={product} />
              </div>
            </div>
          </div>

          {recommended.length > 0 && (
            <div className='mt-16'>
              <h2 className='text-2xl font-serif font-semibold text-foreground mb-6'>
                You might also like
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {recommended.map(item => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
