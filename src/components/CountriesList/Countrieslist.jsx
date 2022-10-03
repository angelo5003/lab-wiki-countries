import React from 'react';
import { Link } from 'react-router-dom';

const Countrieslist = ({ country }) => {
  console.log(`country from countrieslist component:`, country);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {country.map((country) => {
              return (
                <Link
                  key={country.name.common}
                  to={`/${country.name.official}/${country.capital}/${country.area}/${country.borders}`}
                  className="list-group-item list-group-item-action"
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag-icon"
                    className="flag-icons"
                  />
                  <span>{country.name.common}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countrieslist;
