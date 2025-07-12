import React, { createContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiShoppingCart, FiTrash2, FiMinusCircle, FiXCircle } from 'react-icons/fi';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : {};
    }
    return {};
  });

  const emitCartUpdate = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCartUpdate();
  }, [cart, emitCartUpdate]);

  const showToast = useCallback((message, icon, type = 'default') => {
    const ToastIcon = icon;
    const toastOptions = {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false,
      className: 'custom-toast',
    };

    switch (type) {
      case 'success':
        toast.success(
          <div className="flex items-center">
            <ToastIcon className="mr-2" />
            {message}
          </div>,
          {
            ...toastOptions,
            className: 'bg-green-100 text-green-800 border border-green-200',
          }
        );
        break;
      case 'warning':
        toast.warn(
          <div className="flex items-center">
            <ToastIcon className="mr-2" />
            {message}
          </div>,
          {
            ...toastOptions,
            className: 'bg-orange-100 text-orange-800 border border-orange-200',
          }
        );
        break;
      case 'error':
        toast.error(
          <div className="flex items-center">
            <ToastIcon className="mr-2" />
            {message}
          </div>,
          {
            ...toastOptions,
            className: 'bg-red-100 text-red-800 border border-red-200',
          }
        );
        break;
      default:
        toast(
          <div className="flex items-center">
            <ToastIcon className="mr-2" />
            {message}
          </div>,
          toastOptions
        );
    }
  }, []);

  const addToCart = useCallback((name, image) => {
    setCart(prev => {
      const newQuantity = prev[name] ? prev[name].quantity + 1 : 1;
      return {
        ...prev,
        [name]: {
          name,
          image,
          quantity: newQuantity,
        },
      };
    });
    showToast(
      `Added ${name} (Total: ${(cart[name]?.quantity || 0) + 1})`,
      FiShoppingCart,
      'success'
    );
  }, [cart, showToast]);

  const decreaseQty = useCallback((name) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[name]) {
        if (updated[name].quantity <= 1) {
          delete updated[name];
        } else {
          updated[name].quantity -= 1;
        }
      }
      return updated;
    });
    
    if (cart[name]?.quantity <= 1) {
      showToast(
        `Removed ${name} from cart`,
        FiTrash2,
        'error'
      );
    } else {
      showToast(
        `Reduced ${name} to ${cart[name]?.quantity - 1}`,
        FiMinusCircle,
        'warning'
      );
    }
  }, [cart, showToast]);

  const removeFromCart = useCallback((name) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[name]) {
        delete updated[name];
      }
      return updated;
    });
    showToast(
      `Removed ${name} from cart`,
      FiXCircle,
      'error'
    );
  }, [showToast]);

  const clearCart = useCallback(() => {
    setCart({});
    showToast(
      'Cleared all items from cart',
      FiTrash2,
      'error'
    );
  }, [showToast]);

  const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};