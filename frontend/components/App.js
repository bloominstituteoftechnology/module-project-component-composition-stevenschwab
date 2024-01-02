import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Title from './Title';
import Date from './Date';
import Copyright from './Copyright';
import Explanation from './Explanation';

function App() {
  const [apiData, setAPIdata] = useState([]);
  const endpoint = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

  useEffect(() => {
    axios.get(endpoint)
    .then(res => {
      console.log(res);
      setAPIdata(res.data);
    })
    .catch(error => {
      console.log(error.message);
    })
  }, [])

  return (<>
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
