const Helper = require('@codeceptjs/helper');
const gmail = require("gmail-test");


class EmailHelper extends Helper {

    async getMail(email, subject = "Implenia AG - Your message", from = "info@implenia.com") {
        return await gmail.check_inbox(
            "./jsonFiles/credentials.json", // Assuming credentials.json is in the current directory.
            "./jsonFiles/token.json", // Look for gmail_token.json in the current directory (if it doesn't exists, it will be created by the script).
            subject, // We are looking for 'Activate Your Account' in the subject of the message.
            from, // We are looking for a sender header which has 'no-reply@domain.com' in it.
            email, // Which inbox to poll. credentials.json should contain the credentials to it.
            2, // Poll interval (in seconds).
            60, // Maximum poll time (in seconds), after which we'll give up.
            { // optional parameter
                include_body: true, // to return body of the mail
                limit: 10 // to look through recent quantity of mails
            }
        );
    }

    async findMail(email, subject, from) {
        let mail = await this.getMail(email, subject, from)
        return mail.body.html.match(/<a[^>]+href="([^\"]+)"[^>]+>ACTIVATE<\/a\s+>/)[1]
    }

    async findMailContractor(email, subject) {
        let mail = await this.getMail(email, subject)
        return mail.subject;
    }
}

module.exports = EmailHelper;