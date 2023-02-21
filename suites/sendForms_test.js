const {I, contactPage, contactForm, compliancePage, common} = inject()

let contact = contactForm.CONTACTFORM()

Feature('Sending data forms').tag('@form');

Scenario('Send contact form', async () => {
    I.amOnPage('/en/contacts/')
    await contactPage.acceptCookies()
    await contactPage.fillAndSendForm(contact, 'all')
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

Scenario('Send form on Compliance Page', async () => {
    I.amOnPage('/en/implenia-on-site/compliance/')
    tryTo(() => common.acceptCookie())
    await compliancePage.fillAndSendForm('TestFName', 'TestLName', 'Test function', 'Test Contact Enquiries', 'Test date and time', 'Test location', 'Test Involved Persons', 'This is test description for this case')
    I.wait(3)
    await compliancePage.checkSendingConfirmation()
    I.see('Thank you very much for your message!')
    I.see('We take every compliance report very seriously. Please be assured that your report will be treated confidentially.')
    I.see('Your report will now be investigated.')
    I.see('Your Compliance Team')
});
