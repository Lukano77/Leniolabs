export class LoginPage {
    constructor() {
        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
    }


clickLoginPage() {
    cy.get(this.username).type("standard_user");
    cy.get(this.password).type("secret_sauce");
    cy.get(this.loginButton).click();
    }
}
