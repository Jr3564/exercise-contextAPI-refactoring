import React, { useState } from 'react';
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const initialState = { red: false, blue: false, yellow: false };
  const [cars, setCars] = useState(initialState);
  return (
    <CarsContext.Provider value={ { setCars, cars } } >
      {children}
    </CarsContext.Provider>
  )
} 
