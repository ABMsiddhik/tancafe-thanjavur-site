import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/Aboutus';
import Foods from './components/Foods';
import Drinks from './components/Drinks';
import Cakes from './components/Cakes';
import Contact from './components/Contact';
import MenuPdf from './components/MenuPdf';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import ShortEats from './components/ShortEats';
import Pizza from './components/Pizza';
import GrilledSandwiches from './components/GrilledSandwiches';
import Spaghetti from './components/Spaghetti';
import MomosFried from './components/MomosFried';
import PastaSpecials from './components/PastaSpecials';
import BurgerSpecials from './components/BurgerSpecials';
import HotDogSpecials from './components/HotDogSpecials';
import Cappuccino from './components/Cappuccino';
import SpecialityShakes from './components/SpecialityShakes';
import TeaBrew from './components/TeaBrew';
import FruitSmoothies from './components/FruitSmoothies';
import Latte from './components/Latte';
import Mojito from './components/Mojito';
import Frappe from './components/Frappe';
import Coolers from './components/Coolers';
import IcedTea from './components/Icedtea';
import Espresso from './components/Espresso';
import GateauxSlices from './components/GateauxSlices';
import Doughnuts from './components/Doughnuts';
import BackToTop from './components/BackToTop';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    
    <Router>
      <TopBar />
      <Navbar />
      
        <ToastContainer />
      <BackToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/short-eats" element={<ShortEats />} />
        <Route path="/category/short-eats" element={<ShortEats />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/category/Pizza" element={<Pizza />} />
        <Route path="/grilled-sandwiches" element={<GrilledSandwiches />} />
        <Route path="/category/grilled-sandwiches" element={<GrilledSandwiches />} />
        <Route path="/spaghetti" element={<Spaghetti />} />
        <Route path="/category/spaghetti" element={<Spaghetti />} />
        <Route path="/momos-fried" element={<MomosFried />} />
        <Route path="/category/momos-fried" element={<MomosFried />} />
        <Route path="/pasta" element={<PastaSpecials />} />
        <Route path="/category/pasta" element={<PastaSpecials />} />
        <Route path="/burger" element={<BurgerSpecials />} />
        <Route path="/category/burger" element={<BurgerSpecials />} />
        <Route path="/pasta" element={<PastaSpecials />} />
        <Route path="/category/pasta" element={<PastaSpecials />} />
        <Route path="/hot-dog" element={<HotDogSpecials />} />
        <Route path="/category/hot-dog" element={<HotDogSpecials />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/cappuccino" element={<Cappuccino />} />
        <Route path="/drinks/cappuccino" element={<Cappuccino />} />
        <Route path="/speciality-shakes" element={<SpecialityShakes />} />
        <Route path="/drinks/speciality-shakes" element={<SpecialityShakes />} />
        <Route path="/tea-brew" element={<TeaBrew />} />
        <Route path="/drinks/tea-brew" element={<TeaBrew />} />
        <Route path="/fruit-smoothies" element={<FruitSmoothies />} />
        <Route path="/drinks/fruit-smoothies" element={<FruitSmoothies />} />
        <Route path="/latte" element={<Latte />} />
        <Route path="/drinks/latte" element={<Latte />} />
        <Route path="/mojito" element={<Mojito />} />
        <Route path="/drinks/mojito" element={<Mojito />} />
        <Route path="/frappe" element={<Frappe />} />
        <Route path="/drinks/frappe" element={<Frappe />} />
        <Route path="/coolers" element={<Coolers />} />
        <Route path="/drinks/coolers" element={<Coolers />} />
        <Route path="/iced-tea" element={<IcedTea />} />
        <Route path="/drinks/iced-tea" element={<IcedTea />} />
        <Route path="/espresso" element={<Espresso />} />
        <Route path="/drinks/espresso" element={<Espresso />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/gateaux-slices" element={<GateauxSlices />} />
        <Route path="/cakes/gateaux-slices" element={<GateauxSlices />} />
        <Route path="/doughnuts" element={<Doughnuts />} />
        <Route path="/cakes/doughnuts" element={<Doughnuts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu-pdf" element={<MenuPdf />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="videos" element={<VideoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
