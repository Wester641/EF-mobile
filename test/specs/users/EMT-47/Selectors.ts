import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  static readonly appbarTitle = byValueKey("appbar_title");

  // Users: User List
  static userItem(index: number) {
    return byValueKey(`user_${index}`);
  }

  static userNameItem(index: number) {
    return byValueKey(`user_name_${index}`);
  }

  // Users: Detail Page
  static readonly seeAllButton = byValueKey("see_all_button");

  // Users: See All Details Page
  static readonly scrollView = byValueKey("see_all_users_scroll_view");

  static readonly emailField = byValueKey("see_all_users_email_field");
  static readonly addressField = byValueKey("see_all_users_address_field");

  static readonly birthField = byValueKey("see_all_users_date_of_birth_field");
  static readonly jobTitleField = byValueKey("see_all_users_job_title_field");
  static readonly employeeNumberField = byValueKey("see_all_users_employee_number_field");
  static readonly startField = byValueKey("see_all_users_start_date_field");
  static readonly leaveField = byValueKey("see_all_users_leave_date_field");
  static readonly licenseNumberField = byValueKey("see_all_users_license_number_field");
  static readonly licenseClassField = byValueKey("see_all_users_license_class_field");
  static readonly licenseRegionField = byValueKey("see_all_users_license_region_field");
  static readonly laborField = byValueKey("see_all_users_hourly_labor_field");

  static readonly idNumberField = byValueKey("see_all_users_id_number_field");
  static readonly hireDateField = byValueKey("see_all_users_hire_date_field");
  static readonly cdlField = byValueKey("see_all_users_cdl_field");
  }