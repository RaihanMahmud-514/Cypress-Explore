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
            //Parent-Child Chaining
            cy.get('.products').find('.product').should('have.length', 4)
            cy.wait(2000)   
            cy.get('.products').find('.product').eq('2').contains('ADD TO CART').click()
            console.log('Checkingk asyncronous')
            cy.get('.products').find('.product').each(($e1, index, $list) => {
                const textveg=$e1.find('h4.product-name').text();
                if(textveg.includes('Cashews')){
                    cy.wrap($e1).find('button').click();
                }
            })
            //Get the text of the logo
            cy.get('.brand').then(function(logoelement)
            {
                cy.log(logoelement.text())
            })

        })


    })