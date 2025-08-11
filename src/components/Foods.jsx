import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// Import images
import shortEatsImg from '../assets/images/short-eats-1.jpg';
import pizzaImg from '../assets/images/pizza-1.jpg';
import sandwichImg from '../assets/images/grilled-1.jpg';
import spaghettiImg from '../assets/images/spaghetti-1.jpg';
import momosImg from '../assets/images/momos-1.jpg';
import pastaImg from '../assets/images/pasta-1.jpg';
import burgerImg from '../assets/images/burger-3.jpg';
import hotdogImg from '../assets/images/hot-dog-3.jpg';
import heroBg from '../assets/images/foods-bg.jpg';
import { useScrollToMenu } from '../components/useScrollToMenu';
const menuItems = [
  {
    category: 'SHORT EATS',
    image: shortEatsImg,
    items: [
      'Veg Finger',
      'Potato Cheese Shots',
      'Potato Smiles',
      'French Fries',
      'Veg Cutlet (2 Pcs)',
      'Corn Cutlet (2 Pcs)',
      'Cheese Corn Nuggets',
      'Masala Fries',
    ],
  },
  {
    category: 'PIZZA',
    image: pizzaImg,
    items: [
      'Veg',
      'Exotic Veg',
      'Mexican',
      'Peppy Mushroom',
      'Cheese',
      'Tandoori Paneer',
      'Paneer & Mushroom',
      'Classic Mushroom',
      'Golden Corn Cheese',
    ],
  },
  {
    category: 'GRILLED SANDWICHES',
    image: sandwichImg,
    items: [
      'Grilled Veg',
      'Grilled Paneer',
      'Mushroom',
      'Chilli Cheese',
      'Chilli Gobi',
      'Corn & Spinach',
      'Choco Chesse',
      'Veg Hogget',
    ],
  },
  {
    category: 'SPAGHETTI',
    image: spaghettiImg,
    items: ['Mixed Veg', 'Spaghetti Delight', 'Creamy', 'Chilli Garlic', 'Paneer Fusion', 'Soy Veg'],
  },
  {
    category: 'MOMOS FRIED',
    image: momosImg,
    items: ['Mixed Veg', 'Corn', 'Paneer'],
  },
  {
    category: 'PASTA',
    image: pastaImg,
    items: [
      'Indian Pasta',
      'Italian Pasta',
      'Signature Special',
      'Green Garden',
      'Spicy Veg Fusion',
      'Penne Alla',
    ],
  },
  {
    category: 'BURGER',
    image: burgerImg,
    items: ['Veg', 'Paneer', 'Cheese Corn', 'Mock Meat'],

  },
  {
    category: 'HOT DOG',
    image: hotdogImg,
    items: ['Veg', 'Paneer', 'Loaded Cheese', 'Soy Shredded'],
  },
];

const Foods = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const location = useLocation();
  useScrollToMenu();
  useEffect(() => {
    // Check if we should scroll to menu
    if (location.state?.scrollToMenu) {
      // Small timeout to ensure page is rendered
      setTimeout(() => {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state to prevent scrolling on refresh
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location.state]);
  const filteredItems =
    activeCategory === 'ALL'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: 'scale(1.1)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-yellow-300">Our</span> Food Menu
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Discover the flavors of TanCafe – Download our full vegetarian menu in PDF format.
          </p>
          <div className="text-sm text-gray-300 flex justify-center items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              HOME
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">MENU</span>
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
      <section id="menu-section" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Our Menu Categories</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each dish is prepared with fresh ingredients and authentic recipes to give you the best dining experience
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
              {menuItems.map(({ category }) => (
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
            </div>
          </div>

          {/* Menu Cards */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {category}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-gray-100 last:border-0 pb-2 last:pb-0"
                      >
                        <Link
                          to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          state={{ scrollToMenu: true }}  // Add this
                          className="flex items-center text-gray-700 hover:text-[#712d24] group transition-colors"
                        >
                          <span className="flex-1 group-hover:font-medium">{item}</span>
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
                    to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    state={{ scrollToMenu: true }}  // Add this
                    className="mt-4 inline-block text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    View all {category.toLowerCase()} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-[#712d24] rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Hungry for More?</h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Check out our seasonal specials and chef's recommendations for an extraordinary dining experience
            </p>
            <Link to="/special-offers"><button className="bg-yellow-500 hover:bg-yellow-600 text-[#712d24] font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
              View Special Offers
            </button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Foods;
