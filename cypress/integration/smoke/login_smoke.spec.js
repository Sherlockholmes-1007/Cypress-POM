import LoginPage from '../../page_objects/loginpage';

describe('Smoke Test: Login', { tags: '@smoke' }, () => {
  const loginPage = new LoginPage();

  it('should login successfully with valid credentials', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.visit();
      loginPage.enterUsername(data.validUser.username);
      loginPage.enterPassword(data.validUser.password);
      loginPage.clickLogin();

      cy.url().should('include', 'https://adactinhotelapp.com/SearchHotel.php');
    });
  });
});
