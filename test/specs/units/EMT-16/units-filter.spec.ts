import { byText } from "appium-flutter-finder";
import { Selectors } from "./Selectors";
import { navigateToUnitsPage } from "../setup";


describe("Units Filter Functionality", () => {
    it("should navigate to the Units page", async () => {
        navigateToUnitsPage();
    });

    it("should filter units by Labels dropdown", async () => {
        try {
            console.log("Testing Labels filter functionality...");

            // Click Labels dropdown
            console.log("Clicking Labels dropdown...");
            await driver.elementClick(Selectors.unitsFilterByLabel);
            await browser.pause(2000);

            // Select a specific label (assuming "refrigira" from the image)
            console.log("Selecting specific label...");
            await driver.elementClick(byText("Cargo Coordination Unit"));
            await browser.pause(3000);

            await driver.elementClick(Selectors.filterApplyButton);
            await browser.pause(10000);

            // Clear filters using X button
            console.log("Clearing filters...");
            await driver.elementClick(Selectors.clearFiltersButton);
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
            await driver.elementClick(Selectors.unitsFilterByStatus);
            await browser.pause(2000);

            // Select Active status
            console.log("Selecting Active status...");
            await driver.elementClick(byText("Active"));
            await browser.pause(3000);

            await driver.elementClick(Selectors.filterApplyButton);
            await browser.pause(10000);   

            // Clear filters using X button
            console.log("Clearing status filters...");
            await driver.elementClick(Selectors.clearFiltersButton);
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
            await driver.elementClick(Selectors.unitsFilterByType);
            await browser.pause(2000);

            // Select Truck type
            console.log("Selecting Truck type...");
            await driver.elementClick(byText("Semi-Truck"));
            await browser.pause(3000);

            await driver.elementClick(Selectors.filterApplyButton);
            await browser.pause(10000);   

            // Clear filters using X button
            console.log("Clearing type filters...");
            await driver.elementClick(Selectors.clearFiltersButton);
            await browser.pause(3000);
        } catch (error) {
            console.error("Type filter test failed:", error);
            await browser.saveScreenshot('./screenshots/type_filter_error.png');
            throw error;
        }
    });
});