import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/home.page';
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;

When('They go to the home page', function () {
    HomePage.open();
});

Then('They see the demo instructions', function () {
    cucumberJson.attach("Loging something important.");
    const titleElem = $('#title');
    expect(titleElem).toHaveText('Welcome to the Declarative Gherkin Demo!');
    const appTitleElem = $('#application-title');
    expect(appTitleElem).toHaveText('New Credit Card Submissions Applciation');
    const runTestTitleElem = $('#run-ghekin-tests-title');
    expect(runTestTitleElem).toHaveText('Running the Declarative Gherkin Tests');
    const usingAppTitleElem = $('#using-app-title');
    expect(usingAppTitleElem).toHaveText('Using the App');
});

Then('They see the header', function () {
    const headerLogoLinkElem = $('#header-logo-link');
    expect(headerLogoLinkElem).toHaveChildren(1);
    expect(headerLogoLinkElem).toHaveLink('http://localhost:4200/');
    const headerTitleElem = $('#header-title');
    expect(headerTitleElem).toHaveText('First Change Bank');
});

Then('They see they can login', function () {
    const signInBtnElem = $('#signin-button');
    expect(signInBtnElem).toBeVisible();
    const signOutBtnElem = $('#signout-button');
    expect(signOutBtnElem).not.toBeVisible();
});
