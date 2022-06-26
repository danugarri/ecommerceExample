import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { CartBadge } from './components/cartBadge/CartBadge';
import { ProductImg } from './components/productImg/ProductImg';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { initialCookie } from './app/shared/helpers/helpers';

function App() {
  const cartLength = useSelector((state) => state.shoppingCart.orders).length;
  const [counter, setCounter] = useState(cartLength);
  useEffect(() => {
    setCounter(cartLength - 1);
  }, [cartLength]);
  // Setting initial cookie
  useEffect(() => {
    initialCookie();
  }, []);

  return (
    <React.Fragment>
      <main className='App'>
        <section className='main-container'>
          <div className='box-left'>
            <ProductImg />
          </div>
          <div className='box-rigth'>
            <Card />
          </div>
        </section>
        <CartBadge counter={counter} />
      </main>
    </React.Fragment>
  );
}

export default App;
