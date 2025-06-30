import { byText, byValueKey } from "appium-flutter-finder"

export class Selectors {
    static readonly listOfUnits = byValueKey("list_of_units");
    static readonly editUnitButton = byValueKey("edit_unit_button");
    static readonly saveButton = byValueKey("save_button");

    static readonly addUnitButton = byValueKey("add_unit_button");
    static readonly emptinessIndicator = byText("No results found");
    
    static readonly nameInput = byValueKey("name_input");
    static readonly yearInput = byValueKey("year_input");
    static readonly trimInput = byValueKey("trim_input");
    static readonly vinInput = byValueKey("vin_input");
    static readonly licenseInput = byValueKey("license_input");
    static readonly registrationStateInput = byValueKey("registration_state_input");
    static readonly statusInput = byValueKey("status_input");
    static readonly ownershipInput = byValueKey("ownership_input");
    static readonly groupInput = byValueKey("group_input");
    static readonly colorInput = byValueKey("color_input");
    static readonly linkedUnitInput = byValueKey("linked_unit_input");
}