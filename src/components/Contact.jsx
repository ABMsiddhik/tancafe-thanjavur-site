import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import heroImage from '../assets/images/bgImage2.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const location = useLocation();


  useEffect(() => {
    if (location.state?.scrollToMenu) {
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location.state]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    const whatsappNumber = "919360066917";
    const text = `*Hello TanCafe!* \n\nNew contact request:\n\n*Name:* ${name}\n\n*Email:* ${email}\n\n*Phone:* ${phone}\n\n*Message:* ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
   <Helmet>
  <title>Contact TanCafe in Thanjavur | Contact Coffee Shop, Restaurant, Vegetarian Restaurant, Hotel in Thanjavur | Best Cafe in Thanjavur, Coffee Shop in Thanjavur, Vegetarian Restaurant in Thanjavur</title>
  <meta 
    name="description" 
    content="Contact TanCafe in Thanjavur for orders, reservations, and inquiries. Visit our best cafe in Thanjavur, coffee shop in Thanjavur, or vegetarian restaurant in Thanjavur at Selvam Nagar or VP Garden locations. Order online at tancafe.co.in." 
  />
  <meta 
    name="keywords" 
    content="TanCafe contact in Thanjavur, cafe in Thanjavur, coffee shop in Thanjavur, vegetarian hotel in Thanjavur, vegetarian restaurant in Thanjavur, famous cafe in Thanjavur, famous coffee shop in Thanjavur, famous vegetarian hotel in Thanjavur, best cafe in Thanjavur, best coffee shop in Thanjavur, best vegetarian restaurant in Thanjavur, vegetarian coffee shop in Thanjavur, food delivery in Thanjavur, cake orders in Thanjavur, online order delivery tancafe.co.in" 
  />
  
  {/* Open Graph Tags */}
  <meta property="og:title" content="Contact TanCafe in Thanjavur | Best Cafe in Thanjavur, Coffee Shop in Thanjavur, Vegetarian Restaurant in Thanjavur" />
  <meta 
    property="og:description" 
    content="Get in touch with TanCafe in Thanjavur for orders, reservations, and inquiries at our best cafe in Thanjavur, coffee shop in Thanjavur, or vegetarian restaurant in Thanjavur. Visit tancafe.co.in for online ordering." 
  />
  <meta property="og:image" content={heroImage} />
  <meta property="og:url" content="https://tancafe.co.in/" />
</Helmet>
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            <span className="text-yellow-300">Get</span> In Touch
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            We'd love to hear from you! Contact Tancafe for orders, feedback, special requests or any questions about our foods, drinks and cakes.
          </p>

          <div className="text-sm text-gray-300 flex justify-center items-center">
            <a href="/" className="hover:text-yellow-300 transition-colors">HOME</a>
            <span className="mx-2">&gt;</span>
            <span className="text-yellow-300">CONTACT US</span>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg> </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section - Add id here */}
      <section id="contact-section" className="py-20 bg-gradient-to-b from-[#f8f4ee] to-[#e8d9c5] px-4 sm:px-6 lg:px-20">        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#712d24] mb-4">Contact Information</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team is ready to assist you with any questions about our menu, catering services, or special orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 text-[#712d24]">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#712d24] focus:border-[#712d24] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#712d24] focus:border-[#712d24] transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#712d24] focus:border-[#712d24] transition-all"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#712d24] focus:border-[#712d24] transition-all"
                  placeholder="Tell us about your inquiry..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#712d24] hover:bg-[#5a241d] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <span>SEND MESSAGE</span>
                <FaPaperPlane className="ml-2" />
              </button>
            </form>

          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#712d24] mb-6">Our Locations</h3>

              {/* Selvam Nagar */}
              <div className="flex mb-8">
                <div className="mr-4 text-[#712d24]">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Selvam Nagar</h4>
                  <p className="text-gray-600 mb-1">4A, Selvam Nagar, Medical College Road</p>
                  <p className="text-gray-600 mb-1">Thanjavur - 613 007</p>
                  <div className="flex items-center text-[#712d24] hover:underline mt-2">
                    <HiOutlinePhone className="mr-2" />
                    <a href="tel:04362272000">04362-272000</a>
                  </div>
                  <div className="flex items-center text-[#712d24] hover:underline mt-1">
                    <HiOutlineMail className="mr-2" />
                    <a href="mailto:tancafe2014@gmail.com">tancafe2014@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* VP Garden */}
              <div className="flex">
                <div className="mr-4 text-[#712d24]">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">VP Garden</h4>
                  <p className="text-gray-600 mb-1">283/1A-5, VP Garden, Ever Gold Tower</p>
                  <p className="text-gray-600 mb-1">New Bus Stand, Thanjavur - 613007</p>
                  <div className="flex items-center text-[#712d24] hover:underline mt-2">
                    <HiOutlinePhone className="mr-2" />
                    <a href="tel:04362225964">04362-225964</a>
                  </div>
                  <div className="flex items-center text-[#712d24] hover:underline mt-1">
                    <HiOutlineMail className="mr-2" />
                    <a href="mailto:tancafe2022@gmail.com">tancafe2022@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#712d24] mb-6">
                <FaClock className="inline mr-2" />
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Open 7 Days a Week</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    DAILY
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-800">10:00 AM - 9:00 PM</p>
                  <p className="text-sm text-gray-500 mt-1">Same hours every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#712d24] mb-4">Find Us on Map</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our conveniently located branches in Thanjavur
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Selvam Nagar Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#712d24] p-4 text-white flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <h3 className="text-xl font-bold">TANCAFE – SELVAM NAGAR</h3>
              </div>
              <iframe
                title="Selvam Nagar Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31355.698367501864!2d79.125066!3d10.775861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8bb474fe3c1%3A0x1ad9d6289ee23d88!2sCoffee%20Shop%20%7C%20Restaurant%20%7C%20Tan%20Cafe!5e0!3m2!1sen!2sin!4v1751949644777!5m2!1sen!2sin"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>

            {/* VP Garden Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#712d24] p-4 text-white flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <h3 className="text-xl font-bold">TANCAFE – VP GARDEN</h3>
              </div>
              <iframe
                title="VP Garden Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31357.623212807688!2d79.118606!3d10.757365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9164387a8a7%3A0xbae20269e2590b3c!2sTANCAFE%20(Coffee%20Shop%20%7C%20Restaurant%20%7C%20Tan%20Cafe)!5e0!3m2!1sen!2sin!4v1751949907222!5m2!1sen!2sin"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;