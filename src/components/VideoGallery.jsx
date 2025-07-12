import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlay } from 'react-icons/fa';
import Footer from './Footer';
import heroBg from '../assets/images/foods-bg.jpg';

const videos = [
  { id: 1, title: 'TanCafe Coffee Shop Thanjavur', url: 'https://www.youtube.com/embed/uE9K1obXBp8' },
  { id: 2, title: 'Fresh Taste Mojito', url: 'https://www.youtube.com/embed/P7HUsX1PFDE' },
  { id: 3, title: 'Veg Burger Thanjavur', url: 'https://www.youtube.com/embed/3CO5E3THCOM' },
  { id: 4, title: 'Coffee Shop Thanjavur', url: 'https://www.youtube.com/embed/2_IK_nQjbZM' },
  { id: 5, title: 'Spicy Veg Fusion Pasta', url: 'https://www.youtube.com/embed/4DkMqpSlFmg' },
  { id: 6, title: 'Tandoori Paneer Pizza', url: 'https://www.youtube.com/embed/HXsk6hEhyQ4' },
  { id: 7, title: 'Paneer Burger', url: 'https://www.youtube.com/embed/BHhFRQAcwv4' },
  { id: 8, title: 'TanCafe Ad', url: 'https://www.youtube.com/embed/JogGdsUYUck' },
  { id: 9, title: 'Choco Lava Cake at TanCafe', url: 'https://www.youtube.com/embed/QV_TuHwhT2Q' },
];

const getYouTubeID = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:embed|watch)\?v=|youtu\.be\/|embed\/)([^?&]+)/);
  return match ? match[1] : null;
};

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeID(video.url);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className=" group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
      {isPlaying ? (
        <div className="relative pb-[56.25%]">
          <iframe
            src={`${video.url}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      ) : (
        <div className="relative pb-[56.25%]" onClick={() => setIsPlaying(true)}>
          <img
            src={thumbnail}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-amber-950 p-4 rounded-full text-white">
              <FaPlay className="text-xl" />
            </div>
          </div>
        </div>
      )}
      <div className="bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{video.title}</h3>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: 'scale(1.1)',
            transition: 'transform 0.5s ease-out',
            willChange: 'transform',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-yellow-300">TANCAFE</span> VIDEO GALLERY
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Watch our delicious creations come to life
          </p>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <Link to="/" className="flex items-center hover:text-yellow-300 transition-colors">
              <FaHome className="mr-1" /> HOME
            </Link>
            <span className="mx-1">›</span>
            <span className="text-yellow-300">VIDEOS</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#712d24] mb-12">
            Our Video Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VideoGallery;
