import BasePage from "./Base.page";

class TshirtPage extends BasePage {
  static get url() {
    return "/inventory-item.html?id=1";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get addToCartButton() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  static get shoppingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
  static get shoppingCartLink() {
    return cy.get(".shopping_cart_link");
  }
  static get backToProductsButton() {
    return cy.get("#back-to-products");
  }
  static get removeButton() {
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
  }
}
export default TshirtPage;