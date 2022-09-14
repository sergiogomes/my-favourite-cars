import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../app/hooks';
import { ICar } from '../../../../interfaces/ICar';
import { addCarAsync } from '../../carsSlice';
import styles from './AddCar.module.css';

const initialState: ICar = {
  id: 0,
  name: '',
  brand: '',
  hp: 0,
};

export default function AddCar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [car, setCar] = useState<ICar>(initialState);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    setCar({
      ...car,
      [name]: value,
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addCarAsync(car))
      .then(() => navigate('/cars'))
      .catch(() => navigate('/error'));
  };

  return (
    <div>
      <div className={styles.row}>
        <h1>Add New Car</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <p>Name *</p>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.textbox}
            aria-label="Car Name"
            value={car.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <p>Brand *</p>
          <input
            id="brand"
            name="brand"
            type="text"
            className={styles.textbox}
            aria-label="Car Brand"
            value={car.brand}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <p>Horsepower *</p>
          <input
            id="hp"
            name="hp"
            type="number"
            className={styles.textbox}
            aria-label="Car Horsepower"
            value={car.hp}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <button type="submit" className={styles.asyncButton}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
