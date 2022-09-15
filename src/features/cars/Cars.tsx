import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeCarAsync, selectCarList } from './carsSlice';
import { ICar } from '../../interfaces/ICar';
import styles from './Cars.module.css';

export default function Cars() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCarList);

  const handleDelete = (car: ICar) => {
    dispatch(removeCarAsync(car)).catch(() => navigate('/error'));
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
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.name}</td>
                  <td>{car.brand}</td>
                  <td>{car.horsepower}</td>
                  <td>
                    <Link className={styles.button} to={`/cars/${car.id}`}>
                      Edit
                    </Link>
                    <button
                      type="button"
                      className={styles.asyncButton}
                      onClick={() => handleDelete(car)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.row}>
        <Link className={styles.button} to="/add-car">
          Add New Car
        </Link>
      </div>
    </div>
  );
}
