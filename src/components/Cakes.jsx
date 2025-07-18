import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// Import images
import gateauxImg from '../assets/images/gateaux.png';
import doughnutImg from '../assets/images/doughnuts.jpg';
import cakeHeroImg from '../assets/images/cakes.png';
import customCakeImg from '../assets/images/custom-cake.jpg';

const cakeItems = [
  {
    category: 'GATEAUX SLICES',
    image: gateauxImg,
    items: [
      { name: 'Black Forest' },
      { name: 'Choco Truffle' },
      { name: 'Red Velvet' },
      { name: 'Brownie' },
      { name: 'Choco Delight' },
      { name: 'Choco Lava Cake' },
      { name: 'Brownie Sizzlers' },
      { name: 'Rich Almond Fusion' },
      { name: 'Mocha Delight' }
    ],
  },
  {
    category: 'DOUGHNUTS',
    image: doughnutImg,
    items: [
      { name: 'Choco Doughnut' },
      { name: 'Chocochip Doughnut' },
      { name: 'Nuts Doughnut' },
      { name: 'Coffee Lovers' },
      { name: 'Choco Coconut' },
      { name: 'Caramel Classic Delight' }
    ],
  }
];

const Cakes = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [customOrder, setCustomOrder] = useState({
    name: '',
    phone: '',
    size: '1kg',
    flavor: 'Black Forest',
    customSize: '',
    customFlavor: '',
    design: '',
    message: '',
    deliveryDate: ''
  });

  const filteredItems = activeCategory === 'ALL'
    ? cakeItems
    : cakeItems.filter(item => item.category === activeCategory);

  const handleCustomOrderChange = (e) => {
    const { name, value } = e.target;
    setCustomOrder(prev => ({
      ...prev,
      [name]: value,
      // Reset custom fields when switching away from 'other'
      ...(name === 'size' && value !== 'other' ? { customSize: '' } : {}),
      ...(name === 'flavor' && value !== 'other' ? { customFlavor: '' } : {})
    }));
  };

  const submitCustomOrder = (e) => {
    e.preventDefault();

    // Determine the final size and flavor values
    const finalSize = customOrder.size === 'other' ? customOrder.customSize : customOrder.size;
    const finalFlavor = customOrder.flavor === 'other' ? customOrder.customFlavor : customOrder.flavor;

    const message = `*Custom Cake Order*\n\n*Customer Details*\nName: ${customOrder.name}\nPhone: ${customOrder.phone}\n\n*Cake Details*\nSize: ${finalSize}\nFlavor: ${finalFlavor}\nDesign: ${customOrder.design}\nMessage: ${customOrder.message}\n\n*Delivery Date*\n${customOrder.deliveryDate}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918248794519?text=${encodedMessage}`, '_blank');

    // Reset form
    setCustomOrder({
      name: '',
      phone: '',
      size: '1kg',
      flavor: 'Black Forest',
      customSize: '',
      customFlavor: '',
      design: '',
      message: '',
      deliveryDate: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${cakeHeroImg})`,
            transform: 'scale(1.1)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-yellow-300">Delicious</span> Cakes Menu
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Explore layers of flavor and sweetness – from gateaux to gooey doughnuts
          </p>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              HOME
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">CAKES</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-8 h-8 text-yellow-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Our Cake Selection</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Baked fresh daily with love and layers of indulgence
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-2 mx-auto">
              <button
                onClick={() => setActiveCategory('ALL')}
                className={`px-4 py-2 rounded-full font-medium shadow-sm transition-colors whitespace-nowrap ${activeCategory === 'ALL'
                  ? 'bg-[#712d24] text-white'
                  : 'bg-white text-[#712d24] hover:bg-[#712d24] hover:text-white'
                  }`}
              >
                ALL
              </button>
              {cakeItems.map(({ category }) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium shadow-sm transition-colors whitespace-nowrap ${activeCategory === category
                    ? 'bg-[#712d24] text-white'
                    : 'bg-white text-[#712d24] hover:bg-[#712d24] hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setActiveCategory('CUSTOM')}
                className={`hover:bg-red-600 hover:text-white px-4 py-2 rounded-full font-medium shadow-sm transition-colors whitespace-nowrap ${activeCategory === 'CUSTOM'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-[#712d24]'
                  }`}
              >
                CUSTOM CAKES
              </button>
            </div>
          </div>

          {/* Menu Cards */}
          {activeCategory !== 'CUSTOM' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map(({ category, image, items }) => (
                <div
                  key={category}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={category}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li
                          key={item.name}
                          className="border-b border-gray-100 last:border-0 pb-2 last:pb-0"
                        >
                          <Link
                            to={`/cakes/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center text-gray-700 hover:text-[#712d24] group transition-colors"
                          >
                            <span className="flex-1 group-hover:font-medium">{item.name}</span>
                            <svg
                              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/cakes/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="mt-4 inline-block text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      View all {category.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={customCakeImg}
                    alt="Custom Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#712d24] mb-6">Design Your Dream Cake</h3>
                  <form onSubmit={submitCustomOrder}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={customOrder.name}
                          onChange={handleCustomOrderChange}
                          required
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={customOrder.phone}
                          onChange={handleCustomOrderChange}
                          required
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-1">Cake Size *</label>
                          <select
                            name="size"
                            value={customOrder.size}
                            onChange={handleCustomOrderChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                          >
                            <option value="500g">500g</option>
                            <option value="1kg">1kg</option>
                            <option value="1.5kg">1.5kg</option>
                            <option value="2kg">2kg</option>
                            <option value="3kg">3kg</option>
                            <option value="other">Other (specify)</option>
                          </select>
                          {customOrder.size === 'other' && (
                            <input
                              type="text"
                              name="customSize"
                              value={customOrder.customSize}
                              onChange={handleCustomOrderChange}
                              placeholder="Enter custom size"
                              className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                              required
                            />
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-1">Flavor *</label>
                          <select
                            name="flavor"
                            value={customOrder.flavor}
                            onChange={handleCustomOrderChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                          >
                            <option value="Black Forest">Black Forest</option>
                            <option value="Choco Truffle">Choco Truffle</option>
                            <option value="Red Velvet">Red Velvet</option>
                            <option value="Brownie">Brownie</option>
                            <option value="Choco Delight">Choco Delight</option>
                            <option value="Choco Lava Cake">Choco Lava Cake</option>
                            <option value="Brownie Sizzlers">Brownie Sizzlers</option>
                            <option value="Rich Almond Fusion">Rich Almond Fusion</option>
                            <option value="Mocha Delight">Mocha Delight</option>
                            <option value="other">Other (specify)</option>
                          </select>
                          {customOrder.flavor === 'other' && (
                            <input
                              type="text"
                              name="customFlavor"
                              value={customOrder.customFlavor}
                              onChange={handleCustomOrderChange}
                              placeholder="Enter custom flavor"
                              className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                              required
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Design Description</label>
                        <textarea
                          name="design"
                          value={customOrder.design}
                          onChange={handleCustomOrderChange}
                          rows="2"
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                          placeholder="Describe your cake design (colors, theme, etc.)"
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Special Message on Cake</label>
                        <input
                          type="text"
                          name="message"
                          value={customOrder.message}
                          onChange={handleCustomOrderChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                          placeholder="Happy Birthday, Congratulations, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Delivery Date *</label>
                        <input
                          type="date"
                          name="deliveryDate"
                          value={customOrder.deliveryDate}
                          onChange={handleCustomOrderChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 w-full bg-[#712d24] text-white py-3 px-6 rounded-lg hover:bg-[#5a241d] transition-colors"
                    >
                      Order via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-[#712d24] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Hungry for More?</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Check out our seasonal specials and chef's recommendations for an extraordinary dining experience
            </p>
            <Link to="/special-offers">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-[#712d24] font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                View Special Offers
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cakes;