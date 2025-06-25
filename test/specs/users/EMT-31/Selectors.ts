import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");

  // Users: User List
  static userItem(index: number) {
    return byValueKey(`user_${index}`);
  }

  // Users: Detail Page
  static readonly scrollView = byValueKey("contact_detail_scroll_view");
  static readonly commentTitle = byValueKey("comment_title");
  static readonly cancelButton = byValueKey("cancel_comment_button");
  static readonly commentButton = byValueKey("comment_button");
  static readonly commentTextField = byValueKey("comment_text_field");

  static commentItem(index: number) {
    return byValueKey(`comment_item_${index}`);
  }

  static commentText(index: number) {
    return byValueKey(`comment_text_${index}`);
  }

  static commentDelete(index: number) {
    return byValueKey(`comment_delete_${index}`);
  }
}