import React from 'react';
import { carBlue, carRed, carYellow } from './images';
import { Provider } from './context';
import Car from './Car';

export default function Cars() {
  return (
    <Provider>
      <Car alt="red car" img={ carRed } />
      <Car alt="blue car" img={ carBlue } />
      <Car alt="yellow car" img={ carYellow } />
    </Provider>
  );
}
