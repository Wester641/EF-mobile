import { byText, byValueKey } from "appium-flutter-finder";

export class Selectors {
    static readonly addIssue = byValueKey("add_issue");
    static readonly issuePageTitle = byText("Issues");
}