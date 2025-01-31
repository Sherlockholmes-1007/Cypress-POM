# Cypress Framework Setup Guide

## Introduction
This document is designed for individuals with zero knowledge of Cypress. It will walk you through setting up the Cypress framework, explaining its structure, and demonstrating how to write and execute tests.

## 1. Setting Up Cypress

### Prerequisites
Before setting up Cypress, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn
- A code editor like VS Code

### Installation Steps

1. Initialize a new project:
   ```bash
   mkdir cypress-test-project && cd cypress-test-project
   npm init -y
2. Install Cypress:
   ```bash
   npm install cypress --save-dev
3. Open Cypress for the first time:
   ```bash
   npx cypress open

### Project Structure
- cypress/fixtures/: Stores test data files like logindata.json.
- cypress/integration/: Contains test cases such as login_smoke.spec.js.
- cypress/page_objects/: Houses page object models, like login_page.js.
- cypress/support/: Includes reusable commands (commands.js) and setup files (e2e.js).
- cypress.config.js: Configuration file for Cypress settings.
- cypress.env.json: Stores environment-specific configurations

### Test Execution

- Run all tests in headless mode:
  ```bash
  npx cypress run
- Run tests in the interactive Test Runner:
  ```bash
  npx cypress open
- Execute specific test files:
  ```bash
  npx cypress run --spec cypress/integration/smoke/login_smoke.spec.js
### Understanding the Framework

- Data Management
  logindata.json stores test credentials used in login tests.
- Test Case (login_smoke.spec.js)
  . Uses cy.fixture() to fetch login credentials.
  . Calls methods from LoginPage to interact with UI elements.
  . Verifies redirection upon successful login.
- Page Object Model (login_page.js)
  Encapsulates login-related actions such as:
  - Visiting the login page (visit())
  - Entering credentials (enterUsername(), enterPassword())
  - Clicking the login button (clickLogin())
- Custom Commands (commands.js)
  Defines a reusable Cypress command cy.login(username, password) to streamline login across multiple tests.
- Environment Configuration (cypress.env.json)
  Stores different environment base URLs (dev, qa, staging, prod).
  The framework dynamically picks the base URL based on the selected environment.

