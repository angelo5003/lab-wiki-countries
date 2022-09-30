import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Countrieslist from './components/CountriesList/Countrieslist';
import Countrydetails from './components/CountryDetails/Countrydetails';
import { Routes, Route } from 'react-router-dom';
import countries from './countries.json';

function App() {
  const [countryList, setCountryList] = useState(countries);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Countrieslist country={countryList} />
          <Routes>
            <Route
              path="/:id"
              element={<Countrydetails country={countryList} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
