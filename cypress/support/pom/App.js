import AppSelectors from "../../fixtures/AppSelectors";

class App {
  baseUrl = "http://localhost:3000";
  token = "sampletoken";

  visitPage() {
    cy.visit(this.baseUrl);
    cy.get(AppSelectors.navBar.loginLink)
      .should("be.visible")
      .should("have.text", "Login");
    cy.get(AppSelectors.navBar.dashboardLink)
      .should("be.visible")
      .should("have.text", "Dashboard");
    cy.get(AppSelectors.navBar.productsLink)
      .should("be.visible")
      .should("have.text", "Products");
    cy.get(AppSelectors.navBar.ordersLink)
      .should("be.visible")
      .should("have.text", "Orders");
  }

  goodLogin(username, password) {
    cy.get(AppSelectors.navBar.loginLink).click();
    cy.url().should("include", "/login");
    cy.get(AppSelectors.login.title)
      .should("be.visible")
      .should("have.text", "Login");
    cy.get(AppSelectors.login.usernameInput)
      .should("be.visible")
      .should("have.attr", "placeholder", "Username")
      .should("have.value", "");
    cy.get(AppSelectors.login.passwordInput)
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .should("have.value", "");
    cy.get(AppSelectors.login.loginButton)
      .should("be.visible")
      .should("have.text", "Login")
      .should("be.enabled");

    cy.get(AppSelectors.login.usernameInput).type(username);
    cy.get(AppSelectors.login.passwordInput).type(password);
    cy.get(AppSelectors.login.loginButton).click();

    cy.get(AppSelectors.login.loginButton)
      .should("be.visible")
      .should("have.text", "Login");

    cy.get(AppSelectors.login.message).should("be.visible");
    cy.get(AppSelectors.login.message).should(
      "have.text",
      `Logged in with token: ${this.token}`
    );
  }

  badLogin(username = "wrongUser", password = "wrongPassword") {
    cy.get(AppSelectors.navBar.loginLink).click();
    cy.url().should("include", "/login");
    cy.get(AppSelectors.login.title)
      .should("be.visible")
      .should("have.text", "Login");
    cy.get(AppSelectors.login.usernameInput)
      .should("be.visible")
      .should("have.attr", "placeholder", "Username")
      .should("have.value", "");
    cy.get(AppSelectors.login.passwordInput)
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .should("have.value", "");
    cy.get(AppSelectors.login.loginButton)
      .should("be.visible")
      .should("have.text", "Login")
      .should("be.enabled");
    cy.get(AppSelectors.login.loginButton)
      .should("be.visible")
      .should("have.text", "Login");

    cy.get(AppSelectors.login.usernameInput).type(username);
    cy.get(AppSelectors.login.passwordInput).type(password);
    cy.get(AppSelectors.login.loginButton).click();

    cy.get(AppSelectors.login.message).should("be.visible");
    cy.get(AppSelectors.login.message).should("have.text", "Login failed");
  }

  checkDashboard() {
    cy.get(AppSelectors.navBar.dashboardLink).click();
    cy.url().should("include", "/dashboard");
    cy.get(AppSelectors.dashboard.message).should("be.visible");
    cy.get(AppSelectors.dashboard.message).should(
      "have.text",
      `Welcome to the user dashboard!`
    );
  }

  checkOrders() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get(AppSelectors.navBar.ordersLink).click();
    cy.url().should("include", "/orders");
    cy.get(AppSelectors.order.title).should("be.visible");
    cy.get(AppSelectors.order.list).then(($list) => {
      cy.log("Checking order list visibility");

      // Check if the list exists and is visible
      if ($list.length > 0) {
        // List exists, now check if it is visible
        if ($list.is(":visible")) {
          cy.log("Order list is visible");
          cy.wrap($list).should("be.visible");
        } else {
          cy.log("Order list exists but is not visible");
          cy.wrap($list).should("not.be.visible");
        }
      } else {
        // If the list does not exist
        cy.log("Order list does not exist");
        cy.wrap($list).should("not.exist"); // Asserting the list does not exist
      }
    });
  }

  checkProducts() {
    cy.get(AppSelectors.navBar.productsLink).click();
    cy.url().should("include", "/products");
    cy.get(AppSelectors.product.title).should("be.visible");
    cy.get(AppSelectors.product.list).then(($list) => {
      cy.log("Checking product list visibility");

      // Check if the list exists and is visible
      if ($list.length > 0) {
        // List exists, now check if it is visible
        if ($list.is(":visible")) {
          cy.log("Product list is visible");
          cy.wrap($list).should("be.visible");
        } else {
          cy.log("Product list exists but is not visible");
          cy.wrap($list).should("not.be.visible");
        }
      } else {
        // If the list does not exist
        cy.log("Product list does not exist");
        cy.wrap($list).should("not.exist"); // Asserting the list does not exist
      }
    });
  }
}

export const app = new App();
