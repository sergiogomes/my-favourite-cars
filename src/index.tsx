import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Brands from './features/brands/Brands';
import About from './features/about/About';
import Cars from './features/cars';
import Car from './features/cars/components/car';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="about" element={<About />} />
            <Route path="brands" element={<Brands />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:carId" element={<Car />} />
            <Route path="/" element={<Navigate to="cars" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
