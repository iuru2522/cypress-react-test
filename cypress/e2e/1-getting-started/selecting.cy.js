//how to test 2 input instead of 1 input on the page

//using specific selector
//[data-cy="input-last-name"]
//[data-cy="input-last-name"]

describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('http://localhost:3000/example-3');

    cy.get('[data-cy="last-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '15');

    cy.get('[data-cy="input-last-name"]').type('hello');

    cy.get('[data-cy="last-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '10');

    cy.get('[data-cy="input-last-name"]').type(' my friend');

    cy.get('[data-cy="last-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '0');
  });

  it('prevents the user from typing more character once max is exceeded', () => {
    cy.visit('http:localhost:3000/example-3');

    cy.get('[data-cy="input-last-name"]').type('asdfghjklqwertyuio');

    cy.get('[data-cy="input-last-name"]').should(
      'have.attr',
      'value',
      'asdfghjklqwerty'
    );
  });
});
