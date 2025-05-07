#!/bin/bash

echo "Setting up WebdriverIO with Appium for Flutter testing on iOS and Android..."

# Install base dependencies
npm install

# Install Appium globally
npm install -g appium

# Install Appium drivers
echo "Installing Appium drivers..."
appium driver install uiautomator2
appium driver install flutter
appium driver install xcuitest

# Check environment setup
echo "Running Appium Doctor to verify setup..."
npx appium-doctor

# Create necessary directories
mkdir -p screenshots reports app/build/ios/iphonesimulator app/build/app/outputs/flutter-apk

echo "Setup complete! Next steps:"
echo "1. Build your Flutter app for both platforms:"
echo "   - For Android: flutter build apk --debug"
echo "   - For iOS: flutter build ios --simulator"
echo ""
echo "2. Run tests:"
echo "   - Start Appium: npm run appium:start"
echo "   - For Android tests: npm run test:android"
echo "   - For iOS tests: npm run test:ios"