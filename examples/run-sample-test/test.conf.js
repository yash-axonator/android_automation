exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'yashlunkad_svjPn1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'MDc5ThmPzSMdiDqVtxp4',

  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true,
        opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
        app: process.env.BROWSERSTACK_APP_PATH || './examples/app-release.apk',
      }
    ]
  ],

  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S23 Ultra',
      platformVersion: '13.0',
      platformName: 'android',
    }
  }
  // , {
  //   'bstack:options': {
  //     deviceName: 'Samsung Galaxy S10e',
  //     osVersion: "9.0"
  //   }
  // }
 ],

  commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0'
    }
  },

  maxInstances: 10,

  updateJob: false,
  specs: [
    './examples/run-sample-test/specs/single_test.js'
  ],
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 200000000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(let key in exports.config.commonCapabilities) 
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
});
