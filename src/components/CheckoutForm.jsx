import React, { useState, useContext } from 'react';
import { CartContext } from '../assets/context/CartContext';
const CheckoutForm = ({ onClose, cartItems, totalPrice }) => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatOrderItems = () => {
    return Object.values(cart).map((item, index) =>
      `${index + 1}. ${item.name} (Qty: ${item.quantity})`
    ).join('\n');
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.address) {
    alert('Please fill in all required fields');
    return;
  }

  const cartDetails = cartItems.map(item =>
    `*${item.name}*\nQty: ${item.quantity}\nPrice: Rs. ${item.price}\nSubtotal: Rs. ${(item.price * item.quantity).toFixed(2)}`
  ).join('\n\n');

  const fullMessage = `*New Order*\n\n*Customer Details*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\n*Order Items*\n\n${cartDetails}\n\n__________________________\n*Total Amount = Rs. ${totalPrice.toFixed(2)}*\n\n*Special Instructions*\n${formData.instructions || 'None'}`;

  const encodedMessage = encodeURIComponent(fullMessage);

  const shouldProceed = window.confirm(
    `ORDER CONFIRMATION\n\nYou're about to send this order via WhatsApp:\nYour cart will be cleared after successful submission..\n\nClick OK to proceed.`
  );

  if (shouldProceed) {
    window.open(`https://wa.me/918248794519?text=${encodedMessage}`, '_blank');
    clearCart();
    onClose();
  }
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#712d24]">Checkout</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Delivery Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Special Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={2}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#712d24]"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#712d24] text-white rounded hover:bg-[#5a241d] transition-colors"
            >
              Review Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;