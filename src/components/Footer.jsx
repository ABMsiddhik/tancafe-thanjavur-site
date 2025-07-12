import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import footerBg from '../assets/images/tancafe-footer.png';

function Footer() {
  return (
    <>
      <footer 
        className="relative text-white py-16 px-6 md:px-12"
        style={{ 
          backgroundImage: `url(${footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 backdrop-blur-xm bg-amber-950/50"></div>
    
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    
            {/* Location 1 */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MdLocationOn className="mr-2 text-[#e67e22]" /> SELVAM NAGAR
              </h3>
              <p className="mb-3 leading-relaxed">4A, Selvam Nagar, Medical College Road, Thanjavur - 613007.</p>
              <p className="flex items-center mb-2">
                <MdPhone className="mr-2 text-[#e67e22]" /> 04362-272000
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-[#e67e22]" /> tancafe2014@gmail.com
              </p>
            </div>
    
            {/* Location 2 */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MdLocationOn className="mr-2 text-[#e67e22]" /> VP GARDEN
              </h3>
              <p className="mb-3 leading-relaxed">283/1A-5, VP Garden, Ever Gold Tower, New Bus Stand, Thanjavur - 613007.</p>
              <p className="flex items-center mb-2">
                <MdPhone className="mr-2 text-[#e67e22]" /> 04362-225964
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-[#e67e22]" /> tancafe2022@gmail.com
              </p>
            </div>
    
            {/* Profile Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">PROFILE LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-[#e67e22] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#e67e22] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/cakes" className="hover:text-[#e67e22] transition-colors">Cakes</Link>
                </li>
                <li>
                  <Link to="/drinks" className="hover:text-[#e67e22] transition-colors">Drinks</Link>
                </li>
                <li>
                  <Link to="/foods" className="hover:text-[#e67e22] transition-colors">Foods</Link>
                </li>
              </ul>
            </div>
    
            {/* Opening Hours & Social */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MdAccessTime className="mr-2 text-[#e67e22]" /> OPENING HOURS
              </h3>
              <p className="mb-6">MON to SUN : 10:00 AM – 09:00 PM</p>
    
              <h3 className="text-xl font-bold mb-6">FOLLOW US</h3>
              <div className="flex space-x-4 mb-6">
                <a href="https://www.facebook.com/mytancafe/" target='_blank' rel="noopener noreferrer" className="text-white text-lg p-2 rounded-full bg-gray-800 hover:bg-[#e67e22] transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="https://x.com/mytancafe/" target='_blank' rel="noopener noreferrer" className="text-white text-lg p-2 rounded-full bg-gray-800 hover:bg-[#e67e22] transition-all duration-300">
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/accounts/login/?next=%2Fmytancafe%2F&source=omni_redirect" target='_blank' rel="noopener noreferrer" className="text-white text-lg p-2 rounded-full bg-gray-800 hover:bg-[#e67e22] transition-all duration-300">
                  <FaInstagram />
                </a>
              </div>
    
              <div>
                <p className="font-semibold mb-2">Feedback:</p>
                <a href="mailto:feedbacktancafe@gmail.com" className="flex items-center hover:text-[#e67e22] transition-colors">
                  <FaEnvelope className="mr-2" /> feedbacktancafe@gmail.com
                </a>
              </div>
            </div>
          </div>
    
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-600 text-center text-sm">
            <p>© Copyright 2024. All Rights Reserved by <strong className="text-[#e67e22]">TanCafe</strong> – Developed By <strong>ABM IT SUPPORT</strong></p>
            <p className="mt-2 opacity-80 text-amber-300">Note: Images are for illustration purpose only</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;