import React, { useState, useEffect } from 'react';
import { getAsyncData } from '../../features/todsMock/getDataSlice';
import { SelectSize } from '../selectSize/SelectSize';
import { SelectColor } from '../selectColor/SelectColor';
import { useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../../features/todsMock/getData';
import { SelectQuantity } from '../selectQuantity/SelectQuantity';
import { AddToCart } from '../addToCart/AddToCart';
import swal from 'sweetalert';
import { CartBadge } from '../cartBadge/CartBadge';
import { shoppingCartAction } from '../../app/actions/shoppingCartAction';
import { checkValues } from '../../app/shared/helpers';

export const Data = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [counter, setCounter] = useState(0);
  const [isFulfilled, setIsFulfilled]= useState(true)
  const dispatch = useDispatch();
  // Logic to handle the add to cart button
  useEffect(() => {
    const fulFilled = checkValues(selectedQuantity, selectedSize, selectedColor);
    setIsFulfilled(fulFilled);
  }, [selectedQuantity, selectedSize, selectedColor])
  const HandleClick = () => {
    const formattedMessage = `Has añadido ${selectedQuantity} unidad/des de la talla ${selectedSize} y color ${selectedColor}`;
    if (!isFulfilled) {
      swal(formattedMessage, '', 'success');
      dispatch(shoppingCartAction('product1', selectedQuantity, selectedColor, selectedSize));
      setCounter((prev) => prev + 1);
    }
  };
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
      <SelectQuantity setSelectedValue={setSelectedQuantity} />
      <AddToCart onHandleClick={HandleClick} fulfilled= {isFulfilled}/>
      <CartBadge counter={counter} />
    </>
  );
};
