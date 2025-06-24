import { Selectors } from "./Selectors"; 

describe('EMT-28 Verify Add Users Functionality', () => {
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
    const firstUserName = await driver.getElementText(Selectors.userNameItem(0));

    const firstUser = await driver.execute('flutter:waitFor', Selectors.userItem(0), 5000);
    expect(firstUser).toBeTruthy();
    await driver.elementClick(Selectors.userItem(0));
    console.log('Clicked on first User in list');
    await driver.pause(2000);

    const editButton = await driver.execute('flutter:waitFor', Selectors.editButton, 5000);
    expect(editButton).toBeTruthy();
    console.log('Edit button is visible');

    const userNameSection = await driver.execute('flutter:waitFor', Selectors.userNameSection, 5000);
    expect(userNameSection).toBeTruthy();
    console.log('User widget is visible');

    const userName = await driver.getElementText(Selectors.userNameSection);
    expect(firstUserName).toEqual(userName);
    console.log('User name is correct');

    const detailsSection = await driver.execute('flutter:waitFor', Selectors.detailRow, 5000);
    expect(detailsSection).toBeTruthy();
    console.log('Details section is visible');

    const detailsTitle = await driver.getElementText(Selectors.detailTitle);
    expect(detailsTitle).toEqual("Details");
    console.log('Details title is visible');

    const seeAllButton = await driver.execute('flutter:waitFor', Selectors.seeAllButton, 5000);
    expect(seeAllButton).toBeTruthy();
    console.log('See all Button is visible');

    const attachemntsTitle = await driver.getElementText(Selectors.attachmentTitle);
    expect(attachemntsTitle).toEqual("Attachments");
    console.log('Attachments title is visible');

    await driver.execute('flutter:scrollUntilVisible', Selectors.scrollView, {item: Selectors.documentSection, dxScroll: 0, dyScroll: 100});
    const documentSection = await driver.execute('flutter:waitFor', Selectors.documentSection, 5000);
    expect(documentSection).toBeTruthy();
    console.log('Document section is visible');
  });
});