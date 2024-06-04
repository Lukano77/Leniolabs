/// <reference types="cypress" />

import { LoginPage } from "../../support/PageObject/LoginPage"
describe('Test SauceDemo Leonilabs',()=>{
    const loginPage = new LoginPage();
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Swag Labs', ()=> {
        loginPage.clickLoginPage();
    })
})