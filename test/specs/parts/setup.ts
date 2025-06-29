import { Selectors } from "./EMT-49/Selectors";


export const navigateToPartsPage = async () => {
    console.log("Navigating to Browse screen...");
    await driver.elementClick(Selectors.browseTab);
    await browser.pause(3000);

    console.log("Navigating to Parts page...");
    await driver.elementClick(Selectors.partsTab);
    await browser.pause(3000);

    console.log("Verifying Parts page is displayed...");
    await driver.elementClick(Selectors.partsPageTitle);
    await browser.pause(3000);
};