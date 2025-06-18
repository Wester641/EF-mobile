import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");

  // Users: Filter buttons
  static readonly filterScroll = byValueKey("filters_scroll");
  static readonly statusButton = byValueKey("status_button");
  static readonly roleButton = byValueKey("role_button");
  static readonly groupButton = byValueKey("group_button");
  static readonly classificationButton = byValueKey("classification_button");
  static readonly clearFiltersButton = byValueKey("clear_filters");
  
  // Users: Search and add buttons
  static readonly usersSearchButton = byValueKey("users_search");
  static readonly addUserButton = byValueKey("add_user_button");
  
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