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
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="bg-primary-subtle border rounded p-3 shadow-sm">
            <CountryList countries={countries} onSelect={setClickCountryCode}/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="bg-primary-subtle border rounded p-3 shadow-sm">
            <CountryInfo code={clickCountryCode}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;