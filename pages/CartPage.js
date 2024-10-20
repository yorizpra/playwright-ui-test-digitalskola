export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async isItemInCart(itemName) {
    return await this.page.isVisible(`text=${itemName}`);
  }
}