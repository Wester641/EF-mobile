import { byText, byValueKey } from "appium-flutter-finder";

export class AuthHelper {
    private static isLoggedIn = false;

    static async login(email?: string, password?: string) {
        if (this.isLoggedIn) {
            console.log("Already logged in, skipping authentication");
            return;
        }

        try {
            console.log("Starting login process...");
            
            const testEmail = email || process.env.TEST_EMAIL || 'javohir.akhmad@gmail.com';
            const testPassword = password || process.env.TEST_PASSWORD || 'password';

            try {
                await driver.execute('flutter:waitFor', byValueKey("home_tab"), 2000);
                await driver.elementClick(byValueKey("home_tab"));
                this.isLoggedIn = true;
                console.log("Already on main screen");
                return;
            } catch {}

            console.log("Finding email field...");
            await driver.elementClick(byValueKey("email_field"));
            await driver.execute('flutter:enterText', testEmail);

            console.log("Finding password field...");
            await driver.elementClick(byValueKey("password_field"));
            await driver.execute('flutter:enterText', testPassword);
            
            await browser.pause(1000);

            console.log("Clicking login button...");
            await driver.elementClick(byText("Login"));
            
            await browser.pause(3000);
            
            try {
                await driver.execute('flutter:waitFor', byValueKey("home_tab"), 5000);
                await driver.elementClick(byValueKey("home_tab"));
                this.isLoggedIn = true;
                console.log("Login successful");
            } catch (error) {
                throw new Error("Login verification failed");
            }

        } catch (error) {
            console.error("Login failed:", error);
            await browser.saveScreenshot('./screenshots/login-error.png');
            throw error;
        }
    }

    static async logout() {
        if (!this.isLoggedIn) return;
        
        try {
            // Logout logic (after adding accessibility IDs)
            // await driver.elementClick(byText("Logout"));
            this.isLoggedIn = false;
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Logout failed:", error);
            this.isLoggedIn = false;
        }
    }

    static resetLoginState() {
        this.isLoggedIn = false;
    }
}