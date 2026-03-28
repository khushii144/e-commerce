import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Star,
  Search,
  Store,
  Gem,
  ArrowRight,
  Smartphone,
  Shirt,
  Home,
  Smile,
  Bike,
  BookOpen,
  Sofa,
  Watch,
  Headphones,
  Gift,
  Truck,
  CreditCard,
  RotateCcw,
  Shield,
  Sparkles,
  Flame,
  Clock,
  Percent,
  TrendingUp,
} from "lucide-react";
import { Products, SlidesData } from "../constants/Constants";

// ==================== HELPER FUNCTIONS ====================
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// ==================== PRODUCT CARD COMPONENT ====================
const ProductCard = ({ product, onAddToCart, onLike, variant = "default" }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(product.id);
  };

  const cardStyles = {
    default:
      "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
    compact:
      "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
  };

  return (
    <div
      className={cardStyles[variant]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg">
            -{product.discount}%
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg">
            NEW
          </div>
        )}

        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button className="bg-white text-gray-900 px-5 py-2 rounded-full font-medium text-sm hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105 shadow-lg">
            Quick View
          </button>
        </div>

        <button
          onClick={handleLike}
          className={`absolute bottom-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
            isLiked
              ? "bg-red-500 text-white"
              : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white"
          }`}
          aria-label="Like product"
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 text-sm mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart?.(product)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl font-medium text-xs transition-all flex items-center gap-1.5 shadow-md"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== PRODUCT SLIDER COMPONENT ====================
const ProductSlider = ({
  title,
  subtitle,
  icon: Icon,
  products,
  onAddToCart,
  onLike,
  bgColor = "bg-white",
}) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => scrollElement.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <div className={`${bgColor} rounded-2xl p-6 md:p-8`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-indigo-600" />}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <button className="text-indigo-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-5 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[260px] w-[260px]">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onLike={onLike}
                variant="compact"
              />
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// ==================== CATEGORY SHORTCUT COMPONENT ====================
const CategoryShortcut = ({ icon: Icon, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 min-w-[70px] group"
    >
      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
      </div>
      <span className="text-xs font-medium text-gray-700 group-hover:text-indigo-600">
        {name}
      </span>
    </button>
  );
};

// ==================== FEATURED CATEGORY CARD ====================
const FeaturedCategoryCard = ({
  image,
  title,
  itemCount,
  gradient,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden h-48 cursor-pointer group"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`}></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm opacity-90">{itemCount}+ items</p>
      </div>
    </div>
  );
};

// ==================== OFFER BANNER ====================
const OfferBanner = ({ icon: Icon, title, description, color }) => {
  return (
    <div
      className={`${color} rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer`}
    >
      <Icon className="w-8 h-8 mx-auto mb-2 text-white" />
      <h3 className="font-bold text-white text-sm">{title}</h3>
      <p className="text-white/80 text-xs mt-1">{description}</p>
    </div>
  );
};

// ==================== HERO SLIDER COMPONENT ====================
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SlidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SlidesData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + SlidesData.length) % SlidesData.length);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[360px] md:h-[420px] group">
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          backgroundImage: `url(${SlidesData[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${SlidesData[currentSlide].gradient}`}
        ></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-slideIn">
              <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold mb-3">
                {SlidesData[currentSlide].badge}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                {SlidesData[currentSlide].title}
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6">
                {SlidesData[currentSlide].subtitle}
              </p>
              <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                {SlidesData[currentSlide].cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {SlidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn { animation: slideIn 0.6s ease-out; }
      `}</style>
    </div>
  );
};

// ==================== MAIN HOME COMPONENT ====================
const Mainscreen = () => {
  // Product Data
  const [products] = useState(Products);

  const categoryShortcuts = [
    { icon: Shirt, name: "Men" },
    { icon: Smile, name: "Women" },
    { icon: Bike, name: "Kids" },
    { icon: Smartphone, name: "Electronics" },
    { icon: Sofa, name: "Home" },
    { icon: Watch, name: "Watches" },
    { icon: Headphones, name: "Audio" },
    { icon: Gift, name: "Gifts" },
  ];

  const featuredCategories = [
    {
      image:
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Trending Fashion",
      itemCount: 234,
      gradient: "from-black/70 to-black/30",
    },
    {
      image:
        "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Best of Electronics",
      itemCount: 156,
      gradient: "from-black/70 to-black/30",
    },
    {
      image:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Home Decor",
      itemCount: 189,
      gradient: "from-black/70 to-black/30",
    },
    {
      image:
        "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Winter Collection",
      itemCount: 112,
      gradient: "from-black/70 to-black/30",
    },
  ];

  const offers = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders $50+",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      icon: CreditCard,
      title: "COD Available",
      description: "Pay at delivery",
      color: "bg-gradient-to-r from-green-500 to-green-600",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30 days return",
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
  ];

  const handleAddToCart = (product) => console.log("Added:", product);
  const handleLike = (id) => console.log("Liked:", id);

  const topDeals = products.filter((p) => p.discount >= 25);
  const bestSellers = products.slice(0, 6);
  const beautyProducts = products.filter(
    (p) => p.category === "Fashion" || p.category === "Watches",
  );
  const kidsProducts = products.slice(2, 8);
  const electronics = products.filter(
    (p) => p.category === "Electronics" || p.category === "Audio",
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="w-7 h-7 text-indigo-600" />
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              UrbanNest
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm"
            >
              Deals
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm"
            >
              What's New
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm"
            >
              Help
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-500 hover:text-indigo-600 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-6">
        {/* 1. Hero Slider */}
        <section className="mb-8">
          <HeroSlider />
        </section>

        {/* 2. Category Shortcuts */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              Shop by Category
            </h2>
            <button className="text-indigo-600 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="flex justify-between overflow-x-auto gap-4 pb-2">
            {categoryShortcuts.map((cat, idx) => (
              <CategoryShortcut key={idx} {...cat} />
            ))}
          </div>
        </section>

        {/* 3. Featured Categories */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              Featured Collections
            </h2>
            <button className="text-indigo-600 text-sm font-medium">
              Explore All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {featuredCategories.map((cat, idx) => (
              <FeaturedCategoryCard key={idx} {...cat} />
            ))}
          </div>
        </section>

        {/* 4. Top Deals Slider */}
        <section className="mb-8">
          <ProductSlider
            title="Top Deals of the Day"
            subtitle="Limited time offers"
            icon={Flame}
            products={topDeals}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            bgColor="bg-white"
          />
        </section>

        {/* 5. Offers Banner Row */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {offers.map((offer, idx) => (
              <OfferBanner key={idx} {...offer} />
            ))}
          </div>
        </section>

        {/* 6. Best Sellers Slider */}
        <section className="mb-8">
          <ProductSlider
            title="Best Sellers"
            subtitle="Most popular this week"
            icon={TrendingUp}
            products={bestSellers}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            bgColor="bg-gradient-to-r from-amber-50 to-orange-50"
          />
        </section>

        {/* 7. Popular Products Grid */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Popular Products
              </h2>
              <p className="text-gray-500 text-xs">
                Trending items you'll love
              </p>
            </div>
            <button className="text-indigo-600 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onLike={handleLike}
                variant="compact"
              />
            ))}
          </div>
        </section>

        {/* 8. Beauty & Personal Care Slider */}
        <section className="mb-8">
          <ProductSlider
            title="Beauty & Personal Care"
            subtitle="Pamper yourself with premium products"
            icon={Sparkles}
            products={beautyProducts}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            bgColor="bg-gradient-to-r from-pink-50 to-rose-50"
          />
        </section>

        {/* 9. Kids Collection Slider */}
        <section className="mb-8">
          <ProductSlider
            title="Kids Collection"
            subtitle="Fun & comfortable for little ones"
            icon={Bike}
            products={kidsProducts}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            bgColor="bg-gradient-to-r from-cyan-50 to-blue-50"
          />
        </section>

        {/* 10. Mobiles & Gadgets Slider */}
        <section className="mb-8">
          <ProductSlider
            title="Mobiles & Gadgets"
            subtitle="Latest tech at best prices"
            icon={Smartphone}
            products={electronics}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            bgColor="bg-gradient-to-r from-indigo-50 to-purple-50"
          />
        </section>

        {/* 11. Recommended For You */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Recommended For You
              </h2>
              <p className="text-gray-500 text-xs">Personalized just for you</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.slice(2, 10).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onLike={handleLike}
                variant="compact"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mainscreen;
