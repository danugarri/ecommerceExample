import React from 'react';

export const SelectQuantity = ({ setSelectedValue }) => {
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
    <select name='select' onChange={handleChange}>
      <option value='' defaultValue></option>
      {amounts}
    </select>
  );
};
