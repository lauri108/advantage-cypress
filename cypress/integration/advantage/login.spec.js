describe('Get to the login screen from main page', () => {
    it('Goes to the login page', () => {
        cy.visit('https://iss-schrole.com/account/login')
        cy.contains('ISS-Schrole Advantage')
        cy.get('.btn-main').click()
        cy.get('div.validation-summary-errors > ul').children().should('have.length', 2)
    })
  })