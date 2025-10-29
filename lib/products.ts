import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Ombre Birthday Cake with Gold Accents',
    category: 'cakes',
    description:
      'Stunning ombre birthday cake transitioning from white to pink with gold drips, "Happy Birthday Wifey" topper, fresh flowers, macarons, and gold spheres. Includes three matching cupcakes with gold foil wrappers.',
    price: 1800,
    image: '/products/cakes/cake-7.webp',
    images: ['/products/cakes/cake-7.webp'],
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
    featured: false,
  },

  {
    id: '7',
    name: 'White & Pink Birthday Cake with Calendar Theme',
    category: 'cakes',
    description:
      'Charming white and pink birthday cake featuring a unique calendar decoration with highlighted dates, pink ribbon bows, and elegant piping. Perfect for milestone birthdays.',
    price: 600,
    image: '/products/cakes/cake-6.webp',
    images: ['/products/cakes/cake-6.webp'],
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
  },
  {
    id: '8',
    name: 'Classic Black Forest Birthday Cake',
    category: 'cakes',
    description:
      'Traditional white-frosted cake with rich dark chocolate drizzle, whipped cream swirls, chocolate shavings, and vibrant red cherries. Topped with elegant "Happy Birthday" topper on a white cake stand.',
    price: 700,
    image: '/products/cakes/cake-8.webp',
    images: ['/products/cakes/cake-8.webp'],
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
  },
  {
    id: '9',
    name: 'Layered Jar Cake with Caramel Drizzle',
    category: 'jar-cakes',
    description:
      'Delicious layered dessert in clear plastic cups featuring alternating layers of vanilla cake crumbs and creamy custard, topped with whipped cream, colorful sprinkles, silver pearls, and caramel drizzle.',
    price: 30,
    image: '/products/jar-cake/jar-cake-1.webp',
    images: ['/products/jar-cake/jar-cake-1.webp'],
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
  },
  {
    id: '10',
    name: 'Rainbow Mirror Glaze Birthday Cake',
    category: 'cakes',
    description:
      'Stunning dome-shaped jelly cake with psychedelic marbled mirror glaze in vibrant colors, featuring a gold "Happy Birthday" topper and decorative yellow frosting border. A true showstopper for celebrations.',
    price: 1500,
    image: '/products/cakes/cake-9.webp',
    images: ['/products/cakes/cake-9.webp'],
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
  },
  {
    id: '11',
    name: 'Dark Chocolate Truffles with White Drizzle',
    category: 'chocolate-balls',
    description:
      'Rich dark chocolate truffles coated in smooth chocolate and elegantly decorated with white icing drizzle and colorful sprinkles. Each truffle is individually presented in a fluted paper cup for a premium experience.',
    price: 20,
    image: '/products/choco-balls/choco-balls-1.webp',
    images: [
      '/products/choco-balls/choco-balls-1.webp',
      '/products/choco-balls/choco-balls-1.1.webp',
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
  },
  {
    id: '12',
    name: 'Pink Cars Theme Birthday Cake with NAKSHIT',
    category: 'cakes',
    description:
      'Delightful pink birthday cake featuring Cars movie characters, colorful balloon decorations, rocking horse, toy car, and personalized "NAKSHIT" name in gold letters. Perfect for kids\' birthday celebrations with a fun automotive theme.',
    price: 2000,
    image: '/products/cakes/cake-10.webp',
    images: ['/products/cakes/cake-10.webp'],
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
  },
  {
    id: '13',
    name: 'Two-Tier Pink Rainbow Birthday Cake',
    category: 'cakes',
    description:
      'Stunning two-tier pink birthday cake with gold accents, rainbow decorations, butterfly toppers, and metallic spheres. Features a gold "Happy Birthday" topper and elegant gold leaf details for a luxurious celebration cake.',
    price: 2700,
    image: '/products/cakes/cake-11.webp',
    images: ['/products/cakes/cake-11.webp'],
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
  },
  {
    id: '14',
    name: 'Fresh Fruit Lavender Cake with White Chocolate Drip',
    category: 'cakes',
    description:
      'Beautiful lavender-colored cake topped with fresh diced fruits including grapes, mango, kiwi, and pineapple. Features elegant white chocolate ganache drips and a gold "Happy Birthday" topper for a fresh, fruity celebration.',
    price: 850,
    image: '/products/cakes/cake-12.webp',
    images: ['/products/cakes/cake-12.webp'],
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
