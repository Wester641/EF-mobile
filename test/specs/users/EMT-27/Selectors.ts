import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");

  // Users: Items
  static readonly usersList = byValueKey("users_list");
  
  // Dynamic selectors for list items
  static userItem(index: number) {
    return byValueKey(`user_${index}`);
  }

  static userNameItem(index: number) {
    return byValueKey(`user_name_${index}`);
  }

  static userEmailItem(index: number) {
    return byValueKey(`user_email_${index}`);
  }
}