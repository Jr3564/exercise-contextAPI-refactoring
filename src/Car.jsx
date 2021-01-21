import React, { useContext } from 'react';
import { CarsContext } from './context';

function Car({ alt, img }) {
  const { setCars, cars } = useContext(CarsContext);
  const id = alt.replace(' car', '');
  return (
    <div>
      <img
        className={cars[id] ? 'car-right' : 'car-left'}
        src={img}
        alt={alt}
      />
      <button
        onClick={ () => setCars({ ...cars, [id]: !cars[id] }) }
        id={id}
        type="button"
      >
        Move
      </button>
    </div>
  );
}

export default Car