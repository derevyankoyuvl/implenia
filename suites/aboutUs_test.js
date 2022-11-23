const {I, common, aboutUsPage, managementPage, homePage} = inject()

Feature('AboutUs page').tag('@aboutUs').tag('smoke');

Before(() => {
    I.clearCookie()
    I.amOnPage('en/')
    tryTo(() => common.acceptCookie())
})

Scenario('Check the Hero image', async () => {
    I.amOnPage('en/about-us/a-company-with-tradition/')
    I.seeElement(aboutUsPage.heroImg)
    //common.checkImage(aboutUsPage.heroImg, "Hero_Image", 60)
});

Scenario('Check the h1, h2 and the intro text are available', async () => {
    I.amOnPage('en/about-us/a-company-with-tradition/')
    await aboutUsPage.checkFirstHeader()
    await aboutUsPage.checkSecondHeader()
    await aboutUsPage.checkThirdHeader()
    await aboutUsPage.checkIntro()
});

Scenario('Check the Button appear and link', async () => {
    I.amOnPage('en/about-us/a-company-with-tradition/')
    await aboutUsPage.checkContactUsBtn()
    await aboutUsPage.checkBuildingConstructionLnk()
    await aboutUsPage.checkCivilEngineeringLnk()
    await aboutUsPage.checkRealEstateDeveloperLnk()
    await aboutUsPage.checkSustainableSolutionsLnk()
});

Scenario('Check 8 topic blocks available and link', async () => {
    I.amOnPage('en/about-us/a-company-with-tradition/')
    await aboutUsPage.checkNumberOfAboutUsSections(7)
    await aboutUsPage.checkNumberOfImages()
    await aboutUsPage.checkAllBlocks()
});
/*
Scenario('Check 8 topic blocks available and link', async () => {
    I.amOnPage('en/about-us/a-company-with-tradition/')
    await aboutUsPage.checkNumberOfAboutUsSections(8)
    common.checkImage(aboutUsPage.historyImg, "History_Image", 60)
    common.checkImage(aboutUsPage.visionImg, "Vision_Image", 60)
    common.checkImage(aboutUsPage.strategyImg, "Strategy_Image", 60)
    common.checkImage(aboutUsPage.organisationImg, "Organisation_Image", 60)
    common.checkImage(aboutUsPage.innovationImg, "Innovation_Image", 60)
    common.checkImage(aboutUsPage.corporateImg, "Corporate_Image", 60)
    common.checkImage(aboutUsPage.healthImg, "Health_Image", 60)
    common.checkImage(aboutUsPage.purchasingImg, "Purchasing_Image", 60)
    await aboutUsPage.openAndCheckHistoryBlock()
    await aboutUsPage.openAndCheckVisionBlock()
    await aboutUsPage.openAndCheckStrategyBlock()
    await aboutUsPage.openAndCheckOrganisationBlock()
    await aboutUsPage.openAndCheckInnovationBlock()
    await aboutUsPage.openAndCheckCorporateBlock()
    await aboutUsPage.openAndCheckHealthBlock()
    await aboutUsPage.openAndCheckPurchasingBlock()
});

Scenario('Check that the CVs of 9 people available', async () => {
    I.amOnPage('en/about-us/organisation/management/')
    await managementPage.checkNumberOfCvs(9)
    await managementPage.checkCVData(1)
    await managementPage.checkCVData(2)
    await managementPage.checkCVData(3)
    await managementPage.checkCVData(4)
    await managementPage.checkCVData(5)
    await managementPage.checkCVData(6)
    await managementPage.checkCVData(7)
    await managementPage.checkCVData(8)
    await managementPage.checkCVData(9)
});
*/
