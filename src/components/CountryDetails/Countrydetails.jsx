import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Countrydetails = ({ country }) => {
  const { id } = useParams();
  console.log(`hello froim the country details`, country);

  return (
    <div className="col-7">
      {country
        .filter((newCountry) => {
          return newCountry._id === id;
        })
        .map((country) => {
          return (
            <div key={country._id}>
              <h1>{country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        <li>
                          <Link>{country.borders}</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default Countrydetails;
