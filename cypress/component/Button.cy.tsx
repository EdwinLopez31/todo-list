import Button from '@/components/ui/button';

describe('Button Component', () => {
  beforeEach(() => {
    cy.mount(<Button text="Click me" />);
  });

  it('renders', () => {
    cy.contains('button', /click me/i);
  });

  it('can be clicked', () => {
    cy.contains('button', /click me/i)
      .click()
      .should('be.focused');
  });

  it('is disabled', () => {
    cy.mount(<Button disabled text="Click me" />);
    cy.contains('button', /click me/i).should('be.disabled');
  });
});
