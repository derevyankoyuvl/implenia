const {I, spinner} = inject()

module.exports = {

    infrastructureMenu: '//li/a[@data-menu-id=\'main-menu-item-0\']',
    realEstateMenu: '//li/a[@data-menu-id=\'main-menu-item-1\']',
    focusFutureMenu: '//li/a[@data-menu-id=\'main-menu-item-2\']',
    referencesMenu: locate("li").withText('References'),
    mediaInvestorsMenu: '//li/a[@data-menu-id=\'main-menu-item-4\']',
    aboutUsMenu: '//li/a[@data-menu-id=\'main-menu-item-5\']',
    //menu: locate("div").withAttr({"aria-label": "Menu"}),
    menu: '//a[@data-menu-id=\'main-menu\']',
    aboutUs: locate("li").withAttr({"data-menu-id": "5"}),
    services: locate("li").withAttr({"data-menu-id": "0"}),
    competences: locate("li").withAttr({"data-menu-id": "1"}),
    //references: locate("li").withAttr({"data-menu-id": "2"}),
    //references: locate("li").withText('References'),
    investorRelations: locate("li").withText('Investor Relations'),
    media: locate("li").withAttr({"data-menu-id": "4"}),
    sustainability: locate("li").withAttr({"data-menu-id": "5"}),
    career: locate("li").withAttr({"data-menu-id": "6"}),
    contact: locate("li").withAttr({"data-menu-id": "7"}),
    locations: locate("li").withText('Locations'),
    history: locate("a").withAttr({"href": "/en/about-us/history/"}),
    company: locate("a").withText('Company'),
    civilEngineering: locate("a").withAttr({"href": "/en/services/civil-engineering/"}),
    publications: locate("a").withAttr({"href": "/en/investor-relations/publications/financial-publications/"}),
    referencesOverview: locate("a").withAttr({"href": "/en/references/"}),
    competencesOverview: locate("a").withText('Overview competences'),
    contactOverview: locate("a").withText('Overview contacts'),
    civilEngineeringServices: locate("a").withText('Civil engineering services'),
    buildingConstructionServices: locate("a").withText('Building construction services'),
    focusFutureOverview: locate("a").withText('Overview'),
    mediaInvestorRelations: locate("a").withText('Investor Relations'),
    aboutUsCompany: locate("a").withText('Company'),
    annualReports: locate("a").withAttr({"href": "/en/investor-relations/annualreport/2021/"}),
    newsroom: locate("a").withAttr({"href": "/en/media/newsroom/"}),
    overviewLocations: locate("a").withAttr({"href": "/en/locations/overview/"}),
    switzerland: locate("a").withAttr({"href": "/en/career/switzerland/job-opportunities/"}),
    sustainabilityReport: locate("a").withAttr({"href": "/en/sustainability/sustainability-report/"}),
    constructionCompany: locate("a").withAttr({"href": "/ueber-uns/unternehmen-mit-tradition/"}),
    //languageHeader: locate("div").withAttr({"data-tab": "lang-site-header"}),
    languageHeader: '//div[@class=\'current-lang__icon\']',
    switzDe: locate("a").withAttr({"hreflang": "de-CH"}),
    switzEn: locate("a").withAttr({"hreflang": "en-CH"}),
    switzFr: locate("a").withAttr({"hreflang": "fr-CH"}),
    gerDe: locate("a").withAttr({"hreflang": "de-DE"}),
    sweSv: locate("a").withAttr({"hreflang": "sv-SE"}),
    norNo: locate("a").withAttr({"hreflang": "no-NO"}),
    fraFr: locate("a").withAttr({"hreflang": "fr-FR"}),
    ausDe: locate("a").withAttr({"hreflang": "de-AT"}),
    circularEconomyVideo: locate("video").withAttr({"class": "video-embed-item"}),
    //newsSection: locate("div").withAttr({"class": "news [ js-news ] "}),
    newsSection: '//div[@class=\'hero__news-container\']//div[@class = \'news [ js-news ] \']',
    //div[@class='hero__news-container']//div[@class = 'news [ js-news ] ']
    firstCross: locate("div").withAttr({"class": "cross"}).inside(locate("div").withAttr({"class":"gallery__mood"})),
    secondCross: locate("div").withAttr({"class": "cross"}).inside(locate("div").withAttr({"class":"gallery__mood gallery__mood--large"})),
    thirdCross: locate("div").withAttr({"class": "cross"}).inside(locate("div").withAttr({"class":"gallery__mood gallery__mood--small overlap"})),
    forthCross: locate("div").withAttr({"class": "cross"}).inside(locate("div").withAttr({"class":"gallery__mood gallery__mood--small"})),
    firstLink: locate("a").withAttr({"href": "https://implenia.com/en/references/overview/refs/pontons-von-cologny/"}),
    secondLink: locate("a").withAttr({"href": "https://implenia.com/en/references/overview/refs/giessenturm-1/"}),
    stockPrice: locate("div").withAttr({"class": "share-price"}),
    shareSwx: locate("div").withAttr({"class": "share__swx"}),
    shareIsin: locate("div").withAttr({"class": "share__isin"}),
    sharePrice: locate("div").withAttr({"class": "share__price"}),
    shareChange: locate("div").withAttr({"class": "share__change"}),
    currentLanguage: locate("*").withAttr({"class": "current-lang__identifier"}),
    contactImg: '//a[contains(@href, \'contact\')]/img',
    careerImg: '//a[contains(@href, \'job\')]/img',
    investorImg: '//a[contains(@href, \'investor\')]/img',
    newsRoomImg: '//a[contains(@href, \'newsroom\')]/img',
    teaserMoodImg: '//div[@class=\'teaser__mood\']/img',
    investorRelationsImg: '//img[@class=\'image-embed-item\']',
    civilEngineeringImg: locate("img").withAttr({"alt": "Civil Engineering"}),
    sustainableRealEstateImg: locate("img").withAttr({"alt": "Sustainable real estate"}),
    impleniaServicesImg: locate("img").withAttr({"alt": "Implenia Services"}),
    specialConstructionServicesImg: locate("img").withAttr({"alt": "Special construction services"}),
    homeOwnershipImg: locate("img").withAttr({"alt": "Home Ownership"}),
    adhocReleases: locate("span").withText('Adhoc releases'),
    mediaReleases: locate("span").withText('Media releases'),
    topicsAndProjects: locate("span").withText('Topics and Projects'),
    reports: locate("span").withText('Reports'),
    adhocReleasesLnk: locate("a").withText('All Adhoc releases'),
    mediaReleasesLnk: locate("a").withText('All Media releases'),
    topicsAndProjectsLnk: locate("a").withText('All Topics and Projects'),
    reportsLnk: locate("a").withText('All Reports'),
    submitButton: locate("button").withText('ALLES AKZEPTIEREN').inside(locate("div").withAttr({id: 'usercentrics-root'})),
    search: locate("span").withText('Search').withAttr({"class": "control-link__label"}),
    searchInput: locate("input").withAttr({"placeholder": "Search…"}),
    searchResults: locate("p").withAttr({"class": "score"}),
    searchResultList: locate("div").withAttr({"class": "search-result"}),
    searchResultRecord: (id) => locate("div").withAttr({"class": "search-result"}).at(id),
    searchResultLink: (ref) => locate("a").withAttr({"href": ref}),
    searchResultHref: locate("a"),
    referenceImg: '//div[button[@aria-label=\'Previous\']]//div[@aria-hidden=\'false\']//img',
    referencePrevious: '//button[@aria-label=\'Previous\']',
    referenceNext: '//button[@aria-label=\'Next\']',
    readMoreBtn: '//div[button[@aria-label=\'Previous\']]//div[@aria-hidden=\'false\']//a[contains(text(),"Read")]',
    newsImg:'//div[@class=\'news-listing\']//img',

    async checkNewsImages(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.newsImg);
        console.log('Number of News Images ' + numOfElements )
        I.assertEqual(numOfElements, 4);
    },

    async checkReferenceImages(){
        let referenceImgIsDispayed = await this.isReferenceImageDisplayed()
        I.assertEqual(referenceImgIsDispayed, true);
    },

    async checkContactImages(){
        let contactImgIsDispayed = await this.isContactImageDisplayed()
        I.assertEqual(contactImgIsDispayed, true);
    },

    async checkCareerImages(){
        let careerImgIsDispayed = await this.isCareerImageDisplayed()
        I.assertEqual(careerImgIsDispayed, true);
    },

    async checkInvestorImages(){
        let investorImgIsDispayed = await this.isInvestorImageDisplayed()
        I.assertEqual(investorImgIsDispayed, true);
    },

    async checkNewsRoomImages(){
        let newsRoomImgIsDispayed = await this.isNewsRoomImageDisplayed()
        I.assertEqual(newsRoomImgIsDispayed, true);
    },

    async checkTeaserMoodImages(){
        let teaserMoodImgIsDispayed = await this.isTeaserMoodImageDisplayed()
        I.assertEqual(teaserMoodImgIsDispayed, true);
    },

    acceptCookies() {
        //I.click('.sc-gtsrHT.iGMqnF');
        I.click({css: 'button[data-testid=uc-accept-all-button]'} );
    },

    clickOnNextBtn(){
      I.click(this.referenceNext)
    },

    async isReferenceImageDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.referenceImg);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
        return true
        }
        else {
            return false
        }
    },

    async isContactImageDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.contactImg);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
            return true
        }
        else {
            return false
        }
    },

    async isCareerImageDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.careerImg);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
            return true
        }
        else {
            return false
        }
    },

    async isInvestorImageDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.investorImg);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
            return true
        }
        else {
            return false
        }
    },

    async isNewsRoomImageDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.newsRoomImg);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
            return true
        }
        else {
            return false
        }
    },

    async isTeaserMoodImageDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.teaserMoodImg);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
            return true
        }
        else {
            return false
        }
    },

    async isReadMoreBtnDisplayed(){
        let numOfElements = await I.grabNumberOfVisibleElements(this.readMoreBtn);
        console.log('Number of links to check ' + numOfElements )
        if (numOfElements === 1) {
            return true
        }
        else {
            return false
        }
    },

    async checkAllReference(n){
        let i = 1
        for(i; i<n; i++){
            let isImgPresent = await this.isReferenceImageDisplayed()
            I.assertEqual(isImgPresent, true);
            let isReadBtnPresent = await this.isReadMoreBtnDisplayed()
            I.assertEqual(isReadBtnPresent, true);
            I.click(this.readMoreBtn)
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.amOnPage('en/')
            if (i === 1) {
                this.clickOnNextBtn()
            }
            if (i === 2) {
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
            }
            if (i === 3) {
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
            }
            if (i === 4) {
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
            }
            if (i === 5) {
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
                I.wait(1)
                this.clickOnNextBtn()
            }

        }
    },

    async checkSearchResultRecords() {
        let numOfElements = await I.grabNumberOfVisibleElements(this.searchResultList);
        console.log('Number of links to check ' + numOfElements )
        for (let i = 0; i< numOfElements; i++)
        {
            await within(this.searchResultRecord(i+1), async () => {
                let value = await I.grabAttributeFrom(this.searchResultHref, 'href')
                let numOfElements = await I.grabNumberOfVisibleElements(this.searchResultLink(value));
                console.log(value)
                console.log(numOfElements)
                I.wait(2)
                I.click(this.searchResultLink(value))
                pause()
            });
        }

    },

    async checkNumberOfSearchResultsOnPage(num) {
        let numOfElements = await I.grabNumberOfVisibleElements(this.searchResultList);
        console.log('Search results on page ' + numOfElements )
        I.assertEqual(numOfElements, num);
    },

    openSearchPanel(){
        I.click(this.search)
    },

    enterSearchRequest(text){
        I.fillField(this.searchInput, text)
        I.pressKey('Enter');
    },

    async checkSearchResults(){
        let results = await I.grabTextFrom(this.searchResults)
        console.log(results)
        results = results.replace(/\s+/g, '')
        results = results.substring(17)
        let substringToRemove = "total"
        results = results.substring(0, results.length - substringToRemove.length )
        if (results > 1000) {
            I.assertEqual(true, true)
        }
        else {
            I.assertEqual(false, true);
        }
    },

    async checkVideoAutoplay(){
        let isAutoPlay = await I.grabAttributeFrom(this.circularEconomyVideo, 'autoplay');
        console.log(isAutoPlay)
        I.assertEqual(isAutoPlay, true);
    },

    async checkSubMenuNavigation(subMenu){
         if (subMenu === "Services") {
            //I.amOnPage('en/')
            //await I.waitForElement(this.menu)
            //I.seeElement(this.menu)
            //await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.searchInput)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.services)
            //I.wait(0.5)
            I.seeElement(this.services)
            this.openServicesSubMenu()
            //I.wait(0.5)
            await I.waitForElement(this.civilEngineering)
            I.seeElement(this.civilEngineering)
            this.clickOnCivilEngineering()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/services/civil-engineering/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/services/civil-engineering/');
        }
        else if (subMenu === "Investor") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.investors)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.investors)
            //I.wait(0.5)
            I.seeElement(this.investors)
            this.openInvestorsSubMenu()
            await I.waitForElement(this.publications)
            //I.wait(0.5)
            I.seeElement(this.publications)
            this.clickOnPublications()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/investor-relations/publications/financial-publications/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/investor-relations/publications/financial-publications/');
        }
        else if (subMenu === "Media") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.media)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.media)
            //I.wait(0.5)
            I.seeElement(this.media)
            this.openMediaSubMenu()
            await I.waitForElement(this.newsroom)
            //I.wait(0.5)
            I.seeElement(this.newsroom)
            this.clickOnNewsroom()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/media/newsroom/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/media/newsroom/');
        }
        else if (subMenu === "Sustainability") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.sustainability)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.sustainability)
            //I.wait(0.5)
            I.seeElement(this.sustainability)
            this.openSustainabilitySubMenu()
            await I.waitForElement(this.sustainabilityReport)
            //I.wait(0.5)
            I.seeElement(this.sustainabilityReport)
            this.clickOnSustainabilityReport()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/sustainability/sustainability-report/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/sustainability/sustainability-report/');
        }
        else if (subMenu === "Career") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.career)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.career)
            //I.wait(0.5)
            I.seeElement(this.career)
            this.openCareerSubMenu()
            await I.waitForElement(this.switzerland)
            //I.wait(0.5)
            I.seeElement(this.switzerland)
            this.clickOnSwitzerland()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/career/switzerland/job-opportunities/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/career/switzerland/job-opportunities/');
        }
        else if (subMenu === "Locations") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.locations)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.locations)
            //I.wait(0.5)
            I.seeElement(this.locations)
            this.openLocationsSubMenu()
            //await I.waitForElement(this.overviewLocations)
            //I.wait(0.5)
            //I.seeElement(this.overviewLocations)
            //this.clickOnOverviewLocations()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/locations/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/locations/overview/');
        }
        else if (subMenu === "Competences") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.competences)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.competences)
            //I.wait(0.5)
            I.seeElement(this.competences)
            this.openCompetencesSubMenu()
            //await I.waitForElement(this.overviewLocations)
            //I.wait(0.5)
            //I.seeElement(this.overviewLocations)
            //this.clickOnOverviewLocations()
            await I.waitForElement(this.competencesOverview)
            I.seeElement(this.competencesOverview)
            I.click(this.competencesOverview)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'overview-competences/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/locations/overview/');
        }
        else if (subMenu === "Investor Relations") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.investorRelations)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.investorRelations)
            //I.wait(0.5)
            I.seeElement(this.investorRelations)
            this.openInvestorRelationsSubMenu()
            //await I.waitForElement(this.overviewLocations)
            //I.wait(0.5)
            //I.seeElement(this.overviewLocations)
            //this.clickOnOverviewLocations()
            await I.waitForElement(this.annualReports)
            I.seeElement(this.annualReports)
            I.click(this.annualReports)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'annualreport');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/locations/overview/');
        }
        else if (subMenu === "Contact") {
            I.amOnPage('en/')
            await I.waitForElement(this.menu)
            I.seeElement(this.menu)
            await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.contact)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.contact)
            //I.wait(0.5)
            I.seeElement(this.contact)
            this.openContactSubMenu()
            //await I.waitForElement(this.overviewLocations)
            //I.wait(0.5)
            //I.seeElement(this.overviewLocations)
            //this.clickOnOverviewLocations()
            await I.waitForElement(this.contactOverview)
            I.seeElement(this.contactOverview)
            I.click(this.contactOverview)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'contact/overview/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/locations/overview/');
        }
        else if (subMenu === "Services") {
            //I.amOnPage('en/')
            //await I.waitForElement(this.menu)
            //I.seeElement(this.menu)
            //await this.openMenu()
            let res = await I.grabNumberOfVisibleElements(this.searchInput)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.menu);
                console.log('Open MENU panel one more time')
            }
            await I.waitForElement(this.services)
            //I.wait(0.5)
            I.seeElement(this.services)
            this.openServicesSubMenu()
            //I.wait(0.5)
            await I.waitForElement(this.civilEngineering)
            I.seeElement(this.civilEngineering)
            this.clickOnCivilEngineering()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/services/civil-engineering/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/services/civil-engineering/');
        }
        else if (subMenu === "Infrastructure") {
            I.amOnPage('en/')
            let res = await I.grabNumberOfVisibleElements(this.infrastructureMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                let res = await I.grabNumberOfVisibleElements(this.infrastructureMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {
                    I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            await I.waitForElement(this.infrastructureMenu)
            I.seeElement(this.infrastructureMenu)
            this.openInfrastructureSubMenu()
            await I.waitForElement(this.civilEngineeringServices)
            I.seeElement(this.civilEngineeringServices)
            I.click(this.civilEngineeringServices)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'infrastructure/civil-engineering/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
        }
        else if (subMenu === "Real Estate") {
            I.amOnPage('en/')
            let res = await I.grabNumberOfVisibleElements(this.realEstateMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                let res = await I.grabNumberOfVisibleElements(this.realEstateMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {
                    I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            await I.waitForElement(this.realEstateMenu)
            I.seeElement(this.realEstateMenu)
            this.openRealEstateMenuSubMenu()
            await I.waitForElement(this.buildingConstructionServices)
            I.seeElement(this.buildingConstructionServices)
            I.click(this.buildingConstructionServices)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'real-estate/building-construction-services/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
        }
        else if (subMenu === "Focus Future") {
            I.amOnPage('en/')
            let res = await I.grabNumberOfVisibleElements(this.focusFutureMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                let res = await I.grabNumberOfVisibleElements(this.focusFutureMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {
                    I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            await I.waitForElement(this.focusFutureMenu)
            I.seeElement(this.focusFutureMenu)
            this.openFocusFutureSubMenu()
            await I.waitForElement(this.focusFutureOverview)
            I.seeElement(this.focusFutureOverview)
            I.click(this.focusFutureOverview)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'future/overview/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
        }
        else if (subMenu === "References") {
            I.amOnPage('en/')
            let res = await I.grabNumberOfVisibleElements(this.referencesMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                let res = await I.grabNumberOfVisibleElements(this.referencesMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {
                    I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            await I.waitForElement(this.referencesMenu)
            I.seeElement(this.referencesMenu)
            this.openReferencesSubMenu()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'references/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
        }
        else if (subMenu === "MediaInvestors") {
            I.amOnPage('en/')
            let res = await I.grabNumberOfVisibleElements(this.mediaInvestorsMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                let res = await I.grabNumberOfVisibleElements(this.mediaInvestorsMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {
                    I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            await I.waitForElement(this.mediaInvestorsMenu)
            I.seeElement(this.mediaInvestorsMenu)
            this.openMediaInvestorsSubMenu()
            await I.waitForElement(this.mediaInvestorRelations)
            I.seeElement(this.mediaInvestorRelations)
            I.click(this.mediaInvestorRelations)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'investor-relations/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
        }
        else if (subMenu === "AboutUs") {
            I.amOnPage('en/')
            let res = await I.grabNumberOfVisibleElements(this.aboutUsMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                let res = await I.grabNumberOfVisibleElements(this.aboutUsMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {
                    I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            await I.waitForElement(this.aboutUsMenu)
            I.seeElement(this.aboutUsMenu)
            this.openAboutUsMenuSubMenu()
            await I.waitForElement(this.aboutUsCompany)
            I.seeElement(this.aboutUsCompany)
            I.click(this.aboutUsCompany)
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'about-us/a-company-with-tradition/');
            I.dontSee('Oops, an error occurred!')
             I.dontSee('Oops... There was a loading error')
        }
    },

    async checkLinkNewsTab(noSection){
        if (noSection === 1) {
            I.click(this.adhocReleasesLnk)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, "media/newsroom/");
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
            I.amOnPage('en/')
        }
        else if (noSection === 2) {
            I.click(this.mediaReleasesLnk)
            let url2 = await I.grabCurrentUrl();
            I.assertContain(url2, "media/newsroom/");
            I.amOnPage('en/')
        }
        else if (noSection === 3) {
            I.click(this.topicsAndProjectsLnk)
            let url3 = await I.grabCurrentUrl();
            I.assertContain(url3, "media/newsroom/");
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
            I.amOnPage('en/')
        }
        else if (noSection === 4) {
            I.click(this.reportsLnk)
            let url4 = await I.grabCurrentUrl();
            I.assertContain(url4, "media/newsroom/");
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
        }
    },

    checkTitlesNewsTab(){
        I.see('ADHOC RELEASES')
        I.see('MEDIA RELEASES')
        I.see('TOPICS AND PROJECTS')
        I.see('REPORTS')
    },

    async checkNumberOfNewsSections() {
        let numOfElements = await I.grabNumberOfVisibleElements(this.newsSection);
        I.assertEqual(numOfElements, 4);
    },

    checkImage(element, image, toleranceLevel){
        I.screenshotElement(element, image);
        let baseImage = image + ".png"
        I.seeVisualDiff(baseImage, {tolerance: toleranceLevel, prepareBaseImage: false, needsSameDimension: false});
    },

    async checkReference(number){
        if (number === 1)  {
            I.click(this.firstCross)
            I.click(this.firstLink)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'en/references/detail/ref/pontons-von-cologny/');
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/references/overview/refs/pontons-von-cologny/');
        }
        else if (number === 2)  {
            I.amOnPage('en/')
            I.click(this.secondCross)
            I.click(this.secondLink)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'en/references/detail/ref/giessenturm-1/');
            I.dontSee('Oops, an error occurred!')
            I.dontSee('Oops... There was a loading error')
            //I.seeCurrentUrlEquals('en/references/overview/refs/giessenturm-1/');
        }
        else if (number === 3)  {
            I.amOnPage('en/')
            I.click(this.thirdCross)
        }
        else if (number === 4)  {
            I.click(this.forthCross)
        }
        else console.log("No cross found")
    },

    clickOnHistory() {
        I.click(this.history);
    },

    clickOnCivilEngineering() {
        I.click(this.civilEngineering);
    },

    clickOnPublications() {
        I.click(this.publications);
    },

    clickOnNewsroom() {
        I.click(this.newsroom);
    },

    clickOnSustainabilityReport() {
        I.click(this.sustainabilityReport);
    },

    clickOnSwitzerland() {
        I.click(this.switzerland);
    },

    clickOnReferenceOverview() {
        I.click(this.referencesOverview);
    },

    clickOnOverviewLocations() {
        I.click(this.overviewLocations);
    },

    async seeLanguageOptions() {
        //I.wait(2)
        let res = await I.grabNumberOfVisibleElements(this.switzDe)
        console.log('Result is: ' + res)
        if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
             }
        I.seeElement(this.switzDe)
        I.seeElement(this.switzEn)
        I.seeElement(this.switzFr)
        I.seeElement(this.gerDe)
        I.seeElement(this.sweSv)
        I.seeElement(this.norNo)
        I.seeElement(this.fraFr)
        I.seeElement(this.ausDe)
    },

    async seeNavigationMenuItems(isMobile=false) {
        if (isMobile === true) {
            I.seeElement(this.infrastructureMenu)
            I.seeElement(this.realEstateMenu)
            I.seeElement(this.focusFutureMenu)
            I.seeElement(this.referencesMenu)
            I.seeElement(this.mediaInvestorsMenu)
            I.seeElement(this.aboutUsMenu)
        }
        else {
            let res = await I.grabNumberOfVisibleElements(this.infrastructureMenu)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.wait(3)
                let res = await I.grabNumberOfVisibleElements(this.infrastructureMenu)
                console.log('Result2 is: ' + res)
                if (res === 0) {I.click(this.menu);
                    console.log('Open MENU panel one more time')
                }
            }
            I.seeElement(this.infrastructureMenu)
            I.seeElement(this.realEstateMenu)
            I.seeElement(this.focusFutureMenu)
            I.seeElement(this.referencesMenu)
            I.seeElement(this.mediaInvestorsMenu)
            I.seeElement(this.aboutUsMenu)
        }
    },

    checkNumberNewsSection(){
        I.seeNumberOfVisibleElements(this.newsSection, 4)
    },

    async openMenu() {
        await I.waitForElement(this.menu)
        I.click(this.menu)
        let num = await I.grabNumberOfVisibleElements(this.searchInput)
        console.log(num)
        if (num === 0) {
            I.wait(2)
            I.click(this.menu)
        }
    },

    openAboutUsSubMenu() {
        I.click(this.aboutUs);
    },

    openContactSubMenu() {
        I.click(this.contact);
    },

    openInfrastructureSubMenu() {
        I.click(this.infrastructureMenu);
    },

    openRealEstateMenuSubMenu() {
        I.click(this.realEstateMenu);
    },

    openFocusFutureSubMenu() {
        I.click(this.focusFutureMenu);
    },

    openMediaInvestorsSubMenu() {
        I.click(this.mediaInvestorsMenu);
    },

    openAboutUsMenuSubMenu() {
        I.click(this.aboutUsMenu);
    },

    openReferencesSubMenu() {
        I.click(this.referencesMenu);
    },

    openCompetencesSubMenu() {
        I.click(this.competences);
    },

    openInvestorRelationsSubMenu() {
        I.click(this.investorRelations);
    },

    openOverviewCompetencesMenu() {
        I.click(this.competencesOverview);
    },

    openServicesSubMenu() {
        I.click(this.services);
    },

    openReferenceSubMenu() {
        I.click(this.references);
    },

    openInvestorsSubMenu() {
        I.click(this.investors);
    },

    openMediaSubMenu() {
        I.click(this.media);
    },

    openSustainabilitySubMenu() {
        I.click(this.sustainability);
    },

    openCareerSubMenu() {
        I.click(this.career);
    },

    openLocationsSubMenu() {
        I.click(this.locations);
    },

    openLanguagePanel() {
        I.wait(2)
        I.seeElement(this.languageHeader)
        I.click(this.languageHeader);
    },

    async selectLanguage(language) {
        I.wait(1)
        if (language === "FranceFrance") {
            let res = await I.grabNumberOfVisibleElements(this.fraFr)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.fraFr)
            I.click(this.fraFr)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'fr-fr/');
            //I.seeCurrentUrlEquals('fr-fr/');
            I.see('MESSAGES AD HOC')
            I.see('COMMUNIQUÉS DE PRESSE')
            I.see('THÈMES ET PROJETS')
            I.see('RAPPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'FranceFR')
        }
        else if (language === "English") {
            let res = await I.grabNumberOfVisibleElements(this.switzEn)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.switzEn)
            I.click(this.switzEn)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'en/');
            //I.seeCurrentUrlEquals('en/');
            I.see('ADHOC RELEASES')
            I.see('MEDIA RELEASES')
            I.see('TOPICS AND PROJECTS')
            I.see('REPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'SwitzerlandEN')
        }
        else if (language === "Norwegian") {
            let res = await I.grabNumberOfVisibleElements(this.norNo)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.norNo)
            I.click(this.norNo)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'no-no/');
            //I.seeCurrentUrlEquals('no-no/');
            I.see('ADHOCMELDINGER')
            I.see('PRESSEMELDINGER')
            I.see('TEMAER OG PROSJEKTER')
            I.see('RAPPORTER')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'NorgeNO')
        }
        else if (language === "Sweden") {
            let res = await I.grabNumberOfVisibleElements(this.sweSv)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.sweSv)
            I.click(this.sweSv)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'sv-se/');
            //I.seeCurrentUrlEquals('sv-se/');
            I.see('AD HOC-MEDDELANDEN')
            //I.see('MEDIARELEASER')
            //I.see('ÄMNEN OCH PROJEKT')
            I.see('RAPPORTER')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'SverigeSV')
        }
        else if (language === "SwitzGerman") {
            let res = await I.grabNumberOfVisibleElements(this.switzDe)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.switzDe)
            I.click(this.switzDe)
            I.see('ADHOC MITTEILUNGEN')
            I.see('MEDIENMITTEILUNGEN')
            I.see('THEMEN UND PROJEKTE')
            I.see('REPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'SchweizDE')
        }
        else if (language === "SwitzFrance") {
            let res = await I.grabNumberOfVisibleElements(this.switzFr)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.switzFr)
            I.click(this.switzFr)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'fr/');
            //I.seeCurrentUrlEquals('fr/');
            I.see('MESSAGES AD HOC')
            I.see('COMMUNIQUÉS DE PRESSE')
            I.see('THÈMES ET PROJETS')
            I.see('RAPPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'SuisseFR')
        }
        else if (language === "GermanGerman") {
            let res = await I.grabNumberOfVisibleElements(this.gerDe)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.gerDe)
            I.click(this.gerDe)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'de-de/');
            //I.seeCurrentUrlEquals('de-de/');
            I.see('ADHOC MITTEILUNGEN')
            I.see('MEDIENMITTEILUNGEN')
            I.see('THEMEN UND PROJEKTE')
            I.see('REPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'DeutschlandDE')
        }
        else if (language === "AustriaGerman") {
            let res = await I.grabNumberOfVisibleElements(this.ausDe)
            console.log('Result is: ' + res)
            if (res === 0) {
                I.click(this.languageHeader);
                console.log('Open language panel one more time')
            }
            I.seeElement(this.ausDe)
            I.click(this.ausDe)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'de-at/');
            //I.seeCurrentUrlEquals('de-at/');
            I.see('ADHOC MITTEILUNGEN')
            I.see('MEDIENMITTEILUNGEN')
            I.see('THEMEN UND PROJEKTE')
            I.see('REPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'ÖsterreichDE')
        }
        else console.log("This language is not presented")
    },


    async checkSendingConfirmation(){
        I.waitForInvisible(spinner.loading, 30)
        await I.see('Thank you very much for your message. We will contact you shortly.')
    },

    enterFirstName(contactData){
        I.fillField(this.firstName, contactData.firstName)
    },

}