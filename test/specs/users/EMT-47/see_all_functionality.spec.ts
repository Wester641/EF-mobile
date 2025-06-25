import { Selectors } from "./Selectors"; 

describe('EMT-47 User Detail See All', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
  });

  it('Click on any of the users', async () => {
    // Click on any of the users
    const firstUserName = await driver.getElementText(Selectors.userNameItem(0));

    const firstUser = await driver.execute('flutter:waitFor', Selectors.userItem(0), 5000);
    expect(firstUser).toBeTruthy();
    await driver.elementClick(Selectors.userItem(0));
    console.log('Clicked on first User in list');
    await driver.pause(2000);

    // Click on "See All" button
    const seeAllButton = await driver.execute('flutter:waitFor', Selectors.seeAllButton, 5000);
    expect(seeAllButton).toBeTruthy();
    console.log('See all Button is visible');
    await driver.elementClick(Selectors.seeAllButton);
    await driver.pause(2000);

    const seeAllUserTitle = await driver.getElementText(Selectors.appbarTitle);
    expect(firstUserName).toEqual(seeAllUserTitle);
    console.log('User name is correct');

    const emailField = await driver.execute('flutter:waitFor', Selectors.emailField, 5000);
    expect(emailField).toBeTruthy();
    console.log('Email Field is visible and correct');

    const addressField = await driver.execute('flutter:waitFor', Selectors.addressField, 5000);
    expect(addressField).toBeTruthy();
    console.log('Address Field is visible and correct');

    const birthField = await driver.execute('flutter:waitFor', Selectors.birthField, 5000);
    expect(birthField).toBeTruthy();
    console.log('Birth Field is visible and correct');

    const jobTitleField = await driver.execute('flutter:waitFor', Selectors.jobTitleField, 5000);
    expect(jobTitleField).toBeTruthy();
    console.log('Job Title Field is visible and correct');

    const employeeNumberField = await driver.execute('flutter:waitFor', Selectors.employeeNumberField, 5000);
    expect(employeeNumberField).toBeTruthy();
    console.log('Employee Number Field is visible and correct');

    const startField = await driver.execute('flutter:waitFor', Selectors.startField, 5000);
    expect(startField).toBeTruthy();
    console.log('Start Date Field is visible and correct');
    
    const leaveField = await driver.execute('flutter:waitFor', Selectors.leaveField, 5000);
    expect(leaveField).toBeTruthy();
    console.log('Leave Date Field is visible and correct');
    
    // Scrolling down
    await driver.execute('flutter:scrollUntilVisible', Selectors.scrollView, {item: Selectors.cdlField, dxScroll: 0, dyScroll: 100});
    console.log('Scrolling down...');
    await driver.pause(2000);  
    
    const licenseNumberField = await driver.execute('flutter:waitFor', Selectors.licenseNumberField, 5000);
    expect(licenseNumberField).toBeTruthy();
    console.log('License Number Field is visible and correct');

    const licenseClassField = await driver.execute('flutter:waitFor', Selectors.licenseClassField, 5000);
    expect(licenseClassField).toBeTruthy();
    console.log('License Class Field is visible and correct');

    const licenseRegionField = await driver.execute('flutter:waitFor', Selectors.licenseRegionField, 5000);
    expect(licenseRegionField).toBeTruthy();
    console.log('License Region Field is visible and correct');

    const laborField = await driver.execute('flutter:waitFor', Selectors.laborField, 5000);
    expect(laborField).toBeTruthy();
    console.log('Labor Field is visible and correct');

    const idNumberField = await driver.execute('flutter:waitFor', Selectors.idNumberField, 5000);
    expect(idNumberField).toBeTruthy();
    console.log('ID Number Field is visible and correct');

    const hireDateField = await driver.execute('flutter:waitFor', Selectors.hireDateField, 5000);
    expect(hireDateField).toBeTruthy();
    console.log('Hire Date Field is visible and correct');

    const cdlField = await driver.execute('flutter:waitFor', Selectors.cdlField, 5000);
    expect(cdlField).toBeTruthy();
    console.log('CDL Field is visible and correct');

  });
});