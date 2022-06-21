import React from 'react';

export const SelectColor = ({ data,setSelectedValue }) => {
  
  const filtered = data?.colorSizeOptions?.filter((option) => option.color !== '');
    const handleChange= (e) => {
        setSelectedValue( e.target.value)
        console.log( e.target.value)
    };
  return (
    <select name='select' onChange={handleChange}>
      <option value='' defaultValue></option>
      {filtered?.map((option) => (
        <option key={option.skuOrigin} value={option.color}>
          {option.color}
        </option>
      ))}
    </select>
  );
};
