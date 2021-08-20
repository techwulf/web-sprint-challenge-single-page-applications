import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import pizza from '../images/pizzatile.jpg';

const HeaderStyled = styled.div`
  height: 23rem;
  background: gray;
  background: url(${pizza});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2rem;
    text-shadow: 2px 2px black;
  }
  a {
    color: orangered;
    text-decoration: none;
    background-color: rgba(0,0,0,0.6);
    border-radius: 1rem;
    padding: .9rem 1.5rem;
    border: 2px solid black;
    font-size: 2rem;
    :hover {
      background-color: rgba(0,0,0,0.7);
    }
  }
`

export default function MainPage(props) {
  return (
    <>
    <HeaderStyled class="header-box">
      <h2>Your favorite food, delivered while coding</h2>
      <div>
        <Link id="order-pizza" to="/pizza">Pizza?</Link>
      </div>
    </HeaderStyled>
    </>
  )
}