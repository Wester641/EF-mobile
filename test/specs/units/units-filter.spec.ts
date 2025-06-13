import { byText, byValueKey } from "appium-flutter-finder";
import { isUserLoggedIn, performLogin } from "../../utils/login-utils";

describe("Units Filter Functionality", () => {
    before(async () => {
        await browser.pause(5000);
        console.log(`Running Units Filter tests on ${browser.capabilities.platformName}...`);
        
        const isLoggedIn = await isUserLoggedIn();
        if (!isLoggedIn) {
            console.log("User not logged in, performing login...");
            await performLogin();
        } else {
            console.log("User already logged in, proceeding to Units page...");
        }
    });

    it("should navigate to the Units page", async () => {
        console.log("Navigating to Units page...");
        await driver.elementClick(byText("List of Units"));
        await browser.pause(3000);
            
        console.log("Verifying Units page is displayed...");
        await driver.elementClick(byText("Units"));
        await browser.pause(3000);
    });

    it("should filter units by Labels dropdown", async () => {
        try {
            console.log("Testing Labels filter functionality...");

            // Click Labels dropdown
            console.log("Clicking Labels dropdown...");
            await driver.elementClick(byText("Labels"));
            await browser.pause(2000);

            // Select a specific label (assuming "refrigira" from the image)
            console.log("Selecting specific label...");
            await driver.elementClick(byText("Cargo Coordination Unit"));
            await browser.pause(3000);

            await driver.elementClick(byText("Apply"));
            await browser.pause(10000);

            // Clear filters using X button
            console.log("Clearing filters...");
            await driver.elementClick(byValueKey("clear_filters"));
            await browser.pause(3000);

        } catch (error) {
            console.error("Labels filter test failed:", error);
            await browser.saveScreenshot('./screenshots/labels_filter_error.png');
            throw error;
        }
    });

    it("should filter units by Status dropdown", async () => {
        try {
            console.log("Testing Status filter functionality...");

            // Click Status dropdown
            console.log("Clicking Status dropdown...");
            await driver.elementClick(byText("Status"));
            await browser.pause(2000);

            // Select Active status
            console.log("Selecting Active status...");
            await driver.elementClick(byText("Active"));
            await browser.pause(3000);

            await driver.elementClick(byText("Apply"));
            await browser.pause(10000);   

            // Clear filters using X button
            console.log("Clearing status filters...");
            await driver.elementClick(byValueKey("clear_filters"));
            await browser.pause(3000);
        } catch (error) {
            console.error("Status filter test failed:", error);
            await browser.saveScreenshot('./screenshots/status_filter_error.png');
            throw error;
        }
    });

    it("should filter units by Type dropdown", async () => {
        try {
            console.log("Testing Type filter functionality...");

            // Click Type dropdown
            console.log("Clicking Type dropdown...");
            await driver.elementClick(byText("Type"));
            await browser.pause(2000);

            // Select Truck type
            console.log("Selecting Truck type...");
            await driver.elementClick(byText("Semi-Truck"));
            await browser.pause(3000);

            await driver.elementClick(byText("Apply"));
            await browser.pause(10000);   

            // Clear filters using X button
            console.log("Clearing type filters...");
            await driver.elementClick(byValueKey("clear_filters"));
            await browser.pause(3000);

        } catch (error) {
            console.error("Type filter test failed:", error);
            await browser.saveScreenshot('./screenshots/type_filter_error.png');
            throw error;
        }
    });
});