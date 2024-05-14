describe('Item Tests', () => {
  it('Choose food', () => {
    cy.visit('/');
    cy.get('[id="button_foods"]').click();
    cy.get('h2').contains('Add a new food');
  })

  it('Add drink', () => {
    cy.visit('/');
    cy.get('[id="button_drinks"]').click();
    cy.get('[formControlName="id"]').type('2');
    cy.get('[formControlName="name"]').type('fanta');
    cy.get('[formControlName="group"]').type('soft drinks');
    cy.get('[id="button_form"]').click();
    cy.get('p').contains('Item: 2 - fanta');
  })

  it('Delete animal', () => {
    cy.visit('/');
    cy.get('[id="button_animals"]').click();
    cy.get('[id="button_delete_snake"]').click();
    cy.get('p').should('not.contain', 'snake');
  })
})
