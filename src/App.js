import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Karakter from './components/Karakter';


const App = () => {


  const [data, setData] = useState([]);



  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get("https://swapi.dev/api/people/")
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);




  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {data.map((result, i) => <Karakter title={result.name} key={i} props={result} />)}
    </div>



  );
}

export default App;

