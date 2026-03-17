import { getAllProducts, getCategories } from '@/lib/sanity/queries';
import { ProductsContent } from './products-content';

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  return <ProductsContent products={products} categories={categories} />;
}
