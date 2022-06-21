import React from 'react';

export const SelectSize = ({ data }) => {
  return (
    <select name='select'>
      <option value='' defaultValue></option>
      {data?.variantOptions?.map((option) => (
        <option key={option.sizeCode} value={option.size}>
          {option.size}
        </option>
      ))}
    </select>
  );
};
