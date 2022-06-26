import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartTable } from './cartTable/CartTable';

export const Cart = () => {
  //  Redux
  const orders = useSelector((state) => state.shoppingCart.orders);
  //  get orders localStorage values
  const localStorageOrders = JSON.parse(localStorage.getItem('orders'));
  const tableHeaders = orders.map((order, index) => (index === 0 ? Object.keys(order) : null));

  return (
    <section id='cart-container'>
      <CartTable tableHeaders={tableHeaders} orders={localStorageOrders} />
      <span className='return-link'>
        <Link to='/'>Volver</Link>
      </span>
    </section>
  );
};
