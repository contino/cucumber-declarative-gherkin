import { useFormData } from '@contino/data';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useHistory,
} from "react-router-dom";

import './credit-form-employment-info.module.scss';

/* eslint-disable-next-line */
export interface CreditFormEmploymentInfoProps { }

type EmploymentInputs = {
  countryOfCitizenShip: string,
  countryOfCitizenShipSecondary: string,
  currentEmployerName: string,
  workPhone: string,
  yearsEmployed: number,
  monthsEmployed: number,
  occupation: string,
}
let schema = yup.object().shape({
  countryOfCitizenShip: yup.string().required().min(2).matches(/^[A-Za-z \.]+$/i),
  countryOfCitizenShipSecondary: yup.string().required().min(2).matches(/^[A-Za-z \.]+$/i),
  currentEmployerName: yup.string().required().min(3).matches(/^[A-Za-z \.]+$/i),
  workPhone: yup.string().required().min(3).matches(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i),
  yearsEmployed: yup.number().required().max(80).positive(),
  monthsEmployed: yup.number().required().max(12).positive(),
  occupation: yup.string().required().min(3).matches(/^[A-Za-z \.]+$/i),
});

export function CreditFormEmploymentInfo(props: CreditFormEmploymentInfoProps) {
  const { register, handleSubmit, setValue, formState, errors } = useForm<EmploymentInputs>({
    resolver: yupResolver(schema),
  });
  const formData = useFormData();
  const history = useHistory();

  const cachedData = formData.data;

  const onSubmit = (data) => {
    console.log("onSubmit")
    console.dir(data);
    formData.appendFormData(data);
    history.push("/user/form/page3");
  }

  const handleChangecountryOfCitizenShip = (e) => {
    setValue("countryOfCitizenShip", e.target.value, { shouldDirty: true });
    cachedData.countryOfCitizenShip = e.target.value
    formData.appendFormData(cachedData);
  }
  const handleChangecountryOfCitizenShipSecondary = (e) => {
    setValue("countryOfCitizenShipSecondary", e.target.value, { shouldDirty: true });
    cachedData.countryOfCitizenShipSecondary = e.target.value
    formData.appendFormData(cachedData);
  }

  React.useEffect(() => {
    register("countryOfCitizenShip"); // custom register Antd input
    register("countryOfCitizenShipSecondary"); // custom register Antd input
    if (cachedData.countryOfCitizenShip) {
      setValue('countryOfCitizenShip', cachedData.countryOfCitizenShip, { shouldDirty: true });
    }
    if (cachedData.countryOfCitizenShipSecondary) {
      setValue('countryOfCitizenShipSecondary', cachedData.countryOfCitizenShipSecondary, { shouldDirty: true });
    }
  }, [register])


  console.log("cachedData");
  console.dir(cachedData);
  console.log("formState", JSON.stringify(formState, null, 2));
  // console.dir(formState);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h5">
        Personal Information
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <InputLabel id="citizenship-country-label">Country of Citizenship</InputLabel>
        <Select
          name="countryOfCitizenShip"
          required
          labelId="citizenship-country-label"
          onChange={handleChangecountryOfCitizenShip}
          error={errors.countryOfCitizenShip?.message !== undefined}
          value={cachedData.countryOfCitizenShip || ''}
        >
          <MenuItem value='AR'>Argentina</MenuItem>
          <MenuItem value='AU'>Australia</MenuItem>
          <MenuItem value='AT'>Austria</MenuItem>
          <MenuItem value='BS'>Bahamas</MenuItem>
          <MenuItem value='BH'>Bahrain</MenuItem>
          <MenuItem value='BD'>Bangladesh</MenuItem>
          <MenuItem value='BB'>Barbados</MenuItem>
          <MenuItem value='BE'>Belgium</MenuItem>
          <MenuItem value='BZ'>Belize</MenuItem>
          <MenuItem value='BJ'>Benin</MenuItem>
          <MenuItem value='BM'>Bermuda</MenuItem>
          <MenuItem value='BO'>Bolivia</MenuItem>
          <MenuItem value='BR'>Brazil</MenuItem>
          <MenuItem value='BG'>Bulgaria</MenuItem>
          <MenuItem value='BF'>Burkina Faso</MenuItem>
          <MenuItem value='CL'>Chile</MenuItem>
          <MenuItem value='CN'>China</MenuItem>
          <MenuItem value='CO'>Colombia</MenuItem>
          <MenuItem value='CR'>Costa Rica</MenuItem>
          <MenuItem value='CI'>Côte D' Ivoire</MenuItem>
          <MenuItem value='HR'>Croatia</MenuItem>
          <MenuItem value='CU'>Cuba</MenuItem>
          <MenuItem value='CY'>Cyprus</MenuItem>
          <MenuItem value='CZ'>Czech Republic</MenuItem>
          <MenuItem value='DK'>Denmark</MenuItem>
          <MenuItem value='DO'>Dominican Republic</MenuItem>
          <MenuItem value='EC'>Ecuador</MenuItem>
          <MenuItem value='EG'>Egypt</MenuItem>
          <MenuItem value='SV'>El Salvador</MenuItem>
          <MenuItem value='EE'>Estonia</MenuItem>
          <MenuItem value='ET'>Ethiopia</MenuItem>
          <MenuItem value='FI'>Finland</MenuItem>
          <MenuItem value='FR'>France</MenuItem>
          <MenuItem value='GM'>Gambia</MenuItem>
          <MenuItem value='DE'>Germany</MenuItem>
          <MenuItem value='GH'>Ghana</MenuItem>
          <MenuItem value='GB'>Great Britain</MenuItem>
          <MenuItem value='GR'>Greece</MenuItem>
          <MenuItem value='GT'>Guatemala</MenuItem>
          <MenuItem value='GN'>Guinea</MenuItem>
          <MenuItem value='GY'>Guyana</MenuItem>
          <MenuItem value='HN'>Honduras</MenuItem>
          <MenuItem value='HK'>Hong Kong</MenuItem>
          <MenuItem value='HU'>Hungary</MenuItem>
          <MenuItem value='IS'>Iceland</MenuItem>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='ID'>Indonesia</MenuItem>
          <MenuItem value='IR'>Iran</MenuItem>
          <MenuItem value='IQ'>Iraq</MenuItem>
          <MenuItem value='IE'>Ireland</MenuItem>
          <MenuItem value='IL'>Israel</MenuItem>
          <MenuItem value='IT'>Italy</MenuItem>
          <MenuItem value='JM'>Jamaica</MenuItem>
          <MenuItem value='JP'>Japan</MenuItem>
          <MenuItem value='JO'>Jordan</MenuItem>
          <MenuItem value='KE'>Kenya</MenuItem>
          <MenuItem value='KW'>Kuwait</MenuItem>
          <MenuItem value='LV'>Latvia</MenuItem>
          <MenuItem value='LB'>Lebanon</MenuItem>
          <MenuItem value='LR'>Liberia</MenuItem>
          <MenuItem value='LY'>Libya</MenuItem>
          <MenuItem value='LI'>Liechtenstein</MenuItem>
          <MenuItem value='LT'>Lithuania</MenuItem>
          <MenuItem value='LU'>Luxembourg</MenuItem>
          <MenuItem value='MW'>Malawi</MenuItem>
          <MenuItem value='MY'>Malaysia</MenuItem>
          <MenuItem value='ML'>Mali</MenuItem>
          <MenuItem value='MT'>Malta</MenuItem>
          <MenuItem value='MR'>Mauritania</MenuItem>
          <MenuItem value='MU'>Mauritius</MenuItem>
          <MenuItem value='MX'>Mexico</MenuItem>
          <MenuItem value='MA'>Morocco</MenuItem>
          <MenuItem value='NL'>Netherlands</MenuItem>
          <MenuItem value='NZ'>New Zealand</MenuItem>
          <MenuItem value='NI'>Nicaragua</MenuItem>
          <MenuItem value='NE'>Niger</MenuItem>
          <MenuItem value='NG'>Nigeria</MenuItem>
          <MenuItem value='NO'>Norway</MenuItem>
          <MenuItem value='OM'>Oman</MenuItem>
          <MenuItem value='PK'>Pakistan</MenuItem>
          <MenuItem value='PA'>Panama</MenuItem>
          <MenuItem value='PY'>Paraguay</MenuItem>
          <MenuItem value='PE'>Peru</MenuItem>
          <MenuItem value='PH'>Philippines</MenuItem>
          <MenuItem value='PL'>Poland</MenuItem>
          <MenuItem value='PT'>Portugal</MenuItem>
          <MenuItem value='PR'>Puerto Rico</MenuItem>
          <MenuItem value='QA'>Qatar</MenuItem>
          <MenuItem value='KR'>Republic of Korea</MenuItem>
          <MenuItem value='RO'>Romania</MenuItem>
          <MenuItem value='RU'>Russian Federation</MenuItem>
          <MenuItem value='SA'>Saudi Arabia</MenuItem>
          <MenuItem value='SN'>Senegal</MenuItem>
          <MenuItem value='SC'>Seychelles</MenuItem>
          <MenuItem value='SL'>Sierra Leone</MenuItem>
          <MenuItem value='SG'>Singapore</MenuItem>
          <MenuItem value='SK'>Slovakia</MenuItem>
          <MenuItem value='SI'>Slovenia</MenuItem>
          <MenuItem value='ZA'>South Africa</MenuItem>
          <MenuItem value='ES'>Spain</MenuItem>
          <MenuItem value='LK'>Sri Lanka</MenuItem>
          <MenuItem value='SD'>Sudan</MenuItem>
          <MenuItem value='SR'>Surinam</MenuItem>
          <MenuItem value='SE'>Sweden</MenuItem>
          <MenuItem value='CH'>Switzerland</MenuItem>
          <MenuItem value='SY'>Syria</MenuItem>
          <MenuItem value='SY'>Syrian Arab Republic</MenuItem>
          <MenuItem value='TW'>Taiwan, Province of China</MenuItem>
          <MenuItem value='TZ'>Tanzania</MenuItem>
          <MenuItem value='TH'>Thailand</MenuItem>
          <MenuItem value='TT'>Trinidad and Tobago</MenuItem>
          <MenuItem value='TN'>Tunisia</MenuItem>
          <MenuItem value='TR'>Turkey</MenuItem>
          <MenuItem value='UG'>Uganda</MenuItem>
          <MenuItem value='UA'>Ukraine</MenuItem>
          <MenuItem value='AE'>United Arab Emirates</MenuItem>
          <MenuItem value='UY'>Uruguay</MenuItem>
          <MenuItem value='VE'>Venezuela</MenuItem>
          <MenuItem value='VN'>Vietnam</MenuItem>
          <MenuItem value='YE'>Yemen</MenuItem>
          <MenuItem value='ZM'>Zambia</MenuItem>
          <MenuItem value='ZW'>Zimbabwe</MenuItem>
        </Select>
        <FormHelperText>{errors.countryOfCitizenShip?.message}</FormHelperText>

        <InputLabel id="second-citizenship-country-label">Second Country of Citizenship</InputLabel>
        <Select
          name="countryOfCitizenShipSecondary"
          required
          labelId="second-citizenship-country-label"
          onChange={handleChangecountryOfCitizenShipSecondary}
          error={errors.countryOfCitizenShipSecondary?.message !== undefined}
          value={cachedData.countryOfCitizenShipSecondary || ''}
        >
          <MenuItem value='XX'>Unselected</MenuItem>
          <MenuItem value='AR'>Argentina</MenuItem>
          <MenuItem value='AU'>Australia</MenuItem>
          <MenuItem value='AT'>Austria</MenuItem>
          <MenuItem value='BS'>Bahamas</MenuItem>
          <MenuItem value='BH'>Bahrain</MenuItem>
          <MenuItem value='BD'>Bangladesh</MenuItem>
          <MenuItem value='BB'>Barbados</MenuItem>
          <MenuItem value='BE'>Belgium</MenuItem>
          <MenuItem value='BZ'>Belize</MenuItem>
          <MenuItem value='BJ'>Benin</MenuItem>
          <MenuItem value='BM'>Bermuda</MenuItem>
          <MenuItem value='BO'>Bolivia</MenuItem>
          <MenuItem value='BR'>Brazil</MenuItem>
          <MenuItem value='BG'>Bulgaria</MenuItem>
          <MenuItem value='BF'>Burkina Faso</MenuItem>
          <MenuItem value='CL'>Chile</MenuItem>
          <MenuItem value='CN'>China</MenuItem>
          <MenuItem value='CO'>Colombia</MenuItem>
          <MenuItem value='CR'>Costa Rica</MenuItem>
          <MenuItem value='CI'>Côte D' Ivoire</MenuItem>
          <MenuItem value='HR'>Croatia</MenuItem>
          <MenuItem value='CU'>Cuba</MenuItem>
          <MenuItem value='CY'>Cyprus</MenuItem>
          <MenuItem value='CZ'>Czech Republic</MenuItem>
          <MenuItem value='DK'>Denmark</MenuItem>
          <MenuItem value='DO'>Dominican Republic</MenuItem>
          <MenuItem value='EC'>Ecuador</MenuItem>
          <MenuItem value='EG'>Egypt</MenuItem>
          <MenuItem value='SV'>El Salvador</MenuItem>
          <MenuItem value='EE'>Estonia</MenuItem>
          <MenuItem value='ET'>Ethiopia</MenuItem>
          <MenuItem value='FI'>Finland</MenuItem>
          <MenuItem value='FR'>France</MenuItem>
          <MenuItem value='GM'>Gambia</MenuItem>
          <MenuItem value='DE'>Germany</MenuItem>
          <MenuItem value='GH'>Ghana</MenuItem>
          <MenuItem value='GB'>Great Britain</MenuItem>
          <MenuItem value='GR'>Greece</MenuItem>
          <MenuItem value='GT'>Guatemala</MenuItem>
          <MenuItem value='GN'>Guinea</MenuItem>
          <MenuItem value='GY'>Guyana</MenuItem>
          <MenuItem value='HN'>Honduras</MenuItem>
          <MenuItem value='HK'>Hong Kong</MenuItem>
          <MenuItem value='HU'>Hungary</MenuItem>
          <MenuItem value='IS'>Iceland</MenuItem>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='ID'>Indonesia</MenuItem>
          <MenuItem value='IR'>Iran</MenuItem>
          <MenuItem value='IQ'>Iraq</MenuItem>
          <MenuItem value='IE'>Ireland</MenuItem>
          <MenuItem value='IL'>Israel</MenuItem>
          <MenuItem value='IT'>Italy</MenuItem>
          <MenuItem value='JM'>Jamaica</MenuItem>
          <MenuItem value='JP'>Japan</MenuItem>
          <MenuItem value='JO'>Jordan</MenuItem>
          <MenuItem value='KE'>Kenya</MenuItem>
          <MenuItem value='KW'>Kuwait</MenuItem>
          <MenuItem value='LV'>Latvia</MenuItem>
          <MenuItem value='LB'>Lebanon</MenuItem>
          <MenuItem value='LR'>Liberia</MenuItem>
          <MenuItem value='LY'>Libya</MenuItem>
          <MenuItem value='LI'>Liechtenstein</MenuItem>
          <MenuItem value='LT'>Lithuania</MenuItem>
          <MenuItem value='LU'>Luxembourg</MenuItem>
          <MenuItem value='MW'>Malawi</MenuItem>
          <MenuItem value='MY'>Malaysia</MenuItem>
          <MenuItem value='ML'>Mali</MenuItem>
          <MenuItem value='MT'>Malta</MenuItem>
          <MenuItem value='MR'>Mauritania</MenuItem>
          <MenuItem value='MU'>Mauritius</MenuItem>
          <MenuItem value='MX'>Mexico</MenuItem>
          <MenuItem value='MA'>Morocco</MenuItem>
          <MenuItem value='NL'>Netherlands</MenuItem>
          <MenuItem value='NZ'>New Zealand</MenuItem>
          <MenuItem value='NI'>Nicaragua</MenuItem>
          <MenuItem value='NE'>Niger</MenuItem>
          <MenuItem value='NG'>Nigeria</MenuItem>
          <MenuItem value='NO'>Norway</MenuItem>
          <MenuItem value='OM'>Oman</MenuItem>
          <MenuItem value='PK'>Pakistan</MenuItem>
          <MenuItem value='PA'>Panama</MenuItem>
          <MenuItem value='PY'>Paraguay</MenuItem>
          <MenuItem value='PE'>Peru</MenuItem>
          <MenuItem value='PH'>Philippines</MenuItem>
          <MenuItem value='PL'>Poland</MenuItem>
          <MenuItem value='PT'>Portugal</MenuItem>
          <MenuItem value='PR'>Puerto Rico</MenuItem>
          <MenuItem value='QA'>Qatar</MenuItem>
          <MenuItem value='KR'>Republic of Korea</MenuItem>
          <MenuItem value='RO'>Romania</MenuItem>
          <MenuItem value='RU'>Russian Federation</MenuItem>
          <MenuItem value='SA'>Saudi Arabia</MenuItem>
          <MenuItem value='SN'>Senegal</MenuItem>
          <MenuItem value='SC'>Seychelles</MenuItem>
          <MenuItem value='SL'>Sierra Leone</MenuItem>
          <MenuItem value='SG'>Singapore</MenuItem>
          <MenuItem value='SK'>Slovakia</MenuItem>
          <MenuItem value='SI'>Slovenia</MenuItem>
          <MenuItem value='ZA'>South Africa</MenuItem>
          <MenuItem value='ES'>Spain</MenuItem>
          <MenuItem value='LK'>Sri Lanka</MenuItem>
          <MenuItem value='SD'>Sudan</MenuItem>
          <MenuItem value='SR'>Surinam</MenuItem>
          <MenuItem value='SE'>Sweden</MenuItem>
          <MenuItem value='CH'>Switzerland</MenuItem>
          <MenuItem value='SY'>Syria</MenuItem>
          <MenuItem value='SY'>Syrian Arab Republic</MenuItem>
          <MenuItem value='TW'>Taiwan, Province of China</MenuItem>
          <MenuItem value='TZ'>Tanzania</MenuItem>
          <MenuItem value='TH'>Thailand</MenuItem>
          <MenuItem value='TT'>Trinidad and Tobago</MenuItem>
          <MenuItem value='TN'>Tunisia</MenuItem>
          <MenuItem value='TR'>Turkey</MenuItem>
          <MenuItem value='UG'>Uganda</MenuItem>
          <MenuItem value='UA'>Ukraine</MenuItem>
          <MenuItem value='AE'>United Arab Emirates</MenuItem>
          <MenuItem value='UY'>Uruguay</MenuItem>
          <MenuItem value='VE'>Venezuela</MenuItem>
          <MenuItem value='VN'>Vietnam</MenuItem>
          <MenuItem value='YE'>Yemen</MenuItem>
          <MenuItem value='ZM'>Zambia</MenuItem>
          <MenuItem value='ZW'>Zimbabwe</MenuItem>
        </Select>
        <FormHelperText>{errors.countryOfCitizenShip?.message}</FormHelperText>

        <TextField name="currentEmployerName" required id="standard-required" label="Employer Name"
          style={{ display: 'flex', margin: '0 0 25px 0' }}
          inputRef={register({ required: true })}
          error={errors.currentEmployerName?.message !== undefined}
          helperText={errors.currentEmployerName?.message}
          value={cachedData.currentEmployerName}
        />
        <TextField name="workPhone" required id="standard-required" label="Work Phone"
          style={{ display: 'flex', margin: '0 0 25px 0' }}
          inputRef={register({ required: true })}
          error={errors.workPhone?.message !== undefined}
          helperText={errors.workPhone?.message}
          value={cachedData.workPhone}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <TextField name="yearsEmployed" required id="standard-required" label="Years Employed"
            style={{ display: 'flex', margin: '0 0 25px 0' }}
            inputRef={register({ required: true })}
            error={errors.yearsEmployed?.message !== undefined}
            helperText={errors.yearsEmployed?.message}
            value={cachedData.yearsEmployed}
          />
          <TextField name="monthsEmployed" required id="standard-required" label="Months Employed"
            style={{ display: 'flex', margin: '0 0 25px 0' }}
            inputRef={register({ required: true })}
            error={errors.monthsEmployed?.message !== undefined}
            helperText={errors.monthsEmployed?.message}
            value={cachedData.monthsEmployed}
          />
        </div>
        <TextField name="occupation" required id="standard-required" label="Occupation"
          style={{ display: 'flex', margin: '0 0 25px 0' }}
          inputRef={register({ required: true })}
          error={errors.occupation?.message !== undefined}
          helperText={errors.occupation?.message}
          value={cachedData.occupation}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
          <Button variant="contained">
            Cancel
          </Button>
          <Button variant="contained" color="secondary">
            Previous
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreditFormEmploymentInfo;
