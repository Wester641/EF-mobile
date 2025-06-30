import "../setup";
import { navigateToUnitsPage } from "../setup";
import { byValueKey } from "appium-flutter-finder";

describe("Edit Unit Functionality", () => {
    it("should navigate to the Units page", async () => {
        navigateToUnitsPage();
    });

    it("Navigate to the unit detail", async () => {
        try {
            await browser.pause(2000);

            await browser.elementClick(byValueKey("unit_0"));
            await browser.pause(2000);
        } catch (error) {
            console.error("Failed to click add unit button or verify add unit form:", error);
            throw error;
        }
    });
});