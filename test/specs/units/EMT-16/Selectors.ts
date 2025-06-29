import { byText, byValueKey } from "appium-flutter-finder";

export class Selectors {
    static readonly listOfUnits = byValueKey("list_of_units");
    static readonly unitPageTitle = byText("Units");
    
    static readonly filterApplyButton = byText("Apply");
    static readonly clearFiltersButton = byValueKey("clear_filters")

    static readonly unitsFilterByLabel = byText("Labels");
    static readonly unitsFilterByStatus = byText("Status");
    static readonly unitsFilterByType = byText("Type");
}