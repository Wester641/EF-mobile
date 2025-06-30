import { byText, byValueKey } from "appium-flutter-finder";

export class Selectors {
    static readonly listOfUnits = byValueKey("list_of_units");
    static readonly unitPageTitle = byText("Units");

    static readonly searchIcon = byValueKey("search_icon");
    static readonly emptinessIndicator = byText("No results found");
}