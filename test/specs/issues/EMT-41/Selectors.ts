import { byText, byValueKey } from "appium-flutter-finder";

export class Selectors {
    static readonly searchIcon = byValueKey("search_icon");
    static readonly emptinessIndicator = byText("No results found");
}