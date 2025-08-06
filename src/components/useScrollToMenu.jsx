// hooks/useScrollToMenu.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToMenu = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to menu (from state or localStorage)
    const shouldScroll = location.state?.scrollToMenu || 
                        JSON.parse(localStorage.getItem('scrollToMenu'));
    
    if (shouldScroll) {
      const timer = setTimeout(() => {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
          // Clear the flags
          window.history.replaceState({}, document.title);
          localStorage.removeItem('scrollToMenu');
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location]);
};