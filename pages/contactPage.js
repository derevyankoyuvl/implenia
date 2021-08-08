const {I, spinner} = inject()

module.exports = {

    firstName: locate("input").withAttr({id: "powermail_field_vorname"}),
    lastName: locate("input").withAttr({id: "powermail_field_nachname"}),
    email: locate("input").withAttr({id: "powermail_field_e_mail"}),
    company: locate("input").withAttr({id: "powermail_field_firma"}),
    address: locate("input").withAttr({id: "powermail_field_adresseinklland"}),
    phone: locate("input").withAttr({id: "powermail_field_telefon"}),
    message: locate("textarea").withAttr({id: "powermail_field_ihrenachricht"}),
    send: locate("input").withAttr({value: "Send"}),
    dataPrivacy: locate("label").withAttr({for: "powermail_field_datenschutz_1"}),
    acceptButton: locate("button").withAttr({'data-testid': 'uc-accept-all-button'}),
    consentManager: locate("div").withAttr({'data-testid': 'uc-container'}),
    submitButton: locate("button").withText('ALLES AKZEPTIEREN').inside(locate("div").withAttr({id: 'usercentrics-root'})),

    acceptCookies() {
        I.click('.sc-gtsrHT.iGMqnF');
    },

    async checkSendingConfirmation(){
        I.waitForInvisible(spinner.loading, 30)
        await I.see('Thank you very much for your message. We will contact you shortly.')
    },

    enterFirstName(contactData){
        I.fillField(this.firstName, contactData.firstName)
    },

    enterLastName(contactData){
        I.fillField(this.lastName, contactData.lastName)
    },

    enterEmail(contactData){
        I.fillField(this.email, contactData.email)
    },

    enterInvalidEmail(){
        I.fillField(this.email, 'test@')
    },

    enterCompany(contactData){
        I.fillField(this.company, contactData.company)
    },

    enterPhone(contactData){
        I.fillField(this.phone, contactData.phone)
    },

    enterAddress(contactData){
        I.fillField(this.address, contactData.address)
    },

    enterMessage(contactData){
        I.fillField(this.message, contactData.message)
    },

    checkDataPrivacy(){
        I.click(this.dataPrivacy)
    },

    sendForm(){
        I.click(this.send)
    },

    fillAndSendForm(contactData, type){
        if (type === 'all') {
            this.enterFirstName(contactData)
            this.enterLastName(contactData)
            this.enterEmail(contactData)
            this.enterPhone(contactData)
            this.enterCompany(contactData)
            this.enterAddress(contactData)
            this.enterMessage(contactData)
            this.checkDataPrivacy()
            this.sendForm()
        }
        else if (type === 'required') {
            this.enterFirstName(contactData)
            this.enterLastName(contactData)
            this.enterEmail(contactData)
            this.enterMessage(contactData)
            this.checkDataPrivacy()
            this.sendForm()
        }
        else if (type === 'empty') {
            this.sendForm()
        }
        else if (type === 'first') {
            this.enterLastName(contactData)
            this.enterEmail(contactData)
            this.enterPhone(contactData)
            this.enterCompany(contactData)
            this.enterMessage(contactData)
            this.checkDataPrivacy()
            this.sendForm()
        }
        else if (type === 'last') {
            this.enterFirstName(contactData)
            this.enterEmail(contactData)
            this.enterPhone(contactData)
            this.enterCompany(contactData)
            this.enterMessage(contactData)
            this.checkDataPrivacy()
            this.sendForm()
        }
        else if (type === 'email') {
            this.enterFirstName(contactData)
            this.enterLastName(contactData)
            this.enterPhone(contactData)
            this.enterCompany(contactData)
            this.enterMessage(contactData)
            this.checkDataPrivacy()
            this.sendForm()
        }
        else if (type === 'invalidEmail') {
            this.enterFirstName(contactData)
            this.enterLastName(contactData)
            this.enterInvalidEmail()
            this.enterPhone(contactData)
            this.enterCompany(contactData)
            this.enterMessage(contactData)
            this.checkDataPrivacy()
            this.sendForm()
        }
    },
}