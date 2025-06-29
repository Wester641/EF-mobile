import { Selectors } from "./EMT-39/Selectors";

export const navigateToIssuesPage = async () => {
    console.log("Navigating to Issues page...");
    await driver.elementClick(Selectors.addIssue);
    await browser.pause(3000);
        
    console.log("Verifying Issues page is displayed...");
    await driver.elementClick(Selectors.issuePageTitle);
    await browser.pause(3000);
};
