import React, { useEffect } from 'react';  // Add useEffect
import { useLocation } from 'react-router-dom';  // Add this import
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FiDownload, FiEye } from 'react-icons/fi';
import menuPdfImage from '../assets/images/menu-preview.png'; 
import menuPdf from '../assets/pdf/tancafe-new-menu.pdf';
import heroBg from '../assets/images/tancafe-coffee-themed-menu-background.jpg';

const MenuPdf = () => {
  const location = useLocation();  

  useEffect(() => {
    if (location.state?.scrollToMenu) {
      setTimeout(() => {
        const menuSection = document.getElementById('menu-pdf-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location.state]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5]">
      {/* Hero Section with Parallax Effect - Menu PDF */}
<section className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
    style={{ 
      backgroundImage: `url(${heroBg})`,
      transform: 'scale(1.1)',
      transition: 'transform 0.5s ease-out',
      willChange: 'transform'
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
      <Link to="/" className="hover:text-yellow-300 transition-colors">HOME</Link>
      <span className="mx-2">&gt;</span>
      <span className="text-yellow-300">MENU</span>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
    <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

      {/* Hero Section */}
      <div className="py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#712d24] mb-4">
          Explore Our <span className="text-yellow-600">Delicious</span> Menu
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Download our full menu to browse all our culinary offerings at your convenience
        </p>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
      </div>

      {/* Menu Preview Section */}
 {/* Menu Preview Section - Add id here */}
<div id="menu-pdf-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Menu Preview Image */}
          <div className="relative h-64 md:h-96 overflow-hidden bg-gray-100">
            <img 
              src={menuPdfImage} 
              alt="Menu Preview" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Download Options */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#712d24] mb-6">
              Full Menu PDF Download
            </h2>
            <p className="text-gray-600 mb-8">
              Our menu features a wide variety of vegetarian delights, from appetizers to desserts. 
              Download the PDF to view all options, prices, and special items.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
               href={menuPdf}
                target="_self"
                rel="noopener noreferrer"
                className="flex-1 bg-[#712d24] hover:bg-[#5a241b] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FiEye className="text-xl" />
                View Menu Online
              </a>
              <a
             href={menuPdf}
                download="TANCAFE_Menu.pdf"
                className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-[#712d24] px-6 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FiDownload className="text-xl" />
                Download PDF
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>PDF File Size: ~2.5MB | Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-[#712d24] mb-4">Menu Information</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>All items are 100% vegetarian</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Prices subject to change without notice</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Seasonal specials may not be listed in the PDF</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>For large orders or catering, please contact us directly</span>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPdf;