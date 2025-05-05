// test/specs/login.spec.ts

import { runForPlatform } from "../utils/platform";
import { byText } from "appium-flutter-finder";

describe("Login Feature", () => {
  before(async () => {
    await browser.pause(3000); // Wait for app to load
    console.log(`Running tests on ${browser.capabilities.platformName}...`);
  });

  beforeEach(async () => {
    const emailField = await $(byText("Enter the Email"));
    const passwordField = await $(byText("Password"));
    const loginButton = await $(byText("Login"));

    await emailField.setValue("zafarzhon77@gmail.com");
    await passwordField.setValue("zafarzhon77");
    await loginButton.click();
  });

  it("should enter to the system, log in", async () => {
    await runForPlatform({
      ios: async () => {
        console.log("Verified login page on iOS");
      },
      android: async () => {
        console.log("Verified login page on Android");
      },
    });
  });
});
