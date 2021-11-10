const {I, common, newsPage} = inject()

Feature('News page').tag('@news').tag('smoke');

Before(() => {
    I.clearCookie()
    I.amOnPage('en/')
    tryTo(() => common.acceptCookie())
})

Scenario('Check that news available and the links can be clicked', async () => {
    I.amOnPage('en/media/newsroom/')
    await newsPage.checkNumberOfNewsLinks()
});

Scenario('Check categories dropdown', async () => {
    I.amOnPage('en/media/newsroom/')
    let beforeFilter = await I.grabNumberOfVisibleElements(newsPage.adhocReleasesTxt);
    newsPage.selectCategory('Adhoc Releases')
    let afterFilter = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter, beforeFilter)
    newsPage.removeFilters()
    let beforeFilter2 = await I.grabNumberOfVisibleElements(newsPage.mediaReleasesTxt);
    newsPage.selectCategory('Media release')
    let afterFilter2 = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter2, beforeFilter2)
    newsPage.removeFilters()
    let beforeFilter3 = await I.grabNumberOfVisibleElements(newsPage.reportsTxt);
    newsPage.selectCategory('Reports')
    let afterFilter3 = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter3, beforeFilter3)
    newsPage.removeFilters()
    let beforeFilter4 = await I.grabNumberOfVisibleElements(newsPage.topicsAndProjectsTxt);
    newsPage.selectCategory('Topics and projects')
    let afterFilter4 = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter4, beforeFilter4)
    newsPage.removeFilters()
    newsPage.selectCategory('All')
    let afterFilter5 = await newsPage.getNumberOfNewsLinks()
    I.assertEqual(afterFilter5, 10)
});

Scenario('Check years dropdown', async () => {
    I.amOnPage('en/media/newsroom/')
    let beforeFilter2021 = await I.grabNumberOfVisibleElements(newsPage.time2021);
    newsPage.selectValueFromYearDropDown('2021')
    let afterFilter2021 = await newsPage.getNumberOfNewsLinks()
    if (afterFilter2021 >= beforeFilter2021) I.assertEqual(true, true)
    else I.assertEqual(true, false)
    I.click(newsPage.removeAllFilters)
    let beforeFilter2020 = await I.grabNumberOfVisibleElements(newsPage.time2020);
    newsPage.selectValueFromYearDropDown('2020')
    let afterFilter2020 = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter2020, beforeFilter2020)
    newsPage.removeFilters()
    let beforeFilter2019 = await I.grabNumberOfVisibleElements(newsPage.time2019);
    newsPage.selectValueFromYearDropDown('2019')
    let afterFilter2019 = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter2019, beforeFilter2019)
    newsPage.removeFilters()
    let beforeFilter2018 = await I.grabNumberOfVisibleElements(newsPage.time2018);
    newsPage.selectValueFromYearDropDown('2018')
    let afterFilter2018 = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter2018, beforeFilter2018)
    newsPage.removeFilters()
    newsPage.selectValueFromYearDropDown('All')
    await newsPage.getNumberOfNewsLinks()
});

Scenario('Check keyword search', async () => {
    I.amOnPage('en/media/newsroom/')
    let beforeFilter = await I.grabNumberOfVisibleElements(newsPage.austriaTxt);
    newsPage.applySearchCriteria('Austria')
    let afterFilter = await newsPage.getNumberOfNewsLinks()
    newsPage.compareResults(afterFilter, beforeFilter)
});




