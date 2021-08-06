const {I, contactPage, contactForm} = inject()

let contact = contactForm.CONTACTFORM()

Feature('First test');

Scenario('test something', async () => {
    I.amOnPage('/')
    pause()
    //contactPage.acceptCooki()
   // I.click(contactPage.submitButton)
    contactPage.fillAndSendForm(contact, 'required')

});
