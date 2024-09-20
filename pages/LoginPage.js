const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.emailField = By.id('login-email-input');
        this.passwordField = By.id('login-password-input');
        this.loginButton = By.css('button[type="submit"]');
        this.navigationMenu = By.xpath("//div[@role='navigation']");
    }

    async login(username, password) {
        await this.driver.findElement(this.emailField).sendKeys(username);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }

    async isNavigationMenuDisplayed() {
        const navMenuElement = await this.driver.wait(until.elementLocated(this.navigationMenu), 10000);
        return await navMenuElement.isDisplayed();
    }
}

module.exports = LoginPage;