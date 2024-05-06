describe('RegistrationPage', () => {

  beforeEach(()=>{
    
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')  
    
  })
  
  
  
    it('user with invalid credentials and password recovery', () => {
  
      cy.invalidcredentials(()=>{

      })
     
  
    })
  
  
    it('first time registration', () => {
  
    cy.userregistration(()=>{


    })
  
   })
   

  
})