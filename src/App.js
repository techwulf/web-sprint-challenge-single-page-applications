import React from "react";
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage';

const App = () => {
  return (
    <>
      <div class="header">
        <h1>Lambda Eats</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">Help</a>
        </nav>
      </div>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
