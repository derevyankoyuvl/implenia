const gmail = require("gmail-tester");

exports.config = {
  tests: './suites/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      //url: 'https://denkt&baut:caterpill@r@stage.implenia.com/',
      url: 'https://implenia.com/',
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle",
      waitForTimeout: 10000,
      windowSize: '1240x650',
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
    spinner: "./fragments/spinner.js"
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