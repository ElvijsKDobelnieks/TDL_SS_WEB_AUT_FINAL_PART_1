class BasePage {
  static get url() {
    return "";
  }

  static visit() {
    cy.visit(this.url, { failOnStatusCode: false });
  }
  // static get usernameField() {
  //   return cy.get("#user-name").click().type("standard_user");
  // }
  // static get passwordField() {
  //   return cy.get("#password").click().type("secret_sauce");
  // }
  // static get loginButton() {
  //   return cy.get("#login-button").click().type("secret_sauce");
  // }
}

export default BasePage;
