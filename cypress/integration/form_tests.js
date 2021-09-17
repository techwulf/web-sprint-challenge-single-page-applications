describe('Pizza Order App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });
  // Dom element selectors
  const nameInput = () => cy.get('input[name=name]');
  const sizeInput = () => cy.get('select[name=size]');
  const pepperoni = () => cy.get('label').contains('Pepperoni').children();
  const olives = () => cy.get('label').contains('Olives').children();
  const submitButton = () => cy.get('button');


  it('Sanity check to make sure the tests work', () => {
    expect(1+2).to.equal(3);
    expect(2+2).not.to.equal(5);
    expect({}).not.to.equal({});
  })
  it('Test the form inputs and check to see if submit button enables', () => {
    submitButton()
      .should('be.disabled');
    nameInput()
      .should('have.value','')
      .type('Mr Sprinter')
      .should('have.value','Mr Sprinter');
    sizeInput()
      .should('have.value','')
      .select('medium')
      .should('have.value','medium');
    olives()
      .should('not.be.checked')
      .check()
      .should('be.checked');
    pepperoni()
      .should('not.be.checked')
      .check()
      .should('be.checked');
    submitButton()
      .should('not.be.disabled');
  });
  it('Test that the form can submit', () => {
    nameInput()
      .type('Mr Sprinter');
    sizeInput()
      .select('large');
    submitButton()
      .click();
    cy.contains("Congrats! Your pizza is on it's way!!!");
  })
});