import React from 'react';

import { useNavigate } from 'react-router-dom';

const Countrieslist = ({ country }) => {
  const navigate = useNavigate();
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
                <div
                  key={country._id}
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    navigate(`/country/${country._id}`);
                  }}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag-icon"
                    className="flag-icons"
                  />
                  <span>{country.name.common}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countrieslist;
