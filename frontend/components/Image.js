import React from 'react';
import styled from 'styled-components';

const PhotoCard = styled.div`
  background-color: #161B22;
  margin: 2em auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 80%;
`;

const PhotoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 1em;
`

function Image(props) {

  return (
    <PhotoCard>
      <PhotoImage src={props.url}/>
    </PhotoCard>
  )
}

export default Image