/// <reference types="Cypress" />

describe('My First Test Suit', function()
    {
        it("My First Test Case", function()
        {
            // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            // cy.get('.search-keyword').type("ca")
            // cy.wait(5000)
            // //cy.get('.product:visible').should('have.length', 4)

            // //Parent Child Chainig
            // cy.get('.products').find('.product').should('have.length', 4)
            // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
            cy.get('.products').find('.product').should('have.length', 4)
            cy.wait(2000)   
            cy.get('.products').find('.product').eq('2').contains('ADD TO CART').click()

        })


    })