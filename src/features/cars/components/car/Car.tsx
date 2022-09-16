import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ICar } from '../../../../interfaces/ICar';
import { addCarAsync, editCarAsync, selectCarList } from '../../carsSlice';

import StyledField from '../../../../style/blocks/StyledField';
import StyledForm from '../../../../style/blocks/StyledForm';
import Button from '../../../../style/elements/Button';
import H1 from '../../../../style/elements/H1';
import P from '../../../../style/elements/P';

const initialState: ICar = {
  id: 0,
  name: '',
  brand: '',
  horsepower: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter the name')
    .min(3, 'Must be at least 3 digits')
    .max(20, 'Must be at maximum 20 digits'),
  brand: Yup.string().required('Please enter the brand'),
  horsepower: Yup.number()
    .positive('Please enter the horsepower')
    .required('Please enter the horsepower'),
});

export default function Car() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCarList);
  const [car, setCar] = useState<ICar>();

  useEffect(() => {
    const getCar = (found: ICar | undefined, initial: ICar) => {
      if (found) return found;

      return initial;
    };

    if (carId || Number(carId) === 0) {
      const carFound = cars.find((c) => c.id === Number(carId));
      const saveCar = getCar(carFound, initialState);
      setCar(saveCar);
    }
  }, [carId, cars]);

  const handleSubmit = (values: ICar, actions: FormikHelpers<ICar>) => {
    actions.setSubmitting(true);

    if (carId === 'new') {
      return dispatch(addCarAsync(values))
        .then(() => {
          navigate('/cars');
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        })
        .catch(() => navigate('/error'));
    }

    return dispatch(editCarAsync(values))
      .then(() => {
        navigate('/cars');
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 500);
      })
      .catch(() => navigate('/error'));
  };

  return (
    <div>
      <div>
        {carId === 'new' && <H1>Add New Car</H1>}
        {carId !== 'new' && <H1>Edit Car</H1>}
        <P>Fill in the name, brand and horsepower</P>
      </div>

      {car && (
        <Formik
          initialValues={car}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<ICar>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;
            return (
              <StyledForm>
                <StyledField>
                  <StyledField.Label htmlFor="name">
                    <StyledField.Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter the name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </StyledField.Label>
                  <StyledField.Error>
                    {errors.name && touched.name && (
                      <small>{errors.name}</small>
                    )}
                  </StyledField.Error>
                </StyledField>

                <StyledField>
                  <StyledField.Label htmlFor="brand">
                    <StyledField.Input
                      type="text"
                      id="brand"
                      name="brand"
                      placeholder="Enter the brand"
                      value={values.brand}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </StyledField.Label>
                  <StyledField.Error>
                    {errors.brand && touched.brand && (
                      <small>{errors.brand}</small>
                    )}
                  </StyledField.Error>
                </StyledField>

                <StyledField>
                  <StyledField.Label htmlFor="brand">
                    <StyledField.Input
                      type="number"
                      id="horsepower"
                      name="horsepower"
                      placeholder="Enter the horsepower"
                      value={values.horsepower}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </StyledField.Label>
                  <StyledField.Error>
                    {errors.horsepower && touched.horsepower && (
                      <small>{errors.horsepower}</small>
                    )}
                  </StyledField.Error>
                </StyledField>

                <Button type="submit" color="secondary" disabled={isSubmitting}>
                  SUBMIT
                </Button>
              </StyledForm>
            );
          }}
        </Formik>
      )}
    </div>
  );
}
