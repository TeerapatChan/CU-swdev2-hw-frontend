describe('Hospital', () => {
  it('Should display video and hospital images', () => {

    cy.visit('/')
    const videoButton = cy.get('div > div > button[type=button]')
    cy.get('video').should('be.visible')
    cy.get('video').should('have.prop', 'paused', false)
    cy.wait(5000)
    videoButton.click()
    cy.get('video').should('have.prop', 'paused', true)
    cy.get("button[type=button]").contains('Choose a hospital').click()
    cy.wait(5000).get('img').should('have.length.at.least', 3)
    
  })
})