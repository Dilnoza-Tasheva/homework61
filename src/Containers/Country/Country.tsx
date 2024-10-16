import CountryList from '../../Components/CountryList/CountryList.tsx';
import CountryInfo from '../../Components/CountryInfo/CountryInfo.tsx';


const Country = () => {
  return (
    <div className="container mt-4">
      <CountryList/>
      <CountryInfo/>
    </div>
  );
};

export default Country;