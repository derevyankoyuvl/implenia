const {I, spinner} = inject()

module.exports = {

    firstName: locate("input").withAttr({"id": "powermail_field_vorname"}),
    lastName: locate("input").withAttr({"id": "powermail_field_nachname"}),
    function: locate("input").withAttr({"id": "powermail_field_funktion"}),
    contactEnquiries: locate("input").withAttr({"id": "powermail_field_kontaktfuerrueckfragen"}),
    dataTime: locate("input").withAttr({"id": "powermail_field_datumunduhrzeit"}),
    location: locate("input").withAttr({"id": "powermail_field_ort"}),
    involvedPersons: locate("input").withAttr({"id": "powermail_field_beteiligtebetroffene"}),
    description: locate("textarea").withAttr({"id": "powermail_field_beschreibung"}),
    sendBtn: locate("input").withAttr({"value": "Send"}),

    async fillAndSendForm(fName, lName, func, contact, time, loc, people, desc) {
        I.fillField(this.firstName, fName)
        I.fillField(this.lastName, lName)
        I.fillField(this.function, func)
        I.fillField(this.contactEnquiries, contact)
        let today = new Date();
        I.fillField(this.dataTime, today)
        I.fillField(this.location, loc)
        I.fillField(this.involvedPersons, people)
        I.fillField(this.description, desc)
        await I.waitForEnabled(this.sendBtn, 20000)
        await I.waitForClickable(this.sendBtn, 20000);
        await I.click(this.sendBtn);
    },

    async checkSendingConfirmation(){
        I.waitForInvisible(spinner.loading, 30)
        await I.see('Thank you very much for your message')
    },



}