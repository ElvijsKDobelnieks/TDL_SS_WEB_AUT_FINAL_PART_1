import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get inventoryContainer() {
    return cy.get(".inventory_list > div");
  }
  static get filterContainerButton() {
    return cy.get("[data-test='product_sort_container']");
  }
  static get filteredItem1() {
    return cy.get(":nth-child(1) > .inventory_item_description");
  }
  static get tshirt() {
    return cy.get("#item_1_title_link");
  }
  static get tshirtRed() {
    return cy.get("#item_3_title_link");
  }
  static get bikeLight() {
    return cy.get("#item_0_title_link");
  }
  static get shoppingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
  static get shoppingCartLink() {
    return cy.get(".shopping_cart_link");
  }
  static get burgerIcon() {
    return cy.get("#react-burger-menu-btn");
  }
  static get burgerMenu() {
    return cy.get(".bm-menu");
  }
}

export default HomePage;
