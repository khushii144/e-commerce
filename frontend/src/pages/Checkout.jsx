import React, { useState } from "react";

const Checkout = () => {
  const [payment, setPayment] = useState("");

  const cart = [
    {
      id: 1,
      title: "Casual Regular Fit Shirt",
      price: 699,
      qty: 1,
      image: "/images/p1.webp",
    },
    {
      id: 2,
      title: "Running Sports Shoes",
      price: 1199,
      qty: 1,
      image: "/images/s1.webp",
    },
  ];

  const subtotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SECTION — ADDRESS + PAYMENT */}
        <div className="md:col-span-2 space-y-8">

          {/* DELIVERY ADDRESS */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>

            <div className="space-y-3">
              <input className="w-full p-3 border rounded" type="text" placeholder="Full Name" />
              <input className="w-full p-3 border rounded" type="text" placeholder="Phone Number" />
              <input className="w-full p-3 border rounded" type="text" placeholder="Pincode" />
              <input className="w-full p-3 border rounded" type="text" placeholder="City" />
              <textarea className="w-full p-3 border rounded" rows="3" placeholder="House No, Area, Locality"></textarea>
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" onChange={() => setPayment("COD")} />
                Cash On Delivery (COD)
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" onChange={() => setPayment("UPI")} />
                UPI / Google Pay / PhonePe
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" onChange={() => setPayment("CARD")} />
                Debit / Credit Card
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — ORDER SUMMARY */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow sticky top-10">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt="" className="w-20 h-20 object-cover rounded border" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-600">Qty: {item.qty}</p>
                    <p className="font-semibold">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            {/* Price Details */}
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500">
              Place Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;