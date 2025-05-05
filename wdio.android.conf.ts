import { config as baseConfig } from './wdio.conf';
import * as path from 'path';

// Android specific configuration
export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'Flutter',
        'appium:deviceName': process.env.DEVICE_NAME || 'Android Emulator',
        'appium:platformVersion': process.env.PLATFORM_VERSION || '12.0',
        'appium:app': path.resolve('./app/build/app/outputs/flutter-apk/app-debug.apk'),
        'appium:noReset': false,
        'appium:fullReset': true,
        'appium:dontStopAppOnReset': false,
        'appium:retryBackoffTime': 500,
        'appium:newCommandTimeout': 300,
    }]
};