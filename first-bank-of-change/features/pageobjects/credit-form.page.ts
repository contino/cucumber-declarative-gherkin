import Page from './page';

// The sections of the credit form mapped to URL paths
export enum FormSections {
    Personal = "user/form",
    Employment = "user/form/page2",
    Financial = "user/form/page3"
}

class CreditFormPage extends Page {

    get txtPageHelperTexts () { return $('.Mui-error') }

    // Personal section elements
    get tfFirstName () { return $('[name="firstName"]') }
    get txtFirstNameHelperText () { return $('#first-name-helper-text') }
    get tfMiddleInitial () { return $('[name="middleInitial"]') }
    get txtMiddleInitialHelperText () { return $('#middle-initial-helper-text') }
    get tfLastName () { return $('[name="lastName"]') }
    get txtLastNameHelperText () { return $('#last-name-helper-text') }
    get tfDateOfBirth () { return $('[name="dateOfBirth"]') }
    get txtDateOfBirthHelperText () { return $('#date-of-birth-helper-text') }
    get tfSsn () { return $('[name="ssn"]') }
    get txtSsnHelperText () { return $('#ssn-helper-text') }

    // Employment section elements
    get slctCountryOfCitizenShip () { return $('[name="countryOfCitizenShip"]') }
    get slctCountryOfCitizenShipSecondary () { return $('[name="countryOfCitizenShipSecondary"]') }
    get tfCurrentEmployerName () { return $('[name="currentEmployerName"]') }
    get tfWorkPhone () { return $('[name="workPhone"]') }
    get tfYearsEmployed () { return $('[name="yearsEmployed"]') }
    get tfMonthsEmployed () { return $('[name="monthsEmployed"]') }
    get tfOccupation () { return $('[name="occupation"]') }

    // Financial section elements
    get tfMonthlyIncome () { return $('[name="monthlyIncome"]') }
    get tfMonthlyHousingPayment () { return $('[name="monthlyHousingPayment"]') }
    get tfCheckingAmount () { return $('[name="checkingAmount"]') }
    get tfSavingsAmount () { return $('[name="savingsAmount"]') }
    get tfInvestmentsAmount () { return $('[name="investmentsAmount"]') }

    // Completion Page
    get txtResponseMsg () { return $('#response-msg') }
    get txtResponseTitle () { return $('#response-title') }

    get btnContinue () { return $('button[type="submit"]') }
    get btnSubmit () { return $('button[type="submit"]') }


    open () {
        super.open('user/form');
    }

    goToSection (section: FormSections) {
        super.open(section);
    }

    submitForm() {
        this.btnSubmit.click();
    }

    filloutForm (data) {
        this.filloutPersonalSection(data);
        this.btnContinue.click();
        this.filloutEmploymentSection(data);
        this.btnContinue.click();
        this.filloutFinancialSection(data);
    }
    
    filloutPersonalSection (data) {
        this.tfFirstName.setValue(data['firstName']);
        this.tfMiddleInitial.setValue(data['middleInitial']);
        this.tfLastName.setValue(data['lastName']);
        this.tfDateOfBirth.setValue(data['dateOfBirth']);
        this.tfSsn.setValue(data['ssn']);
    }

    filloutEmploymentSection(data) {
        this.slctCountryOfCitizenShip.selectByAttribute('value', data['countryOfCitizenShip']);
        this.slctCountryOfCitizenShipSecondary.selectByAttribute('value', data['countryOfCitizenShipSecondary']);
        this.tfCurrentEmployerName.setValue(data['currentEmployerName']);
        this.tfWorkPhone.setValue(data['workPhone']);
        this.tfYearsEmployed.setValue(data['yearsEmployed']);
        this.tfMonthsEmployed.setValue(data['monthsEmployed']);
        this.tfOccupation.setValue(data['occupation']);
    }

    filloutFinancialSection(data) {
        this.tfMonthlyIncome.setValue(data['monthlyIncome']);
        this.tfMonthlyHousingPayment.setValue(data['monthlyHousingPayment']);
        this.tfCheckingAmount.setValue(data['checkingAmount']);
        this.tfSavingsAmount.setValue(data['savingsAmount']);
        this.tfInvestmentsAmount.setValue(data['investmentsAmount']);
    }
}
export default new CreditFormPage();