import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderComponent from './common/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Outlet />
      <footer>
        <p>This is a footer</p>
      </footer>
    </div>
  );
}

export default App;
