const {I} = inject()

module.exports = {

    //heroImg: locate("img").inside(locate("section").withAttr({"class":"layout-single-detail__hero-img"})),
    heroImg: '//img[ancestor::section[contains(@class, \'layout-single-detail__hero-image\')]]',
    //heroImg: locate("img").withAttr({"alt": "A young construction company with tradition, Meyerfoto, Iwo Hoffmann"}),
    //firstHeader: locate("h1").withAttr({"class": "hl-1  "}),
    //secondHeader: locate("h2").withAttr({"class": " hl-2"}),
    firstHeader: '//h1',
    secondHeader: '//header/h2',
    thirdHeader: '//h3',
    contactUsBtn: '//p/a[contains(@href,"/en/contacts/")]',
    //contactUsBtn: locate("a").withAttr({"href": "/en/about-us/contact/"}),
    buildingConstructionLnk: '//p/strong/a[contains(@href,"en/real-estate/building-construction-services/")]',
    //buildingConstructionLnk: locate("a").withAttr({"href": "/en/services/real-estate/building-constructionnew-builds/"}).inside(locate("p")),
    intro: locate('p').withText('Implenia is Switzerland'),
    civilEngineeringLnk: '//p/strong/a[contains(@href,"/en/infrastructure/civil-engineering/")]',
    //civilEngineeringLnk: locate("a").withAttr({"href": "/en/services/civil-engineering/"}).inside(locate("p")),
    realEstateDeveloperLnk: '//p/strong/a[contains(@href,"en/real-estate/services/real-estate-consulting-planning/")]',
    //realEstateDeveloperLnk: locate("a").withAttr({"href": "/en/real-estate-consulting/"}).inside(locate("p")),
    sustainableSolutionsLnk: '//ul[@class=\'list--dots\']/li/a[contains(@href,"/en/sustainability/sustainability-report/")]',
    //sustainableSolutionsLnk: locate("a").withAttr({"href": "/en/sustainability/sustainability-report/"}).inside(locate("p")),
    //aboutUsBlocks: locate("li").inside(locate("ul").withAttr({"class": "menu--related-content row gutters col-count-4"})),
    aboutUsBlocks:'//div[@data-mobile-title=\'About us\']/div[@class=\'related-content related-content--grid\']/div',
    historyBlock: locate("a").withAttr({"title": "History"}),
    visionBlock: locate("a").withAttr({"title": "Vision, mission and values"}),
    strategyBlock: locate("a").withAttr({"title": "Strategy"}),
    organisationBlock: locate("a").withAttr({"title": "Organisation"}),
    innovationBlock: locate("a").withAttr({"title": "Innovation"}),
    corporateBlock: locate("a").withAttr({"title": "Corporate Governance"}),
    healthBlock: locate("a").withAttr({"title": "Health & Safety"}),
    purchasingBlock: locate("a").withAttr({"title": "Purchasing Department"}),
    aboutUs: locate("li").withAttr({"data-menu-id": "0"}),
    allOption: locate("option").withText('All'),
    historyImg: locate("img").inside(locate('a').withAttr({"href": "/en/about-us/history/"})),
    visionImg: locate("img").withAttr({"alt": "Vision, Mission und Werte"}),
    strategyImg: locate("img").withAttr({"alt": "Strategie"}),
    organisationImg: locate("img").withAttr({"alt": "Organisation"}),
    innovationImg: locate("img").inside(locate('a').withAttr({"href": "/en/about-us/innovation/"})),
    corporateImg: locate("img").withAttr({"alt": "Corporate Governance"}),
    healthImg: locate("img").inside(locate('a').withAttr({"href": "/en/about-us/health-safety/"})),
    purchasingImg: locate("img").withAttr({"alt": "Einkauf"}),
    //nextBlock: (id) => locate("a").inside(locate("li").withAttr({'class': 'col '})).at(id),
    nextBlock: (id) => '(.//a[ancestor::div[contains(@class, \'grid-item grid-item\')]])[position()=' + id + ']',
    blockImages:'//div[@class=\'related-content related-content--grid\']/div/a/div/img',


    async checkNumberOfAboutUsSections(sectionNum) {
        let numOfElements = await I.grabNumberOfVisibleElements(this.aboutUsBlocks);
        console.log('Number of About Us blocks: ' + numOfElements)
        I.assertEqual(numOfElements, sectionNum);
    },

    async checkNumberOfImages() {
        let numOfElements = await I.grabNumberOfVisibleElements(this.aboutUsBlocks);
        console.log('Number of About Us blocks: ' + numOfElements)
        let numOfImages = await I.grabNumberOfVisibleElements(this.blockImages);
        console.log('Number of blocks Images: ' + numOfImages)
        I.assertEqual(numOfElements, numOfImages);
    },

    async checkAllBlocks(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.aboutUsBlocks);
        for (let i = 0; i<numOfElements; i++){
            I.click(this.nextBlock(i+1))
            let currentUrl = await I.grabCurrentUrl();
            console.log(currentUrl)
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
            I.amOnPage('en/about-us/a-company-with-tradition/')
        }
    },

    async openAndCheckHistoryBlock(){
        I.click(this.historyBlock)
        let historyUrl = await I.grabCurrentUrl();
        console.log(historyUrl)
        I.assertContain(historyUrl, 'en/about-us/history/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckVisionBlock(){
        I.click(this.visionBlock)
        let visionUrl = await I.grabCurrentUrl();
        console.log(visionUrl)
        I.assertContain(visionUrl, 'en/about-us/vision-mission-and-values/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckStrategyBlock(){
        I.click(this.strategyBlock)
        let strategyUrl = await I.grabCurrentUrl();
        console.log(strategyUrl)
        I.assertContain(strategyUrl, 'en/about-us/strategy/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckOrganisationBlock(){
        I.click(this.organisationBlock)
        let organisationUrl = await I.grabCurrentUrl();
        console.log(organisationUrl)
        I.assertContain(organisationUrl, 'en/about-us/organisation/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckInnovationBlock(){
        I.click(this.innovationBlock)
        let innovationUrl = await I.grabCurrentUrl();
        console.log(innovationUrl)
        I.assertContain(innovationUrl, 'en/about-us/innovation/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckCorporateBlock(){
        I.click(this.corporateBlock)
        let corporateUrl = await I.grabCurrentUrl();
        console.log(corporateUrl)
        I.assertContain(corporateUrl, 'en/about-us/corporate-governance/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckHealthBlock(){
        I.click(this.healthBlock)
        let healthUrl = await I.grabCurrentUrl();
        console.log(healthUrl)
        I.assertContain(healthUrl, 'en/about-us/health-safety/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async openAndCheckPurchasingBlock(){
        I.click(this.purchasingBlock)
        let purchasingUrl = await I.grabCurrentUrl();
        console.log(purchasingUrl)
        I.assertContain(purchasingUrl, 'en/about-us/purchasing-department/supplier/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async checkFirstHeader(){
        I.waitForVisible(this.firstHeader)
        I.seeElement(this.firstHeader)
        let firstHeaderText = await I.grabTextFrom(this.firstHeader);
        console.log(firstHeaderText)
        //I.assertContain(firstHeaderText, 'A young construction company with long tradition')
    },

    async checkContactUsBtn(){
        I.waitForVisible(this.contactUsBtn)
        I.seeElement(this.contactUsBtn)
        this.clickContactUsBtn()
        let contactUrl = await I.grabCurrentUrl();
        console.log(contactUrl)
        I.assertContain(contactUrl, 'en/contacts/');
    },

    async checkBuildingConstructionLnk(){
        I.amOnPage('en/about-us/a-company-with-tradition/')
        let buildingLnkText = await I.grabTextFrom(this.buildingConstructionLnk);
        console.log(buildingLnkText)
        I.assertContain(buildingLnkText, 'building construction');
        let buildingLnk = await I.grabAttributeFrom(this.buildingConstructionLnk, 'href');
        console.log(buildingLnk)
        I.assertContain(buildingLnk, 'en/real-estate/building-construction-services/');
        I.amOnPage(buildingLnk)
        let buildingUrl = await I.grabCurrentUrl();
        console.log(buildingUrl)
        I.assertContain(buildingUrl, 'en/real-estate/building-construction-services/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async checkCivilEngineeringLnk(){
        I.amOnPage('en/about-us/a-company-with-tradition/')
        let civilEngineeringLnkText = await I.grabTextFrom(this.civilEngineeringLnk);
        console.log(civilEngineeringLnkText)
        I.assertContain(civilEngineeringLnkText, 'Civil Engineering');
        let civilEngineeringLnk = await I.grabAttributeFrom(this.civilEngineeringLnk, 'href');
        console.log(civilEngineeringLnk)
        I.assertContain(civilEngineeringLnk, '/en/infrastructure/civil-engineering/');
        I.amOnPage(civilEngineeringLnk)
        let civilEngineeringUrl = await I.grabCurrentUrl();
        console.log(civilEngineeringUrl)
        I.assertContain(civilEngineeringUrl, '/en/infrastructure/civil-engineering/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
        I.amOnPage('en/about-us/a-company-with-tradition/')
    },

    async checkRealEstateDeveloperLnk(){
        I.amOnPage('en/about-us/a-company-with-tradition/')
        let realEstateDeveloperLnkText = await I.grabTextFrom(this.realEstateDeveloperLnk);
        console.log(realEstateDeveloperLnkText)
        I.assertContain(realEstateDeveloperLnkText, 'real estate developer');
        let realEstateDeveloperLnk = await I.grabAttributeFrom(this.realEstateDeveloperLnk, 'href');
        console.log(realEstateDeveloperLnk)
        I.assertContain(realEstateDeveloperLnk, 'en/real-estate/services/real-estate-consulting-planning/');
        I.amOnPage(realEstateDeveloperLnk)
        let realEstateDeveloperUrl = await I.grabCurrentUrl();
        console.log(realEstateDeveloperUrl)
        I.assertContain(realEstateDeveloperUrl, 'en/real-estate/services/real-estate-consulting-planning/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
    },

    async checkSustainableSolutionsLnk(){
        I.amOnPage('en/about-us/a-company-with-tradition/')
        let sustainableSolutionsLnkText = await I.grabTextFrom(this.sustainableSolutionsLnk);
        console.log(sustainableSolutionsLnkText)
        I.assertContain(sustainableSolutionsLnkText, 'sustainable solutions');
        let sustainableSolutionsLnk = await I.grabAttributeFrom(this.sustainableSolutionsLnk, 'href');
        console.log(sustainableSolutionsLnk)
        I.assertContain(sustainableSolutionsLnk, '/en/sustainability/sustainability-report/');
        I.amOnPage(sustainableSolutionsLnk)
        let sustainableSolutionsUrl = await I.grabCurrentUrl();
        console.log(sustainableSolutionsUrl)
        I.assertContain(sustainableSolutionsUrl, '/en/sustainability/sustainability-report/');
        I.dontSee('Oops, an error occurred!')
        I.dontSee('Oops... There was a loading error')
    },

    async checkSecondHeader(){
        I.seeElement(this.secondHeader)
        let secondHeaderText = await I.grabTextFrom(this.secondHeader);
        console.log(secondHeaderText)
        //I.assertContain(secondHeaderText, 'Implenia is an integrated leading construction and real estate service provider with clear strategic priorities and a dynamic organisation')
    },

    async checkThirdHeader(){
        I.seeElement(this.thirdHeader)
        let thirdHeaderText = await I.grabTextFrom(this.thirdHeader);
        console.log(thirdHeaderText)
        //I.assertContain(secondHeaderText, 'Implenia is an integrated leading construction and real estate service provider with clear strategic priorities and a dynamic organisation')
    },

    async checkIntro(){
        I.seeElement(this.intro)
        let introText = await I.grabTextFrom(this.intro);
        console.log(introText)
        I.assertContain(introText, 'Implenia is Switzerland’s leading construction and real estate services company.')
        I.assertContain(introText, 'It has significant building construction  and Civil Engineering  operations in Switzerland, Germany and Austria, as well as strong positions in the infrastructure sectors of all its home markets: Switzerland, Germany, Austria, France, Sweden and Norway.')
        I.assertContain(introText, 'Implenia is also a successful real estate developer in Switzerland and Germany.')
        //I.assertContain(introText, 'Working with and for people, Implenia creates and builds sustainable solutions for tomorrow’s living, working and mobility needs.')
    },

    openBuildingConstructionLnk(){
            I.click(this.buildingConstructionLnk)
    },

    openCivilEngineeringLnk(){
        I.click(this.civilEngineeringLnk)
    },

    openRealEstateDeveloperLnk(){
        I.click(this.realEstateDeveloperLnk)
    },

    openSustainableSolutionsLnk(){
        I.click(this.sustainableSolutionsLnk)
    },

    clickContactUsBtn(){
        I.click(this.contactUsBtn)
    }



}