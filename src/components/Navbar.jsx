import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/images/tancafe-logo.png';
import { 
  FaBars, 
  FaTimes, 
  FaFilePdf, 
  FaChevronDown, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaShoppingCart,
  FaHome,
  FaInfoCircle,
  FaUtensils,
  FaHamburger,
  FaCoffee,
  FaBirthdayCake,
  FaTag,
  FaImages,
  FaVideo,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../assets/context/CartContext';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { totalItems } = useContext(CartContext);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsSubMenuOpen(false);
  };

  useEffect(() => {
    const handleCartUpdate = () => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      const count = Object.values(cartData).reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );
      setCartCount(count);
    };

    handleCartUpdate();
    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    setCartCount(totalItems);
  }, [totalItems]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
   <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <FaBars className="text-2xl text-[#712d24]" />
        </button>

        {/* Logo */}
       <div className="md:flex-1 flex justify-center md:justify-start">

          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="TanCafe Logo" 
              className="h-10 md:h-14 transition-transform hover:scale-105 duration-200" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium text-gray-800">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center rounded-md py-2 px-1 hover:text-[#712d24] transition-colors ${
                    isActive ? 'text-[#712d24] border-b-2 border-[#712d24]' : ''
                  }`
                }
              >
                <FaHome className="mr-2" />
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"  state={{ scrollToMenu: true }}
                className={({ isActive }) => 
                  `flex items-center rounded-md py-2 px-1 hover:text-[#712d24] transition-colors ${
                    isActive ? 'text-[#712d24] border-b-2 border-[#712d24]' : ''
                  }`
                }
              >
                <FaInfoCircle className="mr-2" />
                ABOUT
              </NavLink>
            </li>
            
            {/* Desktop Dropdown */}
            <li className="relative group">
              <button className="flex items-center py-2 px-1 hover:text-[#712d24] transition-colors">
                <FaUtensils className="mr-2" />
                OUR MENUS
                <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
              </button>
              <ul className="absolute hidden group-hover:block left-0  w-48 bg-white shadow-lg rounded-md border border-gray-100 z-10">
                <li>
                  <Link 
                    to="/foods"  state={{ scrollToMenu: true }}
                    className="flex items-center px-4 py-4 hover:bg-amber-50 text-gray-700"
                  >
                    <FaHamburger className="mr-3 text-[#712d24]" />
                    FOODS
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/drinks"  state={{ scrollToMenu: true }}
                    className="flex items-center px-4 py-3 hover:bg-amber-50 text-gray-700"
                  >
                    <FaCoffee className="mr-3 text-[#712d24]" />
                    DRINKS
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cakes"  state={{ scrollToMenu: true }}
                    className="flex items-center px-4 py-3 hover:bg-amber-50 text-gray-700"
                  >
                    <FaBirthdayCake className="mr-3 text-[#712d24]" />
                    CAKES
                  </Link>
                </li>
              </ul>
            </li>

            {[
              { path: "/special-offers", name: "OFFERS", icon: FaTag },
              { path: "/gallery", name: "GALLERY", icon: FaImages },
              { path: "/videos", name: "VIDEOS", icon: FaVideo },
              { path: "/contact", name: "CONTACT", icon: FaEnvelope },
            ].map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path}  state={{ scrollToMenu: true }}
                  className={({ isActive }) => 
                    `flex items-center py-2 px-1 hover:text-[#712d24] transition-colors ${
                      isActive ? 'text-[#712d24] rounded-md border-b-2 border-[#712d24]' : ''
                    }`
                  }
                >
                  <item.icon className="mr-2" />
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li>
              <Link 
                to="/menu-pdf"  state={{ scrollToMenu: true }}
                className="flex items-center py-2 px-1 text-red-600 hover:text-red-700 transition-colors"
              >
                <FaFilePdf className="mr-2" />
                MENU PDF
              </Link>
            </li>
          </ul>

          {/* Cart Icon - Desktop */}
          <NavLink 
            to="/cart" 
            className="relative p-2 group"
            aria-label="Cart"
          >
            <FaShoppingCart className="text-2xl text-[#712d24] group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Cart Icon */}
        <NavLink 
          to="/cart" 
          className="md:hidden relative p-2"
          onClick={closeDrawer}
          aria-label="Cart"
        >
          <FaShoppingCart className="text-2xl text-[#712d24]" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>

        {/* Info Button - Mobile */}
        <button 
          onClick={() => setIsRightDrawerOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="About info"
        >
          <FaBars className="text-2xl text-[#712d24]" />
        </button>
      </div>

      {/* Mobile Left Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-[#f8f4ee]">
          <button 
            onClick={closeDrawer}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl text-[#712d24]" />
          </button>
          <img src={logo} alt="TanCafe Logo" className="h-8" />
          <div className="w-6"></div>
        </div>

        {/* Drawer Menu Items */}
        <ul className="py-4">
          <li className="group">
            <Link 
              to="/" 
              onClick={closeDrawer}
              className="flex items-center py-4 px-6 text-gray-800 hover:text-[#712d24] hover:bg-amber-50 transition-colors"
            >
              <FaHome className="mr-4 text-[#712d24] opacity-70 group-hover:opacity-100" />
              <span className="font-medium">HOME</span>
            </Link>
          </li>

          <li className="group">
            <Link 
              to="/about"  state={{ scrollToMenu: true }}
              onClick={closeDrawer}
              className="flex items-center py-4 px-6 text-gray-800 hover:text-[#712d24] hover:bg-amber-50 transition-colors"
            >
              <FaInfoCircle className="mr-4 text-[#712d24] opacity-70 group-hover:opacity-100" />
              <span className="font-medium">ABOUT US</span>
            </Link>
          </li>

          {/* Mobile Dropdown */}
          <li className="group">
            <div
              className="flex items-center justify-between py-4 px-6 text-gray-800 hover:text-[#712d24] hover:bg-amber-50 cursor-pointer transition-colors"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
              <div className="flex items-center">
                <FaUtensils className="mr-4 text-[#712d24] opacity-70 group-hover:opacity-100" />
                <span className="font-medium">OUR MENUS</span>
              </div>
              <FaChevronDown 
                className={`text-sm text-gray-500 transition-transform ${
                  isSubMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            
            {/* Submenu */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isSubMenuOpen ? 'max-h-40' : 'max-h-0'
            }`}>
              <ul className="ml-14 py-2 space-y-2">
                <li>
                  <Link 
                    to="/foods" 
                    onClick={closeDrawer}  state={{ scrollToMenu: true }}
                    className="flex items-center py-2 px-4 text-gray-600 hover:text-[#712d24] hover:bg-amber-50 rounded transition-colors"
                  >
                    <FaHamburger className="mr-3 text-[#712d24]" />
                    <span>FOODS</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/drinks" 
                    onClick={closeDrawer}  state={{ scrollToMenu: true }}
                    className="flex items-center py-2 px-4 text-gray-600 hover:text-[#712d24] hover:bg-amber-50 rounded transition-colors"
                  >
                    <FaCoffee className="mr-3 text-[#712d24]" />
                    <span>DRINKS</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cakes" 
                    onClick={closeDrawer}  state={{ scrollToMenu: true }}
                    className="flex items-center py-2 px-4 text-gray-600 hover:text-[#712d24] hover:bg-amber-50 rounded transition-colors"
                  >
                    <FaBirthdayCake className="mr-3 text-[#712d24]" />
                    <span>CAKES</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {[
            { path: "/special-offers", name: "SPECIAL OFFERS", icon: FaTag },
            { path: "/gallery", name: "GALLERY", icon: FaImages },
            { path: "/videos", name: "VIDEOS", icon: FaVideo },
            { path: "/contact", name: "CONTACT", icon: FaEnvelope },
          ].map((item) => (
            <li key={item.path} className="group">
              <Link  state={{ scrollToMenu: true }}
                to={item.path} 
                onClick={closeDrawer}
                className="flex items-center py-4 px-6 text-gray-800 hover:text-[#712d24] hover:bg-amber-50 transition-colors"
              >
                <item.icon className="mr-4 text-[#712d24] opacity-70 group-hover:opacity-100" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}

          <li className="group">
            <Link 
              to="/menu-pdf"  state={{ scrollToMenu: true }}
              onClick={closeDrawer}
              className="flex items-center py-4 px-6 text-red-600 hover:text-red-700 hover:bg-amber-50 transition-colors"
            >
              <FaFilePdf className="mr-4 text-red-600 opacity-70 group-hover:opacity-100" />
              <span className="font-medium">MENU PDF</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side Info Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl transform ${
          isRightDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-[#f8f4ee]">
          <h2 className="text-xl font-bold text-[#712d24]">ABOUT TANCAFE</h2>
          <button 
            onClick={() => setIsRightDrawerOpen(false)}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close info"
          >
            <FaTimes className="text-xl text-[#712d24]" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-6 py-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#712d24] flex items-center">
              <FaInfoCircle className="mr-2" />
              OUR STORY
            </h3>
            <p className="text-gray-700 leading-relaxed">
              TanCafe offers a wide variety of delicious food items including pizzas, burgers, 
              sandwiches, smoothies, and specialty coffees. We pride ourselves on excellent 
              taste and quality across our menu, from cakes to savory dishes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#712d24] flex items-center">
              <FaClock className="mr-2" />
              OPENING HOURS
            </h3>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="font-medium">Daily: 10:00 AM - 9:00 PM</p>
              <p className="text-sm text-gray-600 mt-1">7 days a week</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#712d24] flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              OUR LOCATIONS
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium">SELVAM NAGAR</h4>
                <p className="text-sm text-gray-600">
                  4A, Selvam Nagar, Medical College Road, Thanjavur - 613 007
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <FaPhone className="mr-2 text-[#712d24]" />
                  <span>04362–272000</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium">VP GARDEN</h4>
                <p className="text-sm text-gray-600">
                  283/1A-5, VP Garden, Ever Gold Tower, New Bus Stand, Thanjavur - 613007
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <FaPhone className="mr-2 text-[#712d24]" />
                  <span>04362–225964</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#712d24] flex items-center">
              <FaEnvelopeOpen className="mr-2" />
              CONNECT WITH US
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/mytancafe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://x.com/mytancafe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white bg-black hover:bg-neutral-900  rounded-full transition-colors"
                aria-label="Twitter"
              >
               <FaXTwitter />
              </a>
              <a 
                href="https://www.instagram.com/mytancafe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.youtube.com/@mytancafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" 
          onClick={closeDrawer}
        />
      )}
      {isRightDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" 
          onClick={() => setIsRightDrawerOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;