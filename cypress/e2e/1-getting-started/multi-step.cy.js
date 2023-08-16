/// <reference types="cypress" />


describe('Multi-step form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Best buyer flow: p.i. form typed with no validations, all add-ons to yearly plan, reaches the thank you screen', () => {
    cy.fillPersonalInfo("Pepito Perez", "pepito@perez.com", "1234567890")
     .nextStep();

    cy.contains('Select your plan');
    cy.get("div[role=group] button:nth-child(3)").click();
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

  it('Best buyer flow on viewport iPhone 6', () => {
      cy.viewport('iphone-6')
      cy.fillPersonalInfo("Pepito Perez", "pepito@perez.com", "1234567890")
       .nextStep();
  
      cy.contains('Select your plan');
      cy.get("div[role=group] button:nth-child(3)").click();
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

  it('Validation flow: all form validations triggered on personal info and plan selection screens, and then corrected', () => {
    cy.nextStep();

    cy.contains('This field is required')
    cy.contains('Personal info')
    cy.get("input[name=name]").type("Pepito Perez")
    cy.nextStep()
    
    cy.contains('This field is required')
    cy.contains('Personal info');
    cy.get("input[name=email]").type("incomplete-email");
    cy.nextStep()
    cy.contains("Email input is wrong")
    cy.get("input[name=email]").clear().type("someone@somewhere.com");
    cy.nextStep()

    cy.contains('This field is required')
    cy.get("input[name=phone]").type("abcdefgh");
    cy.nextStep()
    cy.contains("Phone input is wrong")
    cy.get("input[name=phone]").clear().type('1234567890')
    cy.nextStep()

    cy.contains("Select your plan");
    cy.nextStep()
    cy.contains("You need to select a plan")
    cy.get("#stepsWrapper button:nth-child(3)").click();
    cy.nextStep()

    cy.contains("Pick add-ons");
    cy.nextStep()

    cy.contains("Finishing up");
    cy.get("#bigTotal").contains('+$15/mo')
    cy.contains("Confirm").click();
    
    cy.contains("Thank you!")

  })
 
})
