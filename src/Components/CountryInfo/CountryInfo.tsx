import * as React from 'react';
import { useEffect, useState } from 'react';
import { APICountry } from '../../types';
import axios from 'axios';
import { BASE_URL } from '../../constants.ts';

interface Props {
  code: string;
}

const URL_TO_GET_ONE_COUNTRY = BASE_URL + 'alpha/';

const CountryInfo: React.FC<Props> = ({code}) => {
  const [country, setCountry] = useState<APICountry | null>(null);

  useEffect(() => {
    const getCountryByCode = async () => {
      const responseReq = await axios.get<APICountry>(URL_TO_GET_ONE_COUNTRY + code);
      setCountry(responseReq.data);
    };

    if (code) {
      void getCountryByCode();
    }
  }, [code]);

  return  country && (
    <div className="mt-4">
      <h4>{country.name}</h4>
      <div>
        <p>Country information: {country.capital}</p>
        <p>Borders</p>
      </div>
    </div>
  );
};

export default CountryInfo;