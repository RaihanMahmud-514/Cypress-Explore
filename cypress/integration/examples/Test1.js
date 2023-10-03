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
            //Parent-Child Chaining & Aliasing
            cy.get('.products').as('productLocator')
            cy.get('@productLocator').find('.product').should('have.length', 4)
            cy.wait(2000)   
            cy.get(':nth-child(3) > .product-action > button').click()
            cy.get('@productLocator').find('.product').eq('2').contains('ADD TO CART').click().then(function()
            {
                console.log('Checking asyncronous')
            })
            
            cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const textveg=$e1.find('h4.product-name').text();
                if(textveg.includes('Cashews')){
                    cy.wrap($e1).find('button').click();
                }
            })
            //Assert logo text
            cy.get('.brand').should('have.text', 'GREENKART')
            //Get the text of the logo and this is to print in the logs
            cy.get('.brand').then(function(logoelement)
            {
                cy.log(logoelement.text())
            })

        })


    })