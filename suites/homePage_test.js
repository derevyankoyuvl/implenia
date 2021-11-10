const {I, homePage, contactPage, common, newsPage} = inject()
const {devices} = require("playwright")


Feature('Home page').tag('@home').tag('smoke');

Before(({I}) => {
    I.clearCookie()
    I.amOnPage('en/')
})

Scenario('Video is playing', async () => {
    tryTo(() => common.acceptCookie())
    I.seeElement(homePage.circularEconomyVideo);
    await homePage.checkVideoAutoplay()
});

Scenario('Check Stock Price Widget', async () => {
    tryTo(() => common.acceptCookie())
    I.seeElement(homePage.stockPrice);
    I.seeElement(homePage.shareSwx);
    I.seeElement(homePage.shareIsin);
    I.seeElement(homePage.sharePrice);
    I.seeElement(homePage.shareChange);
    common.checkImage(homePage.stockPrice, "StockPrice", 30)
});

Scenario('Check Images', async () => {
    tryTo(() => common.acceptCookie())
    I.wait(5)
    common.checkImage(homePage.contactImg, "Contact_Image", 35)
    common.checkImage(homePage.civilEngineeringImg, "CivilEngineering_Image", 35)
    common.checkImage(homePage.impleniaServicesImg, "ImpleniaServices_Image", 35)
    common.checkImage(homePage.specialConstructionServicesImg, "SpecialConstructionServices_Image", 35)
    common.checkImage(homePage.homeOwnershipImg, "HomeOwnership_Image", 35)
    common.checkImage(homePage.sustainableRealEstateImg, "SustainableRealEstate_Image", 35)
});

Scenario('Check Navigation Menu', async () => {
    tryTo(() => common.acceptCookie())
    await homePage.openMenu()
    homePage.seeNavigationMenuItems()
    await homePage.checkSubMenuNavigation('AboutUs')
    await homePage.checkSubMenuNavigation("Services")
    await homePage.checkSubMenuNavigation("References")
    await homePage.checkSubMenuNavigation("Investor Relations")
    await homePage.checkSubMenuNavigation("Media")
    await homePage.checkSubMenuNavigation("Sustainability")
    await homePage.checkSubMenuNavigation("Career")
    await homePage.checkSubMenuNavigation("Locations")
});

Scenario('Check Language Panel', async () => {
    tryTo(() => common.acceptCookie())
    homePage.openLanguagePanel()
    homePage.seeLanguageOptions()
    await homePage.selectLanguage("Norwegian")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("FranceFrance")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("AustriaGerman")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("Sweden")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("GermanGerman")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("SwitzFrance")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("English")
    homePage.openLanguagePanel()
    await homePage.selectLanguage("SwitzGerman")
});

Scenario('Check links to references', async () => {
    tryTo(() => common.acceptCookie())
    await homePage.checkReference(1)
    await homePage.checkReference(2)
    await homePage.checkReference(3)
    await homePage.checkReference(4)
});

Scenario('Check News sections', async () => {
    tryTo(() => common.acceptCookie())
    await homePage.checkNumberOfNewsSections()
    homePage.checkTitlesNewsTab()
    await homePage.checkLinkNewsTab(1)
    await homePage.checkLinkNewsTab(2)
    await homePage.checkLinkNewsTab(3)
    await homePage.checkLinkNewsTab(4)
});

Scenario('Check on Mobile', async () => {
    await session('mobile user', devices['iPhone X', { isMobile: true, deviceScaleFactor: 2 }], async () => {
        I.wait(3)
        common.changeWindowSize(500, 600)
        I.amOnPage('en/')
        common.acceptCookie()
        homePage.openMenu()
        homePage.seeNavigationMenuItems()
        await homePage.checkSubMenuNavigation('AboutUs')
        await homePage.checkSubMenuNavigation("Services")
        await homePage.checkSubMenuNavigation("References")
        await homePage.checkSubMenuNavigation("Investor Relations")
        await homePage.checkSubMenuNavigation("Media")
        I.amOnPage('en/')
        homePage.openLanguagePanel()
        homePage.seeLanguageOptions()
        await homePage.selectLanguage("Norwegian")
        homePage.openLanguagePanel()
        await homePage.selectLanguage("FranceFrance")
        homePage.openLanguagePanel()
        await homePage.selectLanguage("SwitzGerman")
        homePage.openLanguagePanel()
        await homePage.selectLanguage("English")
        I.seeElement(homePage.stockPrice);
    })
});
/*
Scenario('Check search by keyword Implenia', async () => {
    tryTo(() => common.acceptCookie())
    homePage.openSearchPanel()
    homePage.enterSearchRequest('Implenia')
    await homePage.checkSearchResults()
});

Scenario('Check search by keyword Implenia - results are clickable', async () => {
    tryTo(() => common.acceptCookie())
    homePage.openSearchPanel()
    homePage.enterSearchRequest('Implenia')
    await homePage.checkSearchResults()
    console.log('Search results are ok')
    await homePage.checkNumberOfSearchResultsOnPage(10)
    await homePage.checkSearchResultRecords()
});
*/
