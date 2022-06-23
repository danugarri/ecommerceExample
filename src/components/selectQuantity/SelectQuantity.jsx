import React from 'react';
import '../selects/Selects.css';
export const SelectQuantity = ({ setSelectedValue, selectedQuantity }) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };
  const amounts = [];
  for (let i = 1; i < 100; i++) {
    amounts.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <React.Fragment>
      <label htmlFor='qty' className='label-select'>
        QTY
      </label>
      <select name='qty' onChange={handleChange} value={selectedQuantity} className='placeholder'>
        <option value='' defaultValue>
          1
        </option>
        {amounts}
      </select>
    </React.Fragment>
  );
};
