import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Restart the app (useful between tests)
 */
export async function restartApp() {
    try {
        await browser.execute('flutter:restart');
        // Allow time for app to restart
        await browser.pause(3000);
    } catch (error) {
        console.error('Failed to restart app:', error);
    }
}

/**
 * Take a screenshot (useful for debugging)
 */
export async function takeScreenshot(name: string) {
    try {
        await browser.saveScreenshot(`./screenshots/${name}_${new Date().getTime()}.png`);
    } catch (error) {
        console.error('Failed to take screenshot:', error);
    }
}

/**
 * Log device information
 */
export async function logDeviceInfo() {
    try {
        const deviceInfo = await browser.execute('flutter:getRenderTree');
        console.log('Device render tree:', JSON.stringify(deviceInfo, null, 2));
    } catch (error) {
        console.error('Failed to get device info:', error);
    }
}