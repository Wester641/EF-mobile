import { Selectors } from "./Selectors"; 

describe('EMT-36 User Document Upload', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
  });

  it('1. Press on one of the Items in the Users List', async () => {
    // Click on first User in Users list
    const firstUser = await driver.execute('flutter:waitFor', Selectors.userItem(0), 5000);
    expect(firstUser).toBeTruthy();
    await driver.elementClick(Selectors.userItem(0));
    console.log('Clicked on first User in list');
    await driver.pause(2000);
  });

  it('2. Scroll till the end unit you see Document Upload Part', async () => {
    // Click on first User in Users list
    await driver.execute('flutter:scrollUntilVisible', Selectors.scrollView, {item: Selectors.documentSection, dxScroll: 0, dyScroll: 100});
    const documentSection = await driver.execute('flutter:waitFor', Selectors.documentSection, 5000);
    expect(documentSection).toBeTruthy();
    console.log('Document section is visible');
  });

  it('3. Press on "Pick File"', async () => {
    // Press on "Pick File"
    const pickFileButton = await driver.execute('flutter:waitFor', Selectors.pickFileButton, 5000);
    expect(pickFileButton).toBeTruthy();
    await driver.elementClick(Selectors.pickFileButton);
    console.log('Clicked on pick file button');
    await driver.pause(5000);
  });

  it('4. Upload File', async () => {
    // Upload File 
  });
});