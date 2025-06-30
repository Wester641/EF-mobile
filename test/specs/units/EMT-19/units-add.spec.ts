// import { Selectors } from "./Selectors";
// import "../setup";
// import { navigateToUnitsPage } from "../setup";

// describe("Add Unit Functionality", () => {
//     it("should navigate to the Units page", async () => {
//         navigateToUnitsPage();
//     });

//     it("should click add unit button and display add unit form", async () => {
//         try {
//             await browser.pause(5000);

//             console.log("Clicking add unit button to open add unit form...");
//             await driver.elementClick(Selectors.addUnitButton);

//             await browser.pause(2000);
//         } catch (error) {
//             console.error("Failed to click add unit button or verify add unit form:", error);
//             throw error;
//         }
//     });

//     it("should add a new unit", async () => {
//         try {
//             console.log("Starting to add a new unit...");

//             const unitData = {
//                 name: "Test Unit 001",
//                 year: "2023",
//                 trim: "Standard",
//                 vin: "1HGBH41JXMN109186",
//                 license: "ABC123",
//                 registrationState: "CA",
//                 status: "Active",
//                 ownership: "Owned",
//                 group: "Fleet A",
//                 color: "White"
//             };
                        
//             // Fill in the form fields
//             console.log("Filling unit name...");
//             await driver.elementSendKeys(Selectors.naemInput, unitData.name);
            
//             console.log("Filling year...");
//             await driver.elementSendKeys(Selectors.yearInput, unitData.year);
            
//             console.log("Filling trim...");
//             await driver.elementSendKeys(Selectors.trimInput, unitData.trim);
            
//             console.log("Filling VIN...");
//             await driver.elementSendKeys(Selectors.vinInput, unitData.vin);
            
//             console.log("Filling license...");
//             await driver.elementSendKeys(Selectors.licanseInput, unitData.license);
            
//             console.log("Filling registration state...");
//             await driver.elementSendKeys(Selectors.registrationStateInput, unitData.registrationState);
            
//             console.log("Filling color...");
//             await driver.elementSendKeys(Selectors.colorInput, unitData.color);
            
//             // Optional: Fill linked unit if needed
//             // await driver.elementSendKeys(Selectors.linkedUnitInput, "");
            
//             // Save the unit
//             console.log("Clicking save button...");
//             await driver.elementClick(Selectors.saveButton);
            
//             // Wait for the form to process
//             await browser.pause(3000);
            
//             // Verify the unit was added successfully
//             // You might want to check if the form closed or if there's a success message
//             console.log("Verifying unit was added successfully...");
            
//             // Check if we're back to the units list (form should close)
//             const unitsListExists = await driver.execute('flutter:waitFor', Selectors.listOfUnits, 5000);
//             expect(unitsListExists).toBe(true);
            
//             console.log("Unit added successfully!");
            
//         } catch (error) {
//             console.error("Failed to add unit:", error);
//             throw error;
//         }
//     });
// });