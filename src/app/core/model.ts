export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}

export interface Product {
  productId: number;
  quantity: number;
}

export interface Details {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  rating: {
    rate: string;
    count: string;
  };
  title: string;
}

export interface CartState {
  cart: Cart[];
  loading: boolean;
  error: string;
}

export interface DetailState   {
  details?: Details | null;
  loading: boolean;
}
