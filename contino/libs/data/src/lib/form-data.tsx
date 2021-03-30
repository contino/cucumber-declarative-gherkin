import { useContext, createContext, useState } from "react";
import { ApplicationData } from "./application-data";

export const formDataContext = createContext(null);

export function useFormData() {
  return useContext(formDataContext);
}

export function useProviderFormData() {
  const [data, setData] = useState<ApplicationData>(new ApplicationData());

  const setFormData = (data) => {
    return setData(data);
  }
  return {
    data,
    setFormData,
  }
}
