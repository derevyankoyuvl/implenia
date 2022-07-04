const {I, common, aboutUsPage, referencesPage} = inject()

Feature('References page').tag('@reference');

Before(() => {
    I.clearCookie()
    I.amOnPage('en/')
    tryTo(() => common.acceptCookie())
})

Scenario('Check the Hero image', async () => {
    I.amOnPage('en/references/overview/')
    referencesPage.australiaFilter()
});







