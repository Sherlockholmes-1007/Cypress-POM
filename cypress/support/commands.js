import LoginPage from '../page_objects/loginpage';

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPage();
  loginPage.visit();
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});