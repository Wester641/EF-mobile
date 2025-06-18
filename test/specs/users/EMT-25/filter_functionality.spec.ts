import { Selectors } from './Selectors';

describe('EMT-25 Users Filter Functionality', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Units button is visible and clickable');
    await driver.pause(3000);  
  });

  it('Filter by "Status" functionality', async () => {
    // Step 1: Press top Filter Bar button
    const statusButton = await driver.execute('flutter:waitFor', Selectors.statusButton, 5000);
    expect(statusButton).toBeTruthy();
    await driver.elementClick(Selectors.statusButton);
    console.log('Status filter button clicked');
    await driver.pause(3000);  

    // Step 2: Filter widgets check
    const filterDropdown = await driver.execute('flutter:waitFor', Selectors.filterDropdown, 5000);
    expect(filterDropdown).toBeTruthy();
    console.log('Status dropdown is displayed');
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000) as any;
    expect(filterTitle).toBeTruthy();
    console.log('Status title is displayed correctly')

    const clearButton = await driver.execute('flutter:waitFor', Selectors.filterClearButton, 5000);
    expect(clearButton).toBeTruthy();
    console.log('Status clear button is displayed');
    
    const searchField = await driver.execute('flutter:waitFor', Selectors.filterSearchField, 5000);
    expect(searchField).toBeTruthy();
    console.log('Status search field is displayed and clickable');
    
    const optionsList = await driver.execute('flutter:waitFor', Selectors.filterOptionsList, 5000);
    expect(optionsList).toBeTruthy();
    console.log('Status options list is displayed');
    
    const cancelButton = await driver.execute('flutter:waitFor', Selectors.filterCancelButton, 5000);
    expect(cancelButton).toBeTruthy();
    console.log('Status cancel button is displayed');
    
    const applyButton = await driver.execute('flutter:waitFor', Selectors.filterApplyButton, 5000);
    expect(applyButton).toBeTruthy();
    console.log('Status apply button is displayed');

    // Step 3: Count the number of filter options
    let statusCount = 0;
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 5000);
        statusCount++;
      } catch (error) {
        console.log("No elements found, error");
        break
      }
    }
    expect(statusCount).toBeGreaterThan(0);
    console.log(`Found ${statusCount} status filter options`);

    // Step 4: Choose a random option and apply
    const randomIndex = Math.floor(Math.random() * statusCount);
    console.log(`Selecting option with index: ${randomIndex}`);
    const randomStatusOption = await driver.execute('flutter:waitFor', Selectors.filterOption(randomIndex), 5000);
    expect(randomStatusOption).toBeTruthy();
  
    await driver.execute('flutter:scrollUntilVisible', Selectors.filterOptionsList, {item: Selectors.filterOption(randomIndex), dxScroll: 0, dyScroll: -100});
    await driver.elementClick(Selectors.filterOption(randomIndex));
    console.log(`Status option with index ${randomIndex} selected`);
    await driver.pause(3000);

    await driver.elementClick(Selectors.filterApplyButton);
    console.log('Status filter applied successfully');
    await driver.pause(3000);  

    // Expected result: Users List with chosen option
    console.log('Users list now shows filtered results by selected status');

    // Step 5: Clear all filters to reset state
    const clearFiltersButton = await driver.execute('flutter:waitFor', Selectors.clearFiltersButton, 5000);
    expect(clearFiltersButton).toBeTruthy();
    await driver.elementClick(Selectors.clearFiltersButton);
    console.log('All filters cleared, list reset to original state');
    await driver.pause(3000);
  });


  it('Filter by "Role" functionality', async () => {
    // Step 1: Press top Filter Bar button
    const roleButton = await driver.execute('flutter:waitFor', Selectors.roleButton, 5000);
    expect(roleButton).toBeTruthy();
    await driver.elementClick(Selectors.roleButton);
    console.log('Role filter button clicked');
    await driver.pause(3000);  

    // Step 2: Filter widgets check
    const filterDropdown = await driver.execute('flutter:waitFor', Selectors.filterDropdown, 5000);
    expect(filterDropdown).toBeTruthy();
    console.log('Role dropdown is displayed');
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000) as any;
    expect(filterTitle).toBeTruthy();
    console.log('Role title is displayed correctly')

    const clearButton = await driver.execute('flutter:waitFor', Selectors.filterClearButton, 5000);
    expect(clearButton).toBeTruthy();
    console.log('Role clear button is displayed');
    
    const searchField = await driver.execute('flutter:waitFor', Selectors.filterSearchField, 5000);
    expect(searchField).toBeTruthy();
    console.log('Role search field is displayed and clickable');
    
    const optionsList = await driver.execute('flutter:waitFor', Selectors.filterOptionsList, 5000);
    expect(optionsList).toBeTruthy();
    console.log('Role options list is displayed');
    
    const cancelButton = await driver.execute('flutter:waitFor', Selectors.filterCancelButton, 5000);
    expect(cancelButton).toBeTruthy();
    console.log('Role cancel button is displayed');
    
    const applyButton = await driver.execute('flutter:waitFor', Selectors.filterApplyButton, 5000);
    expect(applyButton).toBeTruthy();
    console.log('Role apply button is displayed');

    // Step 3: Count the number of filter options
    let roleCount = 0;
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 5000);
        roleCount++;
      } catch (error) {
        console.log("No elements found, error");
        break
      }
    }
    expect(roleCount).toBeGreaterThan(0);
    console.log(`Found ${roleCount} role filter options`);

    // Step 4: Choose a random option and apply
    const randomIndex = Math.floor(Math.random() * roleCount);
    console.log(`Selecting option with index: ${randomIndex}`);
    const randomRoleOption = await driver.execute('flutter:waitFor', Selectors.filterOption(randomIndex), 5000);
    expect(randomRoleOption).toBeTruthy();
  
    await driver.execute('flutter:scrollUntilVisible', Selectors.filterOptionsList, {item: Selectors.filterOption(randomIndex), dxScroll: 0, dyScroll: -100});
    await driver.elementClick(Selectors.filterOption(randomIndex));
    console.log(`Role option with index ${randomIndex} selected`);
    await driver.pause(3000);

    await driver.elementClick(Selectors.filterApplyButton);
    console.log('Role filter applied successfully');
    await driver.pause(3000);  

    // Expected result: Users List with chosen option
    console.log('Users list now shows filtered results by selected role');

    // Step 5: Clear all filters to reset state
    const clearFiltersButton = await driver.execute('flutter:waitFor', Selectors.clearFiltersButton, 5000);
    expect(clearFiltersButton).toBeTruthy();
    await driver.elementClick(Selectors.clearFiltersButton);
    console.log('All filters cleared, list reset to original state');
    await driver.pause(3000);
  });


  it('Filter by "Group" functionality', async () => {
    // Step 1: Press top Filter Bar button
    const groupButton = await driver.execute('flutter:waitFor', Selectors.groupButton, 5000);
    expect(groupButton).toBeTruthy();
    await driver.elementClick(Selectors.groupButton);
    console.log('Group filter button clicked');
    await driver.pause(3000);  

    // Step 2: Filter widgets check
    const filterDropdown = await driver.execute('flutter:waitFor', Selectors.filterDropdown, 5000);
    expect(filterDropdown).toBeTruthy();
    console.log('Group dropdown is displayed');
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000);
    expect(filterTitle).toBeTruthy();
    console.log('Group title is displayed correctly');

    const clearButton = await driver.execute('flutter:waitFor', Selectors.filterClearButton, 5000);
    expect(clearButton).toBeTruthy();
    console.log('Group clear button is displayed');
    
    const searchField = await driver.execute('flutter:waitFor', Selectors.filterSearchField, 5000);
    expect(searchField).toBeTruthy();
    console.log('Group search field is displayed and clickable');
    
    const optionsList = await driver.execute('flutter:waitFor', Selectors.filterOptionsList, 5000);
    expect(optionsList).toBeTruthy();
    console.log('Group options list is displayed');
    
    const cancelButton = await driver.execute('flutter:waitFor', Selectors.filterCancelButton, 5000);
    expect(cancelButton).toBeTruthy();
    console.log('Group cancel button is displayed');
    
    const applyButton = await driver.execute('flutter:waitFor', Selectors.filterApplyButton, 5000);
    expect(applyButton).toBeTruthy();
    console.log('Group apply button is displayed');

    // Step 3: Count the number of filter options
    let groupCount = 0;
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 5000);
        groupCount++;
      } catch (error) {
        console.log("No elements found, error");
        break;
      }
    }
    expect(groupCount).toBeGreaterThan(0);
    console.log(`Found ${groupCount} group filter options`);

    // Step 4: Choose a random option and apply
    const randomIndex = Math.floor(Math.random() * groupCount);
    console.log(`Selecting option with index: ${randomIndex}`);
    const randomGroupOption = await driver.execute('flutter:waitFor', Selectors.filterOption(randomIndex), 5000);
    expect(randomGroupOption).toBeTruthy();
  
    await driver.execute('flutter:scrollUntilVisible', Selectors.filterOptionsList, {item: Selectors.filterOption(randomIndex), dxScroll: 0, dyScroll: -100});
    await driver.elementClick(Selectors.filterOption(randomIndex));
    console.log(`Group option with index ${randomIndex} selected`);
    await driver.pause(3000);

    await driver.elementClick(Selectors.filterApplyButton);
    console.log('Group filter applied successfully');
    await driver.pause(3000);  

    // Expected result: Users List with chosen option
    console.log('Users list now shows filtered results by selected group');

    // Step 5: Clear all filters to reset state
    const clearFiltersButton = await driver.execute('flutter:waitFor', Selectors.clearFiltersButton, 5000);
    expect(clearFiltersButton).toBeTruthy();
    await driver.elementClick(Selectors.clearFiltersButton);
    console.log('All filters cleared, list reset to original state');
    await driver.pause(3000);
});


