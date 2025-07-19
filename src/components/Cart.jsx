import React, { useContext, useState } from 'react';
import { CartContext } from '../assets/context/CartContext';
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaHamburger,
  FaCoffee,
  FaBirthdayCake
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice
  } = useContext(CartContext);

  const [showCheckout, setShowCheckout] = useState(false);
  const cartItems = Object.values(cart);

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto relative">
      {showCheckout && (
        <CheckoutForm
          onClose={() => setShowCheckout(false)}
          cartItems={cartItems}
          totalPrice={totalPrice}
        />
      )}

      {cartItems.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6 px-1">
          <Link
            to="/foods"
            className="flex items-center justify-center gap-1 bg-[#712d24] text-white px-3 py-2 rounded-full hover:bg-[#5a241d] transition font-medium text-xs sm:text-sm md:text-base w-auto whitespace-nowrap"
          >
            <FaHamburger className="text-sm sm:text-base md:text-lg" />
            Foods
          </Link>
          <Link
            to="/drinks"
            className="flex items-center justify-center gap-1 bg-[#712d24] text-white px-3 py-2 rounded-full hover:bg-[#5a241d] transition font-medium text-xs sm:text-sm md:text-base w-auto whitespace-nowrap"
          >
            <FaCoffee className="text-sm sm:text-base md:text-lg" />
            Drinks
          </Link>
          <Link
            to="/cakes"
            className="flex items-center justify-center gap-1 bg-[#712d24] text-white px-3 py-2 rounded-full hover:bg-[#5a241d] transition font-medium text-xs sm:text-sm md:text-base w-auto whitespace-nowrap"
          >
            <FaBirthdayCake className="text-sm sm:text-base md:text-lg" />
            Cakes
          </Link>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-[#712d24]">
          Your Cart {totalItems > 0 && `(${totalItems})`}
        </h2>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base"
          >
            Clear All
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center p-6 sm:p-10 bg-white rounded-xl shadow-lg">
          <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">Your cart is empty</p>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#712d24] mb-3 sm:mb-4">Explore Our Menu</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Add some delicious items to your cart from our wide range of vegetarian delights!</p>
            <div className="flex flex-wrap justify-center gap-2 px-1">
              <Link
                to="/foods"
                className="flex items-center justify-center gap-1 bg-[#712d24] text-white px-3 py-1.5 rounded-full hover:bg-[#5a241d] transition font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <FaHamburger className="text-sm sm:text-base md:text-lg" />
                Foods
              </Link>
              <Link
                to="/drinks"
                className="flex items-center justify-center gap-1 bg-[#712d24] text-white px-3 py-1.5 rounded-full hover:bg-[#5a241d] transition font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <FaCoffee className="text-sm sm:text-base md:text-lg" />
                Drinks
              </Link>
              <Link
                to="/cakes"
                className="flex items-center justify-center gap-1 bg-[#712d24] text-white px-3 py-1.5 rounded-full hover:bg-[#5a241d] transition font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <FaBirthdayCake className="text-sm sm:text-base md:text-lg" />
                Cakes
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-3 sm:space-y-4">
            {cartItems.map((item, index) => (
              <div key={`${item.name}-${item.weight || index}`} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-white shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                />
                <div className="flex-grow w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                    <h3 className="font-semibold text-base sm:text-lg">{item.name}</h3>
                    <div className="text-right">
                      <p className="text-[#712d24] font-semibold text-sm sm:text-base">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-xs sm:text-sm text-gray-500">Rs. {item.price} each</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 mt-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => decreaseQty(item.name)}
                        className="bg-gray-200 hover:bg-gray-300 p-1 sm:p-2 rounded transition"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus className="text-xs sm:text-sm" />
                      </button>
                      <span className="text-base sm:text-lg font-semibold w-6 sm:w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item.name, item.image, item.price)}
                        className="bg-[#712d24] text-white p-1 sm:p-2 rounded hover:bg-[#5a241d] transition"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="text-xs sm:text-sm" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500 hover:text-red-700 p-1 sm:p-2 transition"
                      aria-label="Remove item"
                    >
                      <FaTrash className="text-base sm:text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <span className="text-base sm:text-lg font-semibold">Subtotal:</span>
              <span className="text-lg sm:text-xl font-bold text-[#712d24]">Rs. {totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full flex items-center justify-center gap-2 bg-[#712d24] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#5a241d] transition text-base sm:text-lg font-medium"
            >
              <FaShoppingCart className="text-sm sm:text-base" />
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
