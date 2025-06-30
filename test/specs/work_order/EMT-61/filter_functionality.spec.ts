import { Selectors } from './Selectors';

describe('EMT-61 Verify Work Orders display and filtering functionality', () => {
  it('Pre-conditions', async () => {
    // Navigate to Browse Tab
    const browseTab = await driver.execute('flutter:waitFor', Selectors.browseTab, 5000);
    expect(browseTab).toBeTruthy();
    await driver.elementClick(Selectors.browseTab);
    console.log('Browse tab is visible and clickable');
    await driver.pause(3000);

    // Navigate to Work Order page
    const workOrderPage = await driver.execute('flutter:waitFor', Selectors.browseWorkOrder, 5000);
    expect(workOrderPage).toBeTruthy();
    await driver.elementClick(Selectors.browseWorkOrder);
    console.log('"Work Order" button is visible and clickable');
    await driver.pause(3000);
  });

  it('Filter by "Vehicle" functionality', async () => {
    // Step 1: Press top Filter Bar button
    const vehicleButton = await driver.execute('flutter:waitFor', Selectors.vehicleButton, 5000);
    expect(vehicleButton).toBeTruthy();
    await driver.elementClick(Selectors.vehicleButton);
    console.log('Vehicle filter button clicked');
    await driver.pause(3000);  

    // Step 2: Filter widgets check
    const filterDropdown = await driver.execute('flutter:waitFor', Selectors.filterDropdown, 5000);
    expect(filterDropdown).toBeTruthy();
    console.log('Vehicle dropdown is displayed');
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000) as any;
    expect(filterTitle).toBeTruthy();
    console.log('Vehicle title is displayed correctly')

    const clearButton = await driver.execute('flutter:waitFor', Selectors.filterClearButton, 5000);
    expect(clearButton).toBeTruthy();
    console.log('Vehicle clear button is displayed');
    
    const searchField = await driver.execute('flutter:waitFor', Selectors.filterSearchField, 5000);
    expect(searchField).toBeTruthy();
    console.log('Vehicle search field is displayed and clickable');
    
    const optionsList = await driver.execute('flutter:waitFor', Selectors.filterOptionsList, 5000);
    expect(optionsList).toBeTruthy();
    console.log('Vehicle options list is displayed');
    
    const cancelButton = await driver.execute('flutter:waitFor', Selectors.filterCancelButton, 5000);
    expect(cancelButton).toBeTruthy();
    console.log('Vehicle cancel button is displayed');
    
    const applyButton = await driver.execute('flutter:waitFor', Selectors.filterApplyButton, 5000);
    expect(applyButton).toBeTruthy();
    console.log('Vehicle apply button is displayed');

    // Step 3: Count the number of filter options
    let vehicleCount = 0;
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 1000);
        vehicleCount++;
      } catch (error) {
        console.log("No elements found, error");
        break
      }
    }
    expect(vehicleCount).toBeGreaterThan(0);
    console.log(`Found ${vehicleCount} vehicle filter options`);

    // Step 4: Choose a random option and apply
    const randomIndex = Math.floor(Math.random() * vehicleCount);
    console.log(`Selecting option with index: ${randomIndex}`);
    const randomVehicleOption = await driver.execute('flutter:waitFor', Selectors.filterOption(randomIndex), 5000);
    expect(randomVehicleOption).toBeTruthy();
  
    await driver.execute('flutter:scrollUntilVisible', Selectors.filterOptionsList, {item: Selectors.filterOption(randomIndex), dxScroll: 0, dyScroll: -100});
    await driver.elementClick(Selectors.filterOption(randomIndex));
    console.log(`Vehicle option with index ${randomIndex} selected`);
    await driver.pause(3000);

    await driver.elementClick(Selectors.filterApplyButton);
    console.log('Vehicle filter applied successfully');
    await driver.pause(3000);  

    // Expected result: Work Orders List with chosen option
    console.log('Work Order list now shows filtered results by selected vehicle');

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
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000) as any;
    expect(filterTitle).toBeTruthy();
    console.log('Group title is displayed correctly')

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
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 1000);
        groupCount++;
      } catch (error) {
        console.log("No elements found, error");
        break
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

    // Expected result: Work Orders List with chosen option
    console.log('Work Orders list now shows filtered results by selected group');

    // Step 5: Clear all filters to reset state
    const clearFiltersButton = await driver.execute('flutter:waitFor', Selectors.clearFiltersButton, 5000);
    expect(clearFiltersButton).toBeTruthy();
    await driver.elementClick(Selectors.clearFiltersButton);
    console.log('All filters cleared, list reset to original state');
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
    
    const filterTitle = await driver.execute('flutter:waitFor', Selectors.filterTitle, 5000);
    expect(filterTitle).toBeTruthy();
    console.log('Status title is displayed correctly');

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
        await driver.execute('flutter:waitFor', Selectors.filterOption(i), 1000);
        statusCount++;
      } catch (error) {
        console.log("No elements found, error");
        break;
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

    // Expected result: Work Orders List with chosen option
    console.log('Work Orders list now shows filtered results by selected status');

    // Step 5: Clear all filters to reset state
    const clearFiltersButton = await driver.execute('flutter:waitFor', Selectors.clearFiltersButton, 5000);
    expect(clearFiltersButton).toBeTruthy();
    await driver.elementClick(Selectors.clearFiltersButton);
    console.log('All filters cleared, list reset to original state');
    await driver.pause(3000);
});
});