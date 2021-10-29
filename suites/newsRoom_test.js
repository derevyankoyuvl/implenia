const {I, common, newsPage} = inject()

Feature('News page').tag('@news');

Before(({I}) => {
    I.clearCookie()
    I.amOnPage('en/')
})

Scenario('Video is playing', async () => {
    await common.acceptCookies()
    I.amOnPage('en/media/newsroom/')
    await newsPage.checkNumberOfNewsSections()
});