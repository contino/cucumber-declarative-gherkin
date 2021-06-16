import { useContext, createContext, useState } from "react";
import { ApplicationData } from "./application-data";
import * as userData from "./user-data.json";


export const formDataContext = createContext(null);

/*
  This handles data used by the credit application form for a new credit card.
  There are several validation functions to confirm a new request form is 
  valid for the next stage of processing
*/

export function useFormData() {
  return useContext(formDataContext);
}

function getUserData(firstName, lastName) {
  return userData['default'][firstName + lastName];
}

// This function emulates a call to a remote credit score system.  It will 
// even fail, if the user is "Kelly Baddy".
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

// This does a monthly debt to income check and ensure is acceptable.
function isAcceptableBackEndRatio(data) {
  if (data && data.monthlyHousingPayment && data.monthlyIncome) {
    const backEndRatio = data.monthlyHousingPayment/data.monthlyIncome
    console.log("backEndRatio", backEndRatio)
    const result = backEndRatio <= .36
    console.log("isAcceptableBackEndRatio", result)
    return result
  }
}

// This makes the application data available via a hook.
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
