import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*VIEWS*/
import Home from './views';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
