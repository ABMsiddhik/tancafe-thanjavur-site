import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGift, FiChevronRight, FiPhone, FiGlobe, FiMapPin, FiExternalLink } from 'react-icons/fi';
import heroBg from '../assets/images/cakes.png';
import womensDayImage from '../assets/images/womens-day-offer-tancafe.png';
import Footer from './Footer';

const SpecialOffers = () => {
  const [activeOffer, setActiveOffer] = useState('womens-day');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToMenu) {
      setTimeout(() => {
        const offersSection = document.getElementById('offers-section');
        if (offersSection) {
          offersSection.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location.state]);

  const offers = {
    'womens-day': {
      title: "Women's Day Special",
      image: womensDayImage,
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5] min-h-screen">
      {/* Hero Section */}
<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src={heroBg}
      alt="Special Offers Banner"
      className="w-full h-full object-cover object-center"
      style={{ 
        transform: 'scale(1.1)',
        transition: 'transform 0.5s ease-out',
        willChange: 'transform'
      }}
    />
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 text-white text-center px-4">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">SPECIAL OFFERS</h1>
    <div className="flex items-center justify-center gap-2 text-sm">
      <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity flex items-center">
        HOME
      </Link>
      <span>›</span>
      <span className="font-semibold text-yellow-300">SPECIAL OFFERS</span>
    </div>
  </div>
  
  {/* Down Arrow */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
    <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg> 
  </div>
</div>

      {/* Offer Navigation */}
      <div id='offers-section' className="max-w-6xl mx-auto pt-8 px-4 sm:px-16">
        <div className="flex justify-center space-x-4 mt-5 overflow-x-auto">
          {Object.keys(offers).map((offerKey) => (
            <button
              key={offerKey}
              onClick={() => setActiveOffer(offerKey)}
              className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center ${
                activeOffer === offerKey
                  ? 'bg-[#712d24] text-white'
                  : 'bg-white text-[#712d24] hover:bg-gray-100'
              }`}
            >
              <FiGift className="mr-2" />
              {offers[offerKey].title}
            </button>
          ))}
        </div>
      </div>

      {/* Current Offer Display */}
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="bg-[#712d24] text-white p-4 flex items-center justify-center">
              <FiGift className="text-2xl mr-2" />
              <h2 className="text-xl font-bold">{offers[activeOffer].title}</h2>
            </div>
            
            {/* Offer Image */}
            <div className="relative">
              <img 
                src={offers[activeOffer].image} 
                alt={offers[activeOffer].title} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
        
          </div>
        </div>
      </div>

      {/* Location Section */}
<div className="max-w-6xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
    {/* Header with decorative element */}
    <div className="bg-[#712d24] py-4 px-6 text-center">
      <h3 className="text-2xl font-bold text-white">Visit Our Cafes</h3>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3"></div>
    </div>

    <div className="p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Selvam Nagar Location */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#712d24] transition-colors duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#712d24] p-2 rounded-full text-white">
              <FiMapPin className="text-xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 ml-3">SELVAM NAGAR</h4>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-gray-600">
              4A, Selvam Nagar, Medical College Road
            </p>
            <p className="text-gray-600">Thanjavur - 613007</p>
            <div className="pt-2">
              <a href="tel:9360066917" className="inline-flex items-center text-[#712d24] hover:text-[#5a241b] font-medium">
                <FiPhone className="mr-2" />
                <span>9360066917</span>
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a href="tel:04362272000" className="inline-flex items-center text-[#712d24] hover:text-[#5a241b] font-medium">
                <span>04362-272000</span>
              </a>
            </div>
          </div>
        </div>

        {/* VP Garden Location */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#712d24] transition-colors duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#712d24] p-2 rounded-full text-white">
              <FiMapPin className="text-xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 ml-3">VP GARDEN</h4>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-gray-600">
              283/1A-5, VP Garden, Ever Gold Tower
            </p>
            <p className="text-gray-600">New Bus Stand, Thanjavur - 613007</p>
            <div className="pt-2">
              <a href="tel:04362225964" className="inline-flex items-center text-[#712d24] hover:text-[#5a241b] font-medium">
                <FiPhone className="mr-2" />
                <span>04362-225964</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Website Link with Decorative Border */}
      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <a 
          href="https://www.tancafe.co.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#712d24] text-white rounded-full hover:bg-[#5a241b] transition-colors shadow-md hover:shadow-lg"
        >
          <FiGlobe className="mr-2" />
          <span className="font-medium">Visit Our Website</span>
          <FiExternalLink className="ml-2 text-sm" />
        </a>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
  );
};

export default SpecialOffers;