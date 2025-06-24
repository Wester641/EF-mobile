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

  static userNameItem(index: number) {
    return byValueKey(`user_name_${index}`);
  }

  // Users: Detail Page
  static readonly scrollView = byValueKey("contact_detail_scroll_view");
  static readonly editButton = byValueKey("edit_button");
  static readonly attachmentTitle = byValueKey("attachments_section_title");
  static readonly documentSection = byValueKey("document_section");
  static readonly userTitle = byValueKey("user_title_widget");
  static readonly detailRow = byValueKey("detail_title_row");
  static readonly seeAllButton = byValueKey("see_all_button");
  static readonly detailTitle = byValueKey("details_section_title");
  static readonly userNameSection = byValueKey("contact_name_widget");
  }