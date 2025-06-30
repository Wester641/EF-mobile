import "../setup";
import { navigateToIssuesPage } from "../setup";
import { byValueKey } from "appium-flutter-finder";

describe("Issues Detail Functionality", () => {
    it("should navigate to the Issues page", async () => {
        navigateToIssuesPage();
    });

    it("Navigate to the issue detail", async () => {
        try {
            await browser.pause(2000);

            await browser.elementClick(byValueKey("issue_0"));
            await browser.pause(2000);
        } catch (error) {
            console.error("Failed to click add issue button or verify add issue form:", error);
            throw error;
        }
    });
});