import Page from './page';
import UserNavigation from './user-navigation';

enum FormSections {
    Personal = "user/form",
    Employment = "user/form/page2",
    Financial = "user/form/page3"
}

class CreditFormPage extends Page {

    // Personal section elements
    get tfFirstName () { return $('[name="firstName"]') }
    get tfMiddleInitial () { return $('[name="middleInitial"]') }
    get tfLastName () { return $('[name="lastName"]') }
    get tfDateOfBirth () { return $('[name="dateOfBirth"]') }
    get tfSsn () { return $('[name="ssn"]') }

    // Employment section elements
    get slctCountryOfCitizenShip () { return $('[name="countryOfCitizenShip"]') }
    get slctCountryOfCitizenShipSecondary () { return $('[name="countryOfCitizenShipSecondary"]') }
    get tfCurrentEmployerName () { return $('[name="currentEmployerName"]') }
    get tfWorkPhone () { return $('[name="workPhone"]') }
    get tfYearsEmployed () { return $('[name="yearsEmployed"]') }
    get tfMonthsEmployed () { return $('[name="monthsEmployed"]') }
    get tfOccupation () { return $('[name="occupation"]') }

    // Finanacial section elements
    get tfMonthlyIncome () { return $('[name="monthlyIncome"]') }
    get tfMonthlyHousingPayment () { return $('[name="monthlyHousingPayment"]') }
    get tfCheckingAmount () { return $('[name="checkingAmount"]') }
    get tfSavingsAmount () { return $('[name="savingsAmount"]') }
    get tfInvestmentsAmount () { return $('[name="investmentsAmount"]') }

    // Completion Page
    get txtSuccessMsg () { return $('#success-msg') }
    get txtSuccessTitle () { return $('#success-title') }
    get txtFailMsg () { return $('#fail-msg') }
    get txtFailTitle () { return $('#fail-title') }

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
        this.slctCountryOfCitizenShip.selectByVisibleText(data['countryOfCitizenShip']);
        this.slctCountryOfCitizenShipSecondary.selectByVisibleText(data['countryOfCitizenShipSecondary']);
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