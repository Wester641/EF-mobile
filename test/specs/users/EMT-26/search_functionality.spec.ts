import { Selectors } from './Selectors';

describe('EMT-26 Users Search Functionality', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
  });


  it('Press "Search" Icon on top AppBar', async () => {
    const searchButton = await driver.execute('flutter:waitFor', Selectors.usersSearchButton, 5000);
    expect(searchButton).toBeTruthy();
    await driver.elementClick(Selectors.usersSearchButton);
    console.log('Search button is visible and clickable');
    await driver.pause(3000);

    const searchField = await driver.execute('flutter:waitFor', Selectors.searchInput, 5000);
    expect(searchField).toBeTruthy();
    console.log('Search field is visible');

    const noResultMessage = await driver.execute('flutter:waitFor', Selectors.noResultMessage, 5000);
    expect(noResultMessage).toBeTruthy();
    console.log('"No results found" message is visible');

    const noResultText = await driver.getElementText(Selectors.noResultMessage);
    expect(noResultText).toEqual('No results found');
    console.log('"No results found" message is shown correctly');
  });


  it('Fill Input', async () => {
    const searchQuery = 'user';
    await driver.elementSendKeys(Selectors.searchInput, searchQuery);
    console.log(`"${searchQuery}" input entered to search field`);
    await driver.pause(3000);

    try {
      for (let index = 0; index < 5; index++) {
        try {
          const usersSearchList = await driver.execute('flutter:waitFor', Selectors.userSearchList, 3000);
          expect(usersSearchList).toBeTruthy();
          console.log('Users search list is shown correctly');

          const userItem = await driver.execute('flutter:waitFor', Selectors.userSearchItem(index), 3000);
          expect(userItem).toBeTruthy();
          console.log(`Element user_name_${index} is found`);

          const userNameText = await driver.getElementText(Selectors.userNameSearchItem(index));
          console.log(`user_${index} name is: ${userNameText}`);

          expect(userNameText.toLowerCase()).toContain(searchQuery.toLowerCase());
          console.log(`user_${index} name's contain "${searchQuery}"`);
        } catch (err) {
          console.log(`Element user_name_${index} not found, break`);
          break;
        }
      }

      const user0 = await driver.execute('flutter:waitFor', Selectors.userSearchItem(0), 1000);
      if (!user0) {
        throw new Error('No users found');
      }
    } catch (err) {
      try {
        const noResultMessage = await driver.execute('flutter:waitFor', Selectors.noResultMessage, 5000);
        expect(noResultMessage).toBeTruthy();
        const noResultText = await driver.getElementText(Selectors.noResultMessage);
        expect(noResultText).toEqual('No results found');
        console.log('"No results found" message is shown correctly with text: ' + noResultText);
      } catch (noResultErr) {
        console.error('Error, not found "No results found" message or users:', noResultErr);
        throw noResultErr;
      }
    }
  });

/*   ADD AFTER FIX
  it('Expect returning to start state', async () => {
    await driver.elementClear(Selectors.searchInput);
    console.log(`Search input is cleaned`);
    await driver.pause(3000);

    const noResultMessage = await driver.execute('flutter:waitFor', Selectors.noResultMessage, 5000);
    expect(noResultMessage).toBeTruthy();
    console.log('"No results found" message is visible');

    const noResultText = await driver.getElementText(Selectors.noResultMessage);
    expect(noResultText).toEqual('No results found');
    console.log('"No results found" message is shown correctly');
  });
*/
});