import { Given, When, Then } from '@cucumber/cucumber';
import dataManager from '../data/data-manager';
import creditFormPage from '../pageobjects/credit-form.page';

Given(/^"(.*)" fills out the form with their information$/, (userNameAlias) => {
    const userData = dataManager.getData(userNameAlias);
    creditFormPage.open();
    creditFormPage.filloutForm(userData);
});

When('they submit their form', () => {
    creditFormPage.submitForm();
});

Then(/^they see a submittal response "(.*)"$/, (msg) => {
    expect(creditFormPage.txtResponseMsg).toHaveText(msg);
});

Then(/^they see a "(.*)" submittal response$/, (msgType) => {
    const msgMap = dataManager.getNonCachedData("Form Submittal Response Messages")["msgMap"];
    expect(creditFormPage.txtResponseMsg).toHaveText(msgMap[msgType]);
});

Given(/^"(.*)" fills out the personal information section of the form$/, (userNameAlias) => {
    const userData = dataManager.getData(userNameAlias);
    creditFormPage.open();
    creditFormPage.filloutPersonalSection(userData);
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