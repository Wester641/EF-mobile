// import { byValueKey, byText, byType, byTooltip } from "appium-flutter-finder";

// class FlutterHelper {
//   private isIOS: boolean;

//   constructor() {
//     this.isIOS = browser.capabilities.platformName === "iOS";
//   }

//   // Find by ValueKey (use for elements with key property)
//   byValueKey(key: string) {
//     return byValueKey(key);
//   }

//   // Find by text (useful for buttons, labels)
//   byText(text: string) {
//     return byText(text);
//   }

//   // Find by Type (widget type like TextField, Button)
//   byType(type: string) {
//     return byType(type);
//   }

//   // Find by tooltip
//   byTooltip(tooltip: string) {
//     return byTooltip(tooltip);
//   }

//   // Find by semantic label
//   bySemanticsLabel(label: string) {
//     return finder.bySemanticsLabel(label);
//   }

//   // Custom find for TextField based on hint text
//   byHintText(hint: string) {
//     return finder.byValueKey(
//       `textfield_${hint.toLowerCase().replace(/\s+/g, "_")}`
//     );
//   }

//   // Rest of the methods remain the same...
//   // Just remove 'this.finder' and replace with 'finder'

//   // Execute Flutter command with platform adaptation
//   async execute(command: string, params: any) {
//     return await browser.execute("flutter:" + command, params);
//   }

//   // Fill text field with platform adaptations
//   async fillTextField(textFieldKey: string, text: string) {
//     const textField = this.byValueKey(textFieldKey);
//     await this.tap(textField);
//     await browser.pause(500);

//     if (this.isIOS) {
//       await this.execute("clearTextField", textField);
//     }

//     await this.enterText(textField, text);
//   }

//   // The rest of your methods remain the same, just ensure you're using 'finder' instead of 'this.finder'
// }

// export default new FlutterHelper();
