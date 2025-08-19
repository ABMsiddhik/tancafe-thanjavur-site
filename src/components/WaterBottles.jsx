import React, { useContext, useEffect } from 'react';  
import { useLocation } from 'react-router-dom';  
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../assets/context/CartContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

import bannerImg from '../assets/water-bottle-images/water-bottle-bg.png';
import waterBottle1000ml from '../assets/water-bottle-images/tancafe-water-bottle-1000ml.jpg';
import waterBottle500ml from '../assets/water-bottle-images/tancafe-water-bottle-500ml.png';

const waterBottleItems = [
  { name: '1000ml Water Bottle', image: waterBottle1000ml, price: 20 },
  { name: '500ml Water Bottle', image: waterBottle500ml, price: 10 },
];

const WaterBottles = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useContext(CartContext);
  const quantity = (itemName) => cart[itemName]?.quantity || 0;
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-blue-300">TanCafe Water Bottles</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Stay hydrated with our premium quality reusable water bottles
          </p>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-blue-300">WATER BOTTLES</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="menu-section" className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">Premium Water Bottles</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              High-quality reusable bottles to keep you hydrated throughout the day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {waterBottleItems.map(({ name, image, price }) => {
              const itemQuantity = quantity(name);
              const showControls = itemQuantity > 0;

              return (
                <div
                  key={name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white">{name}</h3>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#1e3a8a] font-semibold">Rs. {price.toFixed(2)}</span>
                      {showControls && (
                        <span className="text-sm text-gray-500">
                          Total: Rs. {(price * itemQuantity).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-2">
                      {showControls ? (
                        <>
                          <button
                            onClick={() => decreaseQty(name)}
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
                        onClick={() => addToCart(name, image, price)}
                        className="bg-[#1e3a8a] text-white p-2 rounded"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="text-sm" />
                      </button>

                      {showControls && (
                        <button
                          onClick={() => removeFromCart(name)}
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

          {/* CTA */}
          <div className="mt-16 bg-[#1e3a8a] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Explore Our Full Menu</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              From refreshing drinks to delicious treats, there's always something waiting to be discovered.
            </p>
            <Link
              to="/drinks"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg inline-block"
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

export default WaterBottles;