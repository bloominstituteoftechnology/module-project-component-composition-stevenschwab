import React from 'react';
import styled from 'styled-components';

const PhotoTitle = styled.h2`
  color: #8B949E;
`

function Title(props) {

  return (
    <PhotoTitle>{props.title}</PhotoTitle>
  )
}

export default Title