/// <reference types="cypress" />

import { LOGIN_USERS } from "../../support/const";


describe('Test SauceDemo Leonilabs',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Swag Labs', ()=> {
       cy.login(LOGIN_USERS.STANDAR.username,LOGIN_USERS.STANDAR.password);
    })
})