import HomePage from '../../page_objects/homepage';

describe('HomePage Functionality', { tags: '@smoke' }, () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.fixture('loginData').then((data) => {
      cy.login(data.validUser.username, data.validUser.password);
    });
  });

  it('should display the homepage correctly', () => {
    homePage.getWelcomeMessage().should('be.visible');
    homePage.getLogoutButton().should('be.visible');
  });

  it('should allow user to log out', () => {
    homePage.getLogoutButton().click();
  });
});
