import BasePage from "./Base.page";

class checkOutStepOnePage extends BasePage {
  static get url() {
    return "/checkout-step-one.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get firstNameField() {
    return cy.get("#first-name");
  }
  static get lastNameField() {
    return cy.get("#last-name");
  }
  static get postalCodeField() {
    return cy.get("#postal-code");
  }
  static get continueButton() {
    return cy.get("#continue");
  }
}
export default checkOutStepOnePage;