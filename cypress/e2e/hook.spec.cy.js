describe('template spec', () => {

  
  before(()=> {
    cy.log('*********This is a test suite*********')
  })

  after(()=> {
    cy.log('*********This is a teardown*********')
  })

  beforeEach(()=> {
    cy.log('*********This is a search test*********')
  })

  afterEach( ()=> {
    cy.log('*********This is a logout*********')
  })

  
  it('seaching', ()=> {
    cy.log('*********This is a search*********')
  })

  it('advanced searching', ()=> {
    cy.log('*********This is an advanced search*********')
  })

  it('product list', ()=> {
    cy.log('*********This is a product list*********')
  })
})
