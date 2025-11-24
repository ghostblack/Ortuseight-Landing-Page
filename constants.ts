import { NavItem, HeroSectionData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Welcome', href: '#welcome', isActive: true },
  { label: 'Product', href: '#product' },
  { label: 'News', href: '#news' },
  { label: 'About Us', href: '#about' },
];

// Using Unsplash source URLs to match the dark/sporty aesthetic
export const HERO_SECTIONS: HeroSectionData[] = [
  {
    id: 'football',
    title: 'FOOTBALL/FUTSAL',
    // Dark soccer player image
    imageUrl: 'https://i.imgur.com/oCKIAFl.png', 
    link: '#football'
  },
  {
    id: 'lifestyle',
    title: 'LIFESTYLE',
    // Close up of sneakers/urban vibe
    imageUrl: 'https://i.imgur.com/UJeEIwR.png',
    link: '#lifestyle'
  },
  {
    id: 'running',
    title: 'RUNNING',
    // Runner stretching or tying shoes
    imageUrl: 'https://i.imgur.com/FDDXmcA.png',
    link: '#running'
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are "OrtusBot", a helpful shopping assistant for a sports brand called Ortuseight. 
You are an expert in football boots, running shoes, and athleisure wear.
Keep answers short, punchy, and enthusiastic.
If asked about stock, say you need to check the specific inventory but recommend checking the "New Arrivals" section.
The current available categories are: Football, Futsal, Running, and Lifestyle.`;

export interface Product {
  id: string;
  name: string;
  category?: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  color: string;
  image: string;
}

export const NEW_ARRIVALS: Product[] = [
  {
    id: '1',
    name: 'CATALYST LIBERTE X DORAEMON FG',
    price: 'IDR 749,000.00',
    color: 'White Cyan',
    image: 'https://i.imgur.com/AxFXIhV.png', // Placeholder for purple shoe
  },
  {
    id: '2',
    name: 'CATALYST LEGION V5 FG',
    price: 'IDR 629,100.00',
    originalPrice: 'IDR 699,000.00',
    discount: '10%',
    color: 'Off White Gold',
    image: 'https://i.imgur.com/Tch71pV.png', // Placeholder for blue shoe
  },
  {
    id: '3',
    name: 'CATALYST LEGION V5 FG',
    price: 'IDR 629,100.00',
    originalPrice: 'IDR 699,000.00',
    discount: '10%',
    color: 'Off White Gold',
    image: 'https://i.imgur.com/1fWGFDn.png', // Placeholder for pink shoe
  },
  {
    id: '4',
    name: 'CATALYST LIBERTE X DORAEMON FG',
    price: 'IDR 749,000.00',
    color: 'White Cyan',
    image: 'https://i.imgur.com/4r5lz8E.png', // Placeholder for black/pink shoe
  },
  {
    id: '5',
    name: 'HYPERSONIC 1.2 RUNNING',
    price: 'IDR 549,000.00',
    color: 'Neon Green',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/11040169_HYPERSONIC_2_0_-_SAGE_GREEN_CLOUD_BLUEArtboard_1.jpg',
  },
  {
    id: '6',
    name: 'JOGOSALA REVOLT FUTSAL',
    price: 'IDR 499,000.00',
    discount: '15%',
    originalPrice: 'IDR 589,000.00',
    color: 'Black Gum',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'CATALYST CIPHER FG',
    price: 'IDR 899,000.00',
    color: 'Gold Black',
    image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'FORTE HELIOS V3',
    price: 'IDR 679,000.00',
    color: 'Solar Red',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop',
  }
];

export const MOST_POPULAR: Product[] = [
  {
    id: 'p1',
    name: 'JOGOSALA AVALANCHE',
    price: 'IDR 599,000.00',
    color: 'Black Electricity',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/11010715__SPARK_FG_-_WHITE_NAVY_GOLDArtboard_1.jpg',
  },
  {
    id: 'p2',
    name: 'EL TIBURON V2',
    price: 'IDR 649,000.00',
    color: 'White Gold',
    discount: '5%',
    originalPrice: 'IDR 699,000.00',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/DORAEMOONArtboard_1.jpg',
  },
  {
    id: 'p3',
    name: 'HYPERBLAST 2.0',
    price: 'IDR 799,000.00',
    color: 'Shocking Orange',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/11010700_HAVOC_FG_Artboard_1.jpg',
  },
  {
    id: 'p4',
    name: 'INSIGNE IN',
    price: 'IDR 429,000.00',
    color: 'Blue Sky',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/11010667_CATALYST_LEGION_V5_FG_-_OFFWHITE_GOLDArtboard_1.jpg',
  }
];

export const SPECIAL_EDITION: Product[] = [
  {
    id: 's1',
    name: 'CATALYST X MARVEL',
    price: 'IDR 1,299,000.00',
    color: 'Iron Red',
    discount: 'LIMITED',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/11010707_CATALYST_INCOGNITY_V2_FG_SE_SILVER_CYAN_MAGENTAArtboard_1.jpg',
  },
  {
    id: 's2',
    name: 'JOGOSALA LEGEND',
    price: 'IDR 999,000.00',
    color: 'Classic Leather',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/DORAEMON_JERSEYArtboard_1.jpg',
  },
  {
    id: 's3',
    name: 'HYPERSONIC PRO',
    price: 'IDR 1,499,000.00',
    color: 'Carbon Black',
    image: 'https://ortuseightdev.id:8030/assets/dist/productimg/11010663_CATALYST_INCOGNITY_FG_SE_-_WHITE_GOLDArtboard_1.jpg',
  },
  {
    id: 's4',
    name: 'CATALYST GLITCH',
    price: 'IDR 849,000.00',
    color: 'Cyber Punk',
    image: 'https://ortuseightdev.id/image-web-commerce/productimg/11010625_CATALYST_LIBERTE_VIRTUS_FG_SE_Artboard_1.jpg',
  }
];