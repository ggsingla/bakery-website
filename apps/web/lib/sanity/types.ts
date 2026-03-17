import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface SanityCategory {
  _id: string;
  title: string;
  slug: { current: string };
  order?: number;
}

export interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  category: SanityCategory;
  description: string;
  price: number;
  mainImage: SanityImageSource;
  gallery?: SanityImageSource[];
  ingredients?: string[];
  flavors?: string[];
  weight?: string;
  featured?: boolean;
  order?: number;
}

export interface SanityCompanyInfo {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface SanityHomePage {
  _id: string;
  badgeText?: string;
  tagline: string;
  description?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  heroImage?: SanityImageSource;
  featuredHeading?: string;
  featuredSubheading?: string;
}

export interface SanityAboutSection {
  _id: string;
  heading: string;
  paragraphs?: string[];
  image?: SanityImageSource;
}
