

describe('My First Test', () => {
   
    it('test1-verify title-positive', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
          
        })

    it('test1-verify title-negative', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('exist')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('exist')
   
    it('It should input user details')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-userarea > ul').find('.oxd-userdropdown-name').click()
    cy.wait(5000)
    cy.get(':nth-child(1) > .oxd-userdropdown-link' ).click()
    cy.get(':nth-child(2) > .oxd-userdropdown-link').click()
    cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()


    })

    
  })