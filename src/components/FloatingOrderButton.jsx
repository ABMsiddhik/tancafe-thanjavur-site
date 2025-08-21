import React, { useState, useEffect } from 'react';
import { Truck, Heart, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingOrderButton = () => {
  const [showDeliveryStatus, setShowDeliveryStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Toggle delivery status message every 3 seconds
    const interval = setInterval(() => {
      setShowDeliveryStatus(prev => !prev);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-10 left-10 z-50">
      <div className="relative group cursor-pointer">
        {/* Floating delivery status */}
        <div className="absolute -top-12 -right-60 transform transition-all duration-500">
          <div className={`bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full shadow-xl font-semibold text-sm flex items-center gap-2 transform transition-all duration-500 min-w-max ${
            showDeliveryStatus ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-2 opacity-0 scale-95'
          }`}onClick={() => navigate('/cart')} >
            <CheckCircle className="w-4 h-4 animate-pulse" />
            Online Delivery Available! | Upto 15kms
          </div>
       
        </div>

        {/* Delivery truck driving animation path */}
        <div className="absolute -top-8 -right-32 w-40 h-2 opacity-30">
          <div className="w-full h-px bg-gradient-to-l from-transparent via-red-400 to-transparent animate-pulse"></div>
        </div>

        {/* Main order button */}
        <div className="relative">
          {/* Pulsing ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-ping opacity-30"></div>
          
          {/* Main button with truck icon */}
          <div
            className="animate-drive-truck
              relative bg-red-600 rounded-lg flex items-center justify-center p-2 shadow-lg
              transition-all duration-300 
              hover:scale-110 hover:shadow-3xl
              group-hover:animate-pulse
              border-2 border-white/20
            "
            onClick={() => navigate('/cart')}
          >
            <Truck className="w-6 h-6 text-white" />
            
            {/* Lightning bolt for online delivery */}
            <div className="absolute -top-1 -right-1 bg-red-400 rounded-full p-1">
              <Zap className="w-3 h-3 text-white animate-bounce" />
            </div>

            {/* Heart indicator */}
            <div className="absolute -bottom-1 -left-1 bg-red-800 rounded-full p-1">
              <Heart className="w-3 h-3 text-white animate-pulse" fill="currentColor" />
            </div>
          </div>

          {/* Order text */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"onClick={() => navigate('/cart')}>
               Quick Order
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-6 -right-6">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute -top-4 -left-6">
          <div className="w-1 h-1 bg-red-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="absolute -bottom-4 -right-8">
          <div className="w-1 h-1 bg-red-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes drive-truck {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg); 
          }
          25% { 
            transform: translateX(3px) translateY(-1px) rotate(1deg); 
          }
          50% { 
            transform: translateX(0) translateY(0) rotate(0deg); 
          }
          75% { 
            transform: translateX(-3px) translateY(1px) rotate(-1deg); 
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-drive-truck {
          animation: drive-truck 1.8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingOrderButton;