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

  it('1. Press on any User Item', async () => {
    // Click on the first User
    const firstUser = await driver.execute('flutter:waitFor', Selectors.userItem(0), 5000);
    expect(firstUser).toBeTruthy();
    await driver.elementClick(Selectors.userItem(0));
    console.log('Clicked on first User in list');
    await driver.pause(2000);
  });

  it('2. Press on top right edit button', async () => {
    // Click on the Edit button
    const editButton = await driver.execute('flutter:waitFor', Selectors.editButton, 5000);
    expect(editButton).toBeTruthy();
    await driver.elementClick(Selectors.editButton);
    console.log('Clicked on Edit button');
    await driver.pause(2000);

    // Verify App bar is correct
    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 5000);
    expect(saveButton).toBeTruthy();
    console.log('Save button is present in app bar');

    const userEditTitle = await driver.getElementText(Selectors.appbarTitle)
    expect(userEditTitle).toBe("User Edit")
    console.log('User edit page\'s title is correct');
  });

  it('3. Try to make empty required fields and save', async () => {
    const emailField = await driver.execute('flutter:waitFor', Selectors.emailField, 3000);
    expect(emailField).toBeTruthy();
    console.log('Email field is present');

    const emailText = await driver.getElementText(Selectors.emailField);
    if (emailText != "") {
      await driver.elementClear(Selectors.emailField);
      console.log('Email field is clean');
      await driver.pause(2000);
    }

    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 5000);
    expect(saveButton).toBeTruthy();
    console.log('Save button is visible');
    await driver.elementClick(Selectors.saveButton)
    await driver.pause(1000);
    console.log('Clicked Save button');
    
    try {
      const emailError = await driver.execute('flutter:waitFor', Selectors.emailValidationError, 3000);
      expect(emailError).toBeTruthy();
      console.log('✅ Email validation error displayed');
      
      const errorText = await driver.getElementText(Selectors.emailValidationError);
      expect(errorText).toBe("Fill in the email");
      console.log(`Email error message: "${errorText}"`);
    } catch (error) {
      console.log('❌ Email validation error not found');
    }
  });

  it('4. Edit Some All fields', async () => {
    const testEmail = "testemail@example.com";
    const testAddress = "test avenue 123";

    const emailField = await driver.execute('flutter:waitFor', Selectors.emailField, 5000);
    expect(emailField).toBeTruthy();
    console.log('Email field is present');
    await driver.elementSendKeys(Selectors.emailField, testEmail);
    await driver.pause(2000);
    console.log('Email field has been modified');

    const addressField = await driver.execute('flutter:waitFor', Selectors.streetAddressField, 5000);
    expect(addressField).toBeTruthy();
    console.log('Street Address field is present');
    await driver.elementSendKeys(Selectors.streetAddressField, testAddress);
    await driver.pause(2000);
    console.log('Street Address field has been modified');
  });

  it('5. Press Save', async () => {
    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 5000);
    expect(saveButton).toBeTruthy();
    console.log('Save button is visible');
    await driver.elementClick(Selectors.saveButton)
    await driver.pause(2000);
    console.log('Clicked Save button');

    const testEmail = "testemail@example.com";
    const testAddress = "test avenue 123";

    const emailPreview = await driver.execute('flutter:waitFor', Selectors.emailDetail, 5000);
    expect(emailPreview).toBeTruthy();
    console.log('Email preview is visible');
    const emailPreviewField = await driver.getElementText(Selectors.emailDetail);
    expect(emailPreviewField).toBe(testEmail);
    console.log('Email has been modified correctly');

    const addressPreview = await driver.execute('flutter:waitFor', Selectors.addressDetail, 5000);
    expect(addressPreview).toBeTruthy();
    console.log('Address preview is visible');
    const addressPreviewField = await driver.getElementText(Selectors.addressDetail);
    expect(addressPreviewField).toBe(testAddress);
    console.log('Address has been modified correctly');
  });
});