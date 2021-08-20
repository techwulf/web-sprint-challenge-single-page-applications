import React from 'react';

import styled from 'styled-components'

import pizza from '../images/pizzatile.jpg';

const StyledForm = styled.div`
  width: 60%;
  margin: 0 auto;
  .form-header h4 {
    text-align: center;
    padding: 1rem;
    font-size: 1.3rem;
    margin: 0;
  }
  .header-title {
    margin-top: 2rem;
    border: 2px solid black;
    background-color: gray;
  }
  img {
    max-width: 100%;
  }
  .form-content {
    border: 2px solid lightgray;
    margin-bottom: 3rem;
  }
  .form-title {
    background-color: lightgray;
    padding: .5rem 1rem;
    margin: 0;
    p, h4{
      margin: 0;
    }
  }
  .form-items {
    padding-bottom: .9rem;
    padding-left: .9rem;
    max-width: 30%;
    .error-message {
      color: red;
      font-size: .9rem;
      margin: 0;
      min-height: .9rem;
    }
    label {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export default function PizzaForm(props){
  const {values, submit, change, disabled, errors} = props;

  const onSubmit = evt => {
    evt.preventDevault();
    submit();
  }
  const onChange = evt => {
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <>
    <StyledForm>
      <div class="form-header">
        <div class="header-title">
          <h4>Build Your Own Pizza</h4>
        </div>
        <img src={pizza} alt="pizza toppings"/>
      </div>
      <div class="form-content">
        <form id="pizza-form" onSubmit={onSubmit}>
          <div class="form-title">
            <h4>Name for order</h4>
            <p>Required</p>
          </div>
          <div class="form-items">
            <p class="error-message"></p>
            <input 
              id="name-input" 
              name="name"
              onChange={onChange}
              placeHolder="Enter a name"
              type="text"
            />
          </div>
          <div class="form-title">
            <h4>Pizza Size</h4>
          </div>
          <div class="form-items">
            <p class="error-message"></p>
            <select 
              id="size-dropdown"
              name="size"
              onChange={onChange}
            >
              <option value="">-- pick a pizza size --</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">Humongous!!!!</option>
            </select>
          </div>
          <div class="form-title">
            <h4>Toppings!</h4>
          </div>
          <div class="form-items">
            <p class="error-message"></p>
            <label>Pepperoni
              <input 
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
              />
            </label>
            <label>Sausage
              <input 
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
              />
            </label>
            <label>Olives
              <input 
                type="checkbox"
                name="olives"
                checked={values.olives}
                onChange={onChange}
              />
            </label>
            <label>Surprise
              <input 
                type="checkbox"
                name="surprise"
                checked={values.surprise}
                onChange={onChange}
              />
            </label>
          </div>
          <div class="form-title">
            <h4>Special Instructions!</h4>
          </div>
          <div class="form-items">
            <p class="error-message"></p>
            <input 
              id="special-text" 
              name="instructions"
              onChange={onChange}
              placeHolder="Any Special Instructions?"
              type="text"
            />
          </div>
          <div class="form-title">
            <button disabled={disabled} id="order-button">Submit Order!</button>
          </div>
        </form>
      </div>
    </StyledForm>
    </>
  )
}