import { byText, byValueKey } from "appium-flutter-finder";

export class Selectors {    
    static readonly filterApplyButton = byText("Apply");
    static readonly clearFiltersButton = byValueKey("clear_filters")

    static readonly issuesFilterByStatus = byText("Status");
    static readonly issuesFilterByPriority = byText("Priority");
    static readonly issuesFilterByLabels = byText("Labels");
    static readonly issuesFilterByAssignedTo = byText("Assigned_To");
}