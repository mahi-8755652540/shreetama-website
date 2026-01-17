import productBottle1 from '@/assets/product-bottle-1.jpg';
import productBottle2 from '@/assets/product-bottle-2.jpg';
import productGlassSet from '@/assets/product-glass-set.jpg';
import productPitcher from '@/assets/product-pitcher.jpg';

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  category: 'bottles' | 'glasses' | 'pitchers' | 'sets';
  capacity: string;
  material: string;
  features: string[];
  careInstructions: string[];
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Hammered Copper Bottle',
    slug: 'hammered-copper-bottle',
    price: 1499,
    originalPrice: 1999,
    description: 'Experience the ancient wisdom of Ayurveda with our handcrafted Hammered Copper Bottle. Each bottle is meticulously crafted by skilled artisans, featuring a beautiful hammered texture that not only looks stunning but also increases the surface area for enhanced copper ion release. Store water overnight and wake up to naturally purified, mineral-enriched water that supports your wellness journey.',
    shortDescription: 'Handcrafted hammered copper bottle for pure, Ayurvedic wellness.',
    image: productBottle1,
    category: 'bottles',
    capacity: '1000 ml',
    material: '100% Pure Food-Grade Copper',
    features: [
      '100% Pure Food-Grade Copper',
      'Handcrafted Hammered Finish',
      'Leak-Proof Cap Design',
      'Natural Antibacterial Properties',
      'Ayurvedic Health Benefits',
    ],
    careInstructions: [
      'Rinse with lemon and salt solution weekly',
      'Do not use abrasive cleaners',
      'Store water for 6-8 hours for best results',
      'Avoid storing acidic beverages',
    ],
    inStock: true,
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Matte Copper Bottle',
    slug: 'matte-copper-bottle',
    price: 1299,
    description: 'Modern elegance meets traditional wellness in our Matte Copper Bottle. The sleek, contemporary design features a smooth matte finish that feels premium in your hand. Perfect for the modern lifestyle while delivering all the Ayurvedic benefits of copper-infused water. Take it to the office, gym, or anywhere your wellness journey takes you.',
    shortDescription: 'Sleek modern design with timeless copper benefits.',
    image: productBottle2,
    category: 'bottles',
    capacity: '950 ml',
    material: '100% Pure Food-Grade Copper',
    features: [
      '100% Pure Food-Grade Copper',
      'Elegant Matte Finish',
      'Ergonomic Design',
      'BPA-Free & Non-Toxic',
      'Keeps Water Naturally Cool',
    ],
    careInstructions: [
      'Clean with lemon and salt paste monthly',
      'Hand wash only',
      'Dry thoroughly after cleaning',
      'Natural patina adds character over time',
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: '3',
    name: 'Copper Tumbler Set',
    slug: 'copper-tumbler-set',
    price: 999,
    originalPrice: 1299,
    description: 'Elevate your daily hydration ritual with our exquisite Copper Tumbler Set. This set of three beautifully hammered tumblers brings the ancient Ayurvedic tradition to your dining table. Each glass is crafted from pure copper, designed to naturally enrich your water with essential copper ions. Perfect for serving water to family and guests alike.',
    shortDescription: 'Set of 3 hammered copper tumblers for the whole family.',
    image: productGlassSet,
    category: 'glasses',
    capacity: '300 ml each',
    material: '100% Pure Food-Grade Copper',
    features: [
      'Set of 3 Matching Tumblers',
      'Traditional Hammered Design',
      'Stackable for Easy Storage',
      'Perfect for Daily Use',
      'Great for Gifting',
    ],
    careInstructions: [
      'Clean regularly with tamarind paste',
      'Rinse with warm water',
      'Polish with soft cloth',
      'Store in dry place',
    ],
    inStock: true,
    isBestseller: true,
  },
  {
    id: '4',
    name: 'Traditional Copper Pitcher',
    slug: 'traditional-copper-pitcher',
    price: 2499,
    description: 'Our Traditional Copper Pitcher is a masterpiece of Indian craftsmanship. This elegant jug, with its graceful curves and ornate handles, is perfect for storing and serving copper-charged water to your entire family. The generous capacity and beautiful design make it a stunning centerpiece for your dining table while delivering the health benefits of copper to everyone you love.',
    shortDescription: 'Elegant handcrafted pitcher for family wellness.',
    image: productPitcher,
    category: 'pitchers',
    capacity: '1500 ml',
    material: '100% Pure Food-Grade Copper',
    features: [
      'Large Family-Size Capacity',
      'Ornate Traditional Design',
      'Comfortable Ergonomic Handle',
      'Wide Mouth for Easy Cleaning',
      'Statement Piece for Home',
    ],
    careInstructions: [
      'Clean with natural cleaners only',
      'Avoid dishwasher use',
      'Dry immediately after washing',
      'Polish periodically for shine',
    ],
    inStock: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter((p) => p.category === category);
};
