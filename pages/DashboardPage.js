export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async isAtDashboard() {
    return await this.page.isVisible('.inventory_list');
  }

  async addItemToCart(itemName) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('button:has-text("Add to cart")');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}