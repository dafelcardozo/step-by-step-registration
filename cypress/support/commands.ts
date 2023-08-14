/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('fillPersonalInfo', (name, email, phone) => { 
    cy.contains('Personal info');
    cy.get("input[name=name]").type(name);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=phone]").type(phone);
 })

 Cypress.Commands.add('nextStep', () => {
    cy.contains('Next Step').click();
 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
        fillPersonalInfo(name: string, email: string, phone: string): Chainable<void>,
        nextStep(): Chainable<void>
    }
  }
}
export {}