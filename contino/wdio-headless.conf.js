// Import the module
const config = require('./wdio.conf.js').config;

config.capabilities['goog:chromeOptions'] = {
    args: [
        'headless',
        // Use --disable-gpu to avoid an error from a missing Mesa
        // library, as per
        // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
        'disable-gpu',
    ],
}

exports.config = config;