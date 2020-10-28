/// <reference path="../../support/index.d.ts" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('works', () => {
    cy.contains('Hello world').should('exist')
  })

  it('implements dataCy', () => {
    // This just tests the custom dataCy command
    cy.dataCy('heading').should('have.text', 'Hello world')
  })
})
