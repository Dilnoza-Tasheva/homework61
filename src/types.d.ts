export interface ICountry {
  name: string;
  alpha3Code: string;
  id: number;
}

export interface APICountry {
  name: string;
  id: number;
  capital: string;
  population: number;
  borders: string[];
  flag: string;
}