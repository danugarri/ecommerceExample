import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import './Cart.css';
export const Cart = () => {
  const orders = useSelector((state) => state.shoppingCart.orders);

  const tableHeaders = orders.map((order, index) => (index === 0 ? Object.keys(order) : null));
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders[0].map((header) => (
              <th scope='row' key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.size}</td>
              <td>{order.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/'>Volver</Link>
    </>
  );
};
