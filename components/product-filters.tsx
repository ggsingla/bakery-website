'use client';

import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: { value: string; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'cakes', label: 'Cakes' },
  { value: 'biscuits', label: 'Biscuits' },
  { value: 'muffins', label: 'Muffins' },
  { value: 'chocolate-balls', label: 'Chocolate Balls' },
];

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
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
