import { app } from "../support/pom/App";

describe("template spec", () => {
  it("Good Login", () => {
    const username = "testuser";
    const password = "password";
    app.visitPage();
    app.goodLogin(username, password);
  });

  it("Bad Login", () => {
    app.visitPage();
    app.badLogin();
  });

  it("Dashboard", () => {
    app.visitPage();
    app.checkDashboard();
  });

  it("Products", () => {
    app.visitPage();
    app.checkProducts();
  });

  it("Orders", () => {
    app.visitPage();
    app.checkOrders();
  });
});
