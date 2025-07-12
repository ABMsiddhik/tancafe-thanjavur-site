import React, { useContext, useState } from 'react';
import { CartContext } from '../assets/context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaHamburger, FaCoffee, FaBirthdayCake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const { 
    cart, 
    addToCart, 
    decreaseQty, 
    removeFromCart, 
    clearCart,
    totalItems 
  } = useContext(CartContext);
  
  const [showCheckout, setShowCheckout] = useState(false);
  const cartItems = Object.values(cart);

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      {showCheckout && (
        <CheckoutForm 
          onClose={() => setShowCheckout(false)} 
          cartItems={cartItems}
        />
      )}

      {/* Only show these navigation links when cart has items */}
      {cartItems.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <Link 
            to="/foods" 
            className="flex items-center justify-center gap-2 bg-[#712d24] text-white px-5 py-3 rounded-full hover:bg-[#5a241d] transition font-medium w-auto"
            aria-label="Browse Foods"
          >
            <FaHamburger className="text-lg" />
            Foods
          </Link>
          <Link 
            to="/drinks" 
            className="flex items-center justify-center gap-2 bg-[#712d24] text-white px-5 py-3 rounded-full hover:bg-[#5a241d] transition font-medium w-auto"
            aria-label="Browse Drinks"
          >
            <FaCoffee className="text-lg" />
            Drinks
          </Link>
          <Link 
            to="/cakes" 
            className="flex items-center justify-center gap-2 bg-[#712d24] text-white px-5 py-3 rounded-full hover:bg-[#5a241d] transition font-medium w-auto"
            aria-label="Browse Cakes"
          >
            <FaBirthdayCake className="text-lg" />
            Cakes
          </Link>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#712d24]">
          Your Cart {totalItems > 0 && `(${totalItems})`}
        </h2>
        {cartItems.length > 0 && (
          <button 
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Clear All
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-xl shadow-lg">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#712d24] mb-4">Explore Our Menu</h3>
            <p className="text-gray-600 mb-6">Add some delicious items to your cart from our wide range of vegetarian delights!</p>
            <div className="flex  sm:flex-row justify-center gap-4">
              <Link 
                to="/foods" 
                className="flex items-center justify-center gap-2 bg-[#712d24] text-white px-5 py-3 rounded-full hover:bg-[#5a241d] transition font-medium"
                aria-label="Browse Foods"
              >
                <FaHamburger className="text-lg" />
                Foods
              </Link>
              <Link 
                to="/drinks" 
                className="flex items-center justify-center gap-2 bg-[#712d24] text-white px-5 py-3 rounded-full hover:bg-[#5a241d] transition font-medium"
                aria-label="Browse Drinks"
              >
                <FaCoffee className="text-lg" />
                Drinks
              </Link>
              <Link 
                to="/cakes" 
                className="flex items-center justify-center gap-2 bg-[#712d24] text-white px-5 py-3 rounded-full hover:bg-[#5a241d] transition font-medium"
                aria-label="Browse Cakes"
              >
                <FaBirthdayCake className="text-lg" />
                Cakes
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.name} className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.name)}
                      className="bg-gray-200 hover:bg-gray-300 p-2 rounded transition"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="text-sm" />
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item.name, item.image)}
                      className="bg-[#712d24] text-white p-2 rounded hover:bg-[#5a241d] transition"
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 hover:text-red-700 p-2 transition"
                  aria-label="Remove item"
                >
                  <FaTrash className="text-lg" />
                </button>
              </div>
            ))}
          </div>

          <div className="pt-6 flex justify-end">
            <button
              onClick={() => setShowCheckout(true)}
              className="flex items-center gap-2 bg-[#712d24] text-white px-6 py-3 rounded-lg hover:bg-[#5a241d] transition text-lg font-medium"
            >
              <FaShoppingCart />
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;