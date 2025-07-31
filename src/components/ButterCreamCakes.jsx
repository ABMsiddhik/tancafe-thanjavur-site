import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../assets/context/CartContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

import bannerImg from '../assets/butter-cream-cakes-images/black-forest.jpeg';
import butterscotch from '../assets/butter-cream-cakes-images/butterscotch.jpg';
import chocolate from '../assets/butter-cream-cakes-images/chocolate.jpg';
import pineapple from '../assets/butter-cream-cakes-images/pineapple.jpg';
import strawberry from '../assets/butter-cream-cakes-images/strawberry.jpg';
import vanilla from '../assets/butter-cream-cakes-images/vanilla.jpg';
import honey from '../assets/butter-cream-cakes-images/honey.jpg';

const ButterCreamCakes = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedType, setSelectedType] = useState('Egg Base');

  const cakeItems = [
   {
  type: 'Egg Base',
  items: [
    { name: 'Butterscotch', image: butterscotch, price: { '500g': 175, '1kg': 350 } },
    { name: 'Chocolate', image: chocolate, price: { '500g': 200, '1kg': 400 } },
    { name: 'Pineapple', image: pineapple, price: { '500g': 175, '1kg': 350 } },
    { name: 'Strawberry', image: strawberry, price: { '500g': 175, '1kg': 350 } },
    { name: 'Vanilla', image: vanilla, price: { '500g': 175, '1kg': 350 } },
    { name: 'Honey', image: honey, price: { '500g': 200, '1kg': 400 } }
  ]
}

  ];

  const quantity = (itemName, size) => cart[`${itemName}-${size}`]?.quantity || 0;

  const handleSizeChange = (cakeName, size) => {
    setSelectedSize(prev => ({
      ...prev,
      [cakeName]: size
    }));
  };

const handleAddToCart = (item) => {
  const size = selectedSize[item.name] || Object.keys(item.price)[0];
  const price = item.price[size];
  const cartItemName = `${item.name}-${size}`;
  
  addToCart(cartItemName, item.image, price, {
    type: selectedType,
    size: size,
    cakeType: 'Butter Cream Cake'
  });
};

  const handleDecreaseQty = (item) => {
    const size = selectedSize[item.name] || Object.keys(item.price)[0];
    const cartItemName = `${item.name}-${size}`;
    decreaseQty(cartItemName);
  };

  const handleRemoveFromCart = (item) => {
    const size = selectedSize[item.name] || Object.keys(item.price)[0];
    const cartItemName = `${item.name}-${size}`;
    removeFromCart(cartItemName);
  };

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
            <span className="text-yellow-300">Butter Cream</span> Cakes
          </h1>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">HOME</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/cakes" className="hover:text-yellow-300 transition-colors">CAKES</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">BUTTER CREAM CAKES</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-gradient-to-b from-[#fff7f1] to-[#ffe4d2] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Rich & Creamy</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our butter cream cakes are perfect for celebrations with their smooth, rich texture
            </p>
          </div>

          {/* Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {cakeItems.map((typeItem) => (
                <button
                  key={typeItem.type}
                  onClick={() => setSelectedType(typeItem.type)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedType === typeItem.type
                      ? 'bg-[#712d24] text-white'
                      : 'bg-white text-[#712d24] hover:bg-gray-100'
                  }`}
                >
                  {typeItem.type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {cakeItems
              .find(type => type.type === selectedType)
              ?.items.map((item) => {
                const availableSizes = Object.keys(item.price);
                const defaultSize = availableSizes[0];
                const currentSize = selectedSize[item.name] || defaultSize;
                const currentPrice = item.price[currentSize];
                const cartItemName = `${item.name}-${currentSize}`;
                const itemQuantity = quantity(item.name, currentSize);
                const showControls = itemQuantity > 0;

                return (
                  <div
                    key={`${selectedType}-${item.name}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white">{item.name}</h3>
                    </div>
                    <div className="p-4">
                      {/* Size Selector */}
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                        <div className="flex flex-wrap gap-2">
                          {availableSizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSizeChange(item.name, size)}
                              className={`px-3 py-1 text-xs rounded ${
                                currentSize === size
                                  ? 'bg-[#712d24] text-white'
                                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[#712d24] font-semibold">Rs. {currentPrice.toFixed(2)}</span>
                        {showControls && (
                          <span className="text-sm text-gray-500">
                            Total: Rs. {(currentPrice * itemQuantity).toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-3 mt-2">
                        {showControls ? (
                          <>
                            <button
                              onClick={() => handleDecreaseQty(item)}
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
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#712d24] text-white p-2 rounded"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-sm" />
                        </button>
                        {showControls && (
                          <button
                            onClick={() => handleRemoveFromCart(item)}
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
          <div className="mt-16 bg-[#712d24] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Special Occasion Coming Up?</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Customize your butter cream cake with special designs and messages for your celebration
            </p>
            <Link
              to="/custom-cakes"
              className="bg-yellow-500 hover:bg-yellow-600 text-[#712d24] font-bold py-3 px-8 rounded-full transition-colors shadow-lg inline-block"
            >
              Order Custom Cake
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ButterCreamCakes;