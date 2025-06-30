import { Selectors } from "./Selectors"; 

describe('EMT-64 Verify Work Orders details functionality', () => {
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

  it('1. Press on one of the Items in the WO List', async () => {
    // Click on first WO in Work Orders list
    const firstWorkOrderNumber = await driver.getElementText(Selectors.workOrderNumberItem(0));
    const firstWorkOrderUnit = await driver.getElementText(Selectors.workOrderUnitItem(0));

    const firstWorkOrder = await driver.execute('flutter:waitFor', Selectors.workOrderItem(0), 5000);
    expect(firstWorkOrder).toBeTruthy();
    await driver.elementClick(Selectors.workOrderItem(0));
    console.log('Clicked on first WO in list');
    await driver.pause(2000);

    const appbarTitle = await driver.getElementText(Selectors.appbarTitle);
    expect(appbarTitle).toBe("Work Order Detail")
    console.log('AppBar title is correct');

    const editButton = await driver.execute('flutter:waitFor', Selectors.editButton, 5000);
    expect(editButton).toBeTruthy();
    console.log('Edit button is visible');

    const workOrderNumber = await driver.execute('flutter:waitFor', Selectors.workOrderNumber, 5000);
    expect(workOrderNumber).toBeTruthy();
    console.log('Work Order Number widget is visible');

    const workOrderNumberText = await driver.getElementText(Selectors.workOrderNumber);
    expect(workOrderNumberText.split('#')[1]?.trim()).toEqual(firstWorkOrderNumber.split('#')[1]?.trim());
    console.log('Work Order number is correct');

    const startWork = await driver.execute('flutter:waitFor', Selectors.startWorkButton, 5000);
    expect(startWork).toBeTruthy();
    await driver.elementClick(Selectors.startWorkButton);
    console.log('"Start Work" button is visible and clickable');
    await driver.pause(3000);

    await driver.elementClick(Selectors.backButton);
    await driver.pause(3000);

    const showMoreButton = await driver.execute('flutter:waitFor', Selectors.showMoreButton, 5000);
    expect(showMoreButton).toBeTruthy();
    console.log('"Show More" button is visible');

    const workOrderVehicle = await driver.execute('flutter:waitFor', Selectors.workOrderVehicle, 5000);
    expect(workOrderVehicle).toBeTruthy();
    console.log('Work Order Vehicle widget is visible');

    const workOrderVehicleText = await driver.getElementText(Selectors.workOrderVehicle);
    expect(workOrderVehicleText).toBe(firstWorkOrderUnit);
    console.log('Work Order Vehicle text is correct');

    await driver.execute('flutter:scrollUntilVisible', Selectors.scrollView, {item: Selectors.workOrderYear, dxScroll: 0, dyScroll: -100});
    const workOrderYear = await driver.execute('flutter:waitFor', Selectors.workOrderYear, 5000);
    expect(workOrderYear).toBeTruthy();
    console.log('Work Order Year is visible');
    
    const workOrderVin = await driver.execute('flutter:waitFor', Selectors.workOrderVin, 5000);
    expect(workOrderVin).toBeTruthy();
    console.log('Work Order VIN is visible');

    const workOrderMeter = await driver.execute('flutter:waitFor', Selectors.workOrderMeter, 5000);
    expect(workOrderMeter).toBeTruthy();
    console.log('Work Order Meter Readings is visible');

    const workOrderStartDate = await driver.execute('flutter:waitFor', Selectors.workOrderStartDate, 5000);
    expect(workOrderStartDate).toBeTruthy();
    console.log('Work Order Start Date is visible');

    const workOrderCompletionDate = await driver.execute('flutter:waitFor', Selectors.workOrderCompletionDate, 5000);
    expect(workOrderCompletionDate).toBeTruthy();
    console.log('Work Order Completion Date is visible');
  });
});