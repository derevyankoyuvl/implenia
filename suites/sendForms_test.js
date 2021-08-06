const {I, contactPage, contactForm} = inject()

let contact = contactForm.CONTACTFORM()

Feature('Sending data forms');

Scenario('Send contact form', async () => {
    I.amOnPage('/')
    await contactPage.acceptCookies()
    contactPage.fillAndSendForm(contact, 'required')
    await contactPage.checkSendingConfirmation()
    I.wait(15)
    let data = await I.checkEmailText(contact.email)
    console.log(data)
    I.assertContain(data, contact.firstName + ' ' + contact.lastName);
    I.assertContain(data, contact.email);
    I.assertContain(data, contact.message);
});
