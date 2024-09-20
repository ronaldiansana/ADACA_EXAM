const { Builder } = require('selenium-webdriver');
const LoginPage = require('../../pages/LoginPage');
const createChromeOptions = require('../../chromeOption');
const assert = require("assert")

describe('User Login', function() {
    this.timeout(20000);
    let driver;

    before(async function() {
        const chromeOptions = createChromeOptions();
        driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
        await driver.get('https://app.clickup.com/login');
        await driver.manage().window().maximize();
    });

    it('should login successfully', async function() {
        try {
            const loginPage = new LoginPage(driver);
            await loginPage.login('ian_sana@yahoo.com', '123Ronaldian');
            const isDisplayed = await loginPage.isNavigationMenuDisplayed();
            assert.strictEqual(isDisplayed, true, 'Login was not successful: Nav Menu is not displayed.');
        } catch (error) {
            assert.fail(`Login test failed: ${error.message}`);
        }

    });

    after(async function() {
        await driver.quit();
    });
});