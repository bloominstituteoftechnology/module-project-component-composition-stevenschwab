import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 80%;
    height: 80%;
    padding: 2em;
    text-align: center;
`;

const DatePickerLabel = styled.label`
  display: block;
  margin: 0 auto 1em;
  text-align: center;
`;

const DatePickerInput = styled.input.attrs({ type: 'date' })`
  margin: 0 auto;
  display: block;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #30363d;
  background-color: #161B22;
  color: #C9D1D9;
  cursor: pointer;
`;

const DatePickerPara = styled.p`
  display: block;
  margin: 0 auto 1em;
  text-align: center;
`

function DatePicker(props) {

  return (
    <WrapperDiv>
        <DatePickerLabel htmlFor='dateInput'>Pick a date:</DatePickerLabel>
        <DatePickerInput
            id="dateInput"
            value={props.date}
            onChange={props.handleChange}
        />
        <DatePickerPara>Selected Date: {props.date}</DatePickerPara>
    </WrapperDiv>
  )
}

export default DatePicker