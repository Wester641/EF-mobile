// test/specs/login.spec.ts
import LoginPage from '../pages/login.page';
import {byValueKey, } from 'appium-flutter-finder';
import { runForPlatform, isIOS } from '../utils/platform';

describe('Login Feature', () => {
    before(async () => {
        await browser.pause(3000); // Wait for app to load
        console.log(`Running tests on ${browser.capabilities.platformName}...`);
    });
    
    beforeEach(async () => {
        // Ensure we're on the login page
        await LoginPage.waitForPageLoad();
    });
    
    it('should display login page correctly', async () => {
        // Common test for both platforms
        await expect(await exists(LoginPage.emailField)).toBe(true);
        await expect(await FlutterHelper.exists(LoginPage.passwordField)).toBe(true);
        await expect(await FlutterHelper.exists(LoginPage.loginButton)).toBe(true);
        
        // Platform-specific checks
        await runForPlatform({
            ios: async () => {
                // iOS specific verification if needed
                console.log('Verified login page on iOS');
            },
            android: async () => {
                // Android specific verification if needed
                console.log('Verified login page on Android');
            }
        });
    });
    
    it('should show validation errors when submitting empty form', async () => {
        await FlutterHelper.tap(LoginPage.loginButton);
        
        // Wait a bit longer on iOS for validation errors
        const timeout = isIOS() ? 5000 : 3000;
        await browser.pause(timeout);
        
        const emailErrorText = await FlutterHelper.byText('Email or Username must not be empty');
        const passwordErrorText = await FlutterHelper.byText('Password must not be empty');
        
        await expect(await FlutterHelper.exists(emailErrorText)).toBe(true);
        await expect(await FlutterHelper.exists(passwordErrorText)).toBe(true);
    });
    
    // Additional tests...
});