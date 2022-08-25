import BasePage from "./Base.page";

class bikeLightPage extends BasePage {
  static get url() {
    return "/inventory-item.html?id=1";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get addToCartButton() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }
  static get shoppingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
  static get backToProductsButton() {
    return cy.get("#back-to-products");
  }
}
export default bikeLightPage;