import React from 'react';

export const CartTable = ({ tableHeaders, orders }) => {
  return (
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
  );
};
