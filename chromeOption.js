const { Options } = require('selenium-webdriver/chrome');

function createChromeOptions() {
    const chromeOptions = new Options();
    chromeOptions.addArguments('--incognito');
    chromeOptions.addArguments('--disable-gpu');
    chromeOptions.addArguments('--no-sandbox');
    chromeOptions.addArguments('--start-maximized');
    return chromeOptions;
}

module.exports = createChromeOptions;