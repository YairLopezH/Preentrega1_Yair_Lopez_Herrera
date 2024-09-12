import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css';

const CartWidget = () => {
  const itemsCount = 1889; 

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge">{itemsCount}</span>
    </div>
  );
};

export default CartWidget;
