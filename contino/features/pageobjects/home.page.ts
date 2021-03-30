import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () { return $('#title') }
    get applicationTitle () { return $('#application-title') }
    get runGherkinTestTitle () { return $('#run-ghekin-tests-title') }
    get usingAppTitle () { return $('#using-app-title') }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();
