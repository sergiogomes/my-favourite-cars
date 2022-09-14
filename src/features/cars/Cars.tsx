import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './carsSlice';
import styles from './Cars.module.css';
import { ICar } from '../../interfaces/ICar';

export default function Cars() {
  const cars = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue: ICar = {
    id: 1,
    name: 'Gol',
    brand: 'Volkswagem',
    hp: 165,
  };

  return (
    <div>
      <div className={styles.row}>
        <h1>My Favourite Cars</h1>
      </div>
      <div className={styles.row}>
        {cars.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>BRAND</th>
                <th>HORSEPOWER</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.name}</td>
                  <td>{car.brand}</td>
                  <td>{car.hp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Remove Polo
        </button>
        <span className={styles.value}>{cars.length}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Add Polo
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add HP
        </button>
        <button
          type="button"
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add HP Async
        </button>
      </div>
      <div className={styles.row}>
        <Link className={styles.button} to="/add-car">
          Add New Car
        </Link>
      </div>
    </div>
  );
}
