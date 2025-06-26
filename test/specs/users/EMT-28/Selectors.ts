import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // Dashboard: Main buttons
  static readonly listOfUsers = byValueKey("list_of_users");

  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  
  // Users: User List page
  static readonly addUserButton = byValueKey("add_user_button");

  // Users: Add User page
  static readonly createContactForm = byValueKey("create_user_form");
  static readonly saveButton = byValueKey("save_user_button");
  
  // BASIC INFORMATION Fields
  static readonly basicHeader = byValueKey("basic_information_header");
  static readonly firstNameField = byValueKey("first_name_field");
  static readonly middleNameField = byValueKey("middle_name_field");
  static readonly lastNameField = byValueKey("last_name_field");
  static readonly groupSectionButton = byValueKey("group_section_button");
  static readonly groupBottomSheet = byValueKey("group_bottom_sheet");
  static readonly groupBottomSheetTitle = byValueKey("group_bottom_sheet_title");
  static readonly groupOptionsList = byValueKey("group_options_list");
  static groupOption(index: number) { return byValueKey(`group_option_${index}`); }
  static readonly snackBar = byValueKey("snack_bar");
  static readonly emailField = byValueKey("email_field");
  static readonly selectUserAccessButton = byValueKey("select_user_access_button");
  static readonly selectUserAccessPage = byValueKey("select_user_access_page");  
  static readonly loadingIndicator = byValueKey("loading_indicator");
  static readonly userAccessList = byValueKey("user_access_list");
  static readonly selectUserAccessEmptyResult = byValueKey("empty_result");
  static userAccessOption(index: number) { return byValueKey(`user_access_option_${index}`); }

  static readonly firstNameValidationError = byValueKey("first_name_validation_error");
  static readonly lastNameValidationError = byValueKey("last_name_validation_error");
  static readonly emailValidationError = byValueKey("email_validation_error");

  // CONTACT INFORMATION Fields
  static readonly streetAddressField = byValueKey("street_address_field");
  static readonly address2Field = byValueKey("street_address2_field");
  static readonly cityField = byValueKey("city_field");
  static readonly stateProvinceRegionField = byValueKey("state_province_region_field");
  static readonly zipPostalCodeField = byValueKey("zip_code_field");
  static readonly countryField = byValueKey("country_field");
  static readonly mobilePhoneField = byValueKey("mobile_phone_field");
  static readonly workPhoneField = byValueKey("work_phone_field");
  static readonly homePhoneField = byValueKey("home_phone_field");
  static readonly otherPhoneField = byValueKey("other_phone_field");
  
  // PERSONAL INFORMATION Fields
  static readonly jobTitleField = byValueKey("job_title_field");
  static readonly dateOfBirthField = byValueKey("date_of_birth_field");
  static readonly employeeNumberField = byValueKey("employee_number_field");
  static readonly startDateField = byValueKey("start_date_field");
  static readonly leaveDateField = byValueKey("leave_date_field");
  static readonly licenseNumberField = byValueKey("license_number_field");
  static readonly licenseClassField = byValueKey("license_class_field");
  static readonly licenseStateProvinceRegionField = byValueKey("license_state_province_region_field");
  static readonly hourlyLaborRateField = byValueKey("hourly_labor_rate_field");
  
  // CUSTOM FIELDS
  static readonly idNumberField = byValueKey("id_number_field");
  static readonly hireDateField = byValueKey("hire_date_field");
  static readonly cdlEndorsementsField = byValueKey("cdl_endorsements_field");

  
}