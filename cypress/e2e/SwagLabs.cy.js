import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import TshirtPage from "../pageObjects/Tshirt.page";
import bikeLightPage from "../pageObjects/BikeLight.page";
import TshirtRedPage from "../pageObjects/TshirtRed.page";
import shoppingCartPage from "../pageObjects/ShoppingCart.page";
import checkOutStepOnePage from "../pageObjects/CheckOutStepOne.page";
import checkOutStepTwoPage from "../pageObjects/CheckOutStepTwo.page";
import checkoutComplete from  "../pageObjects/CheckoutComplete.page";

describe("Swag Labs", () => {
  context("Scenarios 1-2", () => {
    beforeEach(() => {
      LoginPage.visit();
    })
    it("Scenario 1", () => {
    LoginPage.usernameField.click().type("locked_out_user");
    LoginPage.passwordField.click().type("secret_sauce");
    LoginPage.loginButton.click();
    LoginPage.lockedOutMessage.should("contain", "Epic sadface: Sorry, this user has been locked out.");
    });
    it("Scenario 2", () => {
      LoginPage.usernameField.click().type("locstandard_user");
      LoginPage.passwordField.click().type("test");
      LoginPage.loginButton.click();
      LoginPage.lockedOutMessage.should("contain", "pic sadface: Username and password do not match any user in this service");
    });
  });
  context("Scenarios 3-10", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.usernameField.click().type("standard_user");
      LoginPage.passwordField.click().type("secret_sauce");
      LoginPage.loginButton.click();
    });
      it("Scenario 3", () => {
      HomePage.inventoryContainer.should("have.length", 6);
    });
    it("Scenario 4", () => {
      HomePage.filterContainerButton.select("Price (high to low)");
      HomePage.filteredItem1.should("contain", "Sauce Labs Fleece Jacket");
      HomePage.filteredItem1.should("contain", "$49.99");
    });
    it("Scenario 5", () => {
      HomePage.filterContainerButton.select("Price (low to high)");
      HomePage.filteredItem1.should("contain", "Sauce Labs Onesie");
      HomePage.filteredItem1.should("contain", "$7.99");
    });
    it("Scenario 6", () => {
      HomePage.filterContainerButton.select("Name (Z to A)");
      HomePage.filteredItem1.should("contain", "Test.allTheThings() T-Shirt (Red)")
    });
    it("Scenario 7", () => {
      HomePage.tshirt.click();
      TshirtPage.addToCartButton.click();
      TshirtPage.shoppingCartBadge.should("contain", 1);
      TshirtPage.backToProductsButton.click();
      HomePage.bikeLight.click();
      bikeLightPage.addToCartButton.click();
      bikeLightPage.shoppingCartBadge.should("contain", 2);
    });
    it("Scenario 8", () => {
      HomePage.tshirt.click();
      TshirtPage.addToCartButton.click();
      TshirtPage.backToProductsButton.click();
      HomePage.burgerIcon.click();
      HomePage.burgerMenu.contains("Reset App State").then(option => {option[3]}).click();
      HomePage.shoppingCartLink.should("be.empty");
    });
    it("Scenario 9", () => {
      HomePage.tshirt.click();
      TshirtPage.addToCartButton.click();
      TshirtPage.shoppingCartBadge.should("contain", 1);
      TshirtPage.removeButton.click();
      TshirtPage.shoppingCartLink.should("be.empty");
    });
    it("Scenario 10", () => {
      HomePage.tshirtRed.click();
      TshirtRedPage.addToCartButton.click();
      TshirtRedPage.shoppingCartBadge.click();
      shoppingCartPage.checkoutButton.click();
      checkOutStepOnePage.firstNameField.click().type("Elvijs");
      checkOutStepOnePage.lastNameField.click().type("Dobelnieks");
      checkOutStepOnePage.postalCodeField.click().type("LV123");
      checkOutStepOnePage.continueButton.click();
      checkOutStepTwoPage.overviewPage.should("contain", "Test.allTheThings() T-Shirt (Red)");
      checkOutStepTwoPage.finishButton.click();
      checkoutComplete.overviewPage.should("contain", "THANK YOU FOR YOUR ORDER");
    });
  })
});