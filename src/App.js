import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Admin from './layouts/Admin/Admin';
import Login from './layouts/Login/Login';

function App() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard/" component={Admin} />
    </BrowserRouter>
  );
}

export default App;