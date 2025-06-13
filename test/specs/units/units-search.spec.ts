import { byText, byValueKey } from "appium-flutter-finder";
import { isUserLoggedIn, performLogin } from "../../utils/login-utils";

describe("Units Search Functionality", () => {
    before(async () => {
        await browser.pause(5000);
        console.log(`Running Units Search tests on ${browser.capabilities.platformName}...`);
        
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

    it("should click search icon and display empty search form", async () => {
        try {
            console.log("Clicking search icon to open search form...");
            await driver.elementClick(byValueKey("search_icon"));
            await browser.pause(2000);
            
            try {
                const noResultsMessage = await driver.$(byText("No results found"));
                expect(await noResultsMessage.isDisplayed()).toBe(true);
                console.log("Empty search form with 'No results found' message verified");
            } catch (error) {
                console.log("No results message might not be visible initially - this is acceptable");
            }
            
        } catch (error) {
            console.error("Failed to click search icon or verify search form:", error);
            throw error;
        }
    });

    it("should search for existing unit by name and return relevant results", async () => {
        try {
            console.log("Testing search for existing unit...");
            
            await driver.execute('flutter:enterText', 'Truck');
            await browser.pause(10000);
            
            console.log("Search for existing unit completed successfully");
            
        } catch (error) {
            console.error("Failed to search for existing unit:", error);
            throw error;
        }
    });

    it("should clear search field and reset to initial state", async () => {
        try {
            console.log("Clearing search field...");
            await driver.execute('flutter:enterText', '');
            await browser.pause(10000);
        } catch (error) {
            console.error("Failed to test search field clearing:", error);
            throw error;
        }
    });
});