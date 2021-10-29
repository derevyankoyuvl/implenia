const {I, spinner} = inject()

module.exports = {

    menu: locate("div").withAttr({"aria-label": "Menu"}),
    aboutUs: locate("li").withAttr({"data-menu-id": "0"}),
    services: locate("li").withAttr({"data-menu-id": "1"}),
    references: locate("li").withAttr({"data-menu-id": "2"}),
    investors: locate("li").withAttr({"data-menu-id": "3"}),
    media: locate("li").withAttr({"data-menu-id": "4"}),
    sustainability: locate("li").withAttr({"data-menu-id": "5"}),
    career: locate("li").withAttr({"data-menu-id": "6"}),
    locations: locate("li").withAttr({"data-menu-id": "7"}),
    history: locate("a").withAttr({"href": "/en/about-us/history/"}),
    civilEngineering: locate("a").withAttr({"href": "/en/services/civil-engineering/"}),
    publications: locate("a").withAttr({"href": "/en/investor-relations/publications/financial-publications/"}),
    referencesOverview: locate("a").withAttr({"href": "/en/references/overview/"}),
    newsroom: locate("a").withAttr({"href": "/en/media/newsroom/"}),
    overviewLocations: locate("a").withAttr({"href": "/en/locations/overview/"}),
    switzerland: locate("a").withAttr({"href": "/en/career/switzerland/job-opportunities/"}),
    sustainabilityReport: locate("a").withAttr({"href": "/en/sustainability/sustainability-report/"}),
    constructionCompany: locate("a").withAttr({"href": "/ueber-uns/unternehmen-mit-tradition/"}),
    languageHeader: locate("div").withAttr({"data-tab": "lang-site-header"}),
    switzDe: locate("a").withAttr({"hreflang": "de-CH"}),
    switzEn: locate("a").withAttr({"hreflang": "en-CH"}),
    switzFr: locate("a").withAttr({"hreflang": "fr-CH"}),
    gerDe: locate("a").withAttr({"hreflang": "de-DE"}),
    sweSv: locate("a").withAttr({"hreflang": "sv-SE"}),
    norNo: locate("a").withAttr({"hreflang": "no-NO"}),
    fraFr: locate("a").withAttr({"hreflang": "fr-FR"}),
    ausDe: locate("a").withAttr({"hreflang": "de-AT"}),
    circularEconomyVideo: locate("video").withAttr({"title": "Circular economy"}),
    newsSection: locate("div").withAttr({"class": "news [ js-news ] "}),
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
    currentLanguage: locate("div").withAttr({"class": "current-lang__identifier"}),
    contactImg: locate("img").withAttr({"alt": "Contact"}),
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

    acceptCookies() {
        //I.click('.sc-gtsrHT.iGMqnF');
        I.click({css: 'button[data-testid=uc-accept-all-button]'} );
    },

    async checkVideoAutoplay(){
        let isAutoPlay = await I.grabAttributeFrom(this.circularEconomyVideo, 'autoplay');
        console.log(isAutoPlay)
        I.assertEqual(isAutoPlay, true);
    },

    async checkSubMenuNavigation(subMenu){
        if (subMenu === 'AboutUs') {
            I.seeElement(this.aboutUs)
            this.openAboutUsSubMenu()
            I.seeElement(this.history)
            this.clickOnHistory()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/about-us/history/');
            //I.seeCurrentUrlEquals('en/about-us/history/');
        }
        else if (subMenu === "Services") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.services)
            this.openServicesSubMenu()
            I.seeElement(this.civilEngineering)
            this.clickOnCivilEngineering()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/services/civil-engineering/');
            //I.seeCurrentUrlEquals('en/services/civil-engineering/');
        }
        else if (subMenu === "References") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.references)
            this.openReferenceSubMenu()
            I.seeElement(this.referencesOverview)
            this.clickOnReferenceOverview()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/references/overview/');
            //I.seeCurrentUrlEquals('en/references/overview/');
        }
        else if (subMenu === "Investor Relations") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.investors)
            this.openInvestorsSubMenu()
            I.seeElement(this.publications)
            this.clickOnPublications()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/investor-relations/publications/financial-publications/');
            //I.seeCurrentUrlEquals('en/investor-relations/publications/financial-publications/');
        }
        else if (subMenu === "Media") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.media)
            this.openMediaSubMenu()
            I.seeElement(this.newsroom)
            this.clickOnNewsroom()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/media/newsroom/');
            //I.seeCurrentUrlEquals('en/media/newsroom/');
        }
        else if (subMenu === "Sustainability") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.sustainability)
            this.openSustainabilitySubMenu()
            I.seeElement(this.sustainabilityReport)
            this.clickOnSustainabilityReport()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/sustainability/sustainability-report/');
            //I.seeCurrentUrlEquals('en/sustainability/sustainability-report/');
        }
        else if (subMenu === "Career") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.career)
            this.openCareerSubMenu()
            I.seeElement(this.switzerland)
            this.clickOnSwitzerland()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/career/switzerland/job-opportunities/');
            //I.seeCurrentUrlEquals('en/career/switzerland/job-opportunities/');
        }
        else if (subMenu === "Locations") {
            I.amOnPage('en/')
            I.seeElement(this.menu)
            this.openMenu()
            I.seeElement(this.locations)
            this.openLocationsSubMenu()
            I.seeElement(this.overviewLocations)
            this.clickOnOverviewLocations()
            let url = await I.grabCurrentUrl();
            console.log(url)
            I.assertContain(url, 'en/locations/overview/');
            //I.seeCurrentUrlEquals('en/locations/overview/');
        }
    },

    async checkLinkNewsTab(noSection){
        if (noSection === 1) {
            I.click(this.adhocReleasesLnk)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, "media/newsroom/");
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
            I.amOnPage('en/')
        }
        else if (noSection === 4) {
            I.click(this.reportsLnk)
            let url4 = await I.grabCurrentUrl();
            I.assertContain(url4, "media/newsroom/");
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
            I.assertContain(url, 'en/references/overview/refs/pontons-von-cologny/');
            //I.seeCurrentUrlEquals('en/references/overview/refs/pontons-von-cologny/');
        }
        else if (number === 2)  {
            I.amOnPage('en/')
            I.click(this.secondCross)
            I.click(this.secondLink)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'en/references/overview/refs/giessenturm-1/');
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

    seeLanguageOptions(){
        I.wait(2)
        I.seeElement(this.switzDe)
        I.seeElement(this.switzEn)
        I.seeElement(this.switzFr)
        I.seeElement(this.gerDe)
        I.seeElement(this.sweSv)
        I.seeElement(this.norNo)
        I.seeElement(this.fraFr)
        I.seeElement(this.ausDe)
    },

    seeNavigationMenuItems(){
        I.seeElement(this.aboutUs);
        I.seeElement(this.services);
        I.seeElement(this.references);
        I.seeElement(this.investors);
        I.seeElement(this.media);
        I.seeElement(this.sustainability);
        I.seeElement(this.career);
        I.seeElement(this.locations);
    },

    checkNumberNewsSection(){
        I.seeNumberOfVisibleElements(this.newsSection, 4)
    },

    openMenu() {
        I.click(this.menu);
    },

    openAboutUsSubMenu() {
        I.click(this.aboutUs);
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
            I.assertContain(language, 'France | FR')
        }
        else if (language === "English") {
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
            I.assertContain(language, 'Switzerland | EN')
        }
        else if (language === "Norwegian") {
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
            I.assertContain(language, 'Norge | NO')
        }
        else if (language === "Sweden") {
            I.seeElement(this.sweSv)
            I.click(this.sweSv)
            let url = await I.grabCurrentUrl();
            I.assertContain(url, 'sv-se/');
            //I.seeCurrentUrlEquals('sv-se/');
            I.see('AD HOC-MEDDELANDEN')
            I.see('MEDIARELEASER')
            I.see('ÄMNEN OCH PROJEKT')
            I.see('RAPPORTER')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'Sverige | SV')
        }
        else if (language === "SwitzGerman") {
            I.seeElement(this.switzDe)
            I.click(this.switzDe)
            I.see('ADHOC MITTEILUNGEN')
            I.see('MEDIENMITTEILUNGEN')
            I.see('THEMEN UND PROJEKTE')
            I.see('REPORTS')
            let language = await I.grabTextFrom(this.currentLanguage)
            console.log(language)
            I.assertContain(language, 'Schweiz | DE')
        }
        else if (language === "SwitzFrance") {
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
            I.assertContain(language, 'Suisse | FR')
        }
        else if (language === "GermanGerman") {
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
            I.assertContain(language, 'Deutschland | DE')
        }
        else if (language === "AustriaGerman") {
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
            I.assertContain(language, 'Österreich | DE')
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