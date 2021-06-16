import header from './header';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username: string, password: string) {
        if (header.signoutButton.isExisting()) {
            header.signoutButton.moveTo();
            if (header.signoutButton.isDisplayedInViewport()) {
                header.signoutButton.click();
            }
        }
        header.signinButton.click();
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        super.open('login');
    }
}

export default new LoginPage();
