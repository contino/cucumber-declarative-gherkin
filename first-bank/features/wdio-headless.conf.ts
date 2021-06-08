// Import the module
const config = require('./wdio.conf.ts').config;

config.capabilities[0]['goog:chromeOptions'] = {
    args: [
        'headless',
        // Use --disable-gpu to avoid an error from a missing Mesa
        // library, as per
        // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
        'disable-gpu',
    ],
}

exports.config = config;