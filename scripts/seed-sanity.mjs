/**
 * Seed script to migrate static product data and content into Sanity.
 *
 * Usage:
 *   node scripts/seed-sanity.mjs
 *
 * Requires environment variables:
 *   SANITY_PROJECT_ID (or uses default qij3vxam)
 *   SANITY_DATASET (or uses 'production')
 *   SANITY_API_TOKEN (write token from sanity.io/manage)
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'qij3vxam',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

if (!process.env.SANITY_API_TOKEN) {
  console.error(
    'ERROR: SANITY_API_TOKEN is required. Create a write token at https://www.sanity.io/manage'
  );
  process.exit(1);
}

// --- Static data (extracted from lib/products.ts and constants/company.ts) ---

const categories = [
  { title: 'Cakes', slug: 'cakes', order: 1 },
  { title: 'Biscuits', slug: 'biscuits', order: 2 },
  { title: 'Muffins', slug: 'muffins', order: 3 },
  { title: 'Chocolate Balls', slug: 'chocolate-balls', order: 4 },
  { title: 'Jar Cakes', slug: 'jar-cakes', order: 5 },
  { title: 'Other', slug: 'other', order: 6 },
];

const products = [
  {
    name: 'Luxury Ombre Birthday Cake with Gold Accents',
    slug: 'luxury-ombre-birthday-cake-with-gold-accents',
    category: 'cakes',
    description:
      'Stunning ombre birthday cake transitioning from white to pink with gold drips, "Happy Birthday Wifey" topper, fresh flowers, macarons, and gold spheres. Includes three matching cupcakes with gold foil wrappers.',
    price: 1800,
    image: 'apps/web/public/products/cakes/cake-7.webp',
    images: ['apps/web/public/products/cakes/cake-7.webp'],
    ingredients: [
      'Premium white flour',
      'Gold spheres',
      'Sugar pearls',
      'Refined oil',
      'Curd',
      'Milk',
      'Rasmalai',
      'Customized',
    ],
    flavors: ['Vanilla', 'Strawberry', 'Chocolate'],
    weight: '1.5 Kg',
    featured: true,
    order: 1,
  },
  {
    name: 'Anniversary Cake with Red Hearts & Figurines',
    slug: 'anniversary-cake-with-red-hearts-and-figurines',
    category: 'cakes',
    description:
      'Elegant cream-colored anniversary cake decorated with red hearts, gold sprinkles, and adorable cartoon couple figurines. Perfect for celebrating love and milestones.',
    price: 750,
    image: 'apps/web/public/products/cakes/cake-2.webp',
    images: ['apps/web/public/products/cakes/cake-2.webp'],
    ingredients: [
      'Premium white flour',
      'Sugar',
      'Gold leaf',
      'Sugar powder',
      'Curd',
      'Milk',
      'Refined oil',
    ],
    flavors: ['Vanilla', 'Strawberry'],
    weight: '2.0 lbs',
    featured: true,
    order: 2,
  },
  {
    name: 'Rainbow Striped Birthday Cake with Multicolored Rosettes',
    slug: 'rainbow-striped-birthday-cake-with-multicolored-rosettes',
    category: 'cakes',
    description:
      'Vibrant multi-colored striped cake featuring rainbow rosettes and a golden "Happy Birthday" topper. A colorful celebration of joy and happiness.',
    price: 1000,
    image: 'apps/web/public/products/cakes/cake-3.webp',
    images: ['apps/web/public/products/cakes/cake-3.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Gold food coloring',
      'Dark chocolate',
      'Gold sprinkles',
    ],
    flavors: ['Mixed'],
    weight: '2.5 lbs',
    featured: true,
    order: 3,
  },
  {
    name: 'White Birthday Cake with Gold Drip & Mustache Theme',
    slug: 'white-birthday-cake-with-gold-drip-and-mustache-theme',
    category: 'cakes',
    description:
      'Fun and stylish white cake featuring gold drip icing, black mustache decoration, and gold sprinkles. Perfect for birthday celebrations with a modern twist.',
    price: 650,
    image: 'apps/web/public/products/cakes/cake-4.webp',
    images: ['apps/web/public/products/cakes/cake-4.webp'],
    ingredients: [
      'Premium white flour',
      'Sugar',
      'Gold leaf',
      'Sugar powder',
      'Curd',
      'Milk',
      'Refined oil',
    ],
    flavors: ['Pineapple', 'Strawberry', 'Chocolate', 'Rasmalai'],
    weight: '1.5 lbs',
    featured: false,
    order: 4,
  },
  {
    name: 'Romantic White Cake with Pink Ribbons & Hearts',
    slug: 'romantic-white-cake-with-pink-ribbons-and-hearts',
    category: 'cakes',
    description:
      'Charming white cake adorned with delicate pink satin ribbons, red heart sprinkles, and elegant ruffled piping. Perfect for romantic occasions and anniversaries.',
    price: 900,
    image: 'apps/web/public/products/cakes/cake-5.webp',
    images: ['apps/web/public/products/cakes/cake-5.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Food coloring (multiple colors)',
      'Vanilla extract',
    ],
    flavors: ['Vanilla'],
    weight: '2.0 lbs',
    featured: true,
    order: 5,
  },
  {
    name: 'Elegant White Birthday Cake with Red Roses',
    slug: 'elegant-white-birthday-cake-with-red-roses',
    category: 'cakes',
    description:
      'Beautifully decorated white birthday cake with red roses, white sugar pearls, and elegant "Happy Birthday" topper. Perfect for special celebrations.',
    price: 600,
    image: 'apps/web/public/products/cakes/cake-1.webp',
    images: ['apps/web/public/products/cakes/cake-1.webp'],
    ingredients: [
      'Premium white flour',
      'Sugar',
      'Gold leaf',
      'Sugar powder',
      'Curd',
      'Milk',
      'Refined oil',
    ],
    flavors: ['Pineapple', 'Strawberry', 'Chocolate', 'Rasmalai'],
    weight: '2.0 lbs',
    featured: false,
    order: 6,
  },
  {
    name: 'White & Pink Birthday Cake with Calendar Theme',
    slug: 'white-and-pink-birthday-cake-with-calendar-theme',
    category: 'cakes',
    description:
      'Charming white and pink birthday cake featuring a unique calendar decoration with highlighted dates, pink ribbon bows, and elegant piping. Perfect for milestone birthdays.',
    price: 600,
    image: 'apps/web/public/products/cakes/cake-6.webp',
    images: ['apps/web/public/products/cakes/cake-6.webp'],
    ingredients: ['White flour', 'Curd', 'Milk', 'Refind oil', 'Sugar powder'],
    flavors: [
      'Vanilla',
      'Strawberry',
      'Rasmalai',
      'Chocolate',
      'Pineapple',
      'Customized',
    ],
    weight: '2.0 lbs',
    featured: false,
    order: 7,
  },
  {
    name: 'Classic Black Forest Birthday Cake',
    slug: 'classic-black-forest-birthday-cake',
    category: 'cakes',
    description:
      'Traditional white-frosted cake with rich dark chocolate drizzle, whipped cream swirls, chocolate shavings, and vibrant red cherries. Topped with elegant "Happy Birthday" topper on a white cake stand.',
    price: 700,
    image: 'apps/web/public/products/cakes/cake-8.webp',
    images: ['apps/web/public/products/cakes/cake-8.webp'],
    ingredients: [
      'White flour',
      'Sugar',
      'Dark chocolate',
      'Whipped cream',
      'Red cherries',
      'Cocoa powder',
      'Refined oil',
      'Curd',
      'Milk',
    ],
    flavors: ['Chocolate', 'Black forest'],
    weight: '2.0 lbs',
    featured: true,
    order: 8,
  },
  {
    name: 'Layered Jar Cake with Caramel Drizzle',
    slug: 'layered-jar-cake-with-caramel-drizzle',
    category: 'jar-cakes',
    description:
      'Delicious layered dessert in clear plastic cups featuring alternating layers of vanilla cake crumbs and creamy custard, topped with whipped cream, colorful sprinkles, silver pearls, and caramel drizzle.',
    price: 30,
    image: 'apps/web/public/products/jar-cake/jar-cake-1.webp',
    images: ['apps/web/public/products/jar-cake/jar-cake-1.webp'],
    ingredients: [
      'Whipped cream',
      'Colorful sprinkles',
      'Sugar',
      'Vanilla extract',
      'Milk',
      'Curd',
      'All purposes flour',
    ],
    flavors: ['Vanilla', 'Pineapple', 'Chocolate', 'Rasmalai', 'Customized'],
    weight: 'Pieces',
    featured: false,
    order: 9,
  },
  {
    name: 'Rainbow Mirror Glaze Birthday Cake',
    slug: 'rainbow-mirror-glaze-birthday-cake',
    category: 'cakes',
    description:
      'Stunning dome-shaped jelly cake with psychedelic marbled mirror glaze in vibrant colors, featuring a gold "Happy Birthday" topper and decorative yellow frosting border. A true showstopper for celebrations.',
    price: 1500,
    image: 'apps/web/public/products/cakes/cake-9.webp',
    images: ['apps/web/public/products/cakes/cake-9.webp'],
    ingredients: [
      'White flour',
      'Sugar',
      'Mirror glaze',
      'Refind oil',
      'Curd',
      'Milk',
      'Melted chocolate',
    ],
    flavors: ['Rainbow', 'Chocolate', 'Customized'],
    weight: '3.0 lbs',
    featured: false,
    order: 10,
  },
  {
    name: 'Dark Chocolate Truffles with White Drizzle',
    slug: 'dark-chocolate-truffles-with-white-drizzle',
    category: 'chocolate-balls',
    description:
      'Rich dark chocolate truffles coated in smooth chocolate and elegantly decorated with white icing drizzle and colorful sprinkles. Each truffle is individually presented in a fluted paper cup for a premium experience.',
    price: 20,
    image: 'apps/web/public/products/choco-balls/choco-balls-1.webp',
    images: [
      'apps/web/public/products/choco-balls/choco-balls-1.webp',
      'apps/web/public/products/choco-balls/choco-balls-1.1.webp',
    ],
    ingredients: [
      'Dark chocolate',
      'Cocoa powder',
      'Butter',
      'White chocolate',
      'Colorful sprinkles',
      'Sugar',
    ],
    flavors: ['Dark Chocolate', 'Cocoa'],
    weight: 'Pieces',
    featured: false,
    order: 11,
  },
  {
    name: 'Pink Cars Theme Birthday Cake with NAKSHIT',
    slug: 'pink-cars-theme-birthday-cake-with-nakshit',
    category: 'cakes',
    description:
      "Delightful pink birthday cake featuring Cars movie characters, colorful balloon decorations, rocking horse, toy car, and personalized \"NAKSHIT\" name in gold letters. Perfect for kids' birthday celebrations with a fun automotive theme.",
    price: 2000,
    image: 'apps/web/public/products/cakes/cake-10.webp',
    images: ['apps/web/public/products/cakes/cake-10.webp'],
    ingredients: [
      'White flour',
      'Sugar',
      'Gold letters',
      'Balloon toppers',
      'Silver and gold sprinkles',
      'Refined oil',
      'Curd',
      'Milk',
    ],
    flavors: [
      'Vanilla',
      'Strawberry',
      'Pineapple',
      'Chocolate',
      'Rasmalai',
      'Customized',
    ],
    weight: '2.0 kg',
    featured: false,
    order: 12,
  },
  {
    name: 'Two-Tier Pink Rainbow Birthday Cake',
    slug: 'two-tier-pink-rainbow-birthday-cake',
    category: 'cakes',
    description:
      'Stunning two-tier pink birthday cake with gold accents, rainbow decorations, butterfly toppers, and metallic spheres. Features a gold "Happy Birthday" topper and elegant gold leaf details for a luxurious celebration cake.',
    price: 2700,
    image: 'apps/web/public/products/cakes/cake-11.webp',
    images: ['apps/web/public/products/cakes/cake-11.webp'],
    ingredients: [
      'Premium white flour',
      'Sugar',
      'Butterfly decorations',
      'Rainbow topper',
      'Gold sprinkles',
      'Decoration balls',
      'Refined oil',
      'Curd',
      'Milk',
      'Whipped cream',
    ],
    flavors: [
      'Vanilla',
      'Strawberry',
      'Chocolate',
      'Rasmalai',
      'Pineapple',
      'Blueberry',
      'Customized',
    ],
    weight: '2.5 kg',
    featured: false,
    order: 13,
  },
  {
    name: 'Fresh Fruit Lavender Cake with White Chocolate Drip',
    slug: 'fresh-fruit-lavender-cake-with-white-chocolate-drip',
    category: 'cakes',
    description:
      'Beautiful lavender-colored cake topped with fresh diced fruits including grapes, mango, kiwi, and pineapple. Features elegant white chocolate ganache drips and a gold "Happy Birthday" topper for a fresh, fruity celebration.',
    price: 850,
    image: 'apps/web/public/products/cakes/cake-12.webp',
    images: ['apps/web/public/products/cakes/cake-12.webp'],
    ingredients: [
      'White flour',
      'Sugar',
      'Fresh grapes',
      'Fresh mango',
      'Fresh kiwi',
      'White chocolate',
      'Fresh Cherry',
      'Pomegranate',
      'Curd',
      'Milk',
      'Refined oil',
    ],
    flavors: ['Mixed Fruit', 'Fresh fruits'],
    weight: '2.0 lbs',
    featured: false,
    order: 14,
  },
];

const companyInfo = {
  name: 'Cake Paradise',
  email: 'treatsbycakeparadise@gmail.com',
  phone: '+91 76960 03371',
  address: 'Partap Colony, Street No. 2, Near Indian Bank,',
  city: 'Samana',
  state: 'Punjab',
  zip: '147101',
};

const homePageData = {
  badgeText: '100% Vegetarian',
  tagline: 'Handcrafted with love, baked to perfection',
  description:
    'Discover our selection of artisan cakes, biscuits, muffins, and chocolate treats made fresh daily with premium ingredients.',
  ctaPrimaryText: 'Explore Our Products',
  ctaSecondaryText: 'Contact Us',
  featuredHeading: 'Featured Products',
  featuredSubheading: 'Our most popular items, loved by customers',
};

const aboutSectionData = {
  heading: 'Baked fresh daily with 100% vegetarian ingredients',
  paragraphs: [
    'At Cake Paradise, we believe in the art of traditional baking with a modern twist. Every product is handcrafted with care using only the finest vegetarian ingredients sourced from trusted suppliers, ensuring every bite is pure and wholesome.',
    'Our commitment to 100% vegetarian products means you can enjoy our delicious treats without any compromise on taste or quality. From our rich chocolate cakes to our delicate biscuits, each item is crafted with plant-based ingredients that deliver exceptional flavor and texture.',
    'Every creation tells a story of passion, quality, and dedication to the craft of baking, while staying true to our values of providing pure, vegetarian delights for everyone to enjoy.',
  ],
};

// --- Helper functions ---

async function uploadImage(filePath) {
  const fullPath = resolve(__dirname, '..', filePath);
  try {
    const imageBuffer = readFileSync(fullPath);
    const filename = filePath.split('/').pop();
    const asset = await client.assets.upload('image', imageBuffer, {
      filename,
    });
    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    };
  } catch (err) {
    console.warn(`  Warning: Could not upload image ${filePath}:`, err.message);
    return null;
  }
}

// --- Main seed function ---

async function seed() {
  console.log('🌱 Starting Sanity seed...\n');

  // 1. Create categories
  console.log('📂 Creating categories...');
  const categoryMap = {};
  for (const cat of categories) {
    const doc = await client.createOrReplace({
      _id: `category-${cat.slug}`,
      _type: 'category',
      title: cat.title,
      slug: { _type: 'slug', current: cat.slug },
      order: cat.order,
    });
    categoryMap[cat.slug] = doc._id;
    console.log(`  ✓ ${cat.title}`);
  }

  // 2. Create products with images
  console.log('\n🧁 Creating products...');
  for (const product of products) {
    console.log(`  Uploading images for "${product.name}"...`);

    // Upload main image
    const mainImage = await uploadImage(product.image);

    // Upload gallery images
    const gallery = [];
    for (const imgPath of product.images) {
      const img = await uploadImage(imgPath);
      if (img) gallery.push(img);
    }

    const doc = await client.createOrReplace({
      _id: `product-${product.slug}`,
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      category: {
        _type: 'reference',
        _ref: categoryMap[product.category],
      },
      description: product.description,
      price: product.price,
      mainImage: mainImage,
      gallery: gallery.length > 0 ? gallery : undefined,
      ingredients: product.ingredients,
      flavors: product.flavors,
      weight: product.weight,
      featured: product.featured,
      order: product.order,
    });
    console.log(`  ✓ ${product.name}`);
  }

  // 3. Create singletons
  console.log('\n🏢 Creating company info...');
  await client.createOrReplace({
    _id: 'companyInfo',
    _type: 'companyInfo',
    ...companyInfo,
  });
  console.log('  ✓ Company info created');

  console.log('\n🏠 Creating home page...');
  // Upload hero image
  const heroImage = await uploadImage(
    'apps/web/public/table-top-view.webp'
  );
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    ...homePageData,
    heroImage: heroImage,
  });
  console.log('  ✓ Home page created');

  console.log('\n📝 Creating about section...');
  const aboutImage = await uploadImage('apps/web/public/bakery-view.webp');
  await client.createOrReplace({
    _id: 'aboutSection',
    _type: 'aboutSection',
    heading: aboutSectionData.heading,
    paragraphs: aboutSectionData.paragraphs,
    image: aboutImage,
  });
  console.log('  ✓ About section created');

  console.log('\n✅ Seed complete!');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
