import { AuthHelper } from './auth-helper';

export const mochaHooks = {
    beforeAll: async function() {
        console.log('Global setup: Starting test suite...');
        await AuthHelper.login();
    },

    beforeEach: async function() {
        console.log(`Starting test...`);
        await AuthHelper.login();
    },

    afterEach: async function() {
        try {
            const timestamp = Date.now();
            await browser.saveScreenshot(`../../screenshots/test_${timestamp}.png`);
        } catch (error) {
            console.log(`Could not take screenshot:`, error);
        }
    },

    afterAll: async function() {
        console.log('Global teardown: Cleaning up...');
        await AuthHelper.logout();
    }
};
