const { config } = require("./wdio.shared.conf");
const path = require("path");

// ====================
// Android Configuration
// ====================
config.port = 4723; // Default Appium port

config.specs = [
    '../tests/specs/mobile/**/*.test.js'


config.capabilities = [
  {
    // The defaults you need to have in your Appium Inspector as well!
    platformName: "Android",
    "appium:deviceName": "emulator-5554", // Change this to your emulator/device name
    "appium:platformVersion": "16", // Change this to your Android version
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app is VERY important
    "appium:app": path.join(process.cwd(), "./app/capyvocab.apk"),
    "appium:newCommandTimeout": 240,
    "appium:appPackage": "com.example.capyvocab_fe",
    "appium:appActivity": "com.example.capyvocab_fe.MainActivity",
  },
];

// config.services = [
//     ['appium', {
//         args: {
//             address: 'localhost',
//             port: 4723
//         },
//         logPath: './'
//     }]
// ];

exports.config = config;
