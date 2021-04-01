import { Given, When, Then } from '@cucumber/cucumber';
import dataManager from '../data/data-manager';
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';

Given(/^"(.*)" logs in$/, (userNameAlias) => {
    const userData = dataManager.getData(userNameAlias);
    homePage.open();
    loginPage.login(userData.username, userData.password);
});
