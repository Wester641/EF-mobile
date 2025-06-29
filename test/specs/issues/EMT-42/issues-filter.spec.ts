import { byText } from "appium-flutter-finder";
import { Selectors } from "./Selectors";
import { navigateToIssuesPage } from "../setup";


describe("Issues Filter Functionality", () => {
    it("should navigate to the Issues page", async () => {
        navigateToIssuesPage();
    });

    it("should filter issues by Status dropdown", async () => {
        try {
            console.log("Testing Status filter functionality...");

            // Click Status dropdown
            console.log("Clicking Status dropdown...");
            await driver.elementClick(Selectors.issuesFilterByStatus);
            await browser.pause(2000);

            // Select a specific label (assuming "refrigira" from the image)
            console.log("Selecting specific label...");
            await driver.elementClick(byText("Open"));
            await browser.pause(3000);

            await driver.elementClick(Selectors.filterApplyButton);
            await browser.pause(10000);

            // Clear filters using X button
            console.log("Clearing filters...");
            await driver.elementClick(Selectors.clearFiltersButton);
            await browser.pause(3000);

        } catch (error) {
            console.error("Status filter test failed:", error);
            await browser.saveScreenshot('./screenshots/labels_filter_error.png');
            throw error;
        }
    });

    it("should filter issues by Priority dropdown", async () => {
        try {
            console.log("Testing Priority filter functionality...");

            // Click Priority dropdown
            console.log("Clicking Priority dropdown...");
            await driver.elementClick(Selectors.issuesFilterByPriority);
            await browser.pause(2000);

            // Select Active status
            console.log("Selecting Active priority...");
            await driver.elementClick(byText("High"));
            await browser.pause(3000);

            await driver.elementClick(Selectors.filterApplyButton);
            await browser.pause(10000);   

            // Clear filters using X button
            console.log("Clearing priority filters...");
            await driver.elementClick(Selectors.clearFiltersButton);
            await browser.pause(3000);
        } catch (error) {
            console.error("Status filter test failed:", error);
            await browser.saveScreenshot('./screenshots/status_filter_error.png');
            throw error;
        }
    });

    it("should filter issues by Labels dropdown", async () => {
        try {
            console.log("Testing Labels filter functionality...");

            // Click Type dropdown
            console.log("Clicking Labels dropdown...");
            await driver.elementClick(Selectors.issuesFilterByLabels);
            await browser.pause(2000);

            // Select Truck type
            console.log("Selecting Truck type...");
            await driver.elementClick(byText("Administration"));
            await browser.pause(3000);

            await driver.elementClick(Selectors.filterApplyButton);
            await browser.pause(10000);   

            // Clear filters using X button
            console.log("Clearing Labels filters...");
            await driver.elementClick(Selectors.clearFiltersButton);
            await browser.pause(3000);
        } catch (error) {
            console.error("Labels filter test failed:", error);
            await browser.saveScreenshot('./screenshots/type_filter_error.png');
            throw error;
        }
    });
});