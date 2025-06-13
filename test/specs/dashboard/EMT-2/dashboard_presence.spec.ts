import { Selectors } from './Selectors';

describe('EMT-2 Verify presence of Dashboard elements after login', () => {

  it('Verify the "List of Units" button is displayed', async () => {
    // Expected result: "List of Units" button is visible and labeled correctly
    const listOfUnitsButton = await driver.execute('flutter:waitFor', Selectors.listOfUnits, 5000);
    expect(listOfUnitsButton).toBeTruthy();
    
    // Verify element is clickable
    await driver.elementClick(Selectors.listOfUnits);
    console.log('List of Units button is visible and clickable');
    await driver.pause(3000);  
    
    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);
  });

  it('Verify the "List of Users" button is displayed', async () => {
    // Expected result: "List of Users" button is visible and labeled correctly
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    
    // Verify element is clickable
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
    
    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);
  });

  it('Verify the "Start Inspection" button is displayed', async () => {
    // Expected result: "Start Inspection" button is visible and labeled correctly
    const startInspectionButton = await driver.execute('flutter:waitFor', Selectors.startInspection, 5000);
    expect(startInspectionButton).toBeTruthy();
    
    // Verify element is clickable
    await driver.elementClick(Selectors.startInspection);
    console.log('Start Inspection button is visible and clickable');
    await driver.pause(3000);  
    
    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);
  });

  it('Verify the "Add Issue" button is displayed', async () => {
    // Expected result: "Add Issue" button is visible and labeled correctly
    const addIssueButton = await driver.execute('flutter:waitFor', Selectors.addIssue, 5000);
    expect(addIssueButton).toBeTruthy();
    
    // Verify element is clickable
    await driver.elementClick(Selectors.addIssue);
    console.log('Add Issue button is visible and clickable');
    await driver.pause(3000);  
    
    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);
  });

  it('Verify bottom navigation icons are present: Home, Browse', async () => {
    // Expected result: All icons are displayed and clickable
    
    // Verify Home tab
    const homeTab = await driver.execute('flutter:waitFor', Selectors.homeTab, 5000);
    expect(homeTab).toBeTruthy();
    await driver.elementClick(Selectors.homeTab);
    console.log('Home tab is visible and clickable');

    // Verify Browse tab
    const browseTab = await driver.execute('flutter:waitFor', Selectors.browseTab, 5000);
    expect(browseTab).toBeTruthy();
    await driver.elementClick(Selectors.browseTab);
    console.log('Browse tab is visible and clickable');

    console.log('All bottom navigation icons are displayed and clickable');
  });
});