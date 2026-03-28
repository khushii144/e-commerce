import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="text-3xl">🛍️</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MyShop
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Your trusted shopping destination with the best deals and offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
            <li><Link to="/category" className="hover:text-purple-600">Categories</Link></li>
            <li><Link to="/productdetail" className="hover:text-purple-600">Products</Link></li>
            <li><Link to="/checkout" className="hover:text-purple-600">Checkout</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Customer Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/faq" className="hover:text-purple-600">FAQ</Link></li>
            <li><Link to="/orders" className="hover:text-purple-600">Order Status</Link></li>
            <li><Link to="/contact" className="hover:text-purple-600">Contact Us</Link></li>
            <li><Link to="/refund" className="hover:text-purple-600">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-purple-600"><FiFacebook size={22} /></a>
            <a href="#" className="hover:text-purple-600"><FiInstagram size={22} /></a>
            <a href="#" className="hover:text-purple-600"><FiTwitter size={22} /></a>
            <a href="#" className="hover:text-purple-600"><FiYoutube size={22} /></a>
          </div>
        </div>

      </div>

      <div className="border-t py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} MyShop — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;