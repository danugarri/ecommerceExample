import React from 'react';

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
      <label htmlFor='qty'>QTY</label>
      <select name='qty' onChange={handleChange} value={selectedQuantity}>
        <option value='' defaultValue></option>
        {amounts}
      </select>
    </React.Fragment>
  );
};
