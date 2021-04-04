import { useContext, createContext, useState } from "react";
import { ApplicationData } from "./application-data";
import * as userData from "./user-data.json";


export const formDataContext = createContext(null);

export function useFormData() {
  return useContext(formDataContext);
}

function getUserData(firstName, lastName) {
  return userData['default'][firstName + lastName];
}

function isAcceptableCreditScore(data) {
  if (data.firstName === 'Kelly' && data.lastName === 'Baddy') {
    throw new Error('Credit scroe system unavailable.');
  }
  const user = getUserData(data.firstName, data.lastName)
  console.log("isAcceptableCreditScore-user", 
  JSON.stringify(user, null, 2));
  console.log("isAcceptableCreditScore: ", user && user.creditScore >= 661)
  return user && user.creditScore >= 661
}

function isAcceptableBackEndRatio(data) {
  if (data && data.monthlyHousingPayment && data.monthlyIncome) {
    const backEndRatio = data.monthlyHousingPayment/data.monthlyIncome
    console.log("backEndRatio", backEndRatio)
    const result = backEndRatio <= .36
    console.log("isAcceptableBackEndRatio", result)
    return result
  }
}

export function useProviderFormData() {
  const [data, setData] = useState<ApplicationData>(new ApplicationData());

  const appendFormData = (dataFragment) => {
    const newData = Object.assign(data, dataFragment);
    return setData(newData);
  }
  const isValid = () => {
    return Object.keys(data).every((key) => {
      return data[key] !== undefined 
      || key === 'countryOfCitizenShipSecondary' 
      || key === 'id';
    })
  }
  const isApproved = () => {
    return isAcceptableCreditScore(data) 
    && isAcceptableBackEndRatio(data) 
  }
  return {
    data,
    appendFormData,
    isValid,
    isApproved,
  }
}
