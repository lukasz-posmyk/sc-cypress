/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//it works just for subtdomains, not for a unique domains
cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
    cy.log(url)
    cy.visit(url)
})

})
})
