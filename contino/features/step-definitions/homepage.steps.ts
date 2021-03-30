import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/home.page';
import Header from '../pageobjects/header';
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;

When('They go to the home page', function () {
    HomePage.open();
});

Then('They see the demo instructions', function () {
    cucumberJson.attach("Loging something important.");
    const titleElem = HomePage.title;
    expect(titleElem).toHaveText('Welcome to the Declarative Gherkin Demo!');
    const appTitleElem = HomePage.applicationTitle;
    expect(appTitleElem).toHaveText('New Credit Card Submissions Applciation');
    const runTestTitleElem = HomePage.runGherkinTestTitle;
    expect(runTestTitleElem).toHaveText('Running the Declarative Gherkin Tests');
    const usingAppTitleElem = HomePage.usingAppTitle;
    expect(usingAppTitleElem).toHaveText('Using the App');
});

Then('They see the header', function () {
    const headerLogoLinkElem = Header.headerLogoLink;
    expect(headerLogoLinkElem).toHaveChildren(1);
    expect(headerLogoLinkElem).toHaveLink('http://localhost:4200/');
    const headerTitleElem = Header.headerTitle;
    expect(headerTitleElem).toHaveText('First Change Bank');
});

Then('They see they can login', function () {
    const signInBtnElem = Header.signinButton;
    expect(signInBtnElem).toBeVisible();
    const signOutBtnElem = Header.signoutButton;
    expect(signOutBtnElem).not.toBeVisible();
});
