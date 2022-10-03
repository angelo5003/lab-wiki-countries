import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Countrydetails = ({ country }) => {
  const countryParams = useParams();

  return (
    <div className="col-7">
      <h1>{countryParams.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryParams.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryParams.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <Link>{countryParams.borders}</Link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Countrydetails;
