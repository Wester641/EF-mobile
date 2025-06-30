import { Selectors } from "./Selectors";
import "../setup";
import { navigateToUnitsPage } from "../setup";
import { byValueKey } from "appium-flutter-finder";

describe("Edit Unit Functionality", () => {
    it("should navigate to the Units page", async () => {
        navigateToUnitsPage();
    });

    it("Navigate to the edit unit form", async () => {
        try {
            await browser.pause(2000);

            await browser.elementClick(byValueKey("unit_0"));
            await browser.pause(2000);

            console.log("Clicking edit unit button to open edit unit form...");
            await driver.elementClick(Selectors.editUnitButton);
            await browser.pause(2000);
        } catch (error) {
            console.error("Failed to click add unit button or verify add unit form:", error);
            throw error;
        }
    });

    it("should add a new unit", async () => {
        try {
            const clearAndFillInput = async (selector: string, value: string) => {
                try {
                    // Clear the input field first
                    await driver.elementClear(selector);
                    await browser.pause(500);
                    
                    // Fill with new value
                    await driver.elementSendKeys(selector, value);
                    await browser.pause(500);
                } catch (error) {
                    console.error(`Failed to clear and fill input: ${error}`);
                    throw error;
                }
            };

            // Clear and fill all form fields with updated data
            console.log("Clearing and filling unit name...");
            await clearAndFillInput(Selectors.nameInput, updatedUnitData.name);
            
            console.log("Clearing and filling year...");
            await clearAndFillInput(Selectors.yearInput, updatedUnitData.year);
            
            console.log("Clearing and filling trim...");
            await clearAndFillInput(Selectors.trimInput, updatedUnitData.trim);
            
            console.log("Clearing and filling VIN...");
            await clearAndFillInput(Selectors.vinInput, updatedUnitData.vin);
            
            console.log("Clearing and filling license...");
            await clearAndFillInput(Selectors.licenseInput, updatedUnitData.license);
            
            console.log("Clearing and filling registration state...");
            await clearAndFillInput(Selectors.registrationStateInput, updatedUnitData.registrationState);
            
            console.log("Clearing and filling status...");
            await clearAndFillInput(Selectors.statusInput, updatedUnitData.status);
            
            console.log("Clearing and filling ownership...");
            await clearAndFillInput(Selectors.ownershipInput, updatedUnitData.ownership);
            
            console.log("Clearing and filling group...");
            await clearAndFillInput(Selectors.groupInput, updatedUnitData.group);
            
            console.log("Clearing and filling color...");
            await clearAndFillInput(Selectors.colorInput, updatedUnitData.color);
            
            // Save the changes
            console.log("Clicking save button to save changes...");
            await driver.elementClick(Selectors.saveButton);
            
            // Wait for the form to process
            await browser.pause(3000);
        } catch (error) {
            console.error("Failed to add unit:", error);
            throw error;
        }
    });
});