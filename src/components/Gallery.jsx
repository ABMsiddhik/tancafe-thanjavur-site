import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import img1 from '../assets/gallery/tancafe-thanjavur-20.jpg';
import img2 from '../assets/gallery/tancafe-thanjavur-19.jpg';
import img3 from '../assets/gallery/tancafe-thanjavur-18.jpg';
import img4 from '../assets/gallery/tancafe-thanjavur-17.png';
import img5 from '../assets/gallery/tancafe-thanjavur-16.jpg';
import img6 from '../assets/gallery/tancafe-thanjavur-15.jpg';
import img7 from '../assets/gallery/tancafe-thanjavur-14.jpg';
import img8 from '../assets/gallery/tancafe-thanjavur-13.jpg';
import img9 from '../assets/gallery/tancafe-thanjavur-12.png';
import img10 from '../assets/gallery/tancafe-thanjavur-11.png';
import img11 from '../assets/gallery/tancafe-thanjavur-10.jpg';
import img12 from '../assets/gallery/tancafe-thanjavur-9.jpg';
import img13 from '../assets/gallery/tancafe-thanjavur-8.jpg';
import img14 from '../assets/gallery/tancafe-thanjavur-7.jpg';
import img15 from '../assets/gallery/tancafe-thanjavur-6.jpg';
import img16 from '../assets/gallery/tancafe-thanjavur-5.jpg';
import img17 from '../assets/gallery/tancafe-thanjavur-4.jpg';
import img18 from '../assets/gallery/tancafe-thanjavur-3.jpg';
import img19 from '../assets/gallery/tancafe-thanjavur-2.jpg';
import img20 from '../assets/gallery/tancafe-thanjavur-1.jpg';
import heroBg from '../assets/images/tancafe-gallery-foods-drinks-cakes-photos.png';
import { FaHome, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const galleryImages = [
  { src: img1, title: 'Spicy Veg Fusion Pasta' },
  { src: img2, title: 'Loaded Fries' },
  { src: img3, title: 'Cheese Mushroom Wrap' },
  { src: img4, title: 'Grilled Chocolate Cheese Sandwich' },
  { src: img5, title: 'Daily Sweet Bread' },
  { src: img6, title: 'Whole Wheat Bread' },
  { src: img7, title: 'Veg Burger' },
  { src: img8, title: 'Corn Spinach Sandwich' },
  { src: img9, title: 'Chilli Garlic Spaghetti' },
  { src: img10, title: 'Green Garden Pasta' },
  { src: img11, title: 'Classic Mushroom Pizza' },
  { src: img12, title: 'Paneer Hotdog' },
  { src: img13, title: 'Cheese Corn Burger' },
  { src: img14, title: 'Chilli Cheese Grilled Sandwich' },
  { src: img15, title: 'Creamy Spaghetti' },
  { src: img16, title: 'Special Pasta' },
  { src: img17, title: 'Loaded Cheese Hot Dog' },
  { src: img18, title: 'Cheesy Mushroom Pizza' },
  { src: img19, title: 'Mexican Pizza' },
  { src: img20, title: 'Grilled Paneer Sandwich' },
];

const Gallery = () => {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Enhanced scroll effect with multiple checks
  useEffect(() => {
    const scrollToGallery = () => {
      const gallerySection = document.getElementById('gallery-section');
      if (gallerySection) {
        // Calculate position accounting for navbar height
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = gallerySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Clear any scroll flags
        window.history.replaceState({}, document.title);
        localStorage.removeItem('scrollToGallery');
      }
    };

    // Check both state and localStorage
    const shouldScroll = location.state?.scrollToMenu ||
      JSON.parse(localStorage.getItem('scrollToGallery'));

    if (shouldScroll) {
      // Try scrolling immediately
      scrollToGallery();

      // Fallback with timeout if needed
      const timer = setTimeout(scrollToGallery, 300);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const openImage = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
<Helmet>
  <title>TanCafe Photo Gallery in Thanjavur | Best Cafe in Thanjavur, Coffee Shop in Thanjavur, Vegetarian Restaurant in Thanjavur</title>
  <meta
    name="description"
    content="Explore TanCafe photo gallery in Thanjavur. Discover our vegetarian hotel in Thanjavur, coffee shop in Thanjavur, and restaurant in Thanjavur with delicious foods, refreshing drinks, and premium cakes. Order online at tancafe.co.in."
  />
  <meta
    name="keywords"
    content="TanCafe photo gallery in Thanjavur, cafe in Thanjavur, coffee shop in Thanjavur, vegetarian hotel in Thanjavur, vegetarian restaurant in Thanjavur, famous cafe in Thanjavur, famous coffee shop in Thanjavur, famous vegetarian hotel in Thanjavur, best cafe in Thanjavur, best coffee shop in Thanjavur, best vegetarian restaurant in Thanjavur, vegetarian coffee shop in Thanjavur, food photos in Thanjavur, drink pictures in Thanjavur, cake gallery in Thanjavur, restaurant gallery in Thanjavur, online order delivery tancafe.co.in"
  />

  {/* Open Graph Tags */}
  <meta property="og:title" content="TanCafe Photo Gallery in Thanjavur | Best Cafe in Thanjavur, Coffee Shop in Thanjavur, Vegetarian Restaurant in Thanjavur" />
  <meta 
    property="og:description" 
    content="View photos of TanCafe in Thanjavur showcasing cafe in Thanjavur, coffee shop in Thanjavur, vegetarian restaurant in Thanjavur, delicious foods, drinks, and cakes. Visit tancafe.co.in for online ordering." 
  />
  <meta property="og:image" content={heroBg} />
  <meta property="og:url" content="https://tancafe.co.in/" />
</Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src={heroBg}
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative text-center text-white z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 ">
            GALLERY IMAGES – Tancafe Collections
          </h2>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-gray-100">
            Explore our cafe photo collection featuring fresh brews, gourmet dishes and indulgent cakes.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <FaHome />
            <Link
              to="/"
              className="hover:text-amber-400 transition-colors"
            >
              HOME
            </Link>
            <span className="mx-1">›</span>
            <span className="text-amber-400">GALLERY IMAGES</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      {/* Gallery Grid with Uniform Image Sizes */}
      <section
        id="gallery-section"
        className="px-4 sm:px-8 py-12 bg-white scroll-mt-[100px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-xl shadow hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => openImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-2xl hover:text-amber-400 transition-colors"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 text-white text-2xl hover:text-amber-400 transition-colors md:left-8"
          >
            <FaChevronLeft size={28} />
          </button>

          <div className="max-w-4xl w-full">
            <div className="relative pb-[75%]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-sm opacity-80 mt-1">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-4 text-white text-2xl hover:text-amber-400 transition-colors md:right-8"
          >
            <FaChevronRight size={28} />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
