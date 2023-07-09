import Input from 'components/ui/input';

describe('Input Component', () => {
  beforeEach(() => {
    cy.mount(<Input id="test-id" name="test-name" type="number" />);
  });
  it('renders', () => {
    cy.get('input[id="test-id"]').should('be.visible');
  });

  it('reflects user input', () => {
    cy.get('input[id="test-id"]').type('123').should('have.value', '123');
  });

  it('respects input type in accepting characters', () => {
    cy.get('input[id="test-id"]').type('test').should('have.value', '');
  });
});
