import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  static readonly appbarTitle = byValueKey("appbar_title");
  
  // Users: User List page
  static readonly editButton = byValueKey("edit_button");

  // Users: Add User page
  static readonly saveButton = byValueKey("save_button");
  
  // Users: Edit fields
  static readonly emailField = byValueKey("email_field");
  static readonly emailValidationError = byValueKey("email_validation_error");
  static readonly streetAddressField = byValueKey("street_address_field");

  // Users: Details Preview fields
  static readonly phoneDetail = byValueKey("user_detail_phone");
  static readonly emailDetail = byValueKey("user_detail_email");
  static readonly addressDetail = byValueKey("user_detail_address");

  static userItem(index: number) {
    return byValueKey(`user_${index}`);
  }
}