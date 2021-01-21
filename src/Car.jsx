import React from 'react';
import contextLeftCars from './contextLeftCar';

export default function car({ alt, img }) {
  const id = alt.replace(' car', '');
  return (
    <contextLeftCars.Consumer>
      { ({ setCars, cars }) =>
          (
            <div>
              <img
                className={cars[id] ? 'car-right' : 'car-left'}
                src={img}
                alt={alt}
              />
              <button
                onClick={() => { setCars(Object.assign({}, cars, { [id]: !cars[id] } )) } }
                id={id}
                type="button"
              >
                Move
              </button>
            </div>
          )
      }
    </contextLeftCars.Consumer>
  );
}