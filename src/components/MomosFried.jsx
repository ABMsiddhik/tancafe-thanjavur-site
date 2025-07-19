import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../assets/context/CartContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

// Images
import bannerImg from '../assets/momos-images/momos-1.jpg';
import mixedVeg from '../assets/momos-images/momos-1.jpg';
import corn from '../assets/momos-images/momos-2.jpg';
import paneerTikka from '../assets/momos-images/momos-3.jpg';

const momosItems = [
  { name: 'Mixed Veg', image: mixedVeg, price: 90 },
  { name: 'Corn', image: corn, price: 95 },
  { name: 'Paneer Tikka', image: paneerTikka, price: 110 },
];

const MomosFried = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useContext(CartContext);

  const quantity = (itemName) => cart[itemName]?.quantity || 0;

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
            <span className="text-yellow-300">Momos</span> Fried
          </h1>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">HOME</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">MOMOS FRIED</span>
          </div>
        </div>
      </section>

      {/* Grid Section with Price */}
      <section className="bg-gradient-to-b from-[#fff7f1] to-[#ffe4d2] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Crispy & Juicy</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delight in our hot and crispy fried momos with bursting flavors and perfect dips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {momosItems.map((item) => {
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
                        onClick={() => addToCart(item.name, item.image, item.price)}
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

          {/* CTA - unchanged */}
          <div className="mt-16 bg-[#712d24] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Want More Crunch?</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Explore our full menu for more delicious vegetarian bites.
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

export default MomosFried;