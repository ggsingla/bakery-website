import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Chocolate Cake",
    category: "cakes",
    description:
      "Rich, moist chocolate cake layered with smooth chocolate ganache. A timeless favorite that melts in your mouth.",
    price: 45.0,
    image: "/elegant-chocolate-cake-with-ganache.jpg",
    images: ["/elegant-chocolate-cake-with-ganache.jpg", "/chocolate-cake-slice-closeup.jpg", "/chocolate-cake-top-view.jpg"],
    ingredients: ["Premium cocoa", "Fresh eggs", "Butter", "Sugar", "Flour", "Dark chocolate"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    weight: "1.5 kg",
    featured: true,
  },
  {
    id: "2",
    name: "Vanilla Bean Cake",
    category: "cakes",
    description: "Light and fluffy vanilla cake made with real vanilla beans, topped with silky buttercream frosting.",
    price: 42.0,
    image: "/elegant-vanilla-cake-with-buttercream.jpg",
    images: ["/elegant-vanilla-cake-with-buttercream.jpg", "/vanilla-cake-slice.jpg"],
    ingredients: ["Vanilla beans", "Fresh eggs", "Butter", "Sugar", "Flour"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    weight: "1.5 kg",
    featured: true,
  },
  {
    id: "3",
    name: "Red Velvet Cake",
    category: "cakes",
    description:
      "Luxurious red velvet cake with cream cheese frosting. Perfectly balanced sweetness with a hint of cocoa.",
    price: 48.0,
    image: "/red-velvet-cake.png",
    ingredients: ["Cocoa powder", "Buttermilk", "Cream cheese", "Butter", "Sugar", "Flour"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    weight: "1.5 kg",
    featured: true,
  },
  {
    id: "4",
    name: "Butter Biscuits",
    category: "biscuits",
    description: "Crispy, golden butter biscuits with a delicate crunch. Perfect with your afternoon tea.",
    price: 12.0,
    image: "/artisan-butter-biscuits-cookies.jpg",
    ingredients: ["Butter", "Sugar", "Flour", "Vanilla extract"],
    allergens: ["Dairy", "Gluten"],
    weight: "250g",
    featured: false,
  },
  {
    id: "5",
    name: "Chocolate Chip Biscuits",
    category: "biscuits",
    description: "Classic chocolate chip cookies loaded with premium chocolate chunks. Soft center with crispy edges.",
    price: 14.0,
    image: "/chocolate-chip-cookies-artisan.jpg",
    ingredients: ["Chocolate chips", "Butter", "Brown sugar", "Flour", "Eggs"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    weight: "250g",
    featured: true,
  },
  {
    id: "6",
    name: "Almond Biscotti",
    category: "biscuits",
    description: "Traditional Italian twice-baked biscuits with roasted almonds. Perfect for dipping in coffee.",
    price: 15.0,
    image: "/almond-biscotti-italian-cookies.jpg",
    ingredients: ["Almonds", "Flour", "Sugar", "Eggs", "Butter"],
    allergens: ["Nuts", "Eggs", "Dairy", "Gluten"],
    weight: "200g",
    featured: false,
  },
  {
    id: "7",
    name: "Blueberry Muffins",
    category: "muffins",
    description: "Fluffy muffins bursting with fresh blueberries. Lightly sweetened with a golden top.",
    price: 8.0,
    image: "/blueberry-muffins-bakery-fresh.jpg",
    ingredients: ["Fresh blueberries", "Flour", "Sugar", "Eggs", "Butter", "Milk"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    weight: "120g each",
    featured: true,
  },
  {
    id: "8",
    name: "Chocolate Muffins",
    category: "muffins",
    description: "Double chocolate muffins with a tender crumb and rich chocolate flavor.",
    price: 8.0,
    image: "/chocolate-muffins-bakery.jpg",
    ingredients: ["Cocoa powder", "Chocolate chips", "Flour", "Sugar", "Eggs", "Butter"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    weight: "120g each",
    featured: false,
  },
  {
    id: "9",
    name: "Banana Walnut Muffins",
    category: "muffins",
    description: "Moist banana muffins with crunchy walnuts. Made with ripe bananas for natural sweetness.",
    price: 9.0,
    image: "/banana-walnut-muffins.jpg",
    ingredients: ["Ripe bananas", "Walnuts", "Flour", "Sugar", "Eggs", "Butter"],
    allergens: ["Nuts", "Eggs", "Dairy", "Gluten"],
    weight: "120g each",
    featured: false,
  },
  {
    id: "10",
    name: "Dark Chocolate Truffles",
    category: "chocolate-balls",
    description: "Handcrafted dark chocolate truffles with a smooth ganache center. Pure indulgence.",
    price: 18.0,
    image: "/dark-chocolate-truffles-artisan.jpg",
    ingredients: ["Dark chocolate", "Heavy cream", "Butter", "Cocoa powder"],
    allergens: ["Dairy"],
    weight: "200g (8 pieces)",
    featured: true,
  },
  {
    id: "11",
    name: "Coconut Chocolate Balls",
    category: "chocolate-balls",
    description: "Chocolate balls rolled in shredded coconut. A tropical twist on a classic treat.",
    price: 16.0,
    image: "/coconut-chocolate-balls-truffles.jpg",
    ingredients: ["Milk chocolate", "Coconut", "Condensed milk", "Butter"],
    allergens: ["Dairy"],
    weight: "200g (8 pieces)",
    featured: false,
  },
  {
    id: "12",
    name: "Hazelnut Praline Balls",
    category: "chocolate-balls",
    description: "Luxurious chocolate balls filled with hazelnut praline. Elegantly finished with gold dust.",
    price: 20.0,
    image: "/hazelnut-praline-chocolate-balls.jpg",
    ingredients: ["Hazelnuts", "Milk chocolate", "Sugar", "Butter"],
    allergens: ["Nuts", "Dairy"],
    weight: "200g (8 pieces)",
    featured: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getRecommendedProducts(currentProductId: string, limit = 4): Product[] {
  const currentProduct = getProductById(currentProductId)
  if (!currentProduct) return []

  // Get products from the same category, excluding the current product
  const sameCategory = products.filter((p) => p.category === currentProduct.category && p.id !== currentProductId)

  // If we don't have enough from the same category, add featured products
  if (sameCategory.length < limit) {
    const featured = getFeaturedProducts().filter(
      (p) => p.id !== currentProductId && !sameCategory.find((sc) => sc.id === p.id),
    )
    return [...sameCategory, ...featured].slice(0, limit)
  }

  return sameCategory.slice(0, limit)
}
