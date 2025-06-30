import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");

  // Bottom Bar: Tabs
  static readonly browseTab = byValueKey("browse_tab");
  static readonly browseWorkOrder = byValueKey("browse_work_order");

  // WO: Items
  static readonly workOrderList = byValueKey("work_orders_list");
  
  // Dynamic selectors for list items
  static workOrderItem(index: number) {
    return byValueKey(`work_order_${index}`);
  }

  static workOrderUnitItem(index: number) {
    return byValueKey(`work_order_vehicle_${index}`);
  }

  static workOrderNumberItem(index: number) {
    return byValueKey(`work_order_reference_${index}`);
  }
}