import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  const locations = [
    { 
      place: "Selvam Nagar", 
      phone: "04362 272000",
      address: "4A, Selvam Nagar, Medical College Road, Thanjavur - 613 007"
    },
    { 
      place: "VP Garden", 
      phone: "04362 225964",
      address: "283/1A-5, VP Garden, Ever Gold Tower, New Bus Stand, Thanjavur - 613007"
    }
  ];

  const socialLinks = [
    { 
      icon: <FaFacebook className="text-lg" />, 
      url: "https://www.facebook.com/mytancafe/",
      name: "Facebook"
    },
    { 
      icon: <FaInstagram className="text-lg" />, 
      url: "https://www.instagram.com/mytancafe/",
      name: "Instagram"
    },
    { 
      icon: <FaXTwitter className="text-lg" />, 
      url: "https://x.com/mytancafe/",
      name: "Twitter"
    },
    { 
      icon: <FaPinterest className="text-lg" />, 
      url: "https://www.pinterest.com/mytancafe/",
      name: "Pinterest"
    },
    { 
      icon: <FaYoutube className="text-lg" />, 
      url: "https://www.youtube.com/@mytancafe",
      name: "YouTube"
    }
  ];

  return (
    <div className="bg-[#712d24] text-white hidden md:flex">
      <div className="container mx-auto px-4 py-3 md:py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          {/* Location and Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center group" title={location.address}>
                <FaMapMarkerAlt className="mr-2 text-amber-300" />
                <span className="mr-4">{location.place}</span>
                <a 
                  href={`tel:${location.phone.replace(/\s/g, '')}`}
                  className="flex items-center hover:text-amber-300 transition-colors"
                  aria-label={`Call ${location.place} branch`}
                >
                  <FaPhoneAlt className="mr-2 text-amber-300" />
                  {location.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors group"
                aria-label={`Follow us on ${social.name}`}
              >
                <span className="text-white group-hover:text-amber-300 transition-colors">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;