const {I, contactPage, contactForm} = inject()

let contact = contactForm.CONTACTFORM()

Feature('Sending data forms');

Scenario('Send contact form', async () => {
    I.amOnPage('en/about-us/contact/')
    await contactPage.acceptCookies()
    contactPage.fillAndSendForm(contact, 'all')
    await contactPage.checkSendingConfirmation()
    let data = await I.checkEmailText(contact.lastName + ' <' + contact.email + '>')
    console.log(contact)
    console.log(data)
    I.assertContain(data, contact.firstName + ' ' + contact.lastName);
    I.assertContain(data, contact.email);
    I.assertContain(data, contact.message);
    I.assertContain(data, contact.phone);
    I.assertContain(data, contact.address);
    I.assertContain(data, contact.company);
});
