

describe('Testing eCommerce Website', () =>{

    it('Checking and buying of items', () =>{

    cy.visit('/')
    cy.get('#menu-item-574 > a').click()
    cy.get('#product_551').click()
    cy.get('#travname').type('Lukman')
    cy.get('#travlastname').type('Alao')
    cy.get('#order_comments').type('Please make my room extremely tidy before arrival.')
    cy.get('#dob').click()
    cy.get('.ui-datepicker-year').select('1988')
    cy.get('.ui-datepicker-month').select(3)
    cy.get(':nth-child(5) > :nth-child(2) > .ui-state-default').type('25 {enter}')
    cy.get('#sex_1').click()
    cy.get('#fromcity').type('Lagos')
    cy.get('#tocity').type('Dublin')
    cy.get('#departon').click()
    cy.get('.ui-datepicker-year').select('2024')
    cy.get('.ui-datepicker-month').select(1)
    cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').type('22 {enter}')
    cy.get('#notes').type('Please note that when I am out of the hotel, do not not send anyone room keeper.')
    //cy.get('.woocommerce-input-wrapper').should('be.visible').click()
    cy.get('select#reasondummy').should('be.visible').select('Proof of return at airport', {force: true})
    cy.get('#proofdate').click()
    cy.get('.ui-datepicker-year').select('2024')
    cy.get('.ui-datepicker-month').select('2')
    cy.get(':nth-child(4) > :nth-child(1) > .ui-state-default').click()
    cy.get('#airline').clear().type('British Airways')
    cy.get('#deliverymethod_1').click()
    cy.get('#billname').type('Alao Olayiwola')
    cy.get('#billing_phone').type('123456789')
    cy.get('#billing_email').type('olayiwola125@gmail.com')
    cy.get('#billing_country').select('Australia', {force: true})
    cy.get('#billing_address_1').type('1 University Plaza OH')
    cy.get('#billing_address_2').type('Block B40')
    cy.get('#billing_city').type('Youndstown')
    cy.get('#billing_state').select('NSW', {force: true})
    cy.get('#billing_postcode').type('4445')
    cy.get('#payment_method_yith-stripe').click()

    const iframe=cy.get('[name="__privateStripeFrame37726"]')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
    iframe.clear().type('5234 8888 3546 9836')
  
    
    })
})