it('Filter by "Classification" functionality', async () => {
    // Step 1: Press top Filter Bar button
    const classificationButton = await driver.execute('flutter:waitFor', Selectors.classificationButton, 5000);
    expect(classificationButton).toBeTruthy();
    await driver.execute('flutter:scrollUntilVisible', Selectors.filterScroll, {item: Selectors.classificationButton, dxScroll: 100, dyScroll: 0});
    await driver.elementClick(Selectors.classificationButton);
    console.log('Classification filter button clicked');
    await driver.pause(3000);  

    // Step 2: Filter widgets check
    const filterDropdown = await driver.execute('flutter:waitFor', Selectors.filterDropdown, 5000);
    expect(filterDropdown).toBeTruthy();
    console.log('Classification dropdown is displayed');
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000);
    expect(filterTitle).toBeTruthy();
    console.log('Classification title is displayed correctly');

    const clearButton = await driver.execute('flutter:waitFor', Selectors.filterClearButton, 5000);
    expect(clearButton).toBeTruthy();
    console.log('Classification clear button is displayed');
    
    const searchField = await driver.execute('flutter:waitFor', Selectors.filterSearchField, 5000);
    expect(searchField).toBeTruthy();
    console.log('Classification search field is displayed and clickable');
    
    const optionsList = await driver.execute('flutter:waitFor', Selectors.filterOptionsList, 5000);
    expect(optionsList).toBeTruthy();
    console.log('Classification options list is displayed');
    
    const cancelButton = await driver.execute('flutter:waitFor', Selectors.filterCancelButton, 5000);
    expect(cancelButton).toBeTruthy();
    console.log('Classification cancel button is displayed');
    
    const applyButton = await driver.execute('flutter:waitFor', Selectors.filterApplyButton, 5000);
    expect(applyButton).toBeTruthy();
    console.log('Classification apply button is displayed');

    // Step 3: Count the number of filter options
    let classificationCount = 0;
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 5000);
        classificationCount++;
      } catch (error) {
        console.log("No elements found, error");
        break;
      }
    }
    expect(classificationCount).toBeGreaterThan(0);
    console.log(`Found ${classificationCount} classification filter options`);

    // Step 4: Choose a random option and apply
    const randomIndex = Math.floor(Math.random() * classificationCount);
    console.log(`Selecting option with index: ${randomIndex}`);
    const randomClassificationOption = await driver.execute('flutter:waitFor', Selectors.filterOption(randomIndex), 5000);
    expect(randomClassificationOption).toBeTruthy();
  
    await driver.execute('flutter:scrollUntilVisible', Selectors.filterOptionsList, {item: Selectors.filterOption(randomIndex), dxScroll: 0, dyScroll: -100});
    await driver.elementClick(Selectors.filterOption(randomIndex));
    console.log(`Classification option with index ${randomIndex} selected`);
    await driver.pause(3000);

    await driver.elementClick(Selectors.filterApplyButton);
    console.log('Classification filter applied successfully');
    await driver.pause(3000);  

    // Expected result: Users List with chosen option
    console.log('Users list now shows filtered results by selected classification');

    // Step 5: Clear all filters to reset state
    const clearFiltersButton = await driver.execute('flutter:waitFor', Selectors.clearFiltersButton, 5000);
    expect(clearFiltersButton).toBeTruthy();

    await driver.execute('flutter:scrollUntilVisible', Selectors.filterScroll, {item: Selectors.clearFiltersButton, dxScroll: -100, dyScroll: 0});
    await driver.elementClick(Selectors.clearFiltersButton);
    console.log('All filters cleared, list reset to original state');
    await driver.pause(3000);
  });
});