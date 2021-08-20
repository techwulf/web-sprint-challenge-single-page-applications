import React, {useState} from "react";
import { Route, Link, Switch } from 'react-router-dom';

import MainPage from './components/MainPage';
import PizzaForm from './components/PizzaForm';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  olives: false,
  surprise: false,
  instructions: ''
}
const initialFormErrors = {
  name: '',
  size: '',
  toppings: ''
}
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    setFormValues({...formValues,[name]:value});
  }
  const formSubmit = () => {
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
  }



  return (
    <>
      <div class="header-main">
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Help</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/pizza">
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
