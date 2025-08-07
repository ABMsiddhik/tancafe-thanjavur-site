import React, { useContext, useEffect } from 'react';  // Add useEffect
import { useLocation } from 'react-router-dom';  // Add this import
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../assets/context/CartContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

// Banner and Pizza Images
import bannerImg from '../assets/pizza-images/pizza-1.jpg';
import tandooriPaneer from '../assets/pizza-images/pizza-1.jpg';
import vegPizza from '../assets/pizza-images/pizza-2.jpg';
import goldenCornCheese from '../assets/pizza-images/pizza-3.jpg';
import mexican from '../assets/pizza-images/pizza-4.jpg';
import cheese from '../assets/pizza-images/pizza-5.jpg';
import paneerMushroom from '../assets/pizza-images/pizza-6.jpg';
import classicMushroom from '../assets/pizza-images/pizza-7.jpg';
import exoticVeg from '../assets/pizza-images/pizza-8.jpg';
import peppyMushroom from '../assets/pizza-images/pizza-9.jpg';

const pizzaItems = [
  { name: 'Tandoori Paneer', image: tandooriPaneer, price: 155 },
  { name: 'Veg', image: vegPizza, price: 120 },
  { name: 'Golden Corn Cheese', image: goldenCornCheese, price: 135 },
  { name: 'Mexican', image: mexican, price: 135 },
  { name: 'Cheese', image: cheese, price: 120 },
  { name: 'Paneer Mushroom', image: paneerMushroom, price: 175 },
  { name: 'Classic Mushroom', image: classicMushroom, price: 140 },
  { name: 'Exotic Veg', image: exoticVeg, price: 130 },
  { name: 'Peppy Mushroom', image: peppyMushroom, price: 155 },
];

const Pizza = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useContext(CartContext);
    const location = useLocation(); 
  const quantity = (itemName) => cart[itemName]?.quantity || 0;
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
  return (
    <>
      {/* Hero Section - unchanged */}
      <section className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-yellow-300">Pizza</span> Menu
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Indulge in our sizzling hot, cheesy, veggie-loaded pizzas – the real crowd-pleaser!
          </p>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">HOME</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">PIZZA</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Grid Section with Price */}
      <section id="menu-section"  className="bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Freshly Baked</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Baked to perfection with premium ingredients. Our pizzas are a celebration of flavor and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pizzaItems.map((item) => {
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white">{item.name}</h3>
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

          {/* Call to Action - unchanged */}
          <div className="mt-16 bg-[#712d24] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Hungry for More?</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Check out our full menu and discover a world of mouthwatering vegetarian options.
            </p>
            <Link
              to="/foods"
              className="bg-yellow-500 hover:bg-yellow-600 text-[#712d24] font-bold py-3 px-8 rounded-full transition-colors shadow-lg inline-block"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pizza;