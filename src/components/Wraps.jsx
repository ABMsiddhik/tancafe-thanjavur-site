import React, { useContext, useEffect } from 'react';  
import { useLocation } from 'react-router-dom';  
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../assets/context/CartContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
// Images
import bannerImg from '../assets/wraps-images/cheese-mushroom-wrap.jpg'; 
import cheeseMushroomWrap from '../assets/wraps-images/cheese-mushroom-wrap.jpg';
import paneerWrap from '../assets/wraps-images/paneer-wrap.jpg';
import vegCrunchyWrap from '../assets/wraps-images/veg-crunchy-wrap.jpg';
import paneerHerbFold from '../assets/wraps-images/paneer-herb-fold.jpg';
import gobiFrankie from '../assets/wraps-images/gobi-frankie.jpg';
import cheesyTortilla from '../assets/wraps-images/cheesy-tortilla.jpg';
import vegFrankie from '../assets/wraps-images/veg-frankie.jpg';
import crispyVegTortilla from '../assets/wraps-images/crisp-veg-tortilla.jpg';

const wrapsItems = [
  { name: 'Cheese Mushroom Wrap', image: cheeseMushroomWrap, price: 115 },
  { name: 'Paneer Wrap', image: paneerWrap, price: 110 },
  { name: 'Veg Crunchy Wrap', image: vegCrunchyWrap, price: 95 },
  { name: 'Paneer Herb Fold', image: paneerHerbFold, price: 120 },
  { name: 'Gobi Frankie', image: gobiFrankie, price: 110 },
  { name: 'Cheesy Tortilla', image: cheesyTortilla, price: 125 },
  { name: 'Veg Frankie', image: vegFrankie, price: 120 },
  { name: 'Crispy Veg Tortilla', image: crispyVegTortilla, price: 135 },
];

const Wraps = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToMenu) {
      setTimeout(() => {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location.state]);

  const handleAddToCart = (name, image, price) => {
    addToCart(name, image, price);
    localStorage.setItem('scrollToMenu', 'true');
  };
  
  const quantity = (itemName) => cart[itemName]?.quantity || 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${bannerImg})`,
            transform: 'scale(1.1)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-yellow-300">Delicious</span> Wraps
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Enjoy our flavorful wraps packed with fresh ingredients and delicious fillings - perfect for any time of day.
          </p>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">HOME</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">WRAPS</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Flavorful Wraps</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our wraps are made with fresh ingredients and packed with flavor. Perfect for a quick meal on the go.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wrapsItems.map((item) => {
              const itemQuantity = quantity(item.name);
              const showControls = itemQuantity > 0;

              return (
                <div
                  key={item.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#712d24] font-semibold">Rs. {item.price.toFixed(2)}</span>
                      {showControls && (
                        <span className="text-sm text-gray-500">
                          Total: Rs. {(item.price * itemQuantity).toFixed(2)}
                        </span>
                      )} 
                    </div>
                    
                    <div className="flex items-center gap-3 justify-center">
                      {showControls ? (
                        <>
                          <button
                            onClick={() => decreaseQty(item.name)}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus className="text-sm" />
                          </button>
                          <span className="text-lg font-semibold w-8">{itemQuantity}</span>
                        </>
                      ) : (
                        <span className="text-lg font-semibold w-8">0</span>
                      )}
                      
                      <button
                        onClick={() => handleAddToCart(item.name, item.image, item.price)}
                        className="bg-[#712d24] text-white p-2 rounded"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="text-sm" />
                      </button>
                      
                      {showControls && (
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="text-red-500 hover:text-red-700 p-2"
                          aria-label="Remove item"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-[#712d24] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Want More Options?</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Explore our full menu and discover more vegetarian delights made fresh daily.
            </p>
            <Link
              to="/foods"
              className="bg-yellow-500 hover:bg-yellow-600 text-[#712d24] font-bold py-3 px-8 rounded-full transition-colors shadow-lg inline-block"
            >
              Browse Full Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Wraps;
