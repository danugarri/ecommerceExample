import React, { useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { CartBadge } from './components/cartBadge/CartBadge';
import { ProductImg } from './components/productImg/ProductImg';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <main className='App'>
        <section className='main-container'>
          <div className='box-left'>
            <ProductImg />
          </div>
          <div className='box-rigth'>
            <Card setCounter={setCounter} />
          </div>
        </section>
        <CartBadge counter={counter} />
      </main>
    </React.Fragment>
  );
}

export default App;
