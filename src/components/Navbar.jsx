import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, LogOut } from 'lucide-react';
import topLogo from "../assets/images/dynasteez-logo.png";
import bottomLogo from "../assets/images/dynasteez-logo-2.png";

const Navbar = ({ onLoginClick, isAuthenticated, user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     {/* 🔝 TOP NAVBAR */}
<nav 
  className={`left-0 right-0 z-40 transition-all duration-300 ${
    isAuthenticated 
      ? 'fixed top-0 text-black'  // ← changed from text-white to text-black
      : 'absolute top-0 text-white'
  }`}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={topLogo} alt="Top Logo" className="h-24 w-auto" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className={`relative flex items-center bg-white rounded-full transition-all duration-300 ${searchFocused ? 'ring-2 ring-gray-400' : ''}`}>
                <div className="pl-4 text-gray-400">
                  <Search className="w-[18px] h-[18px]" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search"
                  className="w-full bg-transparent text-black px-3 py-2 text-sm focus:outline-none rounded-full"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>

            {/* Right side */}
            <div className="relative flex items-center space-x-4 text-xs tracking-wider uppercase">
              <a href="#" className="hover:text-gray-300 transition-colors">About</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Join us</a>
              <span className="text-gray-600">|</span>

              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>HI {user?.firstName?.toUpperCase() || 'USER'}</span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                      <a href="#" className="block px-4 py-2 text-xs hover:bg-gray-100 transition-colors">My Account</a>
                      <a href="#" className="block px-4 py-2 text-xs hover:bg-gray-100 transition-colors">My Orders</a>
                      <a href="#" className="block px-4 py-2 text-xs hover:bg-gray-100 transition-colors">Wishlist</a>
                      <hr className="my-2" />
                      <button 
                        onClick={() => { onLogout(); setShowUserMenu(false); }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-gray-100 transition-colors flex items-center gap-2 text-red-600"
                      >
                        <LogOut className="w-3 h-3" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={onLoginClick} className="hover:text-gray-300 transition-colors">
                  LOG IN
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* 🔽 BOTTOM NAVBAR */}
<nav
  className={`left-0 right-0 z-50 transition-all duration-300 ${
    isAuthenticated 
      ? `fixed ${scrolled ? 'top-0 bg-white shadow-sm text-black' : 'top-16 bg-white/80 text-black'}`  // ← always text-black
      : `fixed ${scrolled ? 'top-0 text-black' : 'top-16 text-black'} bg-[#FFFFFF33]`
  }`}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16"> 
            <div className="flex items-center">
              <img 
                src={bottomLogo} 
                alt="Bottom Logo" 
                className="h-12 w-auto relative -translate-y-1"  
              />
            </div>

            <div className="flex items-center space-x-8 text-xs tracking-widest uppercase">
              <a href="#" className="hover:text-gray-300 transition-colors">New</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Men</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Women</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Kids</a>
            </div>

            <div className="flex items-center space-x-8 w-20 justify-end">
              <button className="hover:text-gray-300 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-300 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;