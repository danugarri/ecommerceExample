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
            {Object.values(order).map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
