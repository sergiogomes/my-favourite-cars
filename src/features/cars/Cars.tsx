import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeCarAsync, selectCarList } from './carsSlice';
import { ICar } from '../../interfaces/ICar';
import styles from './Cars.module.css';
import H1 from '../../style/elements/H1';
import StyledLink from '../../style/elements/StyledLink';
import StyledList from '../../style/blocks/StyledList';
import Button from '../../style/elements/Button';

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
        <H1>My Favourite Cars</H1>
      </div>
      <div className={styles.row}>
        {cars.length > 0 && (
          <StyledList>
            <StyledList.Thead>
              <StyledList.Thead.Tr>
                <StyledList.Th textAlignment="right">ID</StyledList.Th>
                <StyledList.Th>NAME</StyledList.Th>
                <StyledList.Th>BRAND</StyledList.Th>
                <StyledList.Th textAlignment="right">HORSEPOWER</StyledList.Th>
                <StyledList.Th textAlignment="center">ACTIONS</StyledList.Th>
              </StyledList.Thead.Tr>
            </StyledList.Thead>
            <StyledList.Tbody>
              {cars.map((car) => (
                <StyledList.Tbody.Tr key={car.id}>
                  <StyledList.Td textAlignment="right">{car.id}</StyledList.Td>
                  <StyledList.Td>{car.name}</StyledList.Td>
                  <StyledList.Td>{car.brand}</StyledList.Td>
                  <StyledList.Td textAlignment="right">
                    {car.horsepower}
                  </StyledList.Td>
                  <StyledList.Td textAlignment="center" hasActions>
                    <StyledLink isIcon to={`/cars/${car.id}`}>
                      <MdEdit />
                    </StyledLink>
                    <Button
                      type="button"
                      isIcon
                      onClick={() => handleDelete(car)}
                    >
                      <MdDelete />
                    </Button>
                  </StyledList.Td>
                </StyledList.Tbody.Tr>
              ))}
            </StyledList.Tbody>
          </StyledList>
        )}
      </div>
      <div className={styles.row}>
        <StyledLink to="/add-car">ADD NEW CAR</StyledLink>
      </div>
    </div>
  );
}
