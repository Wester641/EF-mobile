import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  
  // Users: Search and add buttons
  static readonly usersSearchButton = byValueKey("users_search");

  // Users: Search page
  static readonly searchInput = byValueKey("search_input");
  static readonly noResultMessage = byValueKey("no_result_message");
  static readonly userSearchList = byValueKey("search_list");
  
  // Dynamic selectors for list items
  static userSearchItem(index: number) {
    return byValueKey(`user_${index}`);
  }

  static userNameSearchItem(index: number) {
    return byValueKey(`user_name_${index}`);
  }

  static userEmailSearchItem(index: number) {
    return byValueKey(`user_email_${index}`);
  }
}