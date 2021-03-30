class Header {
    /**
     * define selectors using getter methods
     */
    get headerLogoLink () { return $('#header-logo-link') }
    get headerTitle () { return $('#header-title') }
    get signinButton () { return $('#signin-button') }
    get signoutButton () { return $('#signout-button') }
}

export default new Header();
