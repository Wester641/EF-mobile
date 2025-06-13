import { byText } from "appium-flutter-finder";
import { isUserLoggedIn, performLogin } from "../../utils/login-utils";

describe("Units List Functionality", () => {
    before(async () => {
        await browser.pause(5000);
        console.log(`Running Units List tests on ${browser.capabilities.platformName}...`);
        
        const isLoggedIn = await isUserLoggedIn();
        if (!isLoggedIn) {
            console.log("User not logged in, performing login...");
            await performLogin();
        } else {
            console.log("User already logged in, proceeding to Units page...");
        }
    });

    it("should navigate to the Units page", async () => {
        try {
            console.log("Navigating to Units page...");
            await driver.elementClick(byText("List of Units"));
            await browser.pause(3000);

            console.log("Verifying Units page is displayed...");
            await driver.elementClick(byText("Units"));
            await browser.pause(3000);
        } catch (error) {
            console.error("Test failed with error:", error);
            await browser.saveScreenshot('./screenshots/error.png');
            throw error;
        }
    });
});