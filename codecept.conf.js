const gmail = require("gmail-tester");
//npx codeceptjs run --grep @aboutUs --steps -o '{ "helpers": {"Playwright": {"url": "https://denkt&baut:caterpill@r@integration2.implenia.com/"}}}'

exports.config = {
  tests: './suites/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      //url: 'https://denkt&baut:caterpill@r@stage.implenia.com/',
      url: 'https://implenia.com/',
      //url: 'https://denkt&baut:caterpill@r@integration.implenia.com/',
      //url: 'https://prod2.implenia.com/',
      show: true,
      browser: 'firefox',
      //browser: 'chromium',
      waitForNavigation: "networkidle",
      waitForTimeout: 10000,
      timeout: 10000,
      //windowSize: 'maximize',
      //windowSize: '1240x650',
      windowSize: '1260x718',
    },
    ResembleHelper : {
      "require": "codeceptjs-resemblehelper",
      "screenshotFolder" : "./output/",
      "baseFolder": "./screenshots/base/",
      "diffFolder": "./screenshots/diff/"
    },
    emailHelper: {
      require: './helpers/emailHelper.js',
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
  },
  async bootstrap() {
    await gmail.refresh_access_token("./jsonFiles/credentials.json", "./jsonFiles/token.json")
  },
  include: {
    I: './steps_file.js',
    contactPage: "./pages/contactPage.js",
    contactForm: "./fragments/contactForm.js",
    homePage: "./pages/homePage.js",
    newsPage: "./pages/newsRoom.js",
    aboutUsPage: "./pages/aboutUs.js",
    managementPage: "./pages/management.js",
    referencesPage: "./pages/references.js",
    compliancePage: "./pages/compliance.js",
    spinner: "./fragments/spinner.js",
    common: "./fragments/common.js"
  },
  name: 'implenia',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: 'output/allure-report'
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: false,
          steps: false,
        }
      },
      "mocha-junit-reporter": {
        stdout: "./output/console.log",
        options: {
          mochaFile: "./output/junit.xml",
          attachments: true
        }
      }
    }
  }
}