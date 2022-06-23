import React from 'react';

export const SelectColor = ({ data, setSelectedValue, selectedColor }) => {
  const filtered = data?.colorSizeOptions?.filter((option) => option.color !== '');
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <React.Fragment>
      <label htmlFor='color' className='label-select'>
        COLOR
      </label>
      <select name='color' onChange={handleChange} value={selectedColor} className='placeholder' >
        <option value='' defaultValue >Select Color</option>
        {filtered?.map((option) => (
          <option key={option.skuOrigin} value={option.color}>
            {option.color}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};
