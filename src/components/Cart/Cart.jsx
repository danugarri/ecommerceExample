import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartTable } from './cartTable/CartTable';
export const Cart = () => {
  const orders = useSelector((state) => state.shoppingCart.orders);
  const tableHeaders = orders.map((order, index) => (index === 0 ? Object.keys(order) : null));

  return (
    <section id='cart-container'>
      <CartTable tableHeaders={tableHeaders} orders={orders} />
      <span className='return-link'>
        <Link to='/'>Volver</Link>
      </span>
    </section>
  );
};
