import { Given, When, Then } from '@cucumber/cucumber';
import dataManager from '../data/data-manager';
import { default as creditFormPage,  FormSections } from '../pageobjects/credit-form.page';

const sectionNameMap = {
    "personal information": FormSections.Personal,
    "employment information": FormSections.Employment,
    "financial information": FormSections.Financial,
}

Given(/^"(.*)" fills out the form with their information$/, (userNameAlias) => {
    const userData = dataManager.getData(userNameAlias);
    creditFormPage.open();
    creditFormPage.filloutForm(userData);
});

Given(/^they navigate the "(.*)" section of the form$/, (formSectionName) => {
    creditFormPage.goToSection(sectionNameMap[formSectionName]);
});

Given('they see no error messages in the form section', () => {
    expect(creditFormPage.txtPageHelperTexts).not.toExist();
});

Given(/^"(.*)" fills out the personal information section of the form$/, (userNameAlias) => {
    const userData = dataManager.getData(userNameAlias);
    creditFormPage.open();
    creditFormPage.filloutPersonalSection(userData);
});

When('they submit their form', () => {
    creditFormPage.submitForm();
});

When('they attept to continue to next section', () => {
    creditFormPage.btnSubmit.click();
});

Then(/^they see '(.*)' name error messages$/, (errorName) => {
    const msgMap = dataManager.getNonCachedData(errorName)
    expect(creditFormPage.txtFirstNameHelperText).toHaveText(msgMap['firstName']);
    expect(creditFormPage.txtMiddleInitialHelperText).toHaveText(msgMap['middleInitial']);
    expect(creditFormPage.txtLastNameHelperText).toHaveText(msgMap['lastName']);
});

Then(/^they see a submittal response "(.*)"$/, (msg) => {
    expect(creditFormPage.txtResponseMsg).toHaveText(msg);
});

Then(/^they see a "(.*)" submittal response$/, (msgType) => {
    const msgMap = dataManager.getNonCachedData("Form Submittal Response Messages")["msgMap"];
    expect(creditFormPage.txtResponseMsg).toHaveText(msgMap[msgType]);
});
