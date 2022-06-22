import React, { useEffect, useState } from 'react';
import { AddToCart } from '../addToCart/AddToCart';
import { Selects } from '../selects/Selects';
import { checkValues } from '../../app/shared/helpers';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux/es/exports';
import { shoppingCartAction } from '../../app/actions/shoppingCartAction';

export const Card = ({ setCounter }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [isFulfilled, setIsFulfilled] = useState(false);
  const dispatch = useDispatch();
  const HandleClick = () => {
    const formattedMessage = `Has añadido ${selectedQuantity} unidad/des de la talla ${selectedSize} y color ${selectedColor}`;
    if (!isFulfilled) {
      swal(formattedMessage, '', 'success');
      dispatch(shoppingCartAction('product1', selectedQuantity, selectedColor, selectedSize));
      setCounter((prev) => prev + 1);
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
    <section>
      <h3>Product Title</h3>
      <h3>499€</h3>
      <section id= 'features'>
        <label>Availability: </label><span>In stock</span>
        <label>Product code: </label><span>#4444</span>
        <label>Tags: </label><span>Woman</span>
      </section>
      <p id= 'description'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus qui culpa at nesciunt ipsum dicta reprehenderit odio delectus dolorem nisi! Aliquam autem fugit quaerat neque a consectetur nesciunt quae quia.
      </p>
      <Selects
        setCounter={setCounter}
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
