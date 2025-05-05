export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  port: 4723,
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 1,

  capabilities: [
    {
      // Set by environment variable or default to Android
      platformName: process.env.PLATFORM || "Android",
      "appium:automationName":
        process.env.PLATFORM === "iOS" ? "XCUITest" : "Flutter",
      "appium:deviceName":
        process.env.PLATFORM === "iOS"
          ? process.env.IOS_DEVICE_NAME
          : "Android Emulator",
      "appium:platformVersion":
        process.env.PLATFORM === "iOS" ? process.env.IOS_PLATFORM_VERSION : "12.0",
      "appium:app":
        process.env.PLATFORM === "iOS"
          ? process.env.APP_IOS_PATH
          : process.env.APP_ANDROID_PATH,
      "appium:newCommandTimeout": 300,
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["appium"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
  },

  // Add 'before' hook to configure Flutter driver
  before: async function () {
    // Custom commands can be added here
  },
};
