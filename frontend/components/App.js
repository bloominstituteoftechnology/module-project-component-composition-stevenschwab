import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Title from './Title';
import Date from './Date';
import Copyright from './Copyright';
import Explanation from './Explanation';
import DatePicker from './DatePicker';

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

  return (<>
    <DatePicker date={date} handleChange={handleChange}/>
    <div>
      <Title title={apiData.title}/>
      <Date date={apiData.date}/>
    </div>
    <Image url={apiData.url}/>
    <Copyright copyright={apiData.copyright}/>
    <Explanation explanation={apiData.explanation}/>
    </>
  )
}

export default App
