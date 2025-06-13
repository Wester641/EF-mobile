import { byValueKey } from 'appium-flutter-finder';
import { expect } from 'chai';
import { AuthHelper } from '../helpers/auth-helper';

describe('EMT-1 Login with valid credentials', () => {
    before(async () => {
        await browser.pause(2000);
        console.log(`Running tests on ${browser.capabilities.platformName}...`);
        AuthHelper.resetLoginState();
    });

    it('should be logged in and navigate to Home', async () => {
        try {
            console.log('Test setup: should be logged in and navigate to Home');
            await driver.execute('flutter:waitFor', byValueKey("home_tab"), 10000);
            const homeTab = byValueKey("home_tab");
            expect(homeTab).to.exist;
            console.log('Successfully verified login state');
        } catch (error) {
            console.error('Home verification failed:', error);
            throw error;
        }
    });
});