export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async isItemInCart(itemName) {
    const isVisible = await this.page.isVisible(`text=${itemName}`, { timeout: 60000 });
    await this.page.screenshot({ path: 'screenshots/cartPage.png' });
    return isVisible;
  }
}