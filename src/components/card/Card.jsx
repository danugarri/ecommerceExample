import React, { useEffect, useState } from 'react';
import { AddToCart } from '../addToCart/AddToCart';
import { Selects } from '../selects/Selects';
import { checkValues } from '../../app/shared/helpers';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux/es/exports';
import { shoppingCartAction } from '../../app/actions/shoppingCartAction';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Card.css';

export const Card = ({ setCounter }) => {
  const cartLenght = useSelector((state) => state.shoppingCart.orders.length);
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
      setCounter(cartLenght);
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
      <h3 id='product-title'>{name}</h3>
      <span className='price'>499€</span>
      <section id='features'>
        <div>
          <span className='feature'>Availability:</span>
          <span className='feature-value'>{stock?.stockLevelStatus}</span>
        </div>
        <div>
          <span className='feature'>Product code:</span>
          <span className='feature-value'>{code}</span>
        </div>
        <div>
          <span className='feature'>Tags:</span> <span className='feature-value'>Woman</span>
        </div>
      </section>
      <p id='description'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus qui culpa at nesciunt
        ipsum dicta reprehenderit odio delectus dolorem nisi! Aliquam autem fugit quaerat neque a
        consectetur nesciunt quae quia.
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
