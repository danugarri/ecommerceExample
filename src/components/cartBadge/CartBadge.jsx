import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartBadge.css';
import { useNavigate } from 'react-router-dom';
import { readCookie } from '../../app/shared/helpers/helpers';

export const CartBadge = () => {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '20px' }} />;
  // Retrieving counter from cookies
  const ordersCounterCookie = Number(readCookie('ordersCounter'));
  let navigate = useNavigate();
  const browseToCart = () => navigate('./cart', { replace: true });
  return (
    <section className='container' onClick={browseToCart}>
      <div className='badge'>
        <span className='counter'>{ordersCounterCookie}</span>
      </div>
      {cartIcon}
    </section>
  );
};
