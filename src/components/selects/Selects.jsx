import React from 'react';
import { SelectSize } from '../selectSize/SelectSize';
import { SelectColor } from '../selectColor/SelectColor';
import { SelectQuantity } from '../selectQuantity/SelectQuantity';
import './Selects.css';
import { UseData } from '../../app/shared/hooks/useData';

export const Selects = (props) => {
  const {
    selectedQuantity,
    setSelectedQuantity,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  } = props;
  // hook to fetch data from mock
  const [fetchedData] = UseData();

  return (
    <section>
      <div id='selects'>
        <SelectColor
          data={fetchedData}
          setSelectedValue={setSelectedColor}
          selectedColor={selectedColor}
        />
        <SelectSize
          data={fetchedData}
          setSelectedValue={setSelectedSize}
          selectedSize={selectedSize}
        />
        <SelectQuantity
          setSelectedValue={setSelectedQuantity}
          selectedQuantity={selectedQuantity}
        />
      </div>
    </section>
  );
};
