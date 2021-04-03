import { Given, When, Then } from '@cucumber/cucumber';
import dataManager from '../data/data-manager';
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';

Given(/^"(.*)" logs in$/, (userNameAlias) => {
    const userData = dataManager.getData(userNameAlias, true);
    homePage.open();
    loginPage.login(userData.username, userData.password);
});

Given(/^"(.*)" logs in with these mods$/, (userNameAlias, table) => {
    const modDataNames = dataManager.getDataTableColumnValues(table, 0);
    const userData = dataManager.getDataWithMods(userNameAlias, modDataNames);
    homePage.open();
    loginPage.login(userData.username, userData.password);
});