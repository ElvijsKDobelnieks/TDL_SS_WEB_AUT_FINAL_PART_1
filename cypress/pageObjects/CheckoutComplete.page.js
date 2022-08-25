import BasePage from "./Base.page";

class checkoutComplete extends BasePage {
  static get url() {
    return "/checkout-complete";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get overviewPage() {
    return cy.get("#checkout_complete_container");
  }
}
export default checkoutComplete;