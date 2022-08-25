import BasePage from "./Base.page";

class shoppingCartPage extends BasePage {
  static get url() {
    return "/cart.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get checkoutButton() {
    return cy.get("#checkout");
  }
}
export default shoppingCartPage;