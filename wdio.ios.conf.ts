import { config as baseConfig } from './wdio.conf';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

// iOS specific configuration
export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'Flutter', // XCUITest for iOS native integration
        'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone 16 Pro',
        'appium:platformVersion': process.env.IOS_PLATFORM_VERSION || '18.0',
        'appium:app': process.env.APP_IOS_PATH,
        'appium:noReset': false,
        'appium:fullReset': process.env.FULL_RESET === 'true' || false,
        'appium:wdaLaunchTimeout': parseInt(process.env.LAUNCH_TIMEOUT || '120000'),
        'appium:wdaConnectionTimeout': parseInt(process.env.CONNECTION_TIMEOUT || '120000'),
        'appium:newCommandTimeout': parseInt(process.env.COMMAND_TIMEOUT || '300000'),
        'appium:usePrebuiltWDA': false,
        'appium:useNewWDA': true,
        'appium:shouldUseSingletonTestManager': false,
    }]
};