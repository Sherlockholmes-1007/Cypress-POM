class LoginPage {
    visit() {
      cy.visit('https://adactinhotelapp.com/');
    }
  
    enterUsername(username) {
      cy.get('#username').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('#login').click();
    }
  
    getErrorMessage() {
      return cy.get('.error-message');
    }
  }
  
  export default LoginPage;
  