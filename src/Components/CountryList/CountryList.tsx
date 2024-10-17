import * as React from 'react';
import { ICountry } from '../../types';

interface Props {
  countries: ICountry[];
}


const CountryList: React.FC<Props> = ({countries}) => {


  return (
    <div>
      <h5>List of countries: </h5>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;