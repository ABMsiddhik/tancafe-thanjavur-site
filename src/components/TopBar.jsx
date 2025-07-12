// src/components/TopBar.jsx
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest
} from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="hidden md:flex bg-[#712d24] font-medium text-white text-md px-20 py-5  flex-col md:flex-row justify-between items-center">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
        <span className="flex items-center gap-1"><FaMapMarkerAlt /> Selvam Nagar</span>
        <span className="flex items-center gap-1"><FaPhoneAlt /> 04362 272000</span>
        <span className="flex items-center gap-1"><FaMapMarkerAlt /> VP Garden</span>
        <span className="flex items-center gap-1"><FaPhoneAlt /> 04362 225964</span>
      </div>
      <div className="flex gap-3 mt-2 md:mt-0">
        <a href='https://www.facebook.com/mytancafe/' target='_blank'>  <FaFacebook className="cursor-pointer hover:text-amber-300" /></a>
        <a href='https://www.instagram.com/accounts/login/?next=%2Fmytancafe%2F&source=omni_redirect' target='_blank'><FaInstagram className="cursor-pointer hover:text-amber-300" /></a>
        <a href='https://x.com/mytancafe/' target='_blank'><FaTwitter className="cursor-pointer hover:text-amber-300" /></a>
        <a href='https://www.pinterest.com/mytancafe/' target='_blank'> <FaPinterest className="cursor-pointer hover:text-amber-300" /></a>
        <a href='https://www.youtube.com/@mytancafe' target='_blank'><FaYoutube className="cursor-pointer hover:text-amber-300" /></a>
      </div>
    </div>
  );
};

export default TopBar;