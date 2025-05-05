import { config as baseConfig } from './wdio.conf';
import * as path from 'path';

// iOS specific configuration
export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'Flutter',
        'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone Simulator',
        'appium:platformVersion': process.env.IOS_PLATFORM_VERSION || '16.4',
        'appium:app': path.resolve('./app/build/ios/iphonesimulator/Runner.app'),
        'appium:noReset': false,
        'appium:fullReset': true,
        'appium:wdaLaunchTimeout': 80000,
        'appium:wdaConnectionTimeout': 80000,
        'appium:retryBackoffTime': 500,
        'appium:newCommandTimeout': 300,
    }]
};