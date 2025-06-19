import { Selectors } from './Selectors';

describe('EMT-27 Users List Functionality', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
  });


  it('Check Users List Page', async () => {
    // Verify users list exists
    const usersList = await driver.execute('flutter:waitFor', Selectors.usersList, 5000);
    expect(usersList).toBeTruthy();
    console.log('Users list is displayed');

    // Count available user items
    let userCount = 0;
    const maxCheck = 5; // Check up to 15 items to avoid infinite loop
    for (let i = 0; i < maxCheck; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.userItem(i), 1000);
        userCount++;
      } catch (error) {
        console.log(`No more user items found after ${userCount} items`);
        break;
      }
    }

    expect(userCount).toBeGreaterThan(0);
    console.log(`Found ${userCount} user items`);

    // Check first 5 items (or less if fewer exist)
    const itemsToCheck = Math.min(5, userCount);
    for (let i = 0; i < itemsToCheck; i++) {
      // Verify user item exists
      const userItem = await driver.execute('flutter:waitFor', Selectors.userItem(i), 3000);
      expect(userItem).toBeTruthy();
      console.log(`User item ${i} is visible`);

      // Verify name
      const userName = await driver.getElementText(Selectors.userNameItem(i));
      expect(userName).toBeTruthy();
      expect(userName.trim().length).toBeGreaterThan(0);
      console.log(`User ${i} name: ${userName}`);

      // Verify email
      const userEmail = await driver.getElementText(Selectors.userEmailItem(i));
      expect(userEmail).toBeTruthy();
      expect(userEmail.trim().length).toBeGreaterThan(0);
      expect(userEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // Basic email format check
      console.log(`User ${i} email: ${userEmail}`);
    }

    // Scroll down
    try {
        await driver.execute('flutter:scrollUntilVisible', Selectors.usersList, {item: Selectors.userItem(userCount), dxScroll: 0, dyScroll: 100});
        console.log('Scrolling down...');
        await driver.pause(2000);  
    } catch {
        console.log(`Scroll failed`)
    }
  });
});