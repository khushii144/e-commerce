import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const product = {
    title: "Men's Regular Fit Casual Shirt",
    price: 699,
    oldPrice: 1299,
    discount: 46,
    rating: 4.3,
    reviews: 320,
    description:
      "This comfortable cotton casual shirt is perfect for everyday wear.",
    images: [
      "/images/p1.webp",
      "/images/p2.webp",
      "/images/p3.webp",
      "/images/p4.webp",
    ],
  };

  return (
    <div className="w-full min-h-screen p-6 md:p-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-lg shadow-lg">

        {/* LEFT: Product Images */}
        <div className="flex flex-col gap-4">
          <img
            src={product.images[0]}
            alt="Main"
            className="w-full h-[380px] object-cover rounded-xl border"
          />

          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className="w-20 h-20 object-cover rounded-lg border cursor-pointer hover:scale-105 duration-200"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600">{product.rating} ({product.reviews} reviews)</p>
          </div>

          {/* Price */}
          <div className="mt-4">
            <p className="text-3xl font-bold text-green-600">₹{product.price}</p>
            <p className="text-gray-500 line-through">₹{product.oldPrice}</p>
            <p className="text-red-600 font-semibold">{product.discount}% OFF</p>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-700">{product.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;