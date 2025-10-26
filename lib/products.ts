import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant White Birthday Cake with Red Roses',
    category: 'cakes',
    description:
      'Beautifully decorated white birthday cake with red roses, white sugar pearls, and elegant "Happy Birthday" topper. Perfect for special celebrations.',
    price: 600,
    image: '/products/cakes/cake-1.webp',
    images: ['/products/cakes/cake-1.webp'],
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
    featured: true,
  },
  {
    id: '2',
    name: 'Anniversary Cake with Red Hearts & Figurines',
    category: 'cakes',
    description:
      'Elegant cream-colored anniversary cake decorated with red hearts, gold sprinkles, and adorable cartoon couple figurines. Perfect for celebrating love and milestones.',
    price: 750,
    image: '/products/cakes/cake-2.webp',
    images: ['/products/cakes/cake-2.webp'],
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
  },
  {
    id: '3',
    name: 'Rainbow Striped Birthday Cake with Multicolored Rosettes',
    category: 'cakes',
    description:
      'Vibrant multi-colored striped cake featuring rainbow rosettes and a golden "Happy Birthday" topper. A colorful celebration of joy and happiness.',
    price: 1000,
    image: '/products/cakes/cake-3.webp',
    images: ['/products/cakes/cake-3.webp'],
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
  },
  {
    id: '4',
    name: 'White Birthday Cake with Gold Drip & Mustache Theme',
    category: 'cakes',
    description:
      'Fun and stylish white cake featuring gold drip icing, black mustache decoration, and gold sprinkles. Perfect for birthday celebrations with a modern twist.',
    price: 650,
    image: '/products/cakes/cake-4.webp',
    images: ['/products/cakes/cake-4.webp'],
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
  },
  {
    id: '5',
    name: 'Romantic White Cake with Pink Ribbons & Hearts',
    category: 'cakes',
    description:
      'Charming white cake adorned with delicate pink satin ribbons, red heart sprinkles, and elegant ruffled piping. Perfect for romantic occasions and anniversaries.',
    price: 900,
    image: '/products/cakes/cake-5.webp',
    images: ['/products/cakes/cake-5.webp'],
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
  },
  {
    id: '6',
    name: 'White & Pink Birthday Cake with Calendar Theme',
    category: 'cakes',
    description:
      'Charming white and pink birthday cake featuring a unique calendar decoration with highlighted dates, pink ribbon bows, and elegant piping. Perfect for milestone birthdays.',
    price: 60,
    image: '/products/cakes/cake-6.webp',
    images: ['/products/cakes/cake-6.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Pink food coloring',
      'Vanilla extract',
      'Edible calendar print',
    ],
    flavors: ['Vanilla', 'Strawberry'],
    weight: '2 kg',
    featured: true,
  },
  {
    id: '7',
    name: 'Luxury Ombre Birthday Cake with Gold Accents',
    category: 'cakes',
    description:
      'Stunning ombre birthday cake transitioning from white to pink with gold drips, "Happy Birthday Wifey" topper, fresh flowers, macarons, and gold spheres. Includes three matching cupcakes with gold foil wrappers.',
    price: 85,
    image: '/products/cakes/cake-7.webp',
    images: ['/products/cakes/cake-7.webp'],
    ingredients: [
      'Premium white flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Vanilla extract',
      'Pink food coloring',
      'Gold leaf',
      'Fresh flowers',
      'Macarons',
      'Gold spheres',
      'Sugar pearls',
    ],
    flavors: ['Vanilla', 'Strawberry'],
    weight: '2.5 kg',
    featured: true,
  },
  {
    id: '8',
    name: 'Classic Black Forest Birthday Cake',
    category: 'cakes',
    description:
      'Traditional white-frosted cake with rich dark chocolate drizzle, whipped cream swirls, chocolate shavings, and vibrant red cherries. Topped with elegant "Happy Birthday" topper on a white cake stand.',
    price: 70,
    image: '/products/cakes/cake-8.webp',
    images: ['/products/cakes/cake-8.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Dark chocolate',
      'Whipped cream',
      'Red cherries',
      'Vanilla extract',
      'Cocoa powder',
    ],
    flavors: ['Chocolate', 'Cherry'],
    weight: '2.2 kg',
    featured: true,
  },
  {
    id: '9',
    name: 'Layered Jar Cake with Caramel Drizzle',
    category: 'jar-cakes',
    description:
      'Delicious layered dessert in clear plastic cups featuring alternating layers of vanilla cake crumbs and creamy custard, topped with whipped cream, colorful sprinkles, silver pearls, and caramel drizzle.',
    price: 12,
    image: '/products/jar-cake/jar-cake-1.webp',
    images: ['/products/jar-cake/jar-cake-1.webp'],
    ingredients: [
      'Vanilla cake crumbs',
      'Custard cream',
      'Whipped cream',
      'Colorful sprinkles',
      'Silver pearls',
      'Caramel sauce',
      'Sugar',
      'Vanilla extract',
    ],
    flavors: ['Vanilla', 'Caramel'],
    weight: '200g',
    featured: true,
  },
  {
    id: '10',
    name: 'Rainbow Mirror Glaze Birthday Cake',
    category: 'cakes',
    description:
      'Stunning dome-shaped jelly cake with psychedelic marbled mirror glaze in vibrant colors, featuring a gold "Happy Birthday" topper and decorative yellow frosting border. A true showstopper for celebrations.',
    price: 75,
    image: '/products/cakes/cake-9.webp',
    images: ['/products/cakes/cake-9.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Gelatin',
      'Food coloring (multiple colors)',
      'Mirror glaze',
      'Vanilla extract',
      'Gold leaf',
    ],
    flavors: ['Vanilla', 'Rainbow'],
    weight: '2.3 kg',
    featured: true,
  },
  {
    id: '11',
    name: 'Dark Chocolate Truffles with White Drizzle',
    category: 'chocolate-balls',
    description:
      'Rich dark chocolate truffles coated in smooth chocolate and elegantly decorated with white icing drizzle and colorful sprinkles. Each truffle is individually presented in a fluted paper cup for a premium experience.',
    price: 18,
    image: '/products/choco-balls/choco-balls-1.webp',
    images: [
      '/products/choco-balls/choco-balls-1.webp',
      '/products/choco-balls/choco-balls-1.1.webp',
    ],
    ingredients: [
      'Dark chocolate',
      'Cocoa powder',
      'Heavy cream',
      'Butter',
      'White chocolate',
      'Colorful sprinkles',
      'Vanilla extract',
      'Sugar',
    ],
    flavors: ['Dark Chocolate', 'Cocoa'],
    weight: '300g (16 pieces)',
    featured: true,
  },
  {
    id: '12',
    name: 'Pink Cars Theme Birthday Cake with NAKSHIT',
    category: 'cakes',
    description:
      'Delightful pink birthday cake featuring Cars movie characters, colorful balloon decorations, rocking horse, toy car, and personalized "NAKSHIT" name in gold letters. Perfect for kids\' birthday celebrations with a fun automotive theme.',
    price: 55,
    image: '/products/cakes/cake-10.webp',
    images: ['/products/cakes/cake-10.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Pink food coloring',
      'Vanilla extract',
      'Gold letters',
      'Edible Cars character images',
      'Balloon toppers',
      'Silver and gold sprinkles',
    ],
    flavors: ['Vanilla', 'Strawberry'],
    weight: '1.8 kg',
    featured: true,
  },
  {
    id: '13',
    name: 'Two-Tier Pink Rainbow Birthday Cake',
    category: 'cakes',
    description:
      'Stunning two-tier pink birthday cake with gold accents, rainbow decorations, butterfly toppers, and metallic spheres. Features a gold "Happy Birthday" topper and elegant gold leaf details for a luxurious celebration cake.',
    price: 85,
    image: '/products/cakes/cake-11.webp',
    images: ['/products/cakes/cake-11.webp'],
    ingredients: [
      'Premium white flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Pink food coloring',
      'Vanilla extract',
      'Gold leaf',
      'Metallic gold spheres',
      'Butterfly decorations',
      'Rainbow topper',
      'Gold sprinkles',
    ],
    flavors: ['Vanilla', 'Strawberry'],
    weight: '2.5 kg',
    featured: true,
  },
  {
    id: '14',
    name: 'Fresh Fruit Lavender Cake with White Chocolate Drip',
    category: 'cakes',
    description:
      'Beautiful lavender-colored cake topped with fresh diced fruits including grapes, mango, kiwi, and pineapple. Features elegant white chocolate ganache drips and a gold "Happy Birthday" topper for a fresh, fruity celebration.',
    price: 65,
    image: '/products/cakes/cake-12.webp',
    images: ['/products/cakes/cake-12.webp'],
    ingredients: [
      'White flour',
      'Fresh eggs',
      'Butter',
      'Sugar',
      'Lavender food coloring',
      'Vanilla extract',
      'Fresh grapes',
      'Fresh mango',
      'Fresh kiwi',
      'Fresh pineapple',
      'White chocolate',
      'Heavy cream',
    ],
    flavors: ['Vanilla', 'Mixed Fruit'],
    weight: '2 kg',
    featured: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(
  category: Product['category']
): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getRecommendedProducts(
  currentProductId: string,
  limit = 4
): Product[] {
  const currentProduct = getProductById(currentProductId);
  if (!currentProduct) return [];

  // Get products from the same category, excluding the current product
  const sameCategory = products.filter(
    p => p.category === currentProduct.category && p.id !== currentProductId
  );

  // If we don't have enough from the same category, add featured products
  if (sameCategory.length < limit) {
    const featured = getFeaturedProducts().filter(
      p => p.id !== currentProductId && !sameCategory.find(sc => sc.id === p.id)
    );
    return [...sameCategory, ...featured].slice(0, limit);
  }

  return sameCategory.slice(0, limit);
}

export function getAvailableCategories(): { value: string; label: string }[] {
  const categoryMap: Record<string, string> = {
    cakes: 'Cakes',
    biscuits: 'Biscuits',
    muffins: 'Muffins',
    'chocolate-balls': 'Chocolate Balls',
    'jar-cakes': 'Jar Cakes',
    other: 'Other',
  };

  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

  return [
    { value: 'all', label: 'All Products' },
    ...uniqueCategories.map(category => ({
      value: category,
      label:
        categoryMap[category] ||
        category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ];
}
