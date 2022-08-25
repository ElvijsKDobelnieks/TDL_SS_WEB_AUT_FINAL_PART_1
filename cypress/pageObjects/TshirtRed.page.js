import BasePage from "./Base.page";

class TshirtRedPage extends BasePage {
  static get url() {
    return "/inventory-item.html?id=3";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get addToCartButton() {
    return cy.get("[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']");
  }
  static get shoppingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
}
export default TshirtRedPage;