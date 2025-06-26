import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly profileButton = byValueKey("profile_button");
  
  // Settings: Main buttons
  static readonly usernameTitle = byValueKey("settings_username");

  static readonly userTitle = byValueKey("settings_user_title");
  static readonly editProfile = byValueKey("settings_edit_profile");
  static readonly editProfileCancel = byValueKey("settings_edit_profile_cancel");
  static readonly updatePassword = byValueKey("settings_update_password");

  static readonly supportTitle = byValueKey("settings_support_title");
  static readonly supportText = byValueKey("settings_support_text");
  static readonly supportCall = byValueKey("settings_support_call");
  
  static readonly logoutButton = byValueKey("logout_button");

    // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  static readonly appbarTitle = byValueKey("appbar_title");
}