describe('Portfolio application', () => {
  it('loads the home page and navigates to About', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to My Creative Workspace').should('be.visible')

    cy.contains('a', 'About').click()
    cy.location('pathname').should('equal', '/about')
    cy.contains('h1', 'About Me').should('be.visible')
    cy.contains('Full Name: Quoc Thiet Pham (Alex)').should('be.visible')
    cy.screenshot('about-page-navigation')
  })

  it('submits the contact form successfully', () => {
    cy.intercept('POST', '**/api/contacts', {
      statusCode: 200,
      body: { message: 'Successfully created!' },
    }).as('createContact')

    cy.visit('/contact')
    cy.get('input').eq(0).type('Assignment')
    cy.get('input').eq(1).type('Tester')
    cy.get('input[type="email"]').type('tester@example.com')
    cy.get('input[type="tel"]').type('4161234567')
    cy.get('textarea').type('This message was submitted by the Cypress E2E test.')
    cy.contains('button', 'Send message').click()

    cy.wait('@createContact').its('request.body').should('deep.equal', {
      firstName: 'Assignment',
      lastName: 'Tester',
      contactNumber: '4161234567',
      email: 'tester@example.com',
      message: 'This message was submitted by the Cypress E2E test.',
    })
    cy.contains('Thank you. Your message has been sent successfully.').should('be.visible')
    cy.screenshot('contact-form-success')
  })
})
