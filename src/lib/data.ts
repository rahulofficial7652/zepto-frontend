import type { Category, Product, Order } from './types';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    return { url: 'https://picsum.photos/seed/placeholder/600/400', hint: 'placeholder' };
  }
  return { url: image.imageUrl, hint: image.imageHint };
}

export const categories: Category[] = [
  { id: 'vegetables', name: 'Vegetables', image: findImage('cat-veg').url, imageHint: findImage('cat-veg').hint },
  { id: 'fruits', name: 'Fruits', image: findImage('cat-fruit').url, imageHint: findImage('cat-fruit').hint },
  { id: 'dairy-breakfast', name: 'Dairy & Breakfast', image: findImage('cat-dairy').url, imageHint: findImage('cat-dairy').hint },
  { id: 'munchies', name: 'Munchies', image: findImage('cat-munchies').url, imageHint: findImage('cat-munchies').hint },
  { id: 'cold-drinks-juices', name: 'Cold Drinks & Juices', image: findImage('cat-drinks').url, imageHint: findImage('cat-drinks').hint },
  { id: 'instant-frozen-food', name: 'Instant & Frozen', image: findImage('cat-frozen').url, imageHint: findImage('cat-frozen').hint },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Onion',
    description: 'Fresh, high-quality onions, perfect for cooking a variety of dishes. A staple in every kitchen.',
    price: 0.99,
    weight: '1kg',
    images: [findImage('prod-onion-1')],
    category: 'vegetables',
  },
  {
    id: '2',
    name: 'Potato',
    description: 'Versatile potatoes, great for frying, boiling, or baking. Sourced from the best farms.',
    price: 1.29,
    weight: '1kg',
    images: [findImage('prod-potato-1')],
    category: 'vegetables',
  },
  {
    id: '3',
    name: 'Tomato',
    description: 'Juicy and ripe tomatoes, ideal for salads, sauces, and sandwiches. Bursting with flavor.',
    price: 2.49,
    weight: '500g',
    images: [findImage('prod-tomato-1')],
    category: 'vegetables',
  },
  {
    id: '4',
    name: 'Carrot',
    description: 'Sweet and crunchy carrots, packed with vitamins. Enjoy them raw or cooked.',
    price: 1.99,
    weight: '500g',
    images: [findImage('prod-carrot-1')],
    category: 'vegetables',
  },
  {
    id: '5',
    name: 'Red Apple',
    description: 'Crisp and sweet red apples, a healthy and delicious snack for any time of the day.',
    price: 2.99,
    weight: '1kg',
    images: [findImage('prod-apple-1')],
    category: 'fruits',
  },
  {
    id: '6',
    name: 'Banana',
    description: 'Naturally sweet and rich in potassium, bananas are a perfect energy booster.',
    price: 1.79,
    weight: '1 dozen',
    images: [findImage('prod-banana-1')],
    category: 'fruits',
  },
  {
    id: '7',
    name: 'Green Grapes',
    description: 'Seedless green grapes, juicy and refreshing. A great addition to your fruit bowl.',
    price: 3.99,
    weight: '500g',
    images: [findImage('prod-grapes-1')],
    category: 'fruits',
  },
  {
    id: '8',
    name: 'Fresh Milk',
    description: 'Pasteurized and homogenized fresh milk, perfect for your morning cereal or coffee.',
    price: 1.50,
    weight: '1L',
    images: [findImage('prod-milk-1')],
    category: 'dairy-breakfast',
  },
  {
    id: '9',
    name: 'Sliced Bread',
    description: 'Soft and fresh sliced white bread, ideal for sandwiches and toast.',
    price: 2.20,
    weight: '400g',
    images: [findImage('prod-bread-1')],
    category: 'dairy-breakfast',
  },
  {
    id: '10',
    name: 'Salted Butter',
    description: 'Creamy and delicious salted butter, perfect for spreading on toast or for baking.',
    price: 3.50,
    weight: '200g',
    images: [findImage('prod-butter-1')],
    category: 'dairy-breakfast',
  },
  {
    id: '11',
    name: "Lay's Classic",
    description: 'The classic taste of perfectly crispy and salted potato chips. An all-time favorite snack.',
    price: 1.00,
    weight: '50g',
    images: [findImage('prod-lays-1')],
    category: 'munchies',
  },
  {
    id: '12',
    name: 'Coca-Cola Can',
    description: 'The refreshing taste of Coca-Cola in a convenient can. Best served chilled.',
    price: 0.80,
    weight: '330ml',
    images: [findImage('prod-coke-1')],
    category: 'cold-drinks-juices',
  },
  {
    id: '13',
    name: 'Frozen Green Peas',
    description: 'High-quality green peas, frozen at the peak of freshness. Easy to cook and nutritious.',
    price: 2.99,
    weight: '500g',
    images: [findImage('prod-peas-1')],
    category: 'instant-frozen-food',
  },
];

export const orders: Order[] = [
    {
        id: 'ORD-12345',
        date: '2023-10-26',
        total: 45.89,
        status: 'Delivered',
        items: [
            { name: 'Red Apple', quantity: 2, price: 2.99 },
            { name: 'Fresh Milk', quantity: 1, price: 1.50 },
        ]
    },
    {
        id: 'ORD-12346',
        date: '2023-10-28',
        total: 12.75,
        status: 'Processing',
        items: [
            { name: 'Sliced Bread', quantity: 1, price: 2.20 },
            { name: 'Coca-Cola Can', quantity: 6, price: 0.80 },
        ]
    },
    {
        id: 'ORD-12347',
        date: '2023-10-29',
        total: 8.49,
        status: 'Cancelled',
        items: [
            { name: 'Onion', quantity: 1, price: 0.99 },
            { name: 'Potato', quantity: 2, price: 1.29 },
        ]
    },
];
