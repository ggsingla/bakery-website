'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCart();

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main
        className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'
        data-aos='fade-up'
      >
        <div className='max-w-7xl mx-auto'>
          <div
            className='text-center mb-12'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 text-balance'>
              Our Products
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              Handcrafted with love using the finest ingredients. Each item is
              made fresh daily in our bakery.
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay='150'>
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                data-aos='fade-up'
                data-aos-delay={String(100 + (idx % 4) * 50)}
              >
                <ProductCard product={product} onAddToCart={addItem} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-muted-foreground'>
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
