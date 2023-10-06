/// <reference types="Cypress" />

describe('My Second Test Suit', function()
    {
        it("My Second Test Case", function()
        {
        
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
            //Checking of the checkbox will be done
            cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
            //Uncheck of the checkbox will be done
            cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
            //Select multiple checkbox at a time
            cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        })


    })