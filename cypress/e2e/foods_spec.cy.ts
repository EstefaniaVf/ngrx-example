describe('Food Tests', () => {
  it('Add food', () => {
    cy.visit('/');
    cy.get('[formControlName="id"]').type('2');
    cy.get('[formControlName="name"]').type('orange');
    cy.get('[id="button_form"]').click();
    cy.get('p').contains('Item: 2 - orange');
  })

  it('Delete food', () => {
    cy.visit('/');
    cy.get('[id="button_delete_banana"]').click();
    cy.get('p').should('not.contain', 'banana');
  })
})
