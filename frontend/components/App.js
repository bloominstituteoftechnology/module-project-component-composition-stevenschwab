import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Title from './Title';
import Date from './Date';
import Copyright from './Copyright';
import Explanation from './Explanation';
import DatePicker from './DatePicker';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #0D1117;
  color: #C9D1D9;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`

function App() {
  const [apiData, setAPIdata] = useState([]);
  const [date, setDate] = useState('');
  const endpoint = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${date ? `&date=${date}` : ''}`;

  const handleChange = (event) => {
    setDate(event.target.value);
  }

  useEffect(() => {
    axios.get(endpoint)
    .then(res => {
      console.log(res);
      setAPIdata(res.data);
    })
    .catch(error => {
      console.error(error.message);
    })
  }, [date])

  return (
  <AppContainer>
    <DatePicker date={date} handleChange={handleChange}/>
    <div>
      <Title title={apiData.title}/>
      <Date date={apiData.date}/>
    </div>
    <Image url={apiData.url}/>
    <Copyright copyright={apiData.copyright}/>
    <Explanation explanation={apiData.explanation}/>
  </AppContainer>
  )
}

export default App
