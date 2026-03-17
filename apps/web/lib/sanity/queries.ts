import { client } from './client';
import type {
  SanityProduct,
  SanityCategory,
  SanityCompanyInfo,
  SanityHeroSection,
} from './types';

const productFields = `
  _id,
  name,
  slug,
  category->{_id, title, slug},
  description,
  price,
  mainImage,
  gallery,
  ingredients,
  flavors,
  weight,
  featured,
  order
`;

export async function getAllProducts(): Promise<SanityProduct[]> {
  return client.fetch(
    `*[_type == "product"] | order(order asc) { ${productFields} }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getProductBySlug(
  slug: string
): Promise<SanityProduct | null> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] { ${productFields} }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getFeaturedProducts(): Promise<SanityProduct[]> {
  return client.fetch(
    `*[_type == "product" && featured == true] | order(order asc) { ${productFields} }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getRecommendedProducts(
  currentSlug: string,
  categorySlug: string,
  limit = 4
): Promise<SanityProduct[]> {
  return client.fetch(
    `*[_type == "product" && slug.current != $currentSlug && category->slug.current == $categorySlug] | order(order asc) [0...$limit] { ${productFields} }`,
    { currentSlug, categorySlug, limit },
    { next: { revalidate: 60 } }
  );
}

export async function getCategories(): Promise<SanityCategory[]> {
  return client.fetch(
    `*[_type == "category"] | order(order asc) { _id, title, slug }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getCompanyInfo(): Promise<SanityCompanyInfo> {
  return client.fetch(
    `*[_type == "companyInfo"][0]`,
    {},
    { next: { revalidate: 300 } }
  );
}

export async function getHeroSection(): Promise<SanityHeroSection> {
  return client.fetch(
    `*[_type == "heroSection"][0]`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getAllProductSlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "product"].slug.current`,
    {},
    { next: { revalidate: 60 } }
  );
}
