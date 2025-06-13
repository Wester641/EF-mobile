import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUnits = byValueKey("list_of_units");
  static readonly listOfUsers = byValueKey("list_of_users");
  static readonly startInspection = byValueKey("start_inspection");
  static readonly addIssue = byValueKey("add_issue");

  // Bottom Bar: Bottom navigation
  static readonly homeTab = byValueKey("home_tab");
  static readonly browseTab = byValueKey("browse_tab");

    // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
}