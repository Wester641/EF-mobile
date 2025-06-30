import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  static readonly appbarTitle = byValueKey("appbar_title");

  // Bottom Bar: Tabs
  static readonly browseTab = byValueKey("browse_tab");
  static readonly browseWorkOrder = byValueKey("browse_work_order");

  // WO: Filter buttons
  static readonly vehicleButton = byValueKey("vehicle_filter");
  static readonly groupButton = byValueKey("group_filter");
  static readonly statusButton = byValueKey("status_filter");
  static readonly clearFiltersButton = byValueKey("reset_filter");
  
  // WO: Search and add buttons
  static readonly workOrderSearchButton = byValueKey("search_button");
  
  // Filter modal
  static readonly filterDropdown = byValueKey("dropdown");

  static readonly filterTitle = byValueKey("filter_bottom_sheet_title");
  static readonly filterClearButton = byValueKey("filter_clear_button");
  static readonly filterSearchField = byValueKey("filter_search_field");

  static readonly filterOptionsList = byValueKey("filter_options_list");
  static readonly filterCancelButton = byValueKey("filter_cancel_button");
  static readonly filterApplyButton = byValueKey("filter_apply_button");

  // Dynamic selectors for list items
  static filterOption(index: number) {
    return byValueKey(`filter_option_${index}`);
  }
}