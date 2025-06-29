import { Selectors } from "./EMT-16/Selectors";

// Global navigation setup for all units tests
export const setupUnitsNavigation = () => {
    beforeEach(async function() {
        console.log("Auto-navigating to Units page before test...");                                 
        await driver.elementClick(Selectors.listOfUnits);
        await browser.pause(3000);
            
        console.log("Verifying Units page is displayed...");
        await driver.elementClick(Selectors.unitPageTitle);
        await browser.pause(3000);
    });
};

setupUnitsNavigation();