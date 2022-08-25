import BasePage from "./Base.page";

class checkOutStepTwoPage extends BasePage {
  static get url() {
    return "/checkout-step-two.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get overviewPage() {
    return cy.get("#checkout_summary_container");
  }
  static get finishButton() {
    return cy.get("#finish");
  }
}
export default checkOutStepTwoPage;