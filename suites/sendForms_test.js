const {I, contactPage, contactForm} = inject()

let contact = contactForm.CONTACTFORM()

Feature('Sending data forms').tag('@form');

Scenario('Send contact form', async () => {
    I.amOnPage('https://implenia.com/en/about-us/contact/')
    await contactPage.acceptCookies()
    pause()
    contactPage.fillAndSendForm(contact, 'all')
    await contactPage.checkSendingConfirmation()
    let data = await I.checkEmailText(contact.lastName + ' <' + contact.email + '>')
    console.log(contact)
    console.log(data)
    I.assertContain(data, contact.firstName);
    I.assertContain(data, contact.lastName);
    I.assertContain(data, contact.email);
    I.assertContain(data, contact.message);
    I.assertContain(data, contact.phone);
});
