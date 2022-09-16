import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from './common/footer';
import HeaderComponent from './common/header';
import LayoutComponent from './common/layout';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <LayoutComponent>
        <Outlet />
      </LayoutComponent>
      <FooterComponent />
    </div>
  );
}

export default App;
