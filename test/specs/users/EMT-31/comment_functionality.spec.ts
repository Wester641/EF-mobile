import { Selectors } from "./Selectors"; 

describe('EMT-31 Users Comment Functionality', () => {
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

  it('2. Scroll till the Add Comment Part', async () => {
    // Scrolling down to Comment part
    await driver.execute('flutter:scrollUntilVisible', Selectors.scrollView, {item: Selectors.cancelButton, dxScroll: 0, dyScroll: 100});
    console.log('Scrolling down...');
    await driver.pause(2000);  

    const commentTitle = await driver.execute('flutter:waitFor', Selectors.commentTitle, 5000);
    expect(commentTitle).toBeTruthy();
    console.log('Comment title is visible');
  });

  it('3. Write Some Text on Input', async () => {
    // Writing some text on input
    const testComment = 'test123';
    await driver.elementSendKeys(Selectors.commentTextField, testComment);
    console.log(`"${testComment}" input entered to search field`);
    await driver.pause(3000);
  });

  it('4. Press Submit Button', async () => {
    // Submitting new test comment
    const submitButton = await driver.execute('flutter:waitFor', Selectors.commentButton, 5000);
    expect(submitButton).toBeTruthy();
    await driver.elementClick(Selectors.commentButton);
    console.log('Clicked on Comment button');
    await driver.pause(2000);

    const commentText = await driver.getElementText(Selectors.commentText(0));
    console.log(`user_${0} name is: ${commentText}`);
    expect(commentText).toBe('test123');
    console.log('Comment\' text is shown correctly');
  });

  it('5. Exit from Detail and Press again on that element', async () => {
    // Back button click
    await driver.elementClick(Selectors.backButton);
    await driver.pause(2000);

    // Click on first User in Users list
    const firstUser = await driver.execute('flutter:waitFor', Selectors.userItem(0), 5000);
    expect(firstUser).toBeTruthy();
    await driver.elementClick(Selectors.userItem(0));
    console.log('Clicked on first User in list');
    await driver.pause(2000);

    // Scrolling down to Comment part
    await driver.execute('flutter:scrollUntilVisible', Selectors.scrollView, {item: Selectors.cancelButton, dxScroll: 0, dyScroll: 100});
    console.log('Scrolling down...');
    await driver.pause(2000);  

    const commentText = await driver.getElementText(Selectors.commentText(0));
    console.log(`user_${0} name is: ${commentText}`);
    expect(commentText).toBe('test123');
    console.log('Comment\' text is shown correctly');

    // Deleting comment
    await driver.elementClick(Selectors.commentDelete(0));
    await driver.pause(2000); 
    console.log('Comment has been deleted');
  });
});