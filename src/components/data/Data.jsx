import React, { useState, useEffect } from 'react';
import { getAsyncData } from '../../features/todsMock/getDataSlice';
import { SelectSize } from '../selectSize/SelectSize';
import { SelectColor } from '../selectColor/SelectColor';
import { useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../../features/todsMock/getData';
import { SelectQuantity } from '../selectQuantity/SelectQuantity';

export const Data = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    // push data to redux
    dispatch(getAsyncData());
    const result = fetchData();
    result.then((response) => {
      setFetchedData(response.data);
    });

    setFetchedData(result);
  }, [dispatch]);

  return (
    <>
      <SelectColor data={fetchedData} setSelectedValue={setSelectedColor} />
      <SelectSize data={fetchedData} setSelectedValue={setSelectedSize} />
      <SelectQuantity setSelectedValue={setSelectedQuantity}/>
    </>
  );
};
