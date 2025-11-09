export type Category = {
  id: string;
  name: string;
  image: string;
  imageHint: string;
};

export type Product = {
  id: string;
  name:string;
  description: string;
  price: number;
  weight: string;
  images: { url: string; hint: string }[];
  category: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Cancelled';
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
};
