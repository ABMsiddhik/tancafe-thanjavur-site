import React, { useState,useEffect,useContext } from 'react';
import logo from '../assets/images/tancafe-logo.png';
import { FaBars, FaTimes, FaFilePdf, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link,NavLink} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../assets/context/CartContext';


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsSubMenuOpen(false);
  };
    const [cartCount, setCartCount] = useState(0);
  const { totalItems } = useContext(CartContext);

  // Listen for cart updates from any component
  useEffect(() => {
    const handleCartUpdate = () => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      const count = Object.values(cartData).reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );
      setCartCount(count);
    };

    // Initial load
    handleCartUpdate();

    // Listen for events
    window.addEventListener('cartUpdated', handleCartUpdate);

    // Cleanup
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  // Also watch context changes
  useEffect(() => {
    setCartCount(totalItems);
  }, [totalItems]);


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-6 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Mobile Drawer Menu Icon */}
      <div className="flex items-center gap-4">
        <div className="md:hidden" onClick={() => setIsDrawerOpen(true)}>
          <FaBars className="text-2xl text-[#712d24] cursor-pointer" />
        </div>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none w-full max-w-[180px] flex justify-between items-center">
  <Link to="/" onClick={closeDrawer}>
    <img src={logo} alt="TanCafe Logo" className="h-10 md:h-16" />
  </Link>
  <NavLink to="/cart" className="relative group md:hidden">
          <FaShoppingCart className="text-2xl text-[#712d24] cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>
</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold text-gray-700 items-center">
        <li><Link to="/" className="hover:text-[#712d24]">HOME</Link></li>
        <li><Link to="/about" className="hover:text-[#712d24]">ABOUT US</Link></li>

        {/* Dropdown */}
        <li className="relative group cursor-pointer hover:text-[#712d24]">
          <div className="flex items-center gap-1">
            OUR MENUS <FaChevronDown className="text-xs mt-[0px]" />
          </div>
          <ul className="absolute hidden group-hover:block top-full left-0 w-40 bg-white shadow-lg border rounded py-3 z-10">
            <li><Link to="/foods" className="px-4 py-2 block hover:bg-gray-100">FOODS</Link></li>
            <li><Link to="/drinks" className="px-4 py-2 block hover:bg-gray-100">DRINKS</Link></li>
            <li><Link to="/cakes" className="px-4 py-2 block hover:bg-gray-100">CAKES</Link></li>
          </ul>
        </li>

        <li><Link to="/special-offers" className="hover:text-[#712d24]">SPECIAL OFFERS</Link></li>
        <li><Link to="/gallery" className="hover:text-[#712d24]">GALLERY</Link></li>
        <li><Link to="/videos" className="hover:text-[#712d24]">VIDEOS</Link></li>
        <li><Link to="/contact" className="hover:text-[#712d24]">CONTACT</Link></li>
        <li className="hover:text-[#712d24] flex items-center gap-1">
          <FaFilePdf className="text-red-600" />
          <Link to="/menu-pdf">MENU PDF</Link>
        </li>
        <NavLink to="/cart" className="relative group">
          <FaShoppingCart className="text-2xl text-[#712d24] cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>
      </ul>

      {/* Right: About Us Info Panel Icon */}
      <div className="block">
        <FaBars
          className="text-2xl text-[#712d24] cursor-pointer"
          onClick={() => setIsRightDrawerOpen(true)}
        />
      </div>

      {/* Mobile Left Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs bg-white z-50 shadow-md transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <FaTimes className="text-2xl text-[#712d24] cursor-pointer" onClick={closeDrawer} />
          <img src={logo} alt="TanCafe Logo" className="h-8" />
          <div className="w-6"></div>
        </div>

        <ul className="flex flex-col text-sm font-semibold text-gray-700 px-4 py-4">
          <li className="py-3 border-b"><Link to="/" onClick={closeDrawer} className="hover:text-[#712d24]">HOME</Link></li>
          <li className="py-3 border-b"><Link to="/about" onClick={closeDrawer} className="hover:text-[#712d24]">ABOUT US</Link></li>

          <li
            className="py-3 border-b flex items-center justify-between text-[#712d24] cursor-pointer"
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            <span>OUR MENUS</span>
            <FaChevronDown className={`transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`} />
          </li>
          <div className={`overflow-hidden transition-all duration-300 ${isSubMenuOpen ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 text-gray-700">
              <li className="py-2"><Link to="/foods" onClick={closeDrawer} className="hover:text-[#712d24]">FOODS</Link></li>
              <li className="py-2"><Link to="/drinks" onClick={closeDrawer} className="hover:text-[#712d24]">DRINKS</Link></li>
              <li className="py-2"><Link to="/cakes" onClick={closeDrawer} className="hover:text-[#712d24]">CAKES</Link></li>
            </ul>
          </div>

          <li className="py-3 border-b"><Link to="/special-offers" onClick={closeDrawer} className="hover:text-[#712d24]">SPECIAL OFFERS</Link></li>
          <li className="py-3 border-b"><Link to="/gallery" onClick={closeDrawer} className="hover:text-[#712d24]">GALLERY</Link></li>
          <li className="py-3 border-b"><Link to="/videos" onClick={closeDrawer} className="hover:text-[#712d24]">VIDEOS</Link></li>
          <li className="py-3 border-b"><Link to="/contact" onClick={closeDrawer} className="hover:text-[#712d24]">CONTACT</Link></li>
          <li className="py-3 border-b flex items-center gap-1">
            <FaFilePdf className="text-red-600" />
            <Link to="/menu-pdf">MENU PDF </Link>
          </li>
        </ul>
      </div>

      {/* Left Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40" onClick={closeDrawer}></div>
      )}

      {/* Right Side About Us Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-sm bg-white z-50 shadow-lg transform ${isRightDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold text-[#712d24]">ABOUT US</h2>
          <FaTimes className="text-2xl text-[#712d24] cursor-pointer" onClick={() => setIsRightDrawerOpen(false)} />
        </div>

        <div className="px-5 py-8 text-md text-gray-700 space-y-10">
          <p>
            Good variety of food items such as pizzas, burgers, sandwiches,
            smoothies, and coffees. Excellent taste and quality of food items such as cakes,
            savoury dishes including burgers, appetizers, sandwiches and desserts.
            Friendly staff and good service provided to customers.
          </p>

          <div>
            <h3 className="font-semibold text-[#712d24]">OPENING HOURS</h3>
            <p className="mt-3">Mon – Sun: <strong>10.00 AM – 09.00 PM</strong></p>
          </div>

          <div>
            <h3 className="font-semibold text-[#712d24]">OUR MENUS</h3>
            <ul className="mt-1 space-y-2">
              <li><Link to="/foods">Foods</Link></li>
              <li><Link to="/drinks">Drinks</Link></li>
              <li><Link to="/cakes">Cakes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#712d24]">CONNECT WITH US</h3>
            <div className="flex space-x-3 mt-2">
              <a href='https://www.facebook.com/mytancafe/' target='_blank'> <FaFacebookF className="text-[#3b5998] text-xl" /></a>
              <a href='https://x.com/mytancafe/' target='_blank'> <FaTwitter className="text-[#00acee] text-xl" /></a>
              <a href='https://www.instagram.com/accounts/login/?next=%2Fmytancafe%2F&source=omni_redirect' target='_blank'><FaInstagram className="text-[#c32aa3] text-xl" /></a>
              <a href='https://www.youtube.com/@mytancafe' target='_blank'><FaYoutube className="text-[#ff0000] text-xl" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Drawer Overlay */}
      {isRightDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40" onClick={() => setIsRightDrawerOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
