export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async isAtDashboard() {
    const isVisible = await this.page.isVisible('.inventory_list', { timeout: 60000 });
    await this.page.screenshot({ path: 'screenshots/dashboardPage.png' });
    return isVisible;
  }

  async addItemToCart(itemName) {
    await this.page.click(`text=${itemName}`, { force: true });
    await this.page.click('button:has-text("Add to cart")', { force: true });
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link', { force: true });
  }
}