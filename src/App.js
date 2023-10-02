import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Karakter from './components/Karakter';

import Accord from './components/Accord';
import { Children } from 'react';

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
      {data.map((result, i) => (
        <Accord  title={result.name} >
          <Karakter key={result.height}  props={result} />
        </Accord> )
      )};
      </div>
  );

      };
   

      export default App;


