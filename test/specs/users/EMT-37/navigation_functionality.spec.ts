import { Selectors } from "./Selectors"; 

describe('EMT-37 Verify User Section Navigation', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
  });

  it(' -- EMT-37 -- ', async () => {
    // Update in Qase.io !!!
  });
});