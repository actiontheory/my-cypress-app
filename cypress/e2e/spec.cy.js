describe('spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Hello Cypress!')
  })
})
