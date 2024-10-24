export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await this.page.screenshot({ path: 'screenshots/loginPage.png', timeout: 10000 });
  }

  async login(username, password) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button', { force: true });
  }
}