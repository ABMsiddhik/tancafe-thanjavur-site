
import '../App.css';
import { FaUtensils, FaGlassCheers, FaBirthdayCake, FaUser, FaStar } from 'react-icons/fa';
import bgImage from '../assets/images/tancafe-bg1.jpg';
import { FaEnvelope } from 'react-icons/fa';
import friesImg from '../assets/images/fries.png';
import pizzaImg from '../assets/images/foods.jpg';
import drinkImg from '../assets/images/drinks.jpg';
import cakeImg from '../assets/images/cakes.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizzaSpecial from '../assets/images/pizza-special.jpg';
import frappe from '../assets/images/frappe.jpg';
import smoothie from '../assets/images/smoothie.jpg';
import doughnuts from '../assets/images/doughnuts.jpg';
import bgImage2 from '../assets/images/bgImage2.jpg';
import { FaHamburger, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Optional: auto-rotate slides
    autoplaySpeed: 3000, // Optional: 3 seconds
    arrows: true, // Show navigation arrows
    centerMode: true, // Center the current slide
    centerPadding: "0", // No extra padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const specials = [
    { title: 'DOUGHNUTS', image: doughnuts },
    { title: 'PIZZA', image: pizzaSpecial },
    { title: 'FRAPPE', image: frappe },
    { title: 'FRUIT SMOOTHIES', image: smoothie }
  ];

  return (
    <>
      {/* Hero Image Section with Dark Overlay + Blur */}
      <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Darkness + Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: 'brightness(0.4) blur(2px)'
          }}
        />

        {/* Extra Dark Overlay for Better Contrast */}
        <div className="absolute" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          {/* Title with Better Font */}
          <h2 className="text-4xl sm:text-5xl font-serif italic mb-2 text-white drop-shadow-lg">TanCafe</h2>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-sans text-white drop-shadow-lg">
            Restaurant Thanjavur
          </h1>

          {/* Menu Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex flex-col items-center text-sm">
              <Link to='/foods'className='flex flex-col justify-center items-center'><FaUtensils className="text-3xl mb-2 text-white drop-shadow-md" />
                <span className="font-medium tracking-wider">FOODS</span></Link>
            </div>
            <div className="flex flex-col items-center text-sm">
              <Link to='/drinks'className='flex flex-col justify-center items-center' > <FaGlassCheers className="text-3xl mb-2 text-white drop-shadow-md" />
                <span className="font-medium tracking-wider">DRINKS</span></Link>
            </div>
            <div className="flex flex-col items-center text-sm">
              <Link to='/cakes'className='flex flex-col justify-center items-center' >  <FaBirthdayCake className="text-3xl mb-2 text-white drop-shadow-md" />
                <span className="font-medium tracking-wider">CAKES</span></Link>
            </div>
          </div>

          {/* Order Button with Shadow */}
          <Link to="/foods">   <button className="bg-[#832e2e] hover:bg-[#a53e3e] px-8 py-3 rounded-md font-bold text-lg shadow-xl transform hover:scale-105 transition-all">
            ORDER NOW
          </button> </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg> </div>
      </div>

      {/* Our Story + Book A Table Section */}
      <div className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-stretch justify-between gap-12 max-w-7xl mx-auto">
        {/* Left - Our Story */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-4xl font-serif italic text-gray-800 mb-4">Our Story – TanCafe</h2>
          <h3 className="text-2xl font-semibold text-black mb-6 font-sans">
            Coffee | Restaurant in Thanjavur
          </h3>

          <ul className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <li className="border-l-4 border-[#832e2e] pl-4">Good variety of food items such as pizzas, burgers, sandwiches, smoothies, and coffees.</li>
            <li className="border-l-4 border-[#832e2e] pl-4">Excellent taste and quality of food items including cakes, burgers, appetizers and desserts.</li>
            <li className="border-l-4 border-[#832e2e] pl-4">Friendly staff and good service provided to customers.</li>
            <li className="border-l-4 border-[#832e2e] pl-4">Budget-friendly menu with vegetarian options available.</li>
            <li className="border-l-4 border-[#832e2e] pl-4">We hope our little creation can provide the refreshment and relaxation to the people of Thanjavur. We are happy to serve coffee lovers and foodies alike.</li>
            <li className="border-l-4 border-[#832e2e] pl-4">We Always serve the vaping hot and delicious foods</li>
          </ul>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Online Delivery Card */}
            <div className="bg-red-100 p-4 text-center font-semibold text-red-700 rounded-lg border border-red-200">
              ONLINE DELIVERY <br />
              <span className="text-sm text-gray-700">Available in Thanjavur</span>
            </div>

            {/* Feedback Card with Email Icon */}
            <a
              href="mailto:feedbacktancafe@gmail.com"
              className="bg-gray-100 p-4 text-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#5D4037] text-lg" />
                <span className="font-semibold text-gray-800">YOUR FEEDBACK</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">feedbacktancafe@gmail.com</p>
            </a>
          </div>
        </div>

        {/* Right - Book A Table */}
        <div id="book-table" className="d:w-1/2 flex flex-col bg-white p-8 shadow-xl rounded-lg border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-red-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl text-red-600 mb-4 shadow-inner">
              🍽️
            </div>
            <h3 className="text-2xl font-bold text-gray-800">BOOK A TABLE</h3>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.elements.name.value;
              const phone = form.elements.phone.value;
              const address = form.elements.address.value;
              const persons = form.elements.persons.value;
              const time = form.elements.time.value;
              const date = form.elements.date.value;

              const message = `*Hi TanCafe!* I'd like to book a table:

*Name:* ${name}

*Phone:* ${phone}

*Address:* ${address}

*Persons:* ${persons}

*Date:* ${date}

*Time:* ${time}`;

              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/918248794519?text=${encodedMessage}`, '_blank');
            }}

            className="space-y-5 w-full max-w-xl mx-auto px-4 sm:px-6 md:px-0"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#832e2e] focus:border-transparent"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#832e2e] focus:border-transparent"
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#832e2e] focus:border-transparent"
              rows="3"
              required
            ></textarea>
            <select
              name="persons"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#832e2e] focus:border-transparent"
              required
            >
              <option value="">Select Persons</option>
              <option value="1 Person">1 Person</option>
              <option value="2 Persons">2 Persons</option>
              <option value="3+ Persons">3+ Persons</option>
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="time"
                placeholder="Preferred Time (e.g. 6:45 PM)"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#832e2e]"
                required
              />
              <input
                type="date"
                name="date"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#832e2e]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#832e2e] hover:bg-[#a53e3e] text-white py-3 rounded-lg font-bold text-lg shadow-md transition-all"
            >
              BOOK NOW
            </button>
          </form>

        </div>


      </div>
      {/* Branch Contact Section (Inspired by Screenshot) */}
      <div className="bg-white py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">

          {/* Left Branch - SELVAM NAGAR */}
          <div>
            <h3 className="text-xl font-bold mb-2">SELVAM NAGAR</h3>
            <p className="text-red-600 font-semibold">Address</p>
            <p className="text-gray-800">
              4A, Selvam Nagar, Medical College Road, Thanjavur - 613 007.
            </p>
            <p className="mt-3 text-red-600 font-semibold">Telephone</p>
            <p className="text-gray-800">04362–272000</p>
            <p className="mt-3 text-red-600 font-semibold">Email</p>
            <p className="text-gray-800">tancafe2014@gmail.com</p>
          </div>

          {/* Center Image - French Fries */}
          <div className="flex justify-center">
            <img src={friesImg} alt="Fries Icon" className="w-40 h-auto mx-auto" />

          </div>

          {/* Right Branch - VP GARDEN */}
          <div>
            <h3 className="text-xl font-bold mb-2">VP GARDEN</h3>
            <p className="text-red-600 font-semibold">Address</p>
            <p className="text-gray-800">
              283/1A-5, VP Garden, Ever Gold Tower,<br />
              New Bus Stand, Thanjavur - 613007.
            </p>
            <p className="mt-3 text-red-600 font-semibold">Telephone</p>
            <p className="text-gray-800">04362–225964</p>
            <p className="mt-3 text-red-600 font-semibold">Email</p>
            <p className="text-gray-800">tancafe2022@gmail.com</p>
          </div>

        </div>
      </div>
      <div className="bg-white py-16 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <p className="text-[#832e2e] font-serif italic text-lg mb-2">Discover</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR MENU</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our talented in-house pastry chef will design and create the cake of your dreams! Made with the greatest love and care, our cakes taste like heaven!
        </p>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Foods */}
          <div className="shadow-lg rounded-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
            <img src={pizzaImg} alt="Pizza" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">FOODS</h3>
              <hr className="my-2 w-16 border-t-2 border-[#832e2e] mx-auto" />
              <Link
                to="/foods"
                className="text-[#832e2e] font-semibold mt-4 inline-block"
              >
                More Varieties
              </Link>
            </div>
          </div>

          {/* Card 2 - Drinks */}
          <div className="shadow-lg rounded-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
            <img src={drinkImg} alt="Drinks" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">DRINKS</h3>
              <hr className="my-2 w-16 border-t-2 border-[#832e2e] mx-auto" />
              <Link
                to="/drinks"
                className="text-[#832e2e] font-semibold mt-4 inline-block"
              >
                More Varieties
              </Link>
            </div>
          </div>

          {/* Card 3 - Cakes */}
          <div className="shadow-lg rounded-md overflow-hidden bg-white hover:shadow-xl transition-shadow">
            <img src={cakeImg} alt="Cakes" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">CAKES</h3>
              <hr className="my-2 w-16 border-t-2 border-[#832e2e] mx-auto" />
              <Link
                to="/cakes"
                className="text-[#832e2e] font-semibold mt-4 inline-block"
              >
                More Varieties
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7] py-16 px-4 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">OUR SPECIALS</h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base">Experience the Legend, Taste the Legend</p>

        <div className="px-4">
          <Slider {...settings}>
            {specials.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden h-full mx-2">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <hr className="w-16 border-t-2 border-[#832e2e] mx-auto my-2" />

                    {/* Updated button with navigation */}
                    <Link
                      to={
                        item.title === 'DOUGHNUTS' ? '/cakes' :
                          item.title === 'PIZZA' ? '/foods' :
                            item.title === 'FRAPPE' ? '/drinks' :
                              '/drinks'
                      }
                      className="mt-4 inline-block bg-[#832e2e] hover:bg-[#a53e3e] text-white px-6 py-2 rounded-md transition-colors"
                    >
                      More Varieties
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bgImage2})`,
        }}
      >
        {/* Dark Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-xm bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 drop-shadow-lg">
            We Always serve the vaping hot and delicious foods
          </h1>

          {/* Dash separator */}
          <div className="text-[#f87171] font-bold text-3xl mb-6">|</div>

          {/* Book a Table Button */}
          <button
            onClick={() => {
              const element = document.getElementById('book-table');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#832e2e] hover:bg-[#a53e3e] text-white px-6 py-3 rounded-full font-semibold text-lg transition drop-shadow-lg"
          >
            BOOK A TABLE
          </button>
        </div>
      </div>
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaHamburger className="text-4xl text-[#832e2e] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Foods</h3>
            <p className="text-gray-600">
              Our talented in-house pastry chef will design and create the cake of your dreams! Made with the greatest love and care, our cakes taste like heaven!
            </p>
          </div>
          <div className="text-center">
            <FaTruck className="text-4xl text-[#832e2e] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Online Delivery</h3>
            <p className="text-gray-600">
              Enjoy at home! Place your order online for carryout, curbside pickup delivery, or contactless delivery.
            </p>
          </div>
          <div className="text-center">
            <FaUtensils className="text-4xl text-[#832e2e] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Delicious Recipes</h3>
            <p className="text-gray-600">
              Discover the flavors that have made us India's favorite. Come, indulge in our signature dishes and make every meal unforgettable!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <div className="row">
          <div className="max-w-xl mx-auto">
            <div className="site-heading text-center">
              <h3 className="text-lg text-gray-600">Reviews</h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Testimonials</h2>
              <h4 className="text-gray-600">
                Tancafe - Customers Experience For Google Reviews
              </h4>
            </div>
          </div>
        </div>
        <div className="row mt-12">
          <div className="w-full">
            <Slider
              {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                centerMode: true,
                centerPadding: "0",
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: { slidesToShow: 2, centerMode: false },
                  },
                  {
                    breakpoint: 768,
                    settings: { slidesToShow: 1, centerMode: false },
                  },
                ],
                customPaging: (i) => <button className="custom-dot"></button>, // Custom dot styling
              }}
            >
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic flex-grow">
                    Nice and Calm place to hangout... *Good Ambience *Prices are
                    Reasonable *Staffs are good they asking me review about the foods I
                    tried... Pasta is ok.. But the hotdogs are not good... Smoothies
                    are good...I gave 4stars... If you are a couple definitely a worthy
                    one! To spend time in tanjore..🤘
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Balaji Thangaraj</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    Nice and cosy atmosphere,great to sit, chat and spend time. Good
                    food. Cakes are really nice. Upto expectation. Browny with
                    Icecream was awesome. And veg spicy burger is also good. Mint
                    mojito was outstanding. Loved it.
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Kulbhushan Sharma</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    Highly highly recommend you to visit this place! If you are
                    planning for a small birthday party or a get together function
                    inside Thanjavur, Tancafe is the best pick for you. Especially the
                    way they treat the customers and their support in arranging the
                    parties are phenomenal! Simple and Elegant❤️
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Vignesh Ravichandran</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    Best place for small functions. we celebrate Birthday party
                    @tancafe. Treated very well and cordially work with us for
                    decoration. Best place for small party and other small event in
                    Thanjavur.
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">HariHara Sudhan</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    Branch of puniyamorthi departmental store serves good food with
                    delicious taste low cost pizzas are with more toppings and burgur
                    and other sandwich are with more stuff there is swiggy and Zomato
                    eligibility also
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Abdul Fazil</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    We had a beautiful brunch over here. Food was excellent. Staff were
                    very polite, ambience is nice. A must try is their frappe mocha.
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Shaayan Raychaudhuri</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    A lovely small shop next to Aalia hotel. Lovely ambience and
                    delightful staff. The food is very good. Their cold mocha is a must
                    try.
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Samik Raychaudhuri</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    The second tan cafe in Tnj but this cafe is in a good spot with
                    good views on both sides and minimal looking cafe in Tnj which
                    makes it a good spot for a workplace /hangout spot for hours.
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Easvar Prasad KR</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    Wonderful atmosphere and fantastic and delicious food..
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Lavina Gopalsamy</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center h-96 w-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    Their Choco lava cake and Cappuccino are must-try! We tried their
                    milkshake but it was not good. However, everything was at somewhat
                    reasonable price.
                  </p>
                  <div className="thumb flex justify-center mb-4">
                    <FaUser className="text-4xl text-sky-500" />
                  </div>
                  <div className="clients-info">
                    <h5 className="font-semibold text-gray-800">Madhu Mitha</h5>
                    <div className="rating flex justify-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < 4.5 ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;

