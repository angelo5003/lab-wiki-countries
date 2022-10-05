import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Countrieslist from './components/CountriesList/Countrieslist';
import Countrydetails from './components/CountryDetails/Countrydetails';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        console.log(response);
        setCountryList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Countrieslist country={countryList} />
          <Routes>
            <Route
              path="/country/:id"
              element={<Countrydetails countryList={countryList} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
