import { useContext, createContext, useState } from "react";

export const formDataContext = createContext(null);

export function useFormData() {
  return useContext(formDataContext);
}

export function useProviderFormData() {
  const [data, setData] = useState({"title": "Howdy!"});

  const setFormData = (data) => {
    return setData(data);
  }
  return {
    data,
    setFormData,
  }
}
