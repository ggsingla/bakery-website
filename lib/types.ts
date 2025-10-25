export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'biscuits' | 'muffins' | 'chocolate-balls' | 'other';
  description: string;
  price: number;
  image: string;
  images?: string[];
  ingredients?: string[];
  allergens?: string[];
  weight?: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
