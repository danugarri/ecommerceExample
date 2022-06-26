import React from 'react';

export const ProductFeatures = ({ name, stock, code }) => {
  return (
    <React.Fragment>
      <h3 id='product-title'>{name}</h3>
      <span className='price'>499€</span>
      <section id='features'>
        <div>
          <span className='feature'>Availability:</span>
          <span className='feature-value'>{` ${stock?.stockLevelStatus}`}</span>
        </div>
        <div>
          <span className='feature'>Product code:</span>
          <span className='feature-value'>{` ${code}`}</span>
        </div>
        <div>
          <span className='feature'>Tags:</span>
          <span className='feature-value'> Woman</span>
        </div>
      </section>
      <p id='description'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus qui culpa at nesciunt
        ipsum dicta reprehenderit odio delectus dolorem nisi! Aliquam autem fugit quaerat neque a
        consectetur nesciunt quae quia.
      </p>
    </React.Fragment>
  );
};
