import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Countrieslist from './components/CountriesList/Countrieslist';
import Countrydetails from './components/CountryDetails/Countrydetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Countrieslist />
      <Routes>
        <Route path="/:id" element={<Countrydetails />} />
      </Routes>
    </div>
  );
}

export default App;
