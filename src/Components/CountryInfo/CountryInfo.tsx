import * as React from 'react';
import { useEffect, useState } from 'react';
import { APICountry } from '../../types';
import axios from 'axios';
import { BASE_URL } from '../../constants.ts';

interface Props {
  code: string | null;
}

const URL_TO_GET_ONE_COUNTRY = BASE_URL + 'alpha/';

const CountryInfo: React.FC<Props> = ({code}) => {
  const [country, setCountry] = useState<APICountry | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    const getCountryByCode = async () => {
      const responseReq = await axios.get<APICountry>(URL_TO_GET_ONE_COUNTRY + code);
      setCountry(responseReq.data);

      if (responseReq.data.borders) {
        const borderPromises = responseReq.data.borders.map(async(borderCode: string) => {
          const borderResponse = await axios.get<{name: string}>(URL_TO_GET_ONE_COUNTRY + borderCode);
          return borderResponse.data.name;
        });
        const borderNames = await Promise.all(borderPromises);
        setBorderCountries(borderNames);
      } else {
        setBorderCountries([]);
      }
    };



    if (code) {
      void getCountryByCode();
    }
  }, [code]);

  return  country ? (
    <div className="mt-4">
      <h4>{country.name}</h4>
      <div>
        <p><strong>Capital: </strong>{country.capital}</p>
        <p><strong>Population: </strong>{country.population}</p>
        <p><strong>Borders with: </strong>{borderCountries.length > 0 ? borderCountries : 'No bordering countries'}</p>
      </div>
    </div>
  ) : (
    <div>Country not found</div>
  );
};

export default CountryInfo;