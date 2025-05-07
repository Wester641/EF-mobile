# Appium Flutter Testing Framework

This repository contains an automated testing framework for Flutter mobile applications using Appium, WebdriverIO, and TypeScript. It supports both Android and iOS platforms with a unified testing approach.


## ⚠️ IMPORTANT NOTE

<p style="color: red; font-weight: 900; font-size: 18px;">PLEASE!</p> 

### Critical Requirements
1. **Set Up Process**: I highly recoment to use `setup.sh` at first step of clonning project 
2. **Read This Before Writing Tests**: [Commands for FLUTTER context](https://www.npmjs.com/package/appium-flutter-driver)


## 📱 Features

- Cross-platform test automation (Android & iOS)
- Flutter-specific driver integration
- TypeScript support for type safety
- Configurable test environments via .env files
- Platform-specific test logic helpers
- Screenshot capture for debugging
- Organized test structure with page objects pattern

## 🛠️ Prerequisites

- Node.js (v16+)
- npm (v8+)
- Appium Server (v2.0+)
- Android SDK (for Android testing)
- Xcode (for iOS testing)
- Flutter SDK
- Android Emulator or physical device
- iOS Simulator or physical device

## 📋 Project Structure

```
.
├── .env                      # Environment variables
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── wdio.conf.ts              # Base WebdriverIO configuration
├── wdio.android.conf.ts      # Android-specific configuration
├── wdio.ios.conf.ts          # iOS-specific configuration
├── test
│   ├── specs                 # Test specifications
│   │   └── login.spec.ts     # Login test
│   ├── pages                 # Page object models
│   ├── helpers               # Test helpers
│   └── utils                 # Utility functions
│       ├── platform.ts       # Platform detection utilities
│       └── test-utils.ts     # Common test utilities
```

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/appium-flutter-testing.git
   cd appium-flutter-testing
   ```

2. Run the setup script to install all dependencies:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

   This script will:
   - Install npm dependencies
   - Set up Appium globally
   - Install required Appium drivers (uiautomator2, flutter, xcuitest)
   - Verify your setup with Appium Doctor
   - Create necessary project directories
   - Provide next steps

3. Alternatively, you can use npm scripts for individual setup steps:
   ```bash
   # Install dependencies
   npm install
   
   # Install Appium and drivers
   npm run appium:install
   npm run appium:drivers
   
   # Setup platform-specific dependencies
   npm run setup:android
   npm run setup:ios
   ```

## ⚙️ Configuration

1. Create a `.env` file in the root directory with the following variables:
   ```
   PLATFORM=iOS  # or Android
   DEVICE_NAME=iPhone 16 Pro  # or your device name
   PLATFORM_VERSION=12  # Android version
   IOS_DEVICE_NAME=iPhone 16 Pro
   IOS_PLATFORM_VERSION=18.0
   TEST_EMAIL=test@example.com
   TEST_PASSWORD=password123
   APP_ANDROID_PATH=/path/to/your/app-debug.apk
   APP_IOS_PATH=/path/to/your/Runner.app
   ```

2. Update the paths in the configuration files if needed:
   - `wdio.android.conf.ts`
   - `wdio.ios.conf.ts`

## 🧪 Running Tests

### Start Appium Server
```bash
npm run appium:start
```

### Run Tests
```bash
# Run all tests with default configuration
npm test

# Run on specific platform
npm run test:android
npm run test:ios

# Run specific test on specific platform
npm run test:login:android
npm run test:login:ios
```

### Verify Setup
```bash
npm run doctor
```

## 🔍 Writing Tests

### Example Test
```typescript
import { byValueKey, byText } from 'appium-flutter-finder';

describe('Login Feature', () => {
  it('should login successfully', async () => {
    // Find and click email field
    await driver.elementClick(byValueKey('email_field'));
    await driver.execute('flutter:enterText', 'user@example.com');
    
    // Find and click password field
    await driver.elementClick(byValueKey('password_field'));
    await driver.execute('flutter:enterText', 'password123');
    
    // Click login button
    await driver.elementClick(byText('Login'));
    
    // Assert login success (example)
    const homeScreen = await driver.elementExists(byValueKey('home_screen'));
    expect(homeScreen).toBeTruthy();
  });
});
```

### Platform-Specific Logic
```typescript
import { runForPlatform } from '../utils/platform';

// Use platform-specific selectors or logic
await runForPlatform({
  ios: async () => {
    // iOS-specific code
  },
  android: async () => {
    // Android-specific code
  },
  both: async () => {
    // Code for both platforms
  }
});
```

## 📷 Debugging

### Take Screenshots
```typescript
import { takeScreenshot } from '../utils/test-utils';

// In your test
await takeScreenshot('login-screen');
```

### Restart App
```typescript
import { restartApp } from '../utils/test-utils';

// In your test
await restartApp();
```

## 🔗 Flutter Element Location Strategies

- `byValueKey(key)`: Find element by Flutter key
- `byText(text)`: Find element by text
- `byType(type)`: Find element by widget type
- `bySemanticsLabel(label)`: Find element by semantics label
- `byTooltip(tooltip)`: Find element by tooltip

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔧 Troubleshooting

### Common Issues

1. **Element Not Found**
   - Ensure your Flutter widget has the correct key set in the app code
   - Use `await driver.execute('flutter:getRenderTree')` to inspect the widget hierarchy
   - Increase timeout values if elements take time to appear

2. **Connection Refused**
   - Verify Appium server is running (`npm run appium:start`)
   - Check device/emulator is properly connected and accessible
   - For iOS, ensure WebDriverAgent is properly set up

3. **Flutter Driver Issues**
   - Make sure Flutter Driver extension is enabled in your app
   - Check Flutter and Appium-Flutter-Driver version compatibility
   - For hybrid apps, ensure proper context switching

4. **Platform-Specific Problems**
   - **iOS**: Check provisioning profiles, signing certificates, and WebDriverAgent setup
   - **Android**: Verify ADB connection and proper permissions

5. **Session Start Timeout**
   - Increase `wdaLaunchTimeout` and `wdaConnectionTimeout` for iOS
   - For Android, check if the APK is properly built and accessible

### Best Practices

1. Wait for elements instead of using fixed pauses
2. Take screenshots at key points and on failures
3. Use platform detection utilities to handle platform differences
4. Implement robust retry mechanisms for flaky tests
5. Keep tests independent and avoid state dependencies between tests

## 📚 Resources

- [Appium Documentation](http://appium.io/docs/en/2.0/)
- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted)
- [Flutter Driver Documentation](https://api.flutter.dev/flutter/flutter_driver/flutter_driver-library.html)
- [Appium Flutter Driver](https://github.com/appium-userland/appium-flutter-driver)