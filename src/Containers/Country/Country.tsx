import CountryList from '../../Components/CountryList/CountryList.tsx';
import CountryInfo from '../../Components/CountryInfo/CountryInfo.tsx';
import { useCallback, useEffect, useState } from 'react';
import { ICountry } from '../../types';
import MakeRequest from '../../Helpers/MakeRequest.ts';
import { BASE_URL, LIST_URL } from '../../constants.ts';


const Country = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [clickCountryCode, setClickCountryCode] = useState<string | null>(null);

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
    <div className="container mt-4 d-flex">
      <CountryList countries={countries} onSelect={setClickCountryCode}/>
      <CountryInfo code={clickCountryCode}/>
    </div>
  );
};

export default Country;