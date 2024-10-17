import * as React from 'react';
import { ICountry } from '../../types';

interface Props {
  countries: ICountry[];
  onSelect: (code: string) => void;
}

const CountryList: React.FC<Props> = ({countries, onSelect}) => {

  return (
    <div >
      <h5>List of countries: </h5>
      <ul className="list-group">
        {countries.map((country) => (
          <li key={country.alpha3Code}
              onClick={() => onSelect(country.alpha3Code)}
              className="list-group-item list-group-item-action"
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;