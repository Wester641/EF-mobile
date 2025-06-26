import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUnits = byValueKey("list_of_units");
  static readonly listOfUsers = byValueKey("list_of_users");
  static readonly startInspection = byValueKey("start_inspection");
  static readonly addIssue = byValueKey("add_issue");

  static readonly profileButton = byValueKey("profile_button");
  
  static readonly unitsViewAll = byValueKey("units_view_all");
  static readonly issueViewAll = byValueKey("issue_view_all");

  static unitItem(index: number) {
    return byValueKey(`unit_${index}`);
  }
  
  static issueItem(index: number) {
    return byValueKey(`issue_${index}`);
  }

  // Bottom Bar: Bottom navigation
  static readonly homeTab = byValueKey("home_tab");
  static readonly browseTab = byValueKey("browse_tab");

    // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  static readonly appbarTitle = byValueKey("appbar_title");
}