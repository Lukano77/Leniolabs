// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import './PageObject/loginPage';

Cypress.Commands.add('getByDataTest', (selector) => {
    return cy.get(`[data-test=${selector}]`)
});


Cypress.Commands.add('login',(user,pass)=>{
    cy.getByDataTest('username').should('be.visible').type(user);
    cy.getByDataTest('password').type(pass)
    cy.getByDataTest('login-button').click()
});