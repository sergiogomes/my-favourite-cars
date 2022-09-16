import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';
import { debounce } from 'lodash';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeCarAsync, selectCarList } from './carsSlice';
import { ICar } from '../../interfaces/ICar';

import StyledLink from '../../style/elements/StyledLink';
import StyledTable from '../../style/blocks/StyledTable';
import StyledField from '../../style/blocks/StyledField';
import Button from '../../style/elements/Button';
import H1 from '../../style/elements/H1';
import P from '../../style/elements/P';

export default function Cars() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCarList);
  const [filteredCars, setFilteredCars] = useState<ICar[]>(cars);

  const handleDelete = (car: ICar) => {
    dispatch(removeCarAsync(car)).catch(() => navigate('/error'));
  };

  const filter = (criteria: string) => {
    return cars.filter((car) => car.name.includes(criteria));
  };

  const debouncedSearch = debounce((criteria) => {
    setFilteredCars(filter(criteria));
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const criteria = e.target.value;
    if (criteria && criteria.length > 2) {
      debouncedSearch(criteria);
    }

    if (!criteria) {
      setFilteredCars(cars);
    }
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div>
      <Outlet />
      <div>
        <H1>My Favourite Cars</H1>
        <P>Add your favourite cars here</P>
        <StyledField>
          <StyledField.Label htmlFor="criteria">
            <StyledField.Input
              type="search"
              id="criteria"
              name="criteria"
              placeholder="Enter your search"
              onChange={handleChange}
            />
          </StyledField.Label>
        </StyledField>
      </div>
      <div>
        {filteredCars.length > 0 && (
          <StyledTable>
            <StyledTable.Thead>
              <StyledTable.Thead.Tr>
                <StyledTable.Th textAlignment="right">ID</StyledTable.Th>
                <StyledTable.Th>NAME</StyledTable.Th>
                <StyledTable.Th>BRAND</StyledTable.Th>
                <StyledTable.Th textAlignment="right">
                  HORSEPOWER
                </StyledTable.Th>
                <StyledTable.Th textAlignment="center">ACTIONS</StyledTable.Th>
              </StyledTable.Thead.Tr>
            </StyledTable.Thead>
            <StyledTable.Tbody>
              {filteredCars.map((car) => (
                <StyledTable.Tbody.Tr key={car.id}>
                  <StyledTable.Td textAlignment="right">
                    {car.id}
                  </StyledTable.Td>
                  <StyledTable.Td>{car.name}</StyledTable.Td>
                  <StyledTable.Td>{car.brand}</StyledTable.Td>
                  <StyledTable.Td textAlignment="right">
                    {car.horsepower}
                  </StyledTable.Td>
                  <StyledTable.Td textAlignment="center" hasActions>
                    <StyledLink isicon="on" to={`/cars/${car.id}`}>
                      <MdEdit />
                    </StyledLink>
                    <Button
                      type="button"
                      isicon="on"
                      onClick={() => handleDelete(car)}
                    >
                      <MdDelete />
                    </Button>
                  </StyledTable.Td>
                </StyledTable.Tbody.Tr>
              ))}
            </StyledTable.Tbody>
          </StyledTable>
        )}
      </div>
      <div>
        <StyledLink to="/cars/new">ADD NEW CAR</StyledLink>
      </div>
    </div>
  );
}
