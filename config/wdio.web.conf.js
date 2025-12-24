const { config } = require('./wdio.shared.conf');

// =================
// Web Configuration
// =================
config.specs = [
    '../tests/specs/web/**/*.js'
];

config.capabilities = [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true
    // If outputDir is needed for chromedriver logs
    // 'goog:chromeOptions': {
    //    args: ['--headless', '--disable-gpu'] 
    // }
}];

// config.services = ['chromedriver'];

exports.config = config;
