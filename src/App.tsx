import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from './common/footer';
import HeaderComponent from './common/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
