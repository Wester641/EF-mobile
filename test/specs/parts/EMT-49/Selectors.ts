import { byText, byValueKey } from "appium-flutter-finder";

export class Selectors {    
    static readonly browseTab = byValueKey("browse_tab");
    static readonly partsTab = byValueKey("parts_section");
    static readonly partsPageTitle = byText("Parts");
}