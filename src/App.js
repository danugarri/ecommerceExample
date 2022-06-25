import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { CartBadge } from './components/cartBadge/CartBadge';
import { ProductImg } from './components/productImg/ProductImg';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const [counter, setCounter] = useState(0);
  const cartLength = useSelector((state) => state.shoppingCart.orders).length;
  useEffect(() => {
    setCounter(cartLength - 1);
  }, [cartLength]);
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
