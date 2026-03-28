import React, { useState } from "react";

const Category = () => {
  const [sortType, setSortType] = useState("popular");

  // Fake Products (backend connect karoge to API se aayega)
  const products = [
    {
      id: 1,
      title: "Casual Men's T-Shirt",
      price: 499,
      oldPrice: 899,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      rating: 4.3,
    },
    {
      id: 2,
      title: "Slim Fit Jeans",
      price: 999,
      oldPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1530840211317-3d82f6d8b9e3?w=500",
      rating: 4.1,
    },
    {
      id: 3,
      title: "Men's Hoodie",
      price: 1299,
      oldPrice: 1999,
      image:
        "https://images.unsplash.com/photo-1598032895398-5fbb7f21c47b?w=500",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Category Banner */}
      <div className="w-full h-44 rounded-xl overflow-hidden mb-6">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category Title */}
      <h2 className="text-2xl font-semibold mb-4">Men's Fashion</h2>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-3">Filters</h3>

          {/* Price */}
          <div>
            <h4 className="font-medium mb-2">Price</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><input type="checkbox" /> Under ₹500</p>
              <p><input type="checkbox" /> ₹500 - ₹1000</p>
              <p><input type="checkbox" /> ₹1000 - ₹2000</p>
            </div>
          </div>

          {/* Brand */}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Brand</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><input type="checkbox" /> Nike</p>
              <p><input type="checkbox" /> Adidas</p>
              <p><input type="checkbox" /> Roadster</p>
            </div>
          </div>

          {/* Ratings */}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Ratings</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p><input type="checkbox" /> 4★ & above</p>
              <p><input type="checkbox" /> 3★ & above</p>
            </div>
          </div>
        </div>

        {/* Products Section */}

        
        <div className="md:col-span-3">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-4">
            <select
              className="p-2 border rounded-lg"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="popular">Sort: Popular</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h4 className="text-sm font-medium">{item.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-lg font-semibold">₹{item.price}</p>
                  <p className="text-gray-400 line-through text-sm">
                    ₹{item.oldPrice}
                  </p>
                </div>
                <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>

                <button className="w-full mt-2 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;