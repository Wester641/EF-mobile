import { Selectors } from './Selectors';

describe('EMT-63 Verify Work Orders list functionality', () => {
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


  it('Check WO List Page', async () => {
    // Verify WO list exists
    const workOrderList = await driver.execute('flutter:waitFor', Selectors.workOrderList, 5000);
    expect(workOrderList).toBeTruthy();
    console.log('Work Orders list is displayed');

    // Count available WO items
    let workOrdersCount = 0;
    const maxCheck = 5; // Check up to 15 items to avoid infinite loop
    for (let i = 0; i < maxCheck; i++) {
      try {
        await driver.execute('flutter:waitFor', Selectors.workOrderItem(i), 1000);
        workOrdersCount++;
      } catch (error) {
        console.log(`No more WO items found after ${workOrdersCount} items`);
        break;
      }
    }

    expect(workOrdersCount).toBeGreaterThan(0);
    console.log(`Found ${workOrdersCount} WO items`);

    // Check first 5 items (or less if fewer exist)
    const itemsToCheck = Math.min(5, workOrdersCount);
    for (let i = 0; i < itemsToCheck; i++) {
      // Verify WO item exists
      const workOrderItem = await driver.execute('flutter:waitFor', Selectors.workOrderItem(i), 3000);
      expect(workOrderItem).toBeTruthy();
      console.log(`WO item ${i} is visible`);

      // Verify number
      const workOrderNumber = await driver.getElementText(Selectors.workOrderNumberItem(i));
      expect(workOrderNumber).toBeTruthy();
      expect(workOrderNumber.trim().length).toBeGreaterThan(0);
      expect(workOrderNumber).toMatch(/^WO #\d+$/); // Basic WO number format check
      console.log(`WO ${i} number: ${workOrderNumber}`);

      // Verify unit
      const workOrderUnit = await driver.getElementText(Selectors.workOrderUnitItem(i));
      expect(workOrderUnit).toBeTruthy();
      expect(workOrderUnit.trim().length).toBeGreaterThan(0);
      console.log(`WO ${i} unit: ${workOrderUnit}`);
    }

    // Scroll down
    try {
        await driver.execute('flutter:scrollUntilVisible', Selectors.workOrderList, {item: Selectors.workOrderItem(workOrdersCount), dxScroll: 0, dyScroll: -100});
        console.log('Scrolling down...');
        await driver.pause(2000);  
    } catch {
        console.log(`Scroll failed`)
    }
  });
});