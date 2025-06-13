import { byText, byValueKey } from "appium-flutter-finder";

/**
 * Check if an element exists with proper error handling
 */
async function doesElementExist(finder: any, timeoutMs: number = 5000): Promise<boolean> {
  try {
    await driver.execute('flutter:waitFor', finder, timeoutMs);
    return true;
  } catch (error) {
    console.log(`Element not found: ${JSON.stringify(finder)}`);
    return false;
  }
}

/**
 * Wait for element with retries
 */
async function waitForElement(finder: any, timeoutMs: number = 10000): Promise<void> {
  const startTime = Date.now();
  while (Date.now() - startTime < timeoutMs) {
    if (await doesElementExist(finder, 2000)) {
      return;
    }
    await browser.pause(1000);
  }
  throw new Error(`Element not found within ${timeoutMs}ms: ${JSON.stringify(finder)}`);
}

export async function performLogin(): Promise<void> {
  try {
    console.log("Performing login...");
    
    console.log("Waiting for login screen...");
    await waitForElement(byValueKey("email_field"), 15000);
    
    console.log("Entering email...");
    await driver.elementClick(byValueKey("email_field"));
    await browser.pause(500);
    await driver.execute('flutter:enterText', 'javohir.akhmad@gmail.com');
    await browser.pause(1000);

    console.log("Entering password...");
    await driver.elementClick(byValueKey("password_field"));
    await browser.pause(500);
    await driver.execute('flutter:enterText', 'password');
    await browser.pause(1000);

    console.log("Clicking login button...");
    await driver.elementClick(byText("Login"));
    
    // Wait for login to complete - look for dashboard or success indicator
    console.log("Waiting for login to complete...");
    await waitForElement(byValueKey("dashboard_screen"), 10000);
    
    console.log("Login completed successfully");
    
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export async function isUserLoggedIn(): Promise<boolean> {
  try {
    console.log("Checking if user is logged in...");
    const isLoggedIn = await doesElementExist(byValueKey("dashboard_screen"), 5000);
    console.log(`User logged in status: ${isLoggedIn}`);
    return isLoggedIn;
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
}