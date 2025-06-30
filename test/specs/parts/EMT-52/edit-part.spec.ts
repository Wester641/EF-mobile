import { byValueKey } from "appium-flutter-finder";
import { navigateToPartsPage } from "../setup";
import { Selectors } from "./Selectors";

describe("Part Detail Functionality", () => {
    it("should navigate to the Parts page", async () => {
        navigateToPartsPage();
    });

    it("Navigate to the part detail", async () => {
        try {
            await driver.elementClick(byValueKey("part_0"));
            await browser.pause(2000);  
        } catch (error) {
            console.error("Failed to click add issue button or verify add issue form:", error);
            throw error;
        }
    });

    it("Navigate to the edit part form", async () => {
        try {
            console.log("Clicking edit part button to open edit part form...");
            await driver.elementClick(Selectors.editPartButton);
            await browser.pause(2000);
        } catch (error) {
            console.error("Failed to click add issue button or verify add issue form:", error);
            throw error;
        }
    });
});