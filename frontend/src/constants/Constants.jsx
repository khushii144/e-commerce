const SlidesData = [
  {
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Big Billion Days",
    subtitle: "Up to 70% Off on Electronics & Fashion",
    cta: "Shop Now",
    badge: "Limited Time Offer",
    gradient: "from-black/70 to-black/30",
  },
  {
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Summer Collection 2025",
    subtitle: "Fresh arrivals starting at $29",
    cta: "Explore Collection",
    badge: "New Arrivals",
    gradient: "from-black/60 to-black/20",
  },
  {
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Tech Fest",
    subtitle: "Latest gadgets at unbeatable prices",
    cta: "Shop Tech",
    badge: "Big Savings",
    gradient: "from-black/70 to-black/30",
  },
  {
    image:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Winter Clearance",
    subtitle: "Up to 50% off on winter essentials",
    cta: "Grab the Deal",
    badge: "Clearance Sale",
    gradient: "from-black/60 to-black/20",
  },
  {
    image:
      "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Fashion Week",
    subtitle: "Trendy styles for every occasion",
    cta: "Shop Fashion",
    badge: "Trending Now",
    gradient: "from-black/70 to-black/30",
  },
  {
    image:
      "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Accessories Sale",
    subtitle: "Complete your look with premium accessories",
    cta: "Shop Accessories",
    badge: "Limited Stock",
    gradient: "from-black/60 to-black/20",
  },
];

const Products = [
  {
    id: 1,
    name: "Apex Minimalist Watch",
    description: "Elegant silver dial with premium leather strap",
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.5,
    category: "Watches",
    image:
      "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
  },
  {
    id: 2,
    name: "SonicBliss Pro Headphones",
    description: "Noise cancelling with 40hr battery life",
    price: 149,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    category: "Audio",
    image:
      "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
  },
  {
    id: 3,
    name: "Urban Runners Sneakers",
    description: "Breathable mesh, lightweight comfort",
    price: 79,
    originalPrice: 99,
    discount: 20,
    rating: 4.3,
    category: "Footwear",
    image:
      "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
  },
  {
    id: 4,
    name: "Nomad Pro Backpack",
    description: "Waterproof laptop bag with USB charging",
    price: 99,
    originalPrice: 129,
    discount: 23,
    rating: 4.9,
    category: "Bags",
    image:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
  },
  {
    id: 5,
    name: "Smart LED Desk Lamp",
    description: "Adjustable brightness, wireless charging",
    price: 59,
    originalPrice: 89,
    discount: 34,
    rating: 4.6,
    category: "Home",
    image:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
  },
  {
    id: 6,
    name: "Premium Cotton T-Shirt",
    description: "100% organic cotton, breathable fabric",
    price: 29,
    originalPrice: 49,
    discount: 41,
    rating: 4.4,
    category: "Clothing",
    image:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    description: "Fast charging for all Qi-enabled devices",
    price: 39,
    originalPrice: 59,
    discount: 34,
    rating: 4.7,
    category: "Accessories",
    image:
      "https://images.pexels.com/photos/4144581/pexels-photo-4144581.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
  },
  {
    id: 8,
    name: "Minimalist Coffee Maker",
    description: "Brew perfect coffee every morning",
    price: 119,
    originalPrice: 169,
    discount: 30,
    rating: 4.8,
    category: "Kitchen",
    image:
      "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
  },
  {
    id: 9,
    name: "Smart Fitness Band",
    description: "Track your health and fitness goals",
    price: 49,
    originalPrice: 79,
    discount: 38,
    rating: 4.6,
    category: "Electronics",
    image:
      "https://images.pexels.com/photos/1959050/pexels-photo-1959050.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
  },
  {
    id: 10,
    name: "Designer Handbag",
    description: "Elegant design, premium quality material",
    price: 159,
    originalPrice: 229,
    discount: 30,
    rating: 4.7,
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
  },
];

export { SlidesData, Products };
