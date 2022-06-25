import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartBadge.css';
import { useNavigate } from 'react-router-dom';

export const CartBadge = ({ counter }) => {
  const element = <FontAwesomeIcon icon={faCartShopping} />;
  let navigate = useNavigate();
  const browseToCart = () => navigate('./cart', { replace: true });
  return (
    <section className='container' onClick={browseToCart}>
      <div className='badge'>
        <span className='counter'>{counter}</span>
      </div>
      {element}
    </section>
  );
};
