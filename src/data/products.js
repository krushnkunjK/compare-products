import { Smartphone, Laptop, Headphones } from "lucide-react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "smartphone",
    icon: <Smartphone />,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    price: "$999",
    features: ["A17 Pro Chip", "48MP Camera", "Titanium Design"],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    category: "smartphone",
    icon: <Smartphone />,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    price: "$799",
    features: ["Snapdragon 8 Gen 3", "50MP Camera", "AI Features"],
  },
  {
    id: 3,
    name: "MacBook Pro 16",
    brand: "Apple",
    category: "laptop",
    icon: <Laptop />,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    price: "$2499",
    features: ["M3 Max Chip", "Liquid Retina Display", "22hr Battery"],
  },
  {
    id: 4,
    name: "Dell XPS 13",
    brand: "Dell",
    category: "laptop",
    icon: <Laptop />,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    price: "$1299",
    features: ["Intel i7-13700H", "4K OLED Display", "Premium Build"],
  },
  {
    id: 5,
    name: "AirPods Pro",
    brand: "Apple",
    category: "headphones",
    icon: <Headphones />,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    price: "$249",
    features: ["Active Noise Cancellation", "Spatial Audio", "MagSafe Case"],
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "headphones",
    icon: <Headphones />,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    price: "$399",
    features: ["Industry-leading ANC", "30-hour Battery", "Touch Controls"],
  },
  {
    id: 7,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "smartphone",
    icon: <Smartphone />,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    price: "$899",
    features: ["Google Tensor G3", "Magic Eraser", "7 Years Updates"],
  },
  {
    id: 8,
    name: "Surface Laptop 5",
    brand: "Microsoft",
    category: "laptop",
    icon: <Laptop />,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    price: "$1299",
    features: ["12th Gen Intel", "PixelSense Display", "All-day Battery"],
  },
];

export default products;
