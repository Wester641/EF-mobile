import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");

  // Bottom Bar: Tabs
  static readonly browseTab = byValueKey("browse_tab");
  static readonly browseWorkOrder = byValueKey("browse_work_order");
  
  // WO: Search and add buttons
  static readonly searchButton = byValueKey("search_button");

  // WO: Search page
  static readonly searchInput = byValueKey("search_input");
  static readonly noResultMessage = byValueKey("no_result_message");
  static readonly searchList = byValueKey("search_list");
  
  // Dynamic selectors for list items
  static workOrderSearchItem(index: number) {
    return byValueKey(`work_order_${index}`);
  }

  static workOrderUnitSearchItem(index: number) {
    return byValueKey(`work_order_vehicle_${index}`);
  }

  static workOrderNumberSearchItem(index: number) {
    return byValueKey(`work_order_reference_${index}`);
  }
}