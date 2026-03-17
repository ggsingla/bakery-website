'use client';

import { Button } from '@/components/ui/button';
import type { Category } from '@/lib/types';

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className='flex flex-wrap gap-2 mb-8'>
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
        className='rounded-full'
      >
        All Products
      </Button>
      {categories.map(category => (
        <Button
          key={category._id}
          variant={
            selectedCategory === category.slug.current ? 'default' : 'outline'
          }
          onClick={() => onCategoryChange(category.slug.current)}
          className='rounded-full'
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}
