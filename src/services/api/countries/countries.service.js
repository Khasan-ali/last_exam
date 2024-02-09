import axios from "axios";
import { useQuery } from "react-query";


const countriesService = {
  getCountryByName: (name) => axios.get(`https://restcountries.com/v3.1/name/${name}`).then(res => res.data),
  getCountriesByRegion: (region) => axios.get(`https://restcountries.com/v3.1/region/${region}`).then(res => res.data),
};

export const useGetCountryByName = (settings, name) => {
  return useQuery(["GET/COUNTRY", name], () => countriesService.getCountryByName(name), settings);
};

export const useGetCOuntriesByRegion = (settings, region) => {
  return useQuery(["GET/COUNTRIES/BY/REGION", region], () => countriesService.getCountriesByRegion(region), settings);
};
