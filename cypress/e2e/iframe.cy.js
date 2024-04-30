


describe('Testing eCommerce Website', () =>{

    it('Checking and buying of items', () =>{

    cy.visit("http://the-internet.herokuapp.com/iframe")
  
  cy.get('#mce_0_ifr')
    .should('be.visible')
  .type('gmail.com')
    cy.get('button').click()

    })
})