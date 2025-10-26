export interface Product {
  id: string;
  name: string;
  category:
    | 'cakes'
    | 'biscuits'
    | 'muffins'
    | 'chocolate-balls'
    | 'jar-cakes'
    | 'other';
  description: string;
  price: number;
  image: string;
  images?: string[];
  ingredients?: string[];
  flavors?: string[];
  weight?: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
