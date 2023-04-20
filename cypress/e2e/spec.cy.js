describe('Contact Us form validation', () => {
  it('displays error messages for empty or invalid fields', () => {
    cy.visit('/contact-us')

    cy.get('form')
      .contains('button', 'Submit')
      .click()

    cy.get('input[name="fname"]')
      .should('have.class', 'Error')
      .parent()
      .contains('Please enter your first name')

    cy.get('input[name="lname"]')
      .should('have.class', 'Error')
      .parent()
      .contains('Please enter your last name')

    cy.get('input[name="email"]')
      .should('have.class', 'Error')
      .parent()
      .contains('Please enter a valid email address')

    cy.get('input[name="subject"]')
      .should('have.class', 'Error')
      .parent()
      .contains('Please enter a subject')
  })
})
describe('Contact Us form submission', () => {
  it('submits the form when all fields are filled out correctly', () => {
    cy.visit('/contact-us')

    cy.get('input[name="fname"]')
      .type('John')

    cy.get('input[name="lname"]')
      .type('Doe')

    cy.get('input[name="email"]')
      .type('johndoe@example.com')

    cy.get('input[name="subject"]')
      .type('Test subject')

    cy.get('form')
      .contains('button', 'Submit')
      .click()

    cy.contains('Thank you for contacting us!')
  })
})
