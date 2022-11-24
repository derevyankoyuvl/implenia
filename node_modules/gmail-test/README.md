# gmail-test
Package based on [az-gmail-tester](https://github.com/ayyazzafar/gmail-tester) with small changes<br/>

A simple Node.js Gmail client which checks/returns email message(s) straight from any Gmail-powered account (both private and company).<br/>
There are two main functionalities this library provides:<br>

1.  `check_inbox()`: Polls a mailbox for a given amount of time. At the end of the operation, the desired message is returned (if found).
2.  `get_messages()`: Can be used to perform various assertions on the email objects
3. `send()`: Sends message using your gmail account

# Usage

1.  Install using `npm`:

```
npm install --save-dev gmail-test
```

2.  Save the Google Cloud Platform OAuth2 Authentication file named `credentials.json` inside an accessible directory (see instructions [below](https://www.npmjs.com/package/gmail-test#how-to-get-credentialsjson)).
3.  In terminal, run the following command:

```
node node_modules/gmail-test/init.js cypress/support/gmail/credentials.json cypress/support/gmail/token.json <target-email>
```

`<path-to-credentials.json>` Is the path to OAuth2 Authentication file.<br/>
`<path-to-token.json>` Is the path to OAuth2 token. If it doesn't exist, the script will create it.<br/>
The script will prompt you to go to google.com to activate a token.
Go to the given link, and select the account for `<target-email>`. Grant permission to view your email messages and settings. At the end of the process you should see the token:

<p align="center">
  <img src="https://i.ibb.co/sJm97H1/copy-token.png" alt="copy-token" border="0">
</p>

Hit the copy button and paste it to `init.js` script.
The process should look like this:

<p align="center">
  <img src="https://i.ibb.co/k94bkzB/run-script.png" alt="Run script">
</p>

# How to get credentials.json?

1.  Follow the instructions to [Create a client ID and client secret](https://developers.google.com/adwords/api/docs/guides/authentication#create_a_client_id_and_client_secret).
2.  Once done, go to [https://console.cloud.google.com/apis/credentials?project=(project-name)&folder&organizationId](<https://console.cloud.google.com/apis/credentials?project=(project-name)&folder&organizationId>) and download the OAuth2 credentials file, as shown in the image below. Make sure to replace `(project-name)` with your project name.
    <p align="center">
      <img src="https://i.ibb.co/z5FL6YK/get-credentials-json.png" alt="Get credentials.json">
    </p>

The `credentials.json` file should look like this:

<p align="center">
  <img src="https://i.ibb.co/1stgn28/credentials.png" alt="Credentials file">
</p>

If everything is done right, the last output from the script should be

> [gmail] Found!

3.  Congratulations! `gmail-test` is ready to use.

# API

### `get_messages(credentials_json, token_path, options)`

`credentials_json`: Path to credentials JSON file.<br>
`token_path`: Path to OAuth2 token file.<br>
`options`: <br>

* `include_body`: boolean. Set to `true` to fetch decoded email bodies.
* `before`: Date. Filter messages received _after_ the specified date.
* `after`: Date. Filter messages received _before_ the specified date.

**Returns:**
An array of `email` objects with the following fields:<br>

```javascript
[
  {
    from: "Human Friendly Name <sender@email-address>",
    receiver: "your@email-address",
    subject: "string",
    body: {
      html: "string",
      text: "string"
    }
  }
  // ...
];
```

_Some senders will send you `text/html` content, the others will send you `plain/text`, and some will send you both. Make sure you are looking for the content in the right body field._

# Example

## Using `check_inbox()` to look for a specific message:

```javascript
const path = require("path");
const gmail = require("gmail-tester");
const email = await gmail.check_inbox(
  path.resolve(__dirname, "credentials.json"), // Assuming credentials.json is in the current directory.
  path.resolve(__dirname, "gmail_token.json"), // Look for gmail_token.json in the current directory (if it doesn't exists, it will be created by the script).
  "Activate Your Account", // We are looking for 'Activate Your Account' in the subject of the message.
  "no-reply@domain.com", // We are looking for a sender header which has 'no-reply@domain.com' in it.
  "<target-email>", // Which inbox to poll. credentials.json should contain the credentials to it.
  10, // Poll interval (in seconds).
  30 // Maximum poll time (in seconds), after which we'll giveup.
);
if (email) {
  console.log("Email was found!");
} else {
  console.log("Email was not found!");
}
```
## Implementation `check_inbox()` to get email body using Codeceptjs


```javascript
// in Helper
const Helper = require('@codeceptjs/helper');
const gmail = require("gmail-test");

class CustomHelper extends Helper {

    async getMail(email, subject, from) {
        return await gmail.check_inbox(
            "credentials.json", // Assuming credentials.json is in the current directory.
            "token.json", // Look for gmail_token.json in the current directory (if it doesn't exists, it will be created by the script).
            subject, // We are looking for 'Activate Your Account' in the subject of the message.
            from, // We are looking for a sender header which has 'no-reply@domain.com' in it.
            email, // Which inbox to poll. credentials.json should contain the credentials to it.
            10, // Poll interval (in seconds).
            60, // Maximum poll time (in seconds), after which we'll giveup.
            { // optional parameter
                include_body: true, // to return body of the mail
                limit: 3 // to look through recent quantity of mails
            }
        );
    }
}

module.exports = CustomHelper;
```
## Usage `check_inbox()` to get email body using Codeceptjs
```javascript
//in test
Scenario('Login with url from email', async () => {
    I.amOnPage('/someUrl');
    I.fillField('loginField', 'some email address');
    I.fillField('passwordField', 'some password');
    I.click('registerButton');
    let mail = await I.getMail('some email address', 'registration topic', 'some sender email');
    let link = mail.body.html.match(/<a[^>]+href="([^\"]+)"+>link<\/a> e.g. Some link href/);
    I.amOnPage(link[1]);
    I.waitForText('You are logged in!')
});

```

# Credits

* Built using [googleapis](https://github.com/googleapis/googleapis).
