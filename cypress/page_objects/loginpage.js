import { loginLocators } from "./locators/login_elements";
class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    enterUsername(username) {
      cy.get(loginLocators.usernameInput).type(username);
    }
  
    enterPassword(password) {
      cy.get(loginLocators.passwordInput).type(password);
    }
  
    clickLogin() {
      cy.get(loginLocators.loginButton).click();
    }
  
    getErrorMessage() {
      return cy.get(loginLocators.errorMessage);
    }
  }
  
  export default LoginPage;
  