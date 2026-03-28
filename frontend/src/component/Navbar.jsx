  import { Link } from "react-router-dom";
  import { useState } from "react";
  import useUserStore from "../../store/userStore";
  import {
    FiSearch,
    FiHeart,
    FiUser,
    FiShoppingCart,
    FiMenu,
    FiX,
    FiLogIn,
    FiUserPlus,
  } from "react-icons/fi";

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartCount, setCartCount] = useState(3); // Example cart count
    const [wishlistCount, setWishlistCount] = useState(2); // Example wishlist count
    const [isLoggedIn, setIsLoggedIn] = useState(
      !!localStorage.getItem("authToken"),
    );

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      if (isSearchOpen) setIsSearchOpen(false);
    };

    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
    };
    const { user, logout } = useUserStore();  

    return (
      <>
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl">🛍️</div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MyShop
                </span>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/category"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  Categories
                </Link>
                <Link
                  to="/productdetail"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  Product
                </Link>
                <Link
                  to="/checkout"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  Checkout
                </Link>
              </div>

              {/* Desktop Icons */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Search Button */}
                <button
                  onClick={toggleSearch}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  <FiSearch className="w-5 h-5" />
                </button>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  className="relative text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  <FiHeart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="relative text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* User Menu */}
                {user ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                      <FiUser className="w-5 h-5" />
                      <span className="text-sm">{user?.name}</span>
                    </button>

                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <Link to="/profile" className="block px-4 py-2">
                        My Profile
                      </Link>
                      <Link to="/orders" className="block px-4 py-2">
                        My Orders
                      </Link>

                      <button
                        onClick={() => {
                          logout();
                          localStorage.removeItem("authToken");
                        }}
                        className="block w-full text-left px-4 py-2"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/login"
                      className="flex items-center space-x-1 text-gray-600 hover:text-purple-600"
                    >
                      <FiLogIn className="w-4 h-4" />
                      <span className="text-sm">Login</span>
                    </Link>

                    <Link
                      to="/register"
                      className="flex items-center space-x-1 bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700"
                    >
                      <FiUserPlus className="w-4 h-4" />
                      <span className="text-sm">Sign Up</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                {/* Mobile Cart Icon */}
                <Link to="/cart" className="relative text-gray-600">
                  <FiShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <button
                  onClick={toggleMenu}
                  className="text-gray-600 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <FiX className="w-6 h-6" />
                  ) : (
                    <FiMenu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
              <div className="md:hidden pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 pl-10"
                  />
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-1">
                <Link
                  to="/"
                  className="block py-2 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/category"
                  className="block py-2 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  to="/deals"
                  className="block py-2 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Deals
                </Link>
                <Link
                  to="/new-arrivals"
                  className="block py-2 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Arrivals
                </Link>

                <div className="border-t my-2"></div>

                {/* Mobile Search */}
                <button
                  onClick={() => {
                    toggleSearch();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 py-2 text-gray-700 w-full"
                >
                  <FiSearch className="w-5 h-5" />
                  <span>Search</span>
                </button>

                {/* Mobile Wishlist */}
                <Link
                  to="/wishlist"
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <FiHeart className="w-5 h-5" />
                    <span>Wishlist</span>
                  </div>
                  {wishlistCount > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                {/* Mobile User Section */}
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FiUser className="w-5 h-5" />
                     <span className="text-sm">{user?.name}</span>
                    </Link>

                    <Link
                      to="/orders"
                      className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>My Orders</span>
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        localStorage.removeItem("authToken");
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 text-gray-700 hover:text-purple-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="space-y-2 pt-2">
                    <Link
                      to="/login"
                      className="block text-center py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="block text-center py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Desktop Search Bar (Hidden by default) */}
        {isSearchOpen && (
          <div className="hidden md:block bg-white shadow-md sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 pl-12"
                />
                <FiSearch className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <button className="absolute right-3 top-2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  export default Navbar;
