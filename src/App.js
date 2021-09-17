import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import MainPage from './components/MainPage';
import PizzaForm from './components/PizzaForm';
import Confirmation from './components/Confirmation';
import schema from './validation/formSchema';


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
  pepperoni: null,
  sausage: null,
  olives: null,
  surprise: null,
  instructions: ''
}
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [redirect, setRedirect] = useState(false);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}));
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues,[name]:value});
  }
  const formSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        setRedirect(true);
      }).catch(err => console.error(err));
    
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);



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
          { !redirect ?
            <PizzaForm 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            /> :
            <Confirmation />
          }
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
