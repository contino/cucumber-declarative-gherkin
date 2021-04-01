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
    expect(creditFormPage.txtSuccessMsg).toHaveText(msg);
});