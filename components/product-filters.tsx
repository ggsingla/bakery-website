'use client';

import { Button } from '@/components/ui/button';
import { getAvailableCategories } from '@/lib/products';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const categories = getAvailableCategories();

  return (
    <div className='flex flex-wrap gap-2 mb-8'>
      {categories.map(category => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category.value)}
          className='rounded-full'
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
