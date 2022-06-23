import React from 'react';

export const SelectSize = ({ data, setSelectedValue, selectedSize }) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <React.Fragment>
      <label htmlFor='size' className='label-select'>
        SIZE
      </label>
      <select name='size' onChange={handleChange} value={selectedSize} className='placeholder'>
        <option value='' defaultValue>
          Select Size
        </option>
        {data?.variantOptions?.map((option) => (
          <option key={option.sizeCode} value={option.size}>
            {option.size}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};
