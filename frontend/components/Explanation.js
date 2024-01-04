import React from 'react';
import styled from 'styled-components';

const PhotoDescription = styled.div`
  color: #C9D1D9;
`

function Explanation(props) {

  return (
    <PhotoDescription>{props.explanation}</PhotoDescription>
  )
}

export default Explanation