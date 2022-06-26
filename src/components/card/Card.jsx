import React, { useEffect, useState } from 'react';
import { AddToCart } from '../addToCart/AddToCart';
import { Selects } from '../selects/Selects';
import { checkValues } from '../../app/shared/helpers/helpers';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux/es/exports';
import { shoppingCartAction } from '../../app/actions/shoppingCartAction';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Card.css';
import { ProductFeatures } from '../productFeatures/ProductFeatures';

export const Card = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [isFulfilled, setIsFulfilled] = useState(false);
  const fetchedData = useSelector((state) => state.getData.entities);
  const { code, name, stock } = fetchedData;
  const dispatch = useDispatch();
  const HandleClick = () => {
    const formattedMessage = `Has añadido ${selectedQuantity} unidad/des de ${name} de la talla ${selectedSize} y color ${selectedColor}`;
    if (!isFulfilled) {
      swal(formattedMessage, '', 'success');
      dispatch(shoppingCartAction(name, selectedQuantity, selectedColor, selectedSize));
    }
    setSelectedColor('');
    setSelectedQuantity('');
    setSelectedSize('');
  };
  // Logic to handle the add to cart button
  useEffect(() => {
    const fulFilled = checkValues(selectedQuantity, selectedSize, selectedColor);
    setIsFulfilled(fulFilled);
  }, [selectedQuantity, selectedSize, selectedColor]);

  return (
    <section className='card'>
      <ProductFeatures code={code} name={name} stock={stock} />
      <Selects
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <AddToCart onHandleClick={HandleClick} fulfilled={isFulfilled} />
    </section>
  );
};
