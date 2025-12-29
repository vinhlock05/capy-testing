const { config } = require("./wdio.shared.conf");

// =================
// Web Configuration
// =================
config.specs = ["../tests/specs/web/**/*.js"];

config.capabilities = [
  {
    maxInstances: 5,
    browserName: "chrome",
    acceptInsecureCerts: true,
    // 'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] } // nếu cần headless
  },
];

config.baseUrl = "https://cabyvocabfe-roan.vercel.app";

// Chỉ enable service cho web, không để Appium
// config.services = ["devtools"];

exports.config = config;
