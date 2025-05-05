// test/pages/login.page.ts
import FlutterHelper from '../helpers/flutter-helper';
import { isIOS } from '../utils/platform';

class LoginPage {
    // Form elements with platform-aware strategies
    get emailField() { return FlutterHelper.byValueKey('email_field'); }
    get passwordField() { return FlutterHelper.byValueKey('password_field'); }
    get loginButton() { return FlutterHelper.byText('Login'); }
    get forgotPasswordLink() { return FlutterHelper.byText('Forgot?'); }
    get logo() { return FlutterHelper.byType('Logo'); }
    
    /**
     * Login with username and password
     */
    async login(email: string, password: string) {
        await FlutterHelper.fillTextField('email_field', email);
        
        // iOS and Android might need different pauses
        await browser.pause(isIOS() ? 800 : 500);
        
        await FlutterHelper.fillTextField('password_field', password);
        await browser.pause(isIOS() ? 800 : 500);
        
        await FlutterHelper.tap(this.loginButton);
    }
    
    /**
     * Check if login error is displayed
     */
    async hasLoginError(timeout = 5000) {
        const dialogTimeout = isIOS() ? timeout * 1.5 : timeout; // iOS might need more time
        return await FlutterHelper.exists(FlutterHelper.byType('Dialog'), dialogTimeout);
    }
    
    /**
     * Get error message text
     */
    async getErrorMessage() {
        const errorDialog = FlutterHelper.byType('Dialog');
        if (await FlutterHelper.exists(errorDialog)) {
            return await FlutterHelper.getText(errorDialog);
        }
        return null;
    }
    
    /**
     * Toggle password visibility
     */
    async togglePasswordVisibility() {
        // Platform-specific implementation if needed
        const visibilityIcon = FlutterHelper.byType('IconButton');
        await FlutterHelper.tap(visibilityIcon);
    }
    
    /**
     * Click forgot password link
     */
    async clickForgotPassword() {
        await FlutterHelper.tap(this.forgotPasswordLink);
    }
    
    /**
     * Wait for the login page to load fully
     */
    async waitForPageLoad() {
        const timeout = isIOS() ? 15000 : 10000; // iOS might need more time
        await FlutterHelper.waitUntilVisible(this.logo, timeout);
        await FlutterHelper.waitUntilVisible(this.emailField, timeout);
        await FlutterHelper.waitUntilVisible(this.passwordField, timeout);
        await FlutterHelper.waitUntilVisible(this.loginButton, timeout);
    }
}

export default new LoginPage();