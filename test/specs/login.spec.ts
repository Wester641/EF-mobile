import { byText, byValueKey, byType } from "appium-flutter-finder";

describe("Login Feature", () => {
  before(async () => {
    await browser.pause(5000);
    console.log(`Running tests on ${browser.capabilities.platformName}...`);
  });

  it("should enter credentials and log in", async () => {
    try {
      console.log("Finding email field...");
      await driver.elementClick(byValueKey("email_field"));
      await driver.execute('flutter:enterText', 'javohir.akhmad@gmail.com')

      console.log("Finding password field...");
      await driver.elementClick(byValueKey("password_field"));
      await driver.execute('flutter:enterText', 'password')
      await browser.pause(2000);

      console.log("Clicking login button...");
      await driver.elementClick(byText("Login"));
      await browser.pause(3000);

    } catch (error) {
      console.error("Test failed with error:", error);
      await browser.saveScreenshot('./screenshots/error.png');
      throw error;
    }
  });
});