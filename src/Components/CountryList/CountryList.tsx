import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { ICountry } from '../../types';
import MakeRequest from '../../Helpers/MakeRequest.ts';
import { BASE_URL, LIST_URL } from '../../constants.ts';


const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const data = await MakeRequest<ICountry[]>(BASE_URL + LIST_URL);
      setCountries(data);
    } catch (error) {
      console.log (error);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

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