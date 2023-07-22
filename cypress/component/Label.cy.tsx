import Label from '@/components/ui/label';
import Input from '@/components/ui/input';
describe('Label Component', () => {
  beforeEach(() => {
    cy.mount(
      <>
        <Label label="test" htmlFor="test" />
        <Input id="test" name="testName" />
      </>
    );
  });
  it('renders', () => {
    cy.get('label').should('be.visible');
  });

  it('focuses the corresponding input element when clicked', () => {
    cy.get('label').click();
    cy.get('input').should('have.focus');
  });
});
