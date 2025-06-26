import { Selectors } from './Selectors';

describe('EMT-3 Verify the account settings functionality', () => {

  it('Tap the profile avatar button', async () => {
    // Expected result: "List of Units" button is visible and labeled correctly
    const profileButton = await driver.execute('flutter:waitFor', Selectors.profileButton, 5000);
    expect(profileButton).toBeTruthy();
    
    // Verify element is clickable
    await driver.elementClick(Selectors.profileButton);
    console.log('Profile button is visible and clickable');
    await driver.pause(3000);  

    const settingsTitle = await driver.getElementText(Selectors.appbarTitle);
    expect(settingsTitle).toBe("Settings");
  });

  it('Verify Settings screen is displayed', async () => {
    const username = await driver.execute('flutter:waitFor', Selectors.usernameTitle, 5000);
    expect(username).toBeTruthy();
    const usernameText = await driver.getElementText(Selectors.usernameTitle);
    expect(usernameText).not.toBeNull();
    
    const userSection = await driver.execute('flutter:waitFor', Selectors.userTitle, 5000);
    expect(userSection).toBeTruthy();
    const userSectionText = await driver.getElementText(Selectors.userTitle);
    expect(userSectionText).toBe("User")
    
    const editProfile = await driver.execute('flutter:waitFor', Selectors.editProfile, 5000);
    expect(editProfile).toBeTruthy();
    await driver.elementClick(Selectors.editProfile);
    console.log('Edit Profile button is visible and clickable');
    await driver.pause(3000);  

    await driver.elementClick(Selectors.editProfileCancel);
    console.log('Edit Profile Cancel button has been clicked');
    await driver.pause(3000); 

    const updatePassword = await driver.execute('flutter:waitFor', Selectors.updatePassword, 5000);
    expect(updatePassword).toBeTruthy();
    await driver.elementClick(Selectors.updatePassword);
    console.log('Update Password button is visible and clickable');
    await driver.pause(3000); 

    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);

    const supportSection = await driver.execute('flutter:waitFor', Selectors.supportTitle, 5000);
    expect(supportSection).toBeTruthy();
    const supportSectionText = await driver.getElementText(Selectors.supportTitle);
    expect(supportSectionText).toBe("Support")

    const supportText = await driver.getElementText(Selectors.supportText);
    expect(supportText).toBe("Support")

    const supportCall = await driver.execute('flutter:waitFor', Selectors.supportCall, 5000);
    expect(supportCall).toBeTruthy();

    const logoutButton = await driver.execute('flutter:waitFor', Selectors.logoutButton, 5000);
    expect(logoutButton).toBeTruthy();
  });

  it('Tap on back button', async () => {
    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);
    
    const profileButton = await driver.execute('flutter:waitFor', Selectors.profileButton, 5000);
    expect(profileButton).toBeTruthy();
  });
});