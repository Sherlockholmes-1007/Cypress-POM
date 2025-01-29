import { HomePageLocators } from './locators/homepage_elements';

class HomePage {
  getWelcomeMessage() {
    return cy.get(HomePageLocators.welcomeMessage);
  }

  getLogoutButton() {
    return cy.get(HomePageLocators.logoutButton);
  }
}
export default HomePage;