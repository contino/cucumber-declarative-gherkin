import { useContext, createContext, useState } from "react";
import { ApplicationData } from "./application-data";

export const formDataContext = createContext(null);

export function useFormData() {
  return useContext(formDataContext);
}

export function useProviderFormData() {
  const [data, setData] = useState<ApplicationData>(new ApplicationData());

  const appendFormData = (dataFragment) => {
    const newData = Object.assign(data, dataFragment);
    return setData(newData);
  }
  const isValid = () => {
    console.log('isValid')
    console.dir(data)
    return Object.keys(data).every((key) =>{
      console.dir(data[key])
      return data[key] !== undefined 
      || key === 'countryOfCitizenShipSecondary' 
      || key === 'id';
    })
  }
  return {
    data,
    appendFormData,
    isValid,
  }
}
