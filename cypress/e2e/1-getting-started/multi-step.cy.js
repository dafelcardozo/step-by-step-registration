/// <reference types="cypress" />


describe('Multi-step form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Displays the personal info form by default', () => {
    cy.contains('Personal info');
    cy.wait(3000);
    cy.get("input[name=name]").type("Pepito Perez");
    cy.get("input[name=email]").type("pepito@perez.com");
    cy.get("input[name=phone]").type("1234567890");
    cy.contains('Next Step').click();

    cy.contains('Select your plan');
    cy.get("#stepsWrapper button:nth-child(3)").click();
    cy.get("[type=checkbox]").click();
    cy.contains("Next Step").click();

    cy.contains("Pick add-ons");
    cy.get("div > label:nth-child(1)").click()
    cy.get("div > label:nth-child(2)").click()
    cy.get("div > label:nth-child(3)").click()
    cy.contains("Next Step").click();

    cy.contains("Finishing up");
    cy.get("#bigTotal").contains('+$200/yr')
    cy.contains("Confirm").click();
    
    cy.contains("Thank you!")
  })

})
