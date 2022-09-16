import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch } from '../../../../app/hooks';
import { ICar } from '../../../../interfaces/ICar';
import { addCarAsync } from '../../carsSlice';

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

export default function AddCar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: ICar, actions: FormikHelpers<ICar>) => {
    actions.setSubmitting(true);

    dispatch(addCarAsync(values))
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
        <H1>Add New Car</H1>
        <P>Fill in the name, brand and horsepower</P>
      </div>

      <Formik
        initialValues={initialState}
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
                  {errors.name && touched.name && <small>{errors.name}</small>}
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
    </div>
  );
}
