import React from 'react'
import styled from 'styled-components';

import pizza from '../images/pizzatile.jpg';

const HeaderStyled = styled.div`
  height: 21rem;
  background: gray;
  background: url(${pizza});
  background-repeat: no-repeat;
  background-size: cover;
`

export default function MainPage(props) {
  return (
    <HeaderStyled class="header-box"></HeaderStyled>
  )
}