import React from 'react';

export const SelectSize = ({ data, setSelectedValue }) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <React.Fragment>
      <label htmlFor='size'>SIZE</label>
      
      <select name='size' onChange={handleChange}>
        <option value='' defaultValue></option>
        {data?.variantOptions?.map((option) => (
          <option key={option.sizeCode} value={option.size}>
            {option.size}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};
