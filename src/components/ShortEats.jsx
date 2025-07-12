import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../assets/context/CartContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

// Images
import bannerImg from '../assets/short-eats-images/short-eats-1.jpg';
import frenchFries from '../assets/short-eats-images/short-eats-1.jpg';
import masalaFries from '../assets/short-eats-images/short-eats-2.jpg';
import cornCutlet from '../assets/short-eats-images/short-eats-3.jpg';
import vegCutlet from '../assets/short-eats-images/short-eats-4.jpg';
import vegFinger from '../assets/short-eats-images/short-eats-5.jpg';
import potatoSmiles from '../assets/short-eats-images/short-eats-6.jpg';
import cheeseCornNuggets from '../assets/short-eats-images/short-eats-8.jpg';
import potatoCheeseShots from '../assets/short-eats-images/potato-cheese-shots.png';

const shortEatsItems = [
  { name: 'French Fries', image: frenchFries },
  { name: 'Masala Fries', image: masalaFries },
  { name: 'Corn Cutlet (2 Pcs)', image: cornCutlet },
  { name: 'Veg Cutlet (2 Pcs)', image: vegCutlet },
  { name: 'Veg Finger', image: vegFinger },
  { name: 'Potato Smiles', image: potatoSmiles },
  { name: 'Cheese Corn Nuggets', image: cheeseCornNuggets },
  { name: 'Potato Cheese Shots', image: potatoCheeseShots },
];

const ShortEats = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useContext(CartContext);
  
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
            <span className="text-yellow-300">Short</span> Eats
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Grab a quick bite with our delicious short eats – crisp, warm, and perfect with chai.
          </p>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">HOME</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">SHORT EATS</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Delicious Bites</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our short eats are perfect for a quick and tasty snack. Crispy, fresh, and absolutely satisfying.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {shortEatsItems.map((item) => {
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
                    <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                  </div>

                  <div className="p-4 text-center flex flex-col items-center">
                    <div className="flex items-center gap-3 mt-2">
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
                        onClick={() => addToCart(item.name, item.image)}
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
            <h3 className="text-3xl font-bold mb-4">Craving More?</h3>
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

export default ShortEats;