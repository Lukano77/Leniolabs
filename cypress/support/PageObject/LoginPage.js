export class LoginPage {

clickLoginPage() {
    cy.getByDataTest('username').should('be.visible').type("standard_user");
    cy.getByDataTest('password').should('be.visible').type("secret_sauce");
    cy.getByDataTest('login-button').should('be.visible').click();  
    }
}
