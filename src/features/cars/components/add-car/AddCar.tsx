import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, FormikProps, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import { useAppDispatch } from '../../../../app/hooks';
import { ICar } from '../../../../interfaces/ICar';
import { addCarAsync } from '../../carsSlice';

const initialState: ICar = {
  id: 0,
  name: '',
  brand: '',
  horsepower: 0,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter the name')
  .min(3, 'Must be at least 3 digits')
  .max(20, 'Must be at maximum 20 digits'),
  brand: Yup.string().required('Please enter the brand'),
  horsepower: Yup.number().required().positive('Please enter the horsepower'),
})

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

  const handleSubmit = (values: ICar, actions: FormikHelpers<ICar>) => {
    actions.setSubmitting(true)

    dispatch(addCarAsync(values))
    .then(() => {
      navigate('/cars')
      setTimeout(() => {
        actions.setSubmitting(false)
      }, 500)
    })
    .catch(() => navigate('/error'));
  };
  
  return (
    <div>
      <div>
      <h1>Add New Car</h1>
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
          } = props
          return (
            <>
              <Form>
                <input
                  name="name"
                  id="name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div>
                  {errors.name && touched.name && (
                    <small>{errors.name}</small>
                  )}
                </div>

                <input
                  name="brand"
                  id="brand"
                  value={values.brand}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div>
                  {errors.brand && touched.brand && (
                    <small>{errors.brand}</small>
                  )}
                </div>

                <input
                  name="horsepower"
                  id="horsepower"
                  value={values.horsepower}
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div>
                  {errors.horsepower && touched.horsepower && (
                    <small>{errors.horsepower}</small>
                  )}
                </div>

                <button
                  type="submit"
                  color="secondary"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  );
}
