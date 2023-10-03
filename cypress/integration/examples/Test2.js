/// <reference types="Cypress" />

describe('My Second Test Suit', function()
    {
        it("My Second Test Case", function()
        {
        
            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
            //Parent-Child Chaining & Aliasing
            cy.get('.products').as('productLocator')
            cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const textveg=$e1.find('h4.product-name').text();
                if(textveg.includes('Cashews')){
                    cy.wrap($e1).find('button').click();
                }
            })  
            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()
            
        })


    })