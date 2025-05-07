export function isIOS() {
    return browser.capabilities.platformName === 'iOS';
}

export function isAndroid() {
    return browser.capabilities.platformName === 'Android';
}

export function getPlatformName() {
    return isIOS() ? 'iOS' : 'Android';
}

// Utility for platform-specific test logic
export function runForPlatform(platformFunctions: { 
    ios?: () => Promise<any>,
    android?: () => Promise<any>,
    both?: () => Promise<any>
}) {
    if (isIOS() && platformFunctions.ios) {
        return platformFunctions.ios();
    } else if (isAndroid() && platformFunctions.android) {
        return platformFunctions.android();
    } else if (platformFunctions.both) {
        return platformFunctions.both();
    }
}