import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPaperPlane, FaEnvelope, FaClock, FaUser, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import heroBg from '../assets/images/foods-bg.jpg';
import shakesImg from '../assets/images/shakes1.png';
import friesImg from '../assets/images/fries.png';

import Footer from './Footer';

const Aboutus = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToMenu) {
            setTimeout(() => {
                const menuSection = document.getElementById('our-story-section');
                if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                    window.history.replaceState({}, document.title);
                }
            }, 100);
        }
    }, [location.state]);
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center">
                <img
                    src={heroBg}
                    alt="About Banner"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
                <div className="relative z-10 text-white text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                        ABOUT TANCAFE
                    </h2>
                    <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-100">
                        Tancafe offers delicious foods, refreshing drinks and irresistible cakes
                        in a warm, welcoming space — a perfect spot for coffee lovers, foodies
                        and anyone craving sweet moments.
                    </p>


                    <div className="flex items-center justify-center gap-2 text-sm">
                        <FaHome />
                        <Link to="/" className="hover:underline">HOME</Link>
                        <span>›</span>
                        <span className="text-amber-400">ABOUT US</span>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg> </div>
            </section>

            {/* Info Row */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 text-center bg-amber-50 roun">
                {/* Delivery Card */}
                <div className="bg-white p-8 rounded-2xl">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-[#712d24] mb-2">ONLINE DELIVERY</h3>
                        <p className="text-gray-600 mb-4">Available in Thanjavur</p>
                        <a
                            href="tel:04362272000"
                            className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                        >
                            04362 272000
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src={shakesImg}
                        alt="Milkshake"
                        className="h-auto w-auto object-contain"
                    />
                </div>

                {/* Newsletter Card */}
                <div className="bg-white p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-[#712d24] mb-2">GET AN OFFER</h3>
                    <p className="text-gray-600 mb-4">
                        Subscribe today and get an offer everyday. It's easy and takes just a couple of minutes.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#712d24] focus:border-[#712d24] outline-none"
                        />
                        <button className="bg-[#712d24] hover:bg-[#5a241b] text-white px-4 rounded-r-lg transition-colors">
                            <FaPaperPlane className="text-lg" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Story*/}

            <div id='our-story-section' className="bg-white py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Left Column - Our Story */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <h2 className="text-3xl font-serif italic text-[#712d24] mb-3">Our Story – TanCafe</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                            Coffee | Restaurant in Thanjavur
                        </h3>

                        <ul className="space-y-5">
                            {[
                                "Good variety of food items such as pizzas, burgers, sandwiches, smoothies, and coffees.",
                                "Excellent taste and quality of food items including cakes, burgers, appetizers and desserts.",
                                "Friendly staff and good service provided to customers.",
                                "Budget-friendly menu with vegetarian options available.",
                                "We hope our little creation can provide the refreshment and relaxation to the people of Thanjavur. We are happy to serve coffee lovers and foodies alike.",
                                "We Always serve the piping hot and delicious foods"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-[#712d24] w-1 h-full min-h-[50px] rounded-full mr-4"></div>
                                    <p className="text-gray-700 flex-1">{item}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Online Delivery Card */}
                            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="font-bold text-red-700">ONLINE DELIVERY</h4>
                                <p className="text-sm text-gray-600 mt-1">Available in Thanjavur</p>
                            </div>

                            {/* Feedback Card */}
                            <a
                                href="mailto:feedbacktancafe@gmail.com"
                                className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-all flex flex-col hover:bg-amber-50"
                            >
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="text-amber-600" />
                                    <span className="font-semibold text-gray-800">YOUR FEEDBACK</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">feedbacktancafe@gmail.com</p>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Opening Hours */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-[#712d24] mb-6 flex items-center">
                            <FaClock className="mr-3 text-[#712d24]" />
                            Opening Hours
                        </h3>
                        <div className="flex-grow flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                    <span className="font-medium text-gray-700">Open 7 Days a Week</span>
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        DAILY
                                    </span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">10:00 AM - 9:00 PM</p>
                                    <p className="text-gray-500 mt-2">Same hours every day</p>
                                </div>
                            </div>

                            {/* Optional: Add a decorative image or additional info */}
                            <div className="mt-8 bg-gray-100 rounded-lg p-4 text-center">
                                <p className="text-sm text-gray-600 italic">
                                    We welcome you to experience our cozy atmosphere and delicious offerings
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Section */}
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
};

export default Aboutus;
