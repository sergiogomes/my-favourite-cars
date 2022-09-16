import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterComponent from './common/footer';
import HeaderComponent from './common/header';
import LayoutComponent from './common/layout';
import SideBarComponent from './common/side-bar';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SideBarComponent />
      <LayoutComponent>
        <Outlet />
      </LayoutComponent>
      <FooterComponent />
    </div>
  );
}

export default App;
