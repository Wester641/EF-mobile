import { config as baseConfig } from './wdio.conf';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

// Android specific configuration
export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'Flutter',
        'appium:deviceName': process.env.DEVICE_NAME || 'Android Emulator',
        'appium:platformVersion': process.env.PLATFORM_VERSION || '12.0',
        'appium:app': process.env.APP_ANDROID_PATH || path.resolve('./app/build/app/outputs/flutter-apk/app-debug.apk'),
        'appium:noReset': false,
        'appium:fullReset': process.env.FULL_RESET === 'true' || true,
        'appium:dontStopAppOnReset': false,
        'appium:newCommandTimeout': parseInt(process.env.COMMAND_TIMEOUT || '300000'),
        'appium:waitForIdleTimeout': 0,
        'appium:ignoreUnimportantViews': true,
        'appium:disableWindowAnimation': true,
    }]
};