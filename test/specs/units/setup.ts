import { Selectors } from "./EMT-16/Selectors";

export const navigateToUnitsPage = async () => {
    console.log("Navigating to Units page...");
    await driver.elementClick(Selectors.listOfUnits);
    await browser.pause(3000);
        
    console.log("Verifying Units page is displayed...");
    await driver.elementClick(Selectors.unitPageTitle);
    await browser.pause(3000);
};