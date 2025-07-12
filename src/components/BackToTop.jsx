import React, { useEffect, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const backToTopButton = buttonRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    };

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopButton.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      id="back-to-top"
      className="fixed bottom-8 right-8 z-50 bg-[#712d24] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 opacity-0 invisible"
      aria-label="Back to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default BackToTop